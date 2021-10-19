import './App.css';
import Nav from './components/nav/Nav'
import NavMobile from './components/nav/NavMobile'

import About from './components/about/About'
import Contact from './components/contact/Contact'
import Works from './components/works/Works'

import ProjectPharmacy from './components/works/projects/ProjectPharmacy/ProjectPharmacy'
import ProjectHumanities from './components/works/projects/ProjectHumanities/ProjectHumanities'
import ProjectPersonal from './components/works/projects/ProjectPersonal/ProjectPersonal'

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
      ease: "easeOut",
      duration: 0.4
    };

    const pageStyle = {
      position: "absolute"
    };

  return (
    <Router>
    <div className="rootContainer" style={desktopStyle()}>
    <AnimatePresence>
    {loading && <motion.div key="loader" style={{
          zIndex:"50",
          width:"100vw",
          height:"100vh",
          position:"absolute",}} exit={{y:-1000, transition:{duration:3}}}><Loader/></motion.div>}
    </AnimatePresence>

    {m? <Nav m={m} l={l} routeFocus={routeFocus} setRouteFocus={setRouteFocus}/>
    :
    <NavMobile m={m} l={l} routeFocus={routeFocus} setRouteFocus={setRouteFocus}/>}
    <AnimatePresence >
    <motion.div
      variants={route}
      initial="hidden"
      animate="show"
      key="route"
      style={{ background:"var(--velvet)"}}>
      <AnimatePresence >
    <Switch>
        <Route path = "/about" exact>
        <AnimatePresence>
            <motion.div
            key="about"
             style={pageStyle}
             initial="initial"
             animate="in"
             exit="out"
             variants={pageVariants}
             transition={pageTransition}
             className="about"
           >
            <About  m={m} l={l} setRouteFocus={setRouteFocus}/>
            </motion.div>
        </AnimatePresence>
        </Route>
        <Route path = "/contact" exact>
        <AnimatePresence>
          <motion.div
           key="contact"
           style={pageStyle}
           initial="initial"
           animate="in"
           exit="out"
           variants={pageVariants}
           transition={pageTransition}
           className="contact"
         >
            <Contact  m={m} l={l} setRouteFocus={setRouteFocus}/>
          </motion.div>
          </AnimatePresence>
        </Route>
        <Route path = "/" exact>
        <AnimatePresence>
          <motion.div
          key="works"
           style={pageStyle}
           initial="initial"
           animate="in"
           exit="out"
           variants={pageVariants}
           transition={pageTransition}
           className="works"
         >
            <Works s={s} m={m} l={l} setRouteFocus={setRouteFocus}/>
          </motion.div>
          </AnimatePresence>
        </Route>

        <Route path = "/humanities-book-database" exact>
        <AnimatePresence>
          <motion.div
          key="humanities"
           style={pageStyle}
           initial="initial"
           animate="in"
           exit="out"
           variants={pageVariants}
           transition={pageTransition}
           className="projectPage"
         >
<ProjectHumanities  m={m} l={l} setRouteFocus={setRouteFocus}/>
          </motion.div>
          </AnimatePresence>
</Route>
<Route path = "/pharmacy-concept-app" exact>
        <AnimatePresence>
        <motion.div
         key="pharmacy"
         style={pageStyle}
         initial="initial"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}
         className="projectPage"

       >
<ProjectPharmacy  m={m} l={l} setRouteFocus={setRouteFocus}/>
        </motion.div>
        </AnimatePresence>
</Route>
<Route path = "/personal-website" exact>
        <AnimatePresence>
        <motion.div
         key="personal"
         style={pageStyle}
         initial="initial"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}
         className="projectPage"
       >
<ProjectPersonal  m={m} l={l} setRouteFocus={setRouteFocus}/>
        </motion.div>
        </AnimatePresence>

</Route>
<Route path="*">
        <AnimatePresence>
          <motion.div
          key="404"
           style={pageStyle}
           initial="initial"
           animate="in"
           exit="out"
           variants={pageVariants}
           transition={pageTransition}
           className="projectPage"
         >
<NotFound m={m} l={l} setRouteFocus={setRouteFocus}/>
          </motion.div>
          </AnimatePresence>

</Route>
    </Switch>
    </AnimatePresence>

    </motion.div>
    </AnimatePresence>
    </div>

    </Router>
  )
}

export default App
