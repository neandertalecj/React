import React from 'react'
import './newpost.css'

const NewsPost = ({ author, created_at, num_comments, title, points, url }) => {
    return ( 
        <div className="bgNewPost">
            <p>{author} </p>
            <p>{created_at} </p>
            <p>{num_comments} </p>
            <p>{title}</p>
            <p>{points}</p>
            <a href={url}>{url}</a>
        </div>
     );
}

 
export default NewsPost