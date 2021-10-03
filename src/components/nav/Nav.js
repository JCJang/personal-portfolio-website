import Links from './Links'
import {useState,useEffect} from 'react'

import { IoPrismOutline as ContactIcon } from "react-icons/io5";
import { IoBookOutline as AboutIcon } from "react-icons/io5";
import { IoCubeOutline as WorksIcon } from "react-icons/io5";

import { IoCaretDownOutline} from 'react-icons/io5';
import { IoCaretUpOutline} from 'react-icons/io5';


const Nav = ({m, l}) => {

const [routeFocus, setRouteFocus] = useState("/")

const backgroundForNav = () => {
  if(routeFocus==="/about"){
    return "var(--velvet)"
  }else if (routeFocus==="/works") {
    return "var(--works-accent)"
  }else if (routeFocus==="/contact") {
    return "var(--contact-bg)"
  }else{
    return "var(--cinerous)"
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
    return "var(--occlusion)"
  }
}

const icon = () => {
  if(routeFocus==="/about"){
    return <AboutIcon/>
  }else if (routeFocus==="/works") {
    return <WorksIcon/>
  }else if (routeFocus==="/contact") {
    return <ContactIcon/>
  }else{
    return WorksIcon
  }
}



  //
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
    position:"absolute",
    background: backgroundForNav(),
    color: colorForNav(),
    height: "5rem",
    alignItems: "center",
    justifyContent:"space-between",
    zIndex:"40",
    display: "flex",
    borderBottom: `1.5px solid ${colorForNav()}`
  }}>

        <div className="desktop-logo Row" style={{opacity:0.8}}><div style={{paddingRight:"1rem"}}>{icon()}</div>Jennifer Jang</div>
        <div className="Row">
        <Links routeName="/works" label="Works" routeFocus={routeFocus} colorForNav={colorForNav} setRouteFocus={setRouteFocus} Icon={WorksIcon} />
        <Links routeName="/about" label="About" routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={AboutIcon} />

        <Links routeName="/contact" label="Contact" routeFocus={routeFocus} colorForNav={colorForNav}  setRouteFocus={setRouteFocus} Icon={ContactIcon} />
        </div>

  </nav>
  )
}

export default Nav
