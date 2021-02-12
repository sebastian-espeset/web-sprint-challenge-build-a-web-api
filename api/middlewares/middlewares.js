const Actions = require("../actions/actions-model.js");
const Projects = require("../projects/projects-model");

const validateActionId = async (req, res, next)=>{
    const id = req.params.id;
    try{
        let action = await Actions.get(id)
            if(!action){
                res.status(404).json({message:`action not found`})
            } else{
                req.action = action;
                next();
            }
    }catch(error){
        res.status(500).json({message:`server error: ${error}`})
    }
}

const validateActionBody = (req, res, next) =>{
    if(!req.body){
       res.status(400).json({message:`Error, please add project id`})
    } else{
    next()};
}
    
    
module.exports ={
    validateActionId,
    validateActionBody
}