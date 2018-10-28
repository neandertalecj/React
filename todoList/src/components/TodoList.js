import React, { Component } from 'react'
import Todo from './Todo'
import nanoid from 'nanoid'

class TodoList extends Component {
    state = {
        list: []
    }
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handlerAdd}>
                    <p>Task list</p>
                    <div className="add-task">
                        <input type="text" name='inp' required />
                        <button submit="submit">Ok</button>
                    </div>
                </form>
                <ol>
                    {this.state.list.map(task => (
                        <Todo 
                            key={task.id}
                            task={task} 
                            onDelete={this.handleDelete} 
                            toggleTask={this.toggleTask}
                        />
                    ))}
                </ol>
            </div>
         )
    }

    handlerAdd = (e) => {
        e.preventDefault()
 
        const list = [
            ...this.state.list,
            {
                id: nanoid(),
                text: e.target.inp.value,
                lineThrough: false
            }
        ]
        this.setState({list})

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
    //             //lineThrough: (task.id === id) && (task.lineThrough = !task.lineThrough)
    //             lineThrough: (task.id === id) && (!task.lineThrough)
    //         })
    //     )
    //     this.setState({list})
    // }

    static invertStatus = id => task => task.id === id
    ? ({ ...task, lineThrough: !task.lineThrough })
    : task

    toggleTask = (id) => {
        const list = this.state.list.map(TodoList.invertStatus(id))
        this.setState({ list })
    }
}
 
export default TodoList