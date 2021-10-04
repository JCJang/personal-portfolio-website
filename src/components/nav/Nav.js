import Links from './Links'
import {useState,useEffect} from 'react'
import useDebounce from '../../customHooks/useDebounce'
import { IoBookSharp as AboutIcon } from "react-icons/io5";
import { IoCubeSharp as WorksIcon } from "react-icons/io5";
import { IoMailOpenSharp as ContactIcon } from "react-icons/io5";

import { IoBookOutline as AboutIconLogo } from "react-icons/io5";
import { IoCubeOutline as WorksIconLogo } from "react-icons/io5";
import { IoMailOpenOutline as ContactIconLogo } from "react-icons/io5";

import { IoCaretDownOutline} from 'react-icons/io5';
import { IoCaretUpOutline} from 'react-icons/io5';


const Nav = ({m, l}) => {

const [routeFocus, setRouteFocus] = useState("")
const [logoOpacity, setLogoOpacity] = useState(1)
const [iconLogo, setIconLogo] = useState(<WorksIconLogo/>)
const [logoRotation, setLogoRotation] = useState("")

  useEffect(()=>{
    setLogoRotation("rotateY(70deg)")
    setLogoOpacity(0)
  },[routeFocus])

  useDebounce(()=>{
    setLogoRotation("")
    setIconLogo(iconLogoOptions())
    setLogoOpacity(1)
  }, 200, [routeFocus])

  useEffect(()=>{
    setIconLogo(iconLogoOptions())
  },[])

const backgroundForNav = () => {
  if(routeFocus==="/about"){
    return "var(--velvet)"
  }else if (routeFocus==="/works") {
    return "var(--works-accent)"
  }else if (routeFocus==="/contact") {
    return "var(--contact-bg)"
  }else{
    return "var(--neutral)"
  }
}

const colorForNav = () => {
  if(routeFocus==="/about"){
    return "var(--cinerous)"
  }else if (routeFocus==="/works") {
    return "var(--midnight)"
  }else if (routeFocus==="/contact") {
    return "var(--contact-text)"
  }else{
    return "var(--velvet)"
  }
}

const iconLogoOptions = () => {
  if(routeFocus==="/about"){
    return <AboutIconLogo/>
  }else if (routeFocus==="/works") {
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

  return (
    <nav className="Row transition" style={{
    width: "100vw",
    position:"sticky",
    background: backgroundForNav(),
    padding: "0 3rem",
    color: colorForNav(),
    height: "5rem",
    alignItems: "center",
    justifyContent:"space-between",
    zIndex:"40",
    display: "flex",
    borderBottom: `1.5px solid ${colorForNav()}`
  }}>

        <div className="desktop-logo RowCentered" style={{opacity:0.8}}><div className="selfCentered transition" style={{marginRight:"2rem", fontSize:"1.5rem",opacity:logoOpacity,transformOrigin:"center",transform:logoRotation}}>{iconLogo}</div><div style={{paddingTop:"0.5rem"}}>Jennifer Jang</div></div>
        <div className="RowCentered navText">
        <Links routeName="/works" label="Works" routeFocus={routeFocus} colorForNav={colorForNav} setRouteFocus={setRouteFocus} Icon={WorksIcon} />
        <Links routeName="/about" label="About" routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={AboutIcon} />

        <Links routeName="/contact" label="Contact" routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={ContactIcon} />
        </div>

  </nav>
  )
}

export default Nav
