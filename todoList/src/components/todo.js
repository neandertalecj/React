import React, { Component } from 'react'

class Todo extends Component {
    render() { 
        return (
            <div>
                {/* Im here */}
                {this.props.task.text}
            </div>
        )
    }
}
 
export default Todo