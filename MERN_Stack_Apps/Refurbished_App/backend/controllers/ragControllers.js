const getPineconeIndex = require("../utils/pineconeClient");
const embedText = require("../utils/embedText");
const Product   = require('../models/productModel');

const index = getPineconeIndex();

//Feeding data to models. ie., convert text to vectors.
exports.ingestProds = async (req, res) => {

  const prods = await Product.find({});

  if (!prods) {return res.status(404).json({error:"Products Not Found!"})};

  const upserts = [];

  for (let prod of prods) {
    const combText = `Battery:${prod.battery} Design:${prod.design} Display:${prod.display}`

    const embedding = await embedText(combText);

    upserts.push([
        {
            id: prod._id.toString(),
            values: embedding,
            metadata: {
              name: prod.name,
              image: prod.image,
              price: prod.price,
            },
        },
    ]);
  }
  
  await index.upsert(upserts);

  res.json({ message: "Document ingested!", docId: newDoc._id });
};

//Querying data.
exports.queryProds = async (req,res) => {
    const {question} = req.body;
    if (!question) {return res.status(404).json({error:"Question is required!"})};
    try {
        const index = getPineconeIndex();
        //Turn the human question to vector for ml model:
        const questEmbedding = await embedText(question);

        //Use the question (now in the form of vector) to query pinecone : 
        const result = await index.query({
            vector : questEmbedding,
            topK : 5, //No of results
            includeMetadata : true,
        });

        //Build response from Pinecone matches : 
        const prods  = result.matches.map((match)=>({
            id : match.id,
            score : Number(match.score.toFixed(3)),
            name : match.metadata.name,
            image : match.metadata.image,
            price : match.metadata.price,
        }));
        res.json({results:prods});
    } catch(err) {
        console.error('Query Error: ',err);
        return res.status(500).json({error:"Query failed :("});
    }
}