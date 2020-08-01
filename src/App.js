import React, { Component } from 'react';
import './App.css';

import Header from './components/Header'
import Products from './components/Products'
import Message from './components/Message'
import Cart from './components/Cart'
import Footer from './components/Footer'


class App extends Component {
    render() {        
        return (
            <div>
                <Header></Header>                
                <Products></Products>
                <Message></Message>
                <Cart></Cart>

                <Footer></Footer>                
            </div>
        );
    }
}

export default App;
