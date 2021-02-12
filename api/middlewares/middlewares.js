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
        res.status(400).json({message:`server error: ${error}`})
    }
}
const validateProjectId = async (req, res, next)=>{
    const id = req.params.id;
    try{
        let project = await Projects.get(id)
            if(!project){
                res.status(404).json({message:`project not found`})
            } else{
                req.project = project;
                next();
            }
    }catch(error){
        res.status(400).json({message:`server error: ${error}`})
    }
}

const validateActionBody = (req, res, next) =>{
    const { project_id, description, notes } = req.body; 
    if( !project_id|| !description|| !notes || !req.body){
       res.status(400).json({message:`Error, please add all parameter`})
    } else{
    next()};
}
const validateProjectBody = (req, res, next) =>{
    const { name, description} = req.body;
    if(!name || !description || !req.body){
       res.status(400).json({message:`Error, please add all parameters`})
    } else{
    next()};
}
    
    
module.exports ={
    validateActionId,
    validateActionBody,
    validateProjectId,
    validateProjectBody
}