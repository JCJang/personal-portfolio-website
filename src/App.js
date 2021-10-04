import './App.css';
import Nav from './components/nav/Nav'
import NavMobile from './components/nav/NavMobile'

import About from './components/about/About'
import Contact from './components/contact/Contact'
import Works from './components/works/Works'

import {Route, BrowserRouter as Router} from 'react-router-dom'
import {useEffect, useState, useCallback} from 'react'
import useMediaQuery from "./customHooks/useMediaQuery";


const App = () => {
  /* Extra small devices (phones, 600px and down) */
  const xs = useMediaQuery('(max-width: 600px)');
  /* Small devices (portrait tablets and large phones, 600px and up) */
    const s = useMediaQuery('(min-width: 600px)');
    /* Medium devices (landscape tablets, 768px and up) */
    const m = useMediaQuery('(min-width: 768px)');
    /* Large devices (laptops/desktops, 992px and up) */
    const l = useMediaQuery('(min-width: 992px)');

    const desktopStyle = () => {
        return {
          height:"100vh",
          overflowY:"auto"
        }
    }


  return (
    <Router>
    <div className="rootContainer" style={desktopStyle()}>
    <Nav m={m} l={l}/>
    <Route path = "/about" exact>
    <About  m={m} l={l}/>
    </Route>
    <Route path = "/contact" exact>
    <Contact  m={m} l={l}/>
    </Route>
    <Route path = "/works" exact>
    <Works  m={m} l={l}/>
    </Route>
    </div>
    </Router>
  )
}

export default App
