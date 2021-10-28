import {Link} from 'react-router-dom'
import ImageFadeIn from '../../customHooks/imageFadeIn'
import Fade from 'react-reveal/Fade';

import {useEffect, useState} from 'react';
const GridItem = ({m, l, direction, routeName, image, role, title, subtitle, specs, introduction, classes}) => {

  const [hover, setHover] = useState(false)

const gradientSetting = () =>{
  if(hover){
    if(direction==="lr"){
      return `transition grid grid-lr-hover ${classes}`
    }else{
      return `transition grid grid-rl-hover ${classes}`
    }
  }else{
    if(direction==="lr"){
      return `transition grid grid-lr ${classes}`
    }else{
      return `transition grid grid-rl ${classes}`
    }
  }
}

const borderRight = () => {
  if(direction === "rl"){return;}

  if(l){
    if(hover){
      return "3px solid var(--desert-rose)"
      } else {
    return "3px solid var(--midnight)"
    }
  }else{
    if(hover){
      return "4px solid var(--desert-rose)"
      } else {
    return "4px solid var(--midnight)"
    }
  }
}

const borderLeft = () => {
  if(direction === "lr"){return;}

  if(l){
    if(hover){
      return "3px solid var(--desert-rose)"
      } else {
    return "3px solid var(--midnight)"
    }
  }else{
    if(hover){
      return "4px solid var(--desert-rose)"
      } else {
    return "4px solid var(--midnight)"
    }
  }
}

  return (

    <Link to={routeName} className={gradientSetting()}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setHover(true)}
      onMouseUp={() => setHover(false)}  style = {{ textDecoration: "none",

    boxShadow:hover?"rgba(60, 84, 82, 0.05) 0px 1px 0px, rgba(60, 84, 82, 0.1) 0px 0px 8px":"rgba(60, 84, 82, 0.25) 0px 6px 12px -2px, rgba(60, 84, 82, 0.3) 0px 3px 7px -3px",
    overflow: "hidden",
    borderRight: borderRight(),
    borderLeft: borderLeft()
  }}>

      <ImageFadeIn role="presentation" className="gridImage transition" src={image} style={{ filter:hover?"saturate(0.6)":"saturate(0.1) opacity(0.8)"
}}/>

      <div className="transition Column" style = {{
    height: "100%",
    width: "100%",
    position: "relative",
    zIndex: "10",
    textAlign: direction === "lr" ? "left" : "right",
    color: "var(--lilac)",
    lineHeight: "5rem",
    justifyContent: "center",
    padding:direction==="lr"?"1rem 4rem 0 1rem":"1rem 1rem 0 4rem",
    opacity:hover?"0":"1"
  }}
   >
   <Fade top delay={500}>
        <div style={{lineHeight:"1.3rem", marginTop:"0.5rem", fontFamily:"Yaldevi"}}>{role}</div>
    </Fade>
    <Fade delay={700}>
          <div style={{fontWeight:"400",font:m?"3rem/1.3 'Lusitana',sans-serif":"2.4rem/1.2 'Lusitana',sans-serif", letterSpacing:"0.0156rem",textTransform:"", margin:"0.6rem 0"}}>{title}</div>
    </Fade>
    <Fade bottom delay={900}>

        <div className="subtitle1" style={{lineHeight:m?"2.4rem":"1.6rem",fontSize:!m && "1.2rem", marginBottom:"0.2rem"}}>{subtitle}</div>
    </Fade>

    </div>
    <div className="transition Column body2" style = {{
  height: "100%",
  width: "calc(40vw - 3.25rem)",
  position: "absolute",
  top:"0",
  zIndex: "10",
  textAlign:"left",
  color: "var(--works-bg)",
  justifyContent: "center",
  padding:"0.5rem",
  opacity:hover?"1":"0",
  }}
  >

  <Fade left>
  <div className="overline" style={{marginTop:"1rem"}}><em>Click to see full case study.</em> <br></br>project uses {specs}.</div><br></br>
  </Fade>

  <Fade left>
  <div className="body1">{introduction}</div>
  </Fade>

  </div>

    </Link>

  )
}

export default GridItem
