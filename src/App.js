import React from 'react';
import './App.css';
import Header from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import News from './components/News';
import MapCompo from './components/MapCompo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Route exact path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/map" component={MapCompo} />
          <Route path="/contact" component={Contact} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
