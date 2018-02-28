import React from 'react'
import ReactDOM from 'react-dom'
import Chicken from './Resume/resume.jsx'

class Indexcomponent extends React.Component {
    render() {
        return (

            <div className={'head'}>

            <h1>Eyes on the stars feet on the ground</h1>
            <Chicken/>

            </div>
        )
    }
}

ReactDOM.render(<Indexcomponent />, document.getElementById('root'))