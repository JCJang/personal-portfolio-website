import {Link} from 'react-router-dom'
import ImageFadeIn from '../../customHooks/imageFadeIn'
import Fade from 'react-reveal/Fade';

import {useEffect, useState} from 'react';
const GridItem = ({m, l, direction, routeName, image, role, title, subtitle, classes}) => {

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
      return "2px solid var(--desert-rose)"
      } else {
    return "8px solid var(--midnight)"
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
      return "2px solid var(--desert-rose)"
      } else {
    return "8px solid var(--midnight)"
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

    <Link to={routeName} className={gradientSetting()} onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {setHover(false)}} onMouseDown={() => setHover(true)}
        onMouseUp={() => {setHover(false)}}  style = {{ textDecoration: "none",
    overflow: "hidden",
    borderRight: borderRight(),
    borderLeft: borderLeft()
  }}>

      <ImageFadeIn className="gridImage transition" src={image} style={{ filter:hover?"saturate(0.6)":"saturate(0.1) opacity(0.8)"
}}/>

      <div className="transition Column" style = {{
    height: "100%",
    width: "100%",
    position: "relative",
    zIndex: "10",
    textAlign: direction === "lr" ? "left" : "right",
    color: "var(--works-bg)",
    lineHeight: "5rem",
    justifyContent: "center",
    padding:direction==="lr"?"0 4rem 0 0":"0 0 0 4rem"
  }}
   >
   <Fade top>
        <div style={{lineHeight:"1.5rem"}}>{role}</div>
    </Fade>
    <Fade>
        <div style={{fontWeight:"300",font:"2.3rem/1.7 'Yaldevi',sans-serif", letterSpacing:"0.0156rem",textTransform:"uppercase"}}>{title}</div>
    </Fade>
    <Fade bottom>
        <div className="subtitle1" style={{lineHeight:"3rem"}}>{subtitle}</div>
        </Fade>

    </div>

    </Link>

  )
}

export default GridItem
