// routes/projects/index.js

import express from 'express'
import Project from '../lib/models/Project'
import connectDB from '../lib/dbConnect';

connectDB();

const router = new express.Router()
//const app = express()

router.get('/projects',async (req, res) => {
  console.log('GET /api/projects route hit'); 
  try{
    const projects = await Project.find()
    console.log('Projects retrieved:', projects); // Debug line
    res.status(200).json(projects);
  } catch(error){
    console.error('Error fetching projects:', error);
    res.status(500).send(error);
  }
})

export default router;





