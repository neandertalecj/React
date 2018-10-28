import React from 'react'

const decorate = ({task: {lineThrough}}) => ({textDecoration: lineThrough ? 'line-through' : 'none'})

const Todo = props => (
            <li>
                <span 
                    style={decorate(props)}
                    onClick={() => props.onTextDecor(props.task.id)}>
                    {props.task.text}
                </span>
                                <input type="button" 
                       onClick={() => props.onDelete(props.task.id)} 
                       value="x"
                />
            </li>
)
 
export default Todo