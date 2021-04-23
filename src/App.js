import React from 'react';
/* import logo from './logo.svg'; */

/* import './App.css'; */
import Categories from './components/Header/Categories'
import Main from './components/Main/Main.jsx'
import Movie from './components/Main/Movie.jsx'
import Contador from './components/Main/Contador.jsx'
import Pokemons from './components/Main/Pokemons.jsx'
import ReactHookForm from './components/Main/ReactHookForm.jsx'
import User from './components/Main/User'

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/contador">
            <Categories/>
            <Contador
              valor = {0}
            />
          </Route>
          <Route path="/main">
            <Categories/>
            <Main />
          </Route>
          <Route path="/pokemons">
            <Categories/>
            <Pokemons/>
          </Route>
          <Route path="/usuarios/:id" component={User}/>
          <Route path="/" exact>
            <Categories/>
          </Route>
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
