import React, { Component } from 'react';
import preloaderHOC from '../preloaderHOC/index'
import './style.css'

class Context extends Component {
    state = {}
    render() {
        console.log(this.props.data)
        const { hits = [] } = this.props.data
        return (
            <div>
                {hits.map(({objectID, title, url, author, created_at, num_comments }) => 
                    <div key={objectID}>
                        <h4>{title}</h4>
                        <a href={url} className="link">{url}</a>
                        <div>
                            <span>Author: {author}</span>
                            <span>Date: {new Date(created_at).toLocaleDateString()}</span>
                            <span>Comments: {num_comments}</span>
                        </div>
                        <hr/>
                    </div>
                )}
            </div>
        )
    }
}

const AdvContext = preloaderHOC('data')(Context)

export default AdvContext