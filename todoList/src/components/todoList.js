import React, { Component } from 'react'
import Todo from './todo'

class TodoList extends Component {
    state = {
        list: [
            {id: 1, text: 'Hello', lineThrough: false}
        ]
    }
    render() { 
        return ( 
            <div>
                <input type="text"/>
                <button onClick={this.handlerAdd}>Ok</button>
                {/* <p>Hello </p> */}
                {/* <Todo list={this.state.list} /> */}
                <ul>
                    {this.state.list.map(task => <li key={task.id}>{task.text}</li>)}
                </ul>
            </div>
         )
    }
    handlerAdd = (e) => {
        const temp = this.state.list
        const index  = temp.length + 1
        temp.push({id: index, text: e.target.value, lineThrough: false})
        console.log(temp)
        this.setState({list: temp})
    }
}
 
export default TodoList