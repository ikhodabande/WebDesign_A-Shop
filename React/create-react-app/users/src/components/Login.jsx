import axios from 'axios';
import React, { Component, createRef } from 'react';
import Input from './input';
import * as yup from 'yup';

class Login extends Component {
    state = {
        acount : {
            email:'',
            password:''
        },
        errors: []
      } 
      

      schema = yup.object().shape({
        email:yup.string().email('ایمیل خود را بصورت درست وارد نمایید.').required('ایمیل خود را وارد نمایید.'),
        password:yup.string().min(4,'حداقل باید از 4 کاراکتر استفاده نمایید.').required('رمز عبور خود را وارد نکرده اید.')
      })

      validate = async() =>{
        try {
            const result = await this.schema.validate(this.state.acount , {abortEarly:false});
            return result
            
        } catch (error) {
            console.log(error.errors);
            this.setState({errors:error.errors});
        }
      };

    handleSubmit = async(e) =>{
        e.preventDefault();
        const result = await this.validate();
        console.log(result);
        if(result){
            const response = await axios.post('https://reqres.in/api/login', result)
            console.log(response);
        }

    };

    handleChange=(e)=>{
       const input = e.currentTarget;
       const acount = {...this.state.acount};
       acount[input.name] = input.value;
       this.setState({acount})

    }


    render() { 
        const {email,password} = this.state.acount;
        return (
            <>{
                this.state.errors.length !== 0  && (
                    <div className="alert alert-danger">
                        <ul>
                            {
                                this.state.errors.map((e,i)=> <li key={i}>{e}</li>)
                            }
                        </ul>
                    </div>
                )
            }
            <form onSubmit={this.handleSubmit}>
                <Input name='email' label='email' value={email} onChange={this.handleChange} />
                <Input name='password' label='password' value={password} onChange={this.handleChange} />
                <button className='btn btn-info'>Login</button>
            </form>
            </>
        );
    }
}
 
export default Login;