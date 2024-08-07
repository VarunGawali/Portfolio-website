// lib/models/Project.js
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String },
});

const Project = mongoose.model('Project', ProjectSchema);

export default Project;
