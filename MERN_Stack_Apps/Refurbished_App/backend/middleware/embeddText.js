//Takes plain text and turns it into vector using OPEN AI embedding models
//Why : 
    //to embed your data before storing it to Pinecone.
    //to embed user data / queries before performing similarity search in Pinecone.

const {EmbeddingModel,FlagEmbedding} = require('fastembed');

let embedder;

async function initEmbedder() {
    if (!embedder) {
        embedder = await FlagEmbedding.init({
            model:EmbeddingModel.BGEBaseEN,
        });
    }
    return embedder;
};


async function embedText(text) {
    const model = await initEmbedder();
    const iterator = model.embed([text]);
    for await (const vector of iterator) {
        return vector;
    }
};

module.exports = embedText;