import React, {Component} from 'react'

class Article extends Component {

	state = {
		isOpen: this.props.defaultOpen
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	return this.state.isOpen !== nextState.isOpen
	// }

	componentWillReceiveProps(nextProps) {
		if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
			isOpen: nextProps.defaultOpen
		})
	}

	componentWillUpdate(){
		console.log('---', "will update")
	}

	render() {
		const {article: {title,text, date}} = this.props //	деструкція
		console.log('---', this.props)
		const style = {width: '50%'}
		const body = this.state.isOpen && <section className="card-text">{text}</section>
		return (
			<div className="card mx-auto" style={style}>
				<div className="card-header">
					<h2>
						{title}
						<button onClick={this.handleClick} className="btn btn-primary btn-lg float-right">
							{this.state.isOpen ? 'close' : 'open'}
						</button>
					</h2>
				</div>
				<div className="card-body">
					<h6 className="card-subtitle text-muted">
						create date: {(new Date(date)).toDateString()}
					</h6>
					{body}
				</div>
			</div>
		)
	}
	handleClick = () => {
		// console.log('---', 'clicked')
		this.setState({
			isOpen: !this.state.isOpen
		})
	}
}




export default Article 