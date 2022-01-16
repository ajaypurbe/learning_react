import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Header extends Component {
    render() {
        return (
            <div>
            <ul className="nav">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/register">Register</Link>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">login</a>
  </li>
  <li className="nav-item">
    <a className="nav-link">products</a>
  </li>
</ul>
            </div>
        )
    }
}
