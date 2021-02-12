// Write your "actions" router here!
const express = require('express');
const Actions = require(`./actions-model`);
const router = express.Router();
const {validateActionId} = require("../middlewares/middlewares");

router.get('/',(req,res)=>{
    Actions.get()
        .then((action)=>{
            res.status(200).json(action)
        }) .catch(error=>res.status(400).json({message:`Error: ${error}`}))
})
router.get(`/:id`, validateActionId,(req,res)=>{
    res.status(200).json(req.action)
})
module.exports = router;
