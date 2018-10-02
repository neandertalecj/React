import React from 'react'
import Article from '../Article'
import './style.css'

export default function ArticleList({ articles }) {
    const articleElements = articles.map(article =>
        <li key = {article.id} className="article-list__li">
            <Article article = {article}/>
        </li>)
    return (
        <ul>
            {articleElements}
            {/* <li><Article article = {articles[0]}/> </li>
            <li><Article article = {articles[1]}/></li>
            <li><Article article = {articles[2]}/></li> */}
        </ul>
    )
}