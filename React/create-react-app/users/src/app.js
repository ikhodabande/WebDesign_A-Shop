import React, { Component } from 'react';
import Users from './components/users'
import Navbar from './components/navbar';
import { Route, Routes, redirect } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import User from './components/user';
import Not_found from './components/not-found';
import Dashboard from './components/dashboard';


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
             <Route path='/not-found' Component={Not_found} />
             <Route path='/register' Component={Register} />
             <Route path='/dashboard' Component={Dashboard} />
             <Route path='/' Component={Home} />
             <Route path='*' 
              element={<Not_found />} />
            </Routes>
           
        </div>
        </>
        );
    }
}
 
export default App;