import React, {Component} from 'react'
import './style.css'

class Input extends Component {

    render() {
        const { value, onChange, onKeyPress } = this.props
        return (
            <input 
                type="text"
                placeholder="Click to search"
                onChange={onChange}
                onKeyPress={onKeyPress}
                value={value}
            />
        )
    }
}

export default Input