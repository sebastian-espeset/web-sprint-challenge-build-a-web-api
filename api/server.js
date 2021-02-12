const express = require('express');
const server = express();

// Complete your server here!
// Do NOT `server.listen()` inside this file!

//add actions routes
server.use(express.json());
const actionsRouter = require('./actions/actions-router');
server.use(`/api/actions`,actionsRouter);

//engage express with json
server.get('/',(req,res)=>{
    res.send(`Hello bubblegum, this is sprint 1 of unit 4!`)
})

module.exports = server;
