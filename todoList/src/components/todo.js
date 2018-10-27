import React, { Component } from 'react'

class Todo extends Component {
    render() { 
        return (
            <div >
                <span>{this.props.task.text}</span>
                <input type="button" onClick={() => this.props.onDelete(this.props.task.id)} value="x"/>
            </div>
        )
    }
}
 
export default Todo