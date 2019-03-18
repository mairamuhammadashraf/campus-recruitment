import React from 'react';

const ProjectSummary = ({resume}) =>{
    return(
      
        <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3"></div>
            <span className="card-title">{resume.name}</span>
            <p>posted by Maira Ashraf</p>
            <p className="grey-text"> submitted at 2-pm</p>
        </div>
        
    )

}
export default ProjectSummary