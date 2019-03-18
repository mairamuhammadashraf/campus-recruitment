import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/projectList';
import { connect } from 'react-redux'


class Dashboard extends Component{
    render(){
     const { resumes } = this.props;
        return(
           <div className="dashboard container" >
               <div className="row ">
                   <div className="col s12 m6">
                   <ProjectList  resumes= {resumes}/>
                   </div>
                   <div className="col s12 m5 offset-ml">
                   <Notifications /></div>                  
                   
               </div>
           </div>
        )
    }
}


const mapStateToProps = (state) => {
    return(
        {
            resumes: state.resume.resumes
        }
    )
}
export default connect(mapStateToProps)(Dashboard);