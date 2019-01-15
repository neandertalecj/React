import React, { Component } from 'react'
import './posts.css'
import Link from 'react-router-dom/Link'

class Posts extends Component {
    state = {
        data: [],
    }
    
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(res => res.json())
            .then(data => this.setState({ data }))
            .catch(err => console.log('!!Massage', err))
    }

    render() {
        const { data } = this.state
        console.log(data)
        return (
            <div>
                <h2>Posts:</h2>
                <ul>
                    {data.map(({ id, title }) => 
                        <li key={id}>
                            <Link to={`/posts/${id}`}>{title}</Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}
 
export default Posts;