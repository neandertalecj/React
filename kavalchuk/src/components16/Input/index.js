import React, { Component } from 'react'
import './input.css'

class Input extends Component {
    state = {  }
    render() { 
        return ( 
            <input 
                type="text"
                onKeyPress={this.props.onKeyPress}
                onChange={this.props.onChange}
                value={this.props.value} />
         );
    }
}
export default Input;