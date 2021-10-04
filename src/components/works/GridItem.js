import {Link} from 'react-router-dom'
import ImageFadeIn from '../../customHooks/imageFadeIn'

import {useEffect, useState} from 'react';
const GridItem = ({direction, routeName, image, role, title, subtitle, classes}) => {

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

  return (

    <Link to={routeName} className={gradientSetting()} onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {setHover(false)}} style = {{ textDecoration: "none",
    overflow: "hidden",
    borderRight: direction === "lr" && hover? "2px solid var(--desert-rose)" : direction === "lr" && "8px solid var(--midnight)",
    borderLeft: direction === "rl" && hover? "2px solid var(--desert-rose)" : direction === "rl" && "8px solid var(--midnight)"

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
        <div style={{lineHeight:"1.5rem"}}>{role}</div>
        <div style={{fontWeight:"300",font:"2.3rem/1.7 'Yaldevi',sans-serif", letterSpacing:"0.0156rem",textTransform:"uppercase"}}>{title}</div>
        <div className="subtitle1" style={{lineHeight:"3rem"}}>{subtitle}</div>
    </div>
    </Link>


  )
}

export default GridItem
