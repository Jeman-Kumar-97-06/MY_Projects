const { Pinecone } = require("@pinecone-database/pinecone");

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
  environment: process.env.PINECONE_ENVIRONMENT,
});

const indexName = process.env.PINECONE_INDEX_NAME;

const getPineconeIndex = () => pinecone.Index(indexName);

module.exports = getPineconeIndex;