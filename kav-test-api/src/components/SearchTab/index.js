import React, {Component} from 'react'
import Input from '../subComponents/Input/index'
import Select from '../subComponents/Select/index'
import Pagination from '../subComponents/Pagination/index'
import AdvContext from '../Context/index'
import {Conf} from '../../Conf/path'

const { BASE_PATH, SERCH_PATH, QUERY_PARAM, HITS_PER_PAGE, PAGE_PARAM } = Conf

class SearchTab extends Component {
    state = {
        searchQuery: '',
        result: {},
        hitsPerPage: 20,
        page: 0,
    }

    componentDidMount() {
        const { searchQuery, hitsPerPage, page } = this.state
        this.fetchData(searchQuery, hitsPerPage, page)
    }

    fetchData = (searchQuery, hitsPerPage, page) => {
        fetch(`${BASE_PATH}${SERCH_PATH}?${QUERY_PARAM}${searchQuery}&${HITS_PER_PAGE}${hitsPerPage}&${PAGE_PARAM}${page}`)
            .then(res => res.json())
            .then(result => this.setResult(result))
            .catch(err => err)
    }

    setResult = (result) => {
        this.setState({result})
    }

    setSerchQuery = ({ target: { value }}) => {
        this.setState({ searchQuery: value })
    }

    getInputData = ({ key }) => {
        if (key === 'Enter') {
            const { searchQuery, hitsPerPage } = this.state
            this.setState({ page: 0 })
            this.fetchData(searchQuery, hitsPerPage, 0)
        }
    }

    setHitsPerPage = ({ target: { value }}) => {
        const { searchQuery }  = this.state
        this.setState({
                hitsPerPage: +value, 
                page: 0 
            },
            () => this.fetchData(searchQuery, this.state.hitsPerPage, 0)
        )
    }

    handlePagePage = ({ target }) => {
        const { page } = this.state
        let typeBtn = target.getAttribute('data-name')
        switch(typeBtn) {
            case 'left': this.updatePage(page - 1)
                break
            case 'right': this.updatePage(page + 1)
                break
            default: null /*eslint-disable-line*/
        }
    }

    updatePage = (number) => {
        const { searchQuery, hitsPerPage } = this.state
        this.setState({
                page: number
            },
            this.fetchData(searchQuery, hitsPerPage, number)
        )
    }

    render(){
        const { searchQuery, hitsPerPage, page, result } = this.state
        const { nbPages } = result
        return (
            <div>
                <Input 
                    onKeyPress={this.getInputData}
                    onChange = {this.setSerchQuery}
                    value={searchQuery}
                />
                <Select onChange={this.setHitsPerPage} value={hitsPerPage}/>
                <Pagination 
                    onClick={this.handlePagePage}
                    page={page}
                    lastPage={nbPages}
                />
                <AdvContext data={this.state.result}/>
            </div>
        )

    }
}

export default SearchTab