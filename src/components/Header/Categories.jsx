import React from 'react';

import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom'

function Categories() {
    return(
        <header className="App-header">
            <nav>
            <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/main">Main</Link>
                </li>
                <li>
                <Link to="/contador">Contador</Link>
                </li>
                <li>
                <Link to="/movies">Movies</Link>
                </li>
                <li>
                <Link to="/pokemons">Pokemons</Link>
                </li>
                <li>
                <Link to="/forms">Forms</Link>
                </li>
            </ul>
            </nav>
        </header>
    )
}
export default Categories