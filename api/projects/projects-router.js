// Write your "projects" router here!
const express = require("express");
const Projects = require("./projects-model");
const router = express.Router();

const { validateProjectId, validateProjectBody } = require('../middlewares/middlewares')

router.get('/',(req,res)=>{
    Projects.get()
        .then((projects)=>{
            res.status(200).json(projects)
        }) .catch((error)=>{
            res.status(404).json({message:`error:${error}`})
        })
})
router.get('/:id',validateProjectId,(req,res)=>{
    res.status(200).json(req.project);
})
router.post('/',validateProjectBody,(req,res)=>{
    Projects.insert(req.body)
        .then((project)=>{
            res.status(200).json(req.body)
        })
} )
router.put('/:id',validateProjectId,(req,res)=>{
    Projects.update(req.project.id, req.body)
        .then((project)=>{
            res.status(200).json(req.body)
        })
})
router.delete('/:id',validateProjectId,(req,res)=>{
    Projects.remove(req.project.id)
        .then((response)=>{
            res.status(200).json({message:`Project ${req.project.id}, deleted`})
        }) .catch((error)=>{
            res.status(500).json({message:`server error:${error}`})
        })
})
router.get('/:id/actions', validateProjectId,(req,res)=>{
    Projects.getProjectActions(req.project.id)
        .then((actions)=>{
            res.status(200).json(actions)
        }) .catch((error)=>{
            res.status(500).json({message:`server error:${error}`})
        })
})
module.exports=router;