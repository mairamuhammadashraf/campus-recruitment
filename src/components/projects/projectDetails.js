import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return(
        <div className="container section project-details">
            <div className="card z-depth-0"> 
            <div className="card content">
                <span className="card-title"> Project Title - {id} </span>
                <p>i did work on this</p>
                <div className="card-action grey lighten-4 grey-text">
                    <div>created by Maira Asraf</div>
                    <div>24 february 2 pm</div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default ProjectDetails;
