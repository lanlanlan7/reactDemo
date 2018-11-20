import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';

import './index.css';
import App from './App';
import Home from './components/Home/Home';
import Other from './components/Other/Other';
import * as serviceWorker from './serviceWorker';


export default class Hello extends Component{
    render(){
        return (
            <Router>
                <div>
                    <ul className="nav">
                        <li><Link to="/">App</Link></li>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/Other">Other</Link></li>
                    </ul>
                    <hr />
                    <Route exact path="/" component={App} />
                    <Route path="/Home" component={Home} />
                    <Route path="/Other" component={Other} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Hello />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
