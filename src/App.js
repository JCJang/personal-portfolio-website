import './App.css';
import Nav from './components/nav/Nav'
import NavMobile from './components/nav/NavMobile'

import About from './components/about/About'
import Contact from './components/contact/Contact'
import Works from './components/works/Works'

import ProjectPharmacy from './components/works/projects/ProjectPharmacy/ProjectPharmacy'
import ProjectHumanities from './components/works/projects/ProjectHumanities/ProjectHumanities'
import ProjectPersonal from './components/works/projects/ProjectPersonal/ProjectPersonal'

import {useEffect, useState, useCallback} from 'react'
import useMediaQuery from "./customHooks/useMediaQuery";
import {Route, BrowserRouter as Router} from 'react-router-dom'



const App = () => {
  /* Extra small devices (phones, 600px and down) */
  const xxs = useMediaQuery('(max-width: 359px)');
  /* Extra small devices (phones, 600px and down) */
  const xs = useMediaQuery('(min-width: 359px)');
  /* Small devices (portrait tablets and large phones, 600px and up) */
    const s = useMediaQuery('(min-width: 600px)');
    /* Medium devices (landscape tablets, 768px and up) */
    const m = useMediaQuery('(min-width: 768px)');
    /* Large devices (laptops/desktops, 992px and up) */
    const l = useMediaQuery('(min-width: 992px)');
    const xl = useMediaQuery('(min-width: 1200px)');
    const xxl = useMediaQuery('(min-width: 1600px)');


    const [routeFocus, setRouteFocus] = useState("")


    const desktopStyle = () => {
        return {
          width:"100vw",
          overflowY:"auto",
          overflowX:"hidden"
        }
    }


  return (
    <Router>
    <div className="rootContainer" style={desktopStyle()}>
    {m? <Nav m={m} l={l} routeFocus={routeFocus} setRouteFocus={setRouteFocus}/>
    :
    <NavMobile m={m} l={l} routeFocus={routeFocus} setRouteFocus={setRouteFocus}/>}

    <Route path = "/about" exact>
    <About  m={m} l={l} setRouteFocus={setRouteFocus}/>
    </Route>
    <Route path = "/contact" exact>
    <Contact  m={m} l={l} setRouteFocus={setRouteFocus}/>
    </Route>
    <Route path = "/" exact>
    <Works s={s} m={m} l={l} setRouteFocus={setRouteFocus}/>
    </Route>

    <Route path = "/humanities-book-database" exact>
      <ProjectHumanities  m={m} l={l} setRouteFocus={setRouteFocus}/>
    </Route>

    <Route path = "/pharmacy-concept-app" exact>
    <ProjectPharmacy  m={m} l={l} setRouteFocus={setRouteFocus}/>
    </Route>

    <Route path = "/personal-website" exact>
    <ProjectPersonal  m={m} l={l} setRouteFocus={setRouteFocus}/>
    </Route>

    </div>
    </Router>
  )
}

export default App
