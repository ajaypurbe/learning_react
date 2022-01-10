import React, { Component } from 'react'
import {Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
               <Link to="/">Home</Link>
               <br></br>
               <Link to="/about">About</Link>
               <br></br>
               <Link to ="/contact">Contact</Link>
            </div>
        )
    }
}
