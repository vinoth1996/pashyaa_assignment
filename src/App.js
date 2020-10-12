import React from 'react';
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HashRouter>
          <Route exact path="/" component={Home}/>
          <Route path="/blog" component={Blog}/>
        </HashRouter>
      </header>
    </div>
  );
}

export default App;
