import React, { Component } from 'react';
import Users from './components/users'
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import User from './components/user';


class App extends Component {
    state = { } 
    render() { 
        return (
        <>
        <Navbar />
        <div className='container mt-3'>
            <Routes>
             <Route path='/users/:id' Component={User} />
             <Route path='/users' Component={Users} />
            <Route path='/login' Component={Login} />
            <Route path='/register' Component={Register} />
            <Route path='/' Component={Home} />
            </Routes>
        </div>
        </>
        );
    }
}
 
export default App;