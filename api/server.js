const express = require('express');
const server = express();

// Complete your server here!
// Do NOT `server.listen()` inside this file!

//add actions routes
const actionsRouter = require('./actions/actions-router');
server.use(`/api/actions`,actionsRouter);

//engage express with json
server.use(express.json());
server.get('/',(req,res)=>{
    res.send(`Hello bubblegum, this is sprint 1 of unit 4!`)
})

module.exports = server;
