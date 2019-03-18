import React from 'react';
import ProjectSummary from './projectSummary';
const ProjectList =( {resumes})=>{
    return(
        <div className="project-list section ">
       {
           resumes && resumes.map(resume => { 
               return( <ProjectSummary resume={resume} key={resume.CNIC} />
               )

           })
       }
    </div>
       
    )
}
export  default ProjectList;