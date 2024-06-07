// src/App.js
import React from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import LanguageLinks from './components/LanguageLinks';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <LanguageLinks />
        </div>
    );
}

export default App;
