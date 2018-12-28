import React, { Component } from 'react'
import Title from './components16/Title'
import NewsPost from './components16/NewsPost'
import Input from './components16/Input' 

const BASE_PATH = 'https://hn.algolia.com/api/v1'
const SEARCH_PATH = '/search'
const SEARCH_PARAM = 'query='

class News extends Component {
    state = {  
        searchQuery:'',
        result: {}
    }

    componentDidMount() {
        const { searchQuery } = this.state
        // fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
        //     .then(res => res.json())
        //     .then(result => this.setNews(result))
        //     .catch(error => error)
        this.fetchData(searchQuery)
    }

    fetchData = (searchQuery) => {
        fetch(`${BASE_PATH}${SEARCH_PATH}?${SEARCH_PARAM}${searchQuery}`)
        .then(res => res.json())
        .then(result => this.setNews(result))
        .catch(error => error)
    }

    handleInputChange = ({ target: { value } }) => {
        this.setState({
            searchQuery: value
        })
    }

    getSearch = ({ key }) => {
        if(key === 'Enter') {
            const { searchQuery } = this.state
            this.fetchData(searchQuery)
        }
    }
    
    setNews = result => {
        this.setState({ result })
    }

    render() { 
        const { searchQuery, result } = this.state
        const { hits = [] } = result

        console.log(result)

        return ( 
            <div className="wraper">
                <Title title="Hacker News" />

                {/* <Input onKeyPress={this.getSearch} onChange={this.handleInputChange} value={searchQuery} /> */}
                <input onKeyPress={this.getSearch} onChange={this.handleInputChange} value={searchQuery} />

                <ul className="newsList">
                    {hits.map(({ author, created_at, num_comments, objectID, title, points, url }) =>
                        <NewsPost 
                            key={objectID}
                            author={author}
                            created_at={created_at}
                            num_comments={num_comments}
                            title={title}
                            points={points}
                            url={url}
                        />
                    )}
                </ul>
            </div>
         );
    }
}
 
export default News;