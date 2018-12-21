import React, { Component, Fragment } from 'react'

// const LevelThree = ({ title }) => <h1>{title}</h1>
// const LevelTwo =({ title }) => <LevelThree title={title} />
// const LevelOne =({ title }) => <LevelTwo title={title} />
// class App extends Component {
//     render() { 
//         return ( 
//             <LevelOne title="simple title" />
//          );
//     }
// }
const TitleContext = React.createContext()

const LevelThree = ({ title }) => (
    <TitleContext.Consumer>
        {/* { title => <h1>{title}</h1> } */}
        { ({ title, subTitle, click }) => (
            <Fragment>
                <h1 onClick={click}>{title}</h1> 
                <h2>{subTitle}</h2>
            </Fragment>
        )}
    </TitleContext.Consumer>
)
const LevelTwo =({ title }) => <LevelThree />
const LevelOne =({ title }) => <LevelTwo />

class App extends Component {
    render() { 
        return ( 
            // <TitleContext.Provider value="Simple title">
            <TitleContext.Provider value={{title: 'Simple title', subTitle: 'subTitle', click: () => {console.log('Hello')}}}>
                <LevelOne />
            </TitleContext.Provider>
         );
    }
}
 
export default App;