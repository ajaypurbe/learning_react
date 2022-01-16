import React, { Component } from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'

export default class Mid extends Component {
    render() {
        return (
            <div>
              <Routes>
                  <Route path = '/' element= {<Home/>}/>
                  <Route path = '/register' element= {<Register/>}/>
              </Routes>
            </div>
        )
    }
}
