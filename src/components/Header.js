import React, { Component } from 'react'
import {Route, Routes} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <a href='/about'>About</a>
            </div>
        )
    }
}
