import React, { useState } from "react";
import Project from './project';
import './project-list.css';

const projectModels = [
    {
      name: "Project1",
      description: "Something cool about the project goes here"
    },
    {
      name: "Project2",
      description: "Something cool about the project goes here"
    },
    {
      name: "Project3",
      description: "Something cool about the project goes here"
    }
];

export default function ProjectList(props = {}) {
    return (
        <div className="project-list">
            {
              projectModels.map(model => <Project 
                name={model.name} 
                description={model.description} 
              />)
            }
        </div>
    );
}