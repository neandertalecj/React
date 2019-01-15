import React, { Component, Fragment } from 'react'

class Post extends Component {
    state = {
        post: {}
    }

    componentDidMount() {
        const id = this.props.match.params.id || ''

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(post => {
                this.setState({ post })
                console.log('cDM', post)
            })
            .catch(err => err)

        console.log(this.props)
    }

    render() {
        const { post } = this.state
        const { title, body } = post
        return (
            <Fragment>
                <h2>{title}</h2>
                <p>{body}</p>
            </Fragment>
        );
    }
}
 
export default Post;