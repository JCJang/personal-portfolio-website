import LinksMobile from './LinksMobile'
import {useState,useEffect} from 'react'
import useDebounce from '../../customHooks/useDebounce'
import { IoBookOutline as AboutIcon } from "react-icons/io5";
import { IoCubeOutline as WorksIcon } from "react-icons/io5";
import { IoMailOutline as ContactIcon } from "react-icons/io5";
import { IoTriangleOutline as BackIcon } from "react-icons/io5";

import { IoBookOutline as AboutIconLogo } from "react-icons/io5";
import { IoCubeOutline as WorksIconLogo } from "react-icons/io5";
import { IoMailOpenOutline as ContactIconLogo } from "react-icons/io5";

import { IoCaretDownOutline} from 'react-icons/io5';
import { IoCaretUpOutline} from 'react-icons/io5';


const NavMobile = ({m, l, routeFocus, setRouteFocus}) => {

const [navShelf, setNavShelf] = useState(false)
const [navText, setNavText] = useState(false)

const [logoOpacity, setLogoOpacity] = useState(1)
const [iconLogo, setIconLogo] = useState("")
const [logoRotation, setLogoRotation] = useState("")

  useEffect(()=>{
    setLogoRotation("rotateY(70deg)")
    setLogoOpacity(0)
  },[routeFocus,navShelf])

  useDebounce(()=>{
    setLogoRotation("")
    setIconLogo(iconLogoOptions())
    setNavText(textForNav())
    setLogoOpacity(1)
  }, 200, [routeFocus,navShelf])

  useEffect(()=>{
    setIconLogo(iconLogoOptions())
    setNavText(textForNav())
  },[])


const backgroundForNav = () => {
  if(navShelf===true){
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
  if(navShelf===true){
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
  if(navShelf===true){
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
  if(navShelf){
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

    <div className="Column" style={worksStyle()}>
      <nav className="Column" style={{flex:"1", overflowY:"auto"}}>

        <div className="desktop-logo transition RowCentered" style={{height:"5rem",margin:"0 1.5rem"}}>
          <div className="ColumnCentered" onClick={()=>{setNavShelf(!navShelf)}}  style={{color:colorForNav()}}>
          <div className="transition selfCentered" style={{fontSize:"1.5rem", opacity:logoOpacity,transformOrigin:"center",transform:logoRotation}}>
              {iconLogo}
          </div>
          <p className="overline">{navShelf?"BACK":"MENU"}</p>
          </div>
          <div className="selfCentered" style={{height:"1rem",marginTop:"0.8rem",borderBottom:`1.5px solid ${colorForNav()}`,width:"65vw"}}>{navText?navText:<div style={{visibility:"hidden"}}>?</div>}
          </div>
          <div className="mobile-logo" style={{marginTop:"8.6px"}}>Jang</div>
        </div>


        <div className="grid-container-mobile transition" style = {{
    background: "var(--desert-rose)",
    height: "var(--mobileheight)",
    position: "absolute",
    zIndex:"20",
    left: "0",
    top:navShelf?"5rem":"-100vh"
  }} >
        <LinksMobile
        boxDecorationTop={false}
        boxDecorationBottom={true}
        setNavShelf={setNavShelf}
        routeFocus={routeFocus}
        setRouteFocus={setRouteFocus}
        Icon={WorksIcon}
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
        setNavShelf={setNavShelf}
        routeFocus={routeFocus}
        setRouteFocus={setRouteFocus}
        Icon={AboutIcon}
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
        setNavShelf={setNavShelf}
        colorForNav={colorForNav}
        setRouteFocus={setRouteFocus}
        Icon={ContactIcon}
        m = {m}
        l = {l}
        direction = "rl"
        title = "Contact"
        routeName="/contact"
        subtitle = "How can I help readers find quality humanities books?"
        />

        </div>

  </nav>
</div>
  )
}

export default NavMobile
