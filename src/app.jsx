import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import _ from 'lodash'
import {Welcome} from './welcome.jsx'

const NavigationBar = () => (
    <div className="navigationBar">
        <ul>
            <li><Link to="/welcome">welcome</Link></li>
        </ul>
    </div>
)

class App extends React.Component {
    render() {
        return (
            <Router>
                <div id='appContainer'>
                    <Route path={`/welcome/:name?`} render={({match}) => <Welcome {...match.params}/>}/>
                    <Route exact path='/' component={NavigationBar}/>
                </div>
            </Router>
        )
    }
}

export default App
