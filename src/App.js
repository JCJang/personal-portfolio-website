import './App.css';
import Nav from './components/nav/Nav'
import NavMobile from './components/nav/NavMobile'

import About from './components/about/About'
import Contact from './components/contact/Contact'
import Works from './components/works/Works'

import ProjectPharmacy from './components/works/projects/ProjectPharmacy/ProjectPharmacy'
import ProjectHumanities from './components/works/projects/ProjectHumanities/ProjectHumanities'
import WorksMore from './components/works/projects/WorksMore/WorksMore'

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
    <About  m={m} l={l}/>
    </Route>
    <Route path = "/contact" exact>
    <Contact  m={m} l={l}/>
    </Route>
    <Route path = "/works" exact>
    <Works s={s} m={m} l={l}/>
    </Route>

    <Route path = "/works/humanities-book-database" exact>
      <ProjectHumanities  m={m} l={l} setRouteFocus={setRouteFocus}/>
    </Route>

    <Route path = "/works/pharmacy-concept-app" exact>
    <ProjectPharmacy  m={m} l={l} setRouteFocus={setRouteFocus}/>
    </Route>

    <Route path = "/works/more" exact>
    <WorksMore  m={m} l={l} setRouteFocus={setRouteFocus}/>
    </Route>

    </div>
    </Router>
  )
}

export default App
