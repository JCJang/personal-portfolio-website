import {Link} from 'react-router-dom'
import ImageFadeIn from '../../customHooks/imageFadeIn'
import { useState, useEffect } from 'react';
import useDebounce from  '../../customHooks/useDebounce'

const LinksMobile = ({m, l, direction, routeFocus,routeName, navShelfOpen, boxDecorationTop, boxDecorationBottom, icon, hoverIcon, image, title, subtitle, classes}) => {

  const [hover, setHover] = useState(false)

  const [logoOpacity, setLogoOpacity] = useState(1)
  const [hoverIconState, setHoverIconState] = useState(true)
  const [logoRotation, setLogoRotation] = useState("")

  useEffect(()=>{
    setLogoRotation("rotateY(70deg)")
    setLogoOpacity(0)
  },[hover])

  useDebounce(()=>{
    setLogoRotation("")
    setHoverIconState(true)
    setLogoOpacity(1)
  }, 300, [hover])

  useEffect(()=>{
    setLogoRotation("")
    setHoverIconState(false)
    setLogoOpacity(1)
  },[])

useDebounce(()=>{
  setHover(false)
  setHoverIconState(false)
},1500, [hover])

const gradientSetting = () =>{
  if(hover || routeName === routeFocus){
    if(direction==="lr"){
      return `transition grid mobile-nav-lr-hover ${classes}`
    }else{
      return `transition grid mobile-nav-rl-hover ${classes}`
    }
  }else{
    if(direction==="lr"){
      return `transition grid mobile-nav-lr ${classes}`
    }else{
      return `transition grid mobile-nav-rl ${classes}`
    }
  }
}

  return (

    <Link to={routeName} className={gradientSetting()} onClick={()=>setHover(true)}
     style = {{ textDecoration: "none",
    overflow: "hidden",

  }}>
      <div className="transition Column" style = {{
    position:"relative",
    height: "100%",
    width: "100%",
    position: "relative",
    zIndex: "10",
    textAlign: direction === "lr" ? "left" : "right",
    color: hover?"var(--velvet)":routeName===routeFocus?"var(--velvet)":"var(--midnight)",
    lineHeight: "5rem",
    justifyContent: "center",
    padding:direction==="lr"?"0 4rem 0 0":"0 0 0 4rem"
  }}
   >
        <div style={{fontWeight:"300",
        font:"3rem/1.7 'Yaldevi',sans-serif",
        display:"flex",
        justifyContent: direction === "lr" ? "flex-start" : "flex-end",
        alignItems:"center",
        letterSpacing:"0.0156rem",
        textTransform:"uppercase"}}>
        {routeName===routeFocus?<img src={hoverIcon} className="transition selfCentered" style={{height:"3.4rem",width:"3.4rem", padding:"0.5rem", opacity:logoOpacity,transformOrigin:"center",transform:logoRotation}}/>
        :hoverIconState?
        <img src={hoverIcon} className="transition selfCentered" style={{height:"3.4rem",width:"3.4rem", padding:"0.5rem", opacity:logoOpacity,transformOrigin:"center",transform:logoRotation}}/>
        :<img src={icon} className="transition selfCentered" style={{height:"3.4rem",width:"3.4rem", padding:"0.5rem", opacity:logoOpacity,transformOrigin:"center",transform:logoRotation}}/>}
        {title}</div>
        {boxDecorationTop && <div className="boxDecoration-navMobileTop"></div>}
        {boxDecorationBottom && <div className="boxDecoration-navMobileBottom"></div>}

    </div>

    </Link>


  )
}

export default LinksMobile
