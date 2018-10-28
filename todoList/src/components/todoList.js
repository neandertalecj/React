import React, { Component } from 'react'
import Todo from './todo'

class TodoList extends Component {
    state = {
        list: []
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handlerAdd}>
                    <input type="text" id="inp"/>
                    <button submit="submit">Ok</button>
                
                </form>
                <ol>
                    {this.state.list.map(task => 
                        <li key={task.id}>
                            <Todo task={task} 
                                onDelete={this.handleDelete} 
                                onTextDecor={this.hendleTextDecor}/>
                        </li>)
                    }
                </ol>
            </div>
         )
    }
    handlerAdd = (e) => {
        const text = document.getElementById('inp').value
        const temp = this.state.list
        const index  = temp.length + 1
        temp.push({id: index, text: text, lineThrough: false})

        this.setState({list: temp})

        e.preventDefault()
        e.target.reset()
    }

    handleDelete = (id) => {
        const list = this.state.list.filter(task => task.id !== id )
        this.setState({list})
    }

    // hendleTextDecor = (id) => {
    //     const list = this.state.list.map(task => ({
    //             id: task.id, 
    //             text: task.text, 
    //             lineThrough: (task.id === id) && (task.lineThrough = !task.lineThrough)
    //         })
    //     )
    //     this.setState({list})
    // }
    hendleTextDecor = (id) => {
        console.log(id)
        const list = this.state.list.map(task => {
            let line = task.lineThrough
            if (task.id === id) {
                line = !line
            }
            line = line
            return ({
                id: task.id, 
                text: task.text, 
                lineThrough: line
            })
        })
        this.setState({list})
    }
}
 
export default TodoList