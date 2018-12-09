import React, {Component, Fragment} from 'react'

const TABS_BTN = [
    {
        dataName: 1,
        title: 'Tab1',
        icon: '+'
    },
    {
        dataName: 2,
        title: 'Tab2',
        icon: '-'
    },
    {
        dataName: 3,
        title: 'Tab3',
        icon: '*'
    }
]

const people = ['Jack', 'Max', 'Leo', 'Alex']

class App extends Component {
    state = {
        activeTab: 1,
    }

    handleTab = (e) => {
        this.setState({
            activeTab: +e.target.getAttribute('data-name')
        })
    }

    render() {
        const { activeTab } = this.state
        return (
            <Fragment>
                {TABS_BTN.map(({dataName, title, icon}) => (
                    <button
                        key={`${dataName}-${title}`}
                        data-name={dataName}
                        onClick={this.handleTab}
                    >{icon}{title}</button>
                ))}

                <div>
                    {`Active tab is: ${activeTab === 1 ? 'first' : activeTab === 2 ? 'second' : 'third'}`}
                </div>
                <ul>
                    {people.map((person, index) => (
                        <li key={index}>{person}</li>
                    ))}
                </ul>
            </Fragment>
        );
    }
}
 
export default App