// src/components/projects/ProjectDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project:', error);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="project-detail">
      <img src={project.imageUrl} alt={project.title} className="project-image" />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetail;
