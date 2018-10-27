import React, { Component } from 'react'

class Todo extends Component {
    render() { 
        const decor = this.props.task.lineThrough ? 'line-through' : 'none'
        return (
            <div>
                <span style={{textDecoration: decor}}
                      onClick={() => this.props.onTextDecor(this.props.task.id)}>
                    {this.props.task.text}
                </span>
                <input type="button" 
                       onClick={() => this.props.onDelete(this.props.task.id)} 
                       value="x"/>
            </div>
        )
    }
}
 
export default Todo