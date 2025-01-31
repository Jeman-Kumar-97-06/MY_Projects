require('dotenv').config();
const express   = require('experess');
const mongoose  = require('mongoose');
const cors      = require(cors);
const vidRoutes = require('./routes/videos');
const usrRoutes = require('./routes/auth');

