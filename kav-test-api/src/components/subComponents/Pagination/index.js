import React, { Component } from 'react'
import './style.css'

class Pagination extends Component {
    render() {
        const { onClick, lastPage, page } = this.props
        return (
            <div>
                {page !== 0 && <button data-name="left" onClick={onClick}>{'<<'}</button>}
                {page !== lastPage - 1 && <button data-name="right" onClick={onClick}>{'>>'}</button>}
            </div>
        )
    }
}
 
export default Pagination