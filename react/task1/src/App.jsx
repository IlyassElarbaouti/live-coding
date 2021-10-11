import React, { Component } from 'react';
import './index.scss'
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// algo
// 1. show login by default
// 2. onClick on login hide login and show spinner for 2sec
// 3. after 2sec hide spinner and show logout
// 4. onClick on logout hide logout and show login
export default class App extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn : false,
        }
    }
    render() {
        return (
            <>
             <Login/>
             <Logout/>
             <Spinner/>
             </>
        )
    }
}

