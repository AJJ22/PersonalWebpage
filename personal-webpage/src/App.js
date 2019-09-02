import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar';
import Home from './components/home'
import Education from './components/education';
import Experience from './components/experience';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
