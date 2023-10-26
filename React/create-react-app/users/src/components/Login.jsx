import axios from 'axios';
import React, { Component, createRef } from 'react';


class Login extends Component {
    state = {
        acount : {
            email:'',
            password:'',
        }
      } ;


    handleSubmit = async(e) =>{
        e.preventDefault();   
    };

    handleChange=(e)=>{
       const input = e.currentTarget;
       const acount = {...this.state.acount};
       acount[input.name] = input.value;
       this.setState({acount})

    }


    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">email</label>
                    <input onChange={this.handleChange} value={this.state.acount.email} type="text" id='email' name='email' className='form-control'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">password</label>
                    <input onChange={this.handleChange} value={this.state.acount.password} type="text" id='password' name='password' className='form-control'/>
                </div>
                <button className='btn btn-info'>Login</button>
            </form>
        );
    }
}
 
export default Login;