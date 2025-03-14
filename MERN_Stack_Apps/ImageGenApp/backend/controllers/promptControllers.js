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
    const all_prompts = await Prompts.find({});
    if (!all_prompts) {
        return res.status(404).json({error:"No Prompts!"});
    };
    res.status(200).json(all_prompts);
};


const saveGeneratedImage = async (req,res) => {
    console.log(req.body);
    return;
    //First save the prompt to database :
    try{
        const updatedPrompt = await Prompts.findByIdAndUpdate({user:req.user._id},{$push : {texts:req.body}},{new:true});
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
                'Api-Key' : process.env.API_K //Image Pig API Key
            },
            body:JSON.stringify({"prompt":req.body})
        });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        const imageData = json.image_data; //image in base64 format.
        //Upload image to cloudinary : 
        const uploadResponse = await cloudinary.uploader.upload(`data:image/jpeg;base4,${imageData}`,{folder : 'ai-images'})
        //The url of the image saved is : uploadResponse.secure_url
        //Find the prompt image array with the corresponding user_id and update it: 
        try{
            const updatedPrompt = await Prompts.findByIdAndUpdate({user:req.user._id},{$push : {images:uploadResponse.secure_url}},{new:true});
        } catch(error) {
            console.log(error);
            res.status(500).json({message:"Can't update the list of images on mongodb:",error})
        }
    } catch(error) {
        console.log(error);
    }
}

module.exports = {getPrompts, saveGeneratedImage};