import React, {Component} from 'react';
import Button from'../UIcomponents/Button';
class SignUp extends Component{
    constructor(){
        super()
            this.state={
                email: "",
                password:"",
                firstName: "",
                lastName:""
        }
    }
    handleChange=(ev)=>{
        this.setState({
            [ev.target.id]: ev.target.value
        })
    }
    formSubmit= (ev)=> {
        ev.preventDefault();
        console.log(this.state);
    }
    render(){
        return(
            <div className="container" >
            <form onSubmit={this.formSubmit} className="white">
                <h5 className="purple-text text-accent-3">Sign Up</h5>
                <div className="input-field">
                <label htmlFor="firstName">First Name</label>
                <input type="text" id="firstName"  onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName"  onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label htmlFor="email">Email</label>
                <input type="email" id="email"  onChange={this.handleChange} />
                </div>
                <div className="input-field">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" onChange={this.handleChange} />         
                </div>
                
                <Button className=" waves-effect waves-light btn purple accent-2 z-depth-0" text="Sign Up" />
            </form>
            </div>
        )
    }
}
export default SignUp;