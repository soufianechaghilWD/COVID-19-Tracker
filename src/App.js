import React from 'react';
import './App.css';
import Example from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import News from './components/News';
import MapCompo from './components/MapCompo';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Router>
        <Example />
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/map" component={MapCompo} />
          <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
