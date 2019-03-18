import React, {Component} from 'react';
import Button from'../UIcomponents/Button';
//import { createResume } from '.../../store/action/ResumeAction';
import { connect } from 'react-redux'
class Resume extends Component{
    constructor(){
        super()
            this.state={
               firstName: "",
               lastName: "",
               dateOfBirth: "",
               department:"",
               institute:"",
               CNIC:"",
               Qualification:"",
               CGPA:"",
               email:""
               
        }
    }
    handleChange=(ev)=>{
        this.setState({
            [ev.target.id]: ev.target.value
        })
    }
    formSubmit= (ev)=> {
        ev.preventDefault();
        console.log(this.state)
    }
    render(){
        return(
            <div className="container" >
            <form onSubmit={this.formSubmit} className="white">
            <div className="center">
                <i className="material-icons  large prefix">account_circle</i>
                <h5 className="purple-text text-accent-3">Create Profile</h5>
                 </div>
                <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName" maxLength={20} onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName"   maxLength={20} onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label htmlFor="dateOfBirth"> Date of Birth</label>
                <input type="date" id="dateOfBirth"  max={4} className="datepicker" onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label htmlFor="department">Department</label>
                <input type="text" id="department" maxLength={20} onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label htmlFor="institute">Institute</label>
                <input type="text" id="institute" maxLength={20} onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label htmlFor="CNIC">CNIC</label>
                <input type="number" id="CNIC" max={13} onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label htmlFor="Qualification">Qualification</label>
                <input type="text" id="Qualification" maxLength={20} onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label htmlFor="CGPA">CGPA</label>
                <input type="number" id="CGPA" max={4} onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" maxLength={20} onChange={this.handleChange} />
                </div>
                <Button className=" waves-effect waves-light btn purple accent-2 z-depth-0" text="Submit" />
            </form>
            </div>
        )
    }
}
export default connect()(Resume);