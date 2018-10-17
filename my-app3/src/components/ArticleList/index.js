import React, {Component} from 'react'
import Article from '../Article'
import './style.css'

//  function ArticleList({ articles }) {
class ArticleList extends Component {

    state = { openArticleId: null}
 
    render() {
        // const articles = this.props.articles
        const articleElements =  this.props.articles.map((article, index) =>
            // <li key = {article.id} className="article-list__li" onClick={this.handlerClick.bind(this, article.id)}>
            <li key = {article.id} className="article-list__li">
                <Article article = {article} 
                         isOpen = {this.state.openArticleId === article.id} 
                         onButtonClick={this.handlerClick.bind(this, article.id)}/>
            </li>)
        return (
            <ul>
                {articleElements}
            </ul>
        )
    }
    handlerClick = openArticleId => this.setState({ 
        openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
    })

}

export default ArticleList