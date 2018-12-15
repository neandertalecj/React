import React, { Component } from 'react'

const isEmpty = (prop) => (
    prop === null ||
    prop === undefined ||
    (prop.hasOwnProperty('length') && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0)
)

const LoadingHOC = (loadingProp) => (WraperComponent) => {
    return class LoadingHOC extends Component {
        render() {
            console.log(this.props)
            return isEmpty(this.props[loadingProp]) ?
            // <div className="loader" />
            <div className="loader">Here most be Preloading from css file with css-animation</div>
            : <WraperComponent {...this.props} />
        }
    }
}

export default LoadingHOC