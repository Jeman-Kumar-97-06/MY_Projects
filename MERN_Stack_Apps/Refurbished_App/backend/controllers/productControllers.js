const Product  = require('../models/productModel');
const mongoose = require('mongoose');

const {Pinecone} = require('@pinecone-database/pinecone');



//Pinecone shit : 

// //Initialize Pinecone client : 
// const pc = new Pinecone({
//     apiKey:process.env.PINECONEAPI
// })


// const indexName = 'my-product-index';
// //Create index (container to store vectors)
// async function createIndex() {
//     const existingIndexes = await pc.listIndexes();
//     const indexExists     = existingIndexes.index.some(i=>i.name === indexName);
//     if (!indexExists) {
//         await pc.createIndex({
//             name : indexName,
//             dimension : 1536,
//             metric : 'cosine',
//             spec : {
//                 serverless : {
//                     cloud : "aws",
//                     region : 'us-east-1'
//                 }
//             }
//         });
//         console.log(`Index - ${indexName} created successfully!`)
//     }
//     else {
//         console.log(`Index - ${indexName} already exists!`)
//     }
// }

// createIndex().catch(console.error);


// //What model are you using ?
// const model = 'multilingual-e5-large';
  
// //Data to feed the model:
// const data  = [
    
// ];

// //Generate Embeddings : 
// async function embedData() {
//     const embeddings = await pc.inference.embed(
//         model,
//         data.map(d=>d.text),
//         {inputType:'passage',truncate:"END"}
//     );
//     console.log(embeddings[0]);
// }

// embedData().catch(console.error);
  
// //Pinecone Shit Ends

//Get all Products:
const getAllProducts = async (req,res) => {
    const products = await Product.find({}).sort({createdAt:-1});
    res.status(200).json(products);
}

const createProd = async (req,res) => {
    console.log(req.body)
}

//Get Product:
const getProduct = async (req,res) => {
    const {id}     = req.params;
    const product  = await Product.findById(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:"The ID is Invalid!"})
    }
    if (!product){
        return res.status(404).json({error:"No Product found with the given ID!"});
    }
    res.status(200).json(product);
}

module.exports = {getAllProducts,getProduct,createProd};