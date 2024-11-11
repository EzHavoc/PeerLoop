import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Hanji veerji</h1>

      <Router>
      <>

        <Switch>
          <Route path="/" exact>
            <h1>Haanji veerji</h1>
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </>
    </Router>
    </div>
  );
}

export default App;
