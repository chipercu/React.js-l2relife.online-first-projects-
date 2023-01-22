import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/nav_menu/Nav";
import Content from "./components/content/Content";

const App = () => {
    return (<div className='app-wrapper'>
            <Header/>
            <Nav/>
            <Content text="Hello React"/>
        </div>


    );
}

export default App;
