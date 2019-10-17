import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    let h1_array = [
        <h1>Foo</h1>,
        <h1>Bar</h1>
    ]
    
    return (
        <div className="App">
            {h1_array}
        </div>
    );
}

export default App;
