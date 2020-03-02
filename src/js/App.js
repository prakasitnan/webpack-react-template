import React, { Component } from 'react'
import { hot } from 'react-hot-loader';
import Form from './components/Form';
import icon from '../../assets/images/icon.webp';

 class App extends Component {
    render() {
        return (
            <div>
                <img src={icon} />
                <Form />
            </div>
        )
    }
}

export default hot(module)(App);