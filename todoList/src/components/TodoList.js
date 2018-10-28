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
                        <input type="text" name='inp'/>
                        <button submit="submit">Ok</button>
                    </div>
                </form>
                <ol>
                    {this.state.list.map(task => 
                            <Todo 
                                key={task.id}
                                task={task} 
                                onDelete={this.handleDelete} 
                                onTextDecor={this.hendleTextDecor}/>
                        )
                    }
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

    hendleTextDecor = (id) => {
        console.log(id)
        const list = this.state.list.map(task => {
            let line = task.lineThrough
            if (task.id === id) {
                line = !line
            }
            // line = line
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