import React, { Component } from 'react'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import { Route, Routes } from 'react-router-dom'

export default class Mid extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path= "/about" element={<About/>} />
                    <Route path = "/contact" element={<Contact/>}/>
                </Routes>
            </div>
        )
    }
}
