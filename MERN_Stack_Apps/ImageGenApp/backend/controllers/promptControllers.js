const mongoose          = require('mongoose');
const Prompts           = require('../models/promptModel');
const fs                = require('fs');
const {v2 : cloudinary} = require('cloudinary');

//Cloudinary Config : 
cloudinary.config({
    cloud_name : 'dt0zcc0ec',
    api_key : '363287392839592',
    api_secret : process.env.API_SEC
})

//Send all the prompt to the client : 
const getPrompts = async (req,res) => {
    const all_prompts = await Prompts.find({user:req.user._id});
    if (!all_prompts) {
       return res.status(404).json({error:"No Prompts!"});
    };
    return res.status(200).json(all_prompts);
};


const saveGeneratedImage = async (req,res) => {
    //First save the prompt to database :
    let resp_bod
    console.log("ran this shit")
    try{
        //Find by user_ID but if it's not there create one with 'upsert:true' part.
        console.log("ran this shit yo")
        const updatedPrompt = await Prompts.findOneAndUpdate({user:req.user._id},{$push : {texts:req.body.prompt}},{new:true,upsert:true});
        resp_bod = updatedPrompt;
    } catch(error) {
        console.log(error);
        res.status(500).json({message:"Can't update the list of images on mongodb:",error})
    }
    //USe the API to get generated image from the prompt sent via request body:
    try {
        response = await fetch('https://api.imagepig.com/',{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json',
                'Api-Key' : [process.env.API_K,process.env.API_K2,process.env.API_K3][Math.floor(Math.random()*3)] //Image Pig API Key
            },
            body:JSON.stringify({"prompt":req.body.prompt})
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        const imageData = json.image_data; //image in base64 format.
        //Upload image to cloudinary : 
        const uploadResponse = await cloudinary.uploader.upload(`data:image/jpeg;base64,${imageData}`,{folder : 'ai-images'})
        //The url of the image saved is : uploadResponse.secure_url
        //Find the prompt image array with the corresponding user_id and update it: 
        try{
            const updatedPrompt = await Prompts.findOneAndUpdate({user:req.user._id},{$push : {images:uploadResponse.secure_url}},{new:true,upsert:true});
            resp_bod = updatedPrompt;
            res.status(200).json({'whole':resp_bod,'now_':uploadResponse.secure_url});
        } catch(error) {
            console.log(error);
            res.status(500).json({message:"Can't update the list of images on mongodb:",error})
        }
    } catch(error) {
        console.log(error);
    }
}

module.exports = {getPrompts, saveGeneratedImage};