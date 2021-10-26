import LinksMobile from './LinksMobile'
import {useState,useEffect} from 'react'
import useDebounce from '../../customHooks/useDebounce'
import { IoTriangleOutline as BackIcon } from "react-icons/io5";

import { IoBookOutline as AboutIconLogo } from "react-icons/io5";
import { IoCubeOutline as WorksIconLogo } from "react-icons/io5";
import { IoMailOpenOutline as ContactIconLogo } from "react-icons/io5";

import aboutIcon from '../../images/mobileNavIcons/book-outline.svg'
import aboutHover from '../../images/mobileNavIcons/book-outline-hover.svg'
import worksIcon from '../../images/mobileNavIcons/cube-outline.svg'
import worksHover from '../../images/mobileNavIcons/cube-outline-hover.svg'
import contactIcon from '../../images/mobileNavIcons/mail-outline.svg'
import contactHover from '../../images/mobileNavIcons/mail-outline-hover.svg'


import { IoCaretDownOutline} from 'react-icons/io5';
import { IoCaretUpOutline} from 'react-icons/io5';


const NavMobile = ({m, l, routeFocus, setRouteFocus}) => {

const [navShelfOpen, setNavShelfOpen] = useState(false)
const [navText, setNavText] = useState(false)

const [logoOpacity, setLogoOpacity] = useState(1)
const [iconLogo, setIconLogo] = useState("")
const [logoRotation, setLogoRotation] = useState("")

useEffect(()=>{
 setTimeout(()=>{
   setLogoRotation("rotateY(70deg)")
   setLogoOpacity(0)}, 800);
},[routeFocus])

useDebounce(()=>{
  setLogoRotation("")
  setIconLogo(iconLogoOptions())
  setNavText(textForNav())
  setLogoOpacity(1)
}, 1000, [routeFocus])

useEffect(()=>{
   setLogoRotation("rotateY(70deg)")
   setLogoOpacity(0)
  },[navShelfOpen])

  useDebounce(()=>{
    setLogoRotation("")
    setIconLogo(iconLogoOptions())
    setNavText(textForNav())
    setLogoOpacity(1)
  }, 200, [navShelfOpen])

  useEffect(()=>{
    setIconLogo(iconLogoOptions())
    setNavText(textForNav())
  },[])

  useDebounce(()=>{
    setNavShelfOpen(false)
  }, 800, [routeFocus])


const backgroundForNav = () => {
  if(navShelfOpen===true){
    return "var(--desert-rose)";
  }else if(routeFocus==="/about"){
    return "var(--cinerous)"
  }else if (routeFocus==="/") {
    return "var(--works-accent)"
  }else if (routeFocus==="/contact") {
    return "var(--contact-bg)"
  }else{
    return "var(--table-neutral)"
  }
}

const colorForNav = () => {
  if(navShelfOpen===true){
    return "var(--highlight)";
  }else if(routeFocus==="/about"){
    return "var(--velvet)"
  }else if (routeFocus==="/") {
    return "var(--midnight)"
  }else if (routeFocus==="/contact") {
    return "var(--contact-text)"
  }else{
    return "var(--occlusion)"
  }
}


const textForNav = () => {
  if(navShelfOpen===true){
    return "";
  }else if(routeFocus==="/about"){
    return "About"
  }else if (routeFocus==="/") {
    return "Works by"
  }else if (routeFocus==="/contact") {
    return "Contact"
  }else{
    return ""
  }
}


const iconLogoOptions = () => {
  if(navShelfOpen){
    return <BackIcon style={{transform:"rotate(-90deg)"}}/>
  }else if(routeFocus==="/about"){
    return <AboutIconLogo/>
  }else if (routeFocus==="/") {
    return <WorksIconLogo/>
  }else if (routeFocus==="/contact") {
    return <ContactIconLogo/>
  }else{
    return <WorksIconLogo/>
  }
}


  // <label htmlFor="languageSetting" className="subtitle2">site language:</label>
  // <select className="form-control" id="languageSetting" value={languageSetting}
  //  onChange={(e)=>setLanguageSetting(e.target.value)} placeholder="toggles auto input settings">
  //  <option value="en">English</option>
  //  <option value="zh-tw">Traditional Chinese</option>
  //  <option value="zh-cn">Simplified Chinese</option>
  //  </select>

  const worksStyle = () => {
    return {
      background: backgroundForNav(),
      color: colorForNav(),
      height: "5rem",
      position:"relative",
      zIndex:"40"
    }
  };

  return (
    <>
      <nav className="Column" style={worksStyle()}>

        <div className="desktop-logo transition RowCentered" style={{height:"5rem",margin:"0 1.5rem"}}>
          <div className="ColumnCentered" onClick={()=>{setNavShelfOpen(!navShelfOpen)}}  style={{color:colorForNav()}}>
          <div className="transition selfCentered" style={{fontSize:"1.5rem", opacity:logoOpacity,transformOrigin:"center",transform:logoRotation}}>
              {iconLogo}
          </div>
          <p className="overline">{navShelfOpen?"BACK":"MENU"}</p>
          </div>
          <div className="selfCentered" style={{height:"1rem",marginTop:"0.8rem",borderBottom:`1.4px solid ${colorForNav()}`,width:"65vw"}}>{navText?<div style={{opacity:logoOpacity, transitionDuration:"0.5s"}}>{navText}</div>:<div style={{visibility:"hidden"}}>?</div>}
          </div>
          <div className="mobile-logo" style={{marginTop:m?"7.4px":"5.7px"}}>Jang</div>
        </div>
        </nav>


        <div className="grid-container-mobile transition" style = {{
    background: "var(--desert-rose)",
    height: "var(--mobileheight)",
    position: "absolute",
    zIndex:"20",
    left: "0",
    transition: "top ease 0.7s",
    top:navShelfOpen?"5rem":"-100vh"
  }} >
        <LinksMobile
        boxDecorationTop={false}
        boxDecorationBottom={true}
        setNavShelfOpen={setNavShelfOpen}
        navShelfOpen={navShelfOpen}
        routeFocus={routeFocus}
        icon={worksIcon}
        hoverIcon={worksHover}
        m = {m}
        l = {l}
        direction = "rl"
        title = "Works"
        routeName="/"
        subtitle = "How can I help readers find quality humanities books?"
        />

        <LinksMobile
        boxDecorationTop={true}
        boxDecorationBottom={true}
        setNavShelfOpen={setNavShelfOpen}
        navShelfOpen={navShelfOpen}
        routeFocus={routeFocus}
        icon={aboutIcon}
        hoverIcon={aboutHover}
        m = {m}
        l = {l}
        direction = "lr"
        title = "About"
        routeName="/about"
        subtitle = "How can I help readers find quality humanities books?"
        />

        <LinksMobile
        boxDecorationTop={true}
        boxDecorationBottom={false}
        routeFocus={routeFocus}
        navShelfOpen={navShelfOpen}
        colorForNav={colorForNav}
        routeFocus={routeFocus}
        icon={contactIcon}
        hoverIcon={contactHover}
        m = {m}
        l = {l}
        direction = "rl"
        title = "Contact"
        routeName="/contact"
        subtitle = "How can I help readers find quality humanities books?"
        />

        </div>

</>
  )
}

export default NavMobile
