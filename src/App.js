import './App.css';
import Nav from './components/nav/Nav'
import NavMobile from './components/nav/NavMobile'

import About from './components/about/About'
import Contact from './components/contact/Contact'
import Works from './components/works/Works'

import ProjectPharmacy from './components/works/projects/ProjectPharmacy/ProjectPharmacy'
import ProjectHumanities from './components/works/projects/ProjectHumanities/ProjectHumanities'
import ProjectPersonal from './components/works/projects/ProjectPersonal/ProjectPersonal'
import ProjectTrekinn from './components/works/projects/ProjectTrekinn/ProjectTrekinn'

import NotFound from './components/nav/NotFound'
import Loader from './components/nav/Loader'
import useDebounce from './customHooks/useDebounce'

import {useEffect, useState, useCallback} from 'react'
import useMediaQuery from "./customHooks/useMediaQuery";
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'

import {motion, AnimatePresence} from 'framer-motion'

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
 const [loading, setLoading] = useState(true);
 const [domLoaded, setDomLoaded] = useState(false);

 useEffect(()=>{
     setDomLoaded(true)
 },[])

 useDebounce(()=>{
     setLoading(false)
 },1500, [domLoaded])


 const route = {
   hidden: {
     scale:1.3,
     opacity:0.5
      },
   show: {
     opacity:1,
     scale:1,
     transition: {
       duration:1,
       }
   }
 }
    const desktopStyle = () => {
        return {
          width:"100vw",
          overflowY:"auto",
          overflowX:"hidden"
        }
    }


    const backgroundForNav = () => {
      if(routeFocus==="/about"){
        return "var(--cinerous)"
      }else if (routeFocus==="/") {
        return "var(--works-accent)"
      }else if (routeFocus==="/contact") {
        return "var(--contact-bg)"
      }else{
        return "var(--table-neutral)"
      }
    }

    const pageVariants = {
      initial: {
        scale: 1.5,
        y: "-100vw"
      },
      in: {
        scale: 1,
        y: 0
      },
      out: {
        y: "4rem",
        scale: 1.2,
        transition:{
          duration:0.4
        }
      }
    };
    const pageTransition = {
      duration: 0.4
    };

    const pageStyle = {
      position: "absolute"
    };

  return (
    <Router>
    <div className="rootContainer" style={desktopStyle()}>
    {loading && <motion.div key="loader" style={{
          zIndex:"50",
          width:"100vw",
          height:"100vh",
          position:"absolute",}} exit={{y:-1000, transition:{duration:2}}}><Loader/></motion.div>}

    {m? <Nav m={m} l={l} routeFocus={routeFocus} setRouteFocus={setRouteFocus}/>
    :
    <NavMobile m={m} l={l} routeFocus={routeFocus} setRouteFocus={setRouteFocus}/>}
  
    <Switch>
        <Route path = "/about" exact>
        

            <About s={s} m={m} l={l} setRouteFocus={setRouteFocus}/>

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
<Route path = "/trekinn" exact>

<ProjectTrekinn  m={m} l={l} setRouteFocus={setRouteFocus}/>
</Route>
<Route path = "/personal-website" exact>
        
<ProjectPersonal  m={m} l={l} setRouteFocus={setRouteFocus}/>
</Route>
<Route path="/*">
        <NotFound m={m} l={l} setRouteFocus={setRouteFocus}/>
        </Route>
    </Switch>
      </div>

    </Router>
  )
}

export default App
