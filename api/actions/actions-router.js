// Write your "actions" router here!
const express = require('express');
const Actions = require(`./actions-model`);
const router = express.Router();
const {validateActionId, validateActionBody} = require("../middlewares/middlewares");

router.get('/',(req,res)=>{
    Actions.get()
        .then((actions)=>{
            res.status(200).json(actions)
        }) .catch(error=>res.status(400).json({message:`Error: ${error}`}))
});
router.get('/:id', validateActionId,(req,res)=>{
    res.status(200).json(req.action)
});

router.post('/',validateActionBody,(req,res)=>{
    Actions.insert(req.body)
        .then(action=>{
            res.status(200).json(req.body)
        }).catch(error=>{
            res.status(500).json({message:`${error}`})
        })
})
router.put('/:id',validateActionId,(req,res)=>{
    Actions.update(req.params.id, req.body)
        .then((action)=>{
            res.status(200).json(action)
        }).catch((error)=>{
            res.status(500).json({message:`server error:${error}`})
        })
})
router.delete('/:id',validateActionId,(req,res)=>{
    Actions.remove(req.params.id)
        .then((action)=>{
            res.status(200).json({message:`Action, ${action}, successfully removed`})
        }).catch((error)=>{
            res.status(500).json({message:`server error:${error}`})
        })
})
module.exports = router;
