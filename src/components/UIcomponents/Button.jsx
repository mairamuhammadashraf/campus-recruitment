import React, { Component } from 'react';

class Button extends Component{
    render(){
        return(
            <div className="input-field">
                <button className={this.props.className}> {this.props.text}
                </button>
                </div>
        )
    }
} 
export default Button;