import Links from './Links'
import {useState,useEffect} from 'react'
import useDebounce from '../../customHooks/useDebounce'
import { IoBookSharp as AboutIcon } from "react-icons/io5";
import { IoCubeSharp as WorksIcon } from "react-icons/io5";
import { IoMailOpen as ContactIcon } from "react-icons/io5";

import { IoBookOutline as AboutIconLogo } from "react-icons/io5";
import { IoCubeOutline as WorksIconLogo } from "react-icons/io5";
import { IoMailOpenOutline as ContactIconLogo } from "react-icons/io5";

import { IoCaretDownOutline} from 'react-icons/io5';
import { IoCaretUpOutline} from 'react-icons/io5';


const Nav = ({m, l, routeFocus, setRouteFocus}) => {

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
  if(routeFocus==="/about"){
    return "var(--velvet)"
  }else if (routeFocus==="/") {
    return "var(--midnight)"
  }else if (routeFocus==="/contact") {
    return "var(--contact-text)"
  }else{
    return "var(--occlusion)"
  }
}


const colorForDivider = () => {
  if(routeFocus==="/about"){
    return "var(--desert-rose)"
  }else if (routeFocus==="/") {
    return "var(--works-accent)"
  }else if (routeFocus==="/contact") {
    return "var(--contact-text)"
  }else{
    return "var(--cinerous)"
  }
}

const iconLogoOptions = () => {
  if(routeFocus==="/about"){
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

  return (
    <div style={{
    width: "100vw",
    position:"sticky",
    background: backgroundForNav(),
    padding: "0 3rem",
    color: colorForNav(),
    zIndex:"40",
    height: "3.5rem"}}>

    <nav className="Row transition" style={{
    alignItems: "center",
    justifyContent:"space-between",
    height:"calc(3.5rem - 1.2px)"
  }}>

        <div className="desktop-logo RowCentered" style={{opacity:0.9}}>

          <div className="selfCentered transition" style={{marginRight:"2rem", fontSize:"1.5rem",opacity:logoOpacity,transformOrigin:"center",transform:logoRotation}}>
              {iconLogo}
          </div>

          <div style={{paddingTop:"0.5rem"}}>
          Jennifer Jang
          </div>

        </div>


        <div className="RowCentered">
        <Links routeName="/" label="Works" routeFocus={routeFocus} colorForNav={colorForNav} setRouteFocus={setRouteFocus} Icon={WorksIcon} />
        <Links routeName="/about" label="About" routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={AboutIcon} />

        <Links routeName="/contact" label="Contact" routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={ContactIcon} />
        </div>

  </nav>
  <div style={{background:colorForDivider(), height:"1.2px",margin:"0 0rem",opacity:"0.8"}}></div>
</div>
  )
}

export default Nav
