import axios from 'axios';
import React, { Component, createRef } from 'react';


class Login extends Component {
    state = {  } 

    email = createRef();
    password = createRef();


    handleSubmit = async(e) =>{
        e.preventDefault();
        console.log('submitted');
        console.log('email:',this.email.current.value);
        console.log('password:',this.password.current.value);
        const acount = {
            email : this.email.current.value ,
            password : this.password.current.value,
        };
        if(acount.email && acount.password){
            const response = await axios.post('https://reqres.in/api/login', acount);
            console.log(response);
    
        }

    };


    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email">email</label>
                    <input ref={this.email} type="text" id='email' className='form-control'/>
                </div>
                <div className="mb-3">
                    <label htmlFor="password">password</label>
                    <input ref={this.password} type="text" id='password' className='form-control'/>
                </div>
                <button className='btn btn-info'>Login</button>
            </form>
        );
    }
}
 
export default Login;