import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home'
import About from './contents/About'
import Education from './contents/Education';
import Skills from './contents/Skills';
import Projects from './contents/Projects';
import Contact from './contents/Contact';
import Resume from './contents/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Route for Home.js contents */}
        <Route exact path="/">
          <Home />
        </Route>

        {/* Route for About.js contents */}
        <Route path="/about">
          <About />
        </Route>

        {/* Route for Education.js contents */}
        <Route path="/education">
          <Education />
        </Route>

        {/* Route for Skills.js contents */}
        <Route path="/skills">
          <Skills />
        </Route>

        {/* Route for Projects.js contents */}
        <Route path="/projects">
          <Projects />
        </Route>

        {/* Route for Projects.js contents */}
        <Route path="/contact">
          <Contact />
        </Route>

        {/* Route for Projects.js contents */}
        <Route path="/resume">
          <Resume />
        </Route>

      </div>
    </Router>
  );
}

export default App;
