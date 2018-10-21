import React, { Component } from 'react'

class Counter extends Component {
    state = {
        value: this.props.value,
        // imgURL: 'https://picsum.photos/200',
        // tags: ['tag1', 'tag2', 'tag3']
    }

    styles = {
        fontSize: 10,
        fontWeight: 'bold'
    }

    handleIncrement = (product) => {
        this.setState({ value: this.state.value + 1})
    }

    

    render() { 
        const product = {id: 1}

        return (
            <div>
                {this.props.children}
                {/* <img src={this.state.imgURL} alt=""/> */}
                <span style={this.styles} className={this.getBadgeClasses()}>
                     {this.formatCount()} 
                </span>
                <button onClick={() => this.handleIncrement(product)}  className="btn btn-secondary btn-sm">Increment</button>
                {/* <ul>
                    {this.state.tags.map(tag =><li key={tag}>{tag}</li> )}
                </ul> */}
            </div>
        )
    }
    formatCount = () => {
        const { value } = this.state
        return value === 0 ? 'Zero' : value
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? 'warning' : 'primary';
        return classes;
    }
}
 
export default Counter