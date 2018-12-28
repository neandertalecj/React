import React, { Component } from 'react'

class Select extends Component {
    state = {  }
    render() { 
        return ( 
            <select value={this.props.value} onChange={this.props.handleChange} >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
         );
    }
}
 
export default Select;