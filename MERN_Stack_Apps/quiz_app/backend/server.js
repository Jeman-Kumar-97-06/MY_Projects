const express     = require('express');
const mongoose    = require('mongoose');
const cors        = require('cors');

const ChatMessage = require('./models/ChatMessage');

const app         = express();
const PORT        = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
