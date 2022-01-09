import React, { Component } from 'react'

export default class Menubar extends Component {
    render() {
        this.state = {
            "quantity": 0,
            "price" : "30 rs"
        }
        return (
            <div>
              <p>this is menu</p>  
              <p>quantity : {this.state.quantity}</p> 
              <p>Price : {this.state.price}</p> 
            </div>
        )
    }
}

