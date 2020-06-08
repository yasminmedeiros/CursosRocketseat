import React from 'react';
import Routes from './routes';
import Main from './pages/main';
import './style.css';
import Header from './components/Header'
import api from './services/api';
const App = () =>( 
    < div className = "App" >
        <Header />
        <Routes />
    </div>
);


export default App;