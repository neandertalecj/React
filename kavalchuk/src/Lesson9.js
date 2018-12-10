import React, { Fragment } from 'react'
import './style9.css'

// const Columns = () => ([
//     <td key="1">Hello</td>,
//     <td key="2">world1</td>
// ])
const styles = { color: 'red', textTransform: 'uppercase'}

const Columns = () => (
    <Fragment>
        <td style={styles}>Hello</td>
        <td className="title">world</td>
    </Fragment>
)


const App = () => {
    return ( 
        <table>
            <tbody>
                <tr>
                    <Columns />
                </tr>
            </tbody>
        </table>
     );
}
 
export default App;