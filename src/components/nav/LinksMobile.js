import {Link} from 'react-router-dom'
import ImageFadeIn from '../../customHooks/imageFadeIn'
import { useLocation } from "react-router-dom";
import {useEffect, useState} from 'react';


const LinksMobile = ({m, l, direction, setNavShelf, setRouteFocus,routeName, boxDecorationTop, boxDecorationBottom, Icon, image, title, subtitle, classes}) => {

  const [hover, setHover] = useState(false)

  const location = useLocation();

  useEffect(()=>{
    setRouteFocus(location.pathname)
  },[])

const gradientSetting = () =>{
  if(hover){
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

    <Link to={routeName} className={gradientSetting()} onClick={()=>{setNavShelf(false);setRouteFocus(routeName)}} onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {setHover(false)}} style = {{ textDecoration: "none",
    overflow: "hidden",

  }}>
      <div className="transition Column" style = {{
    position:"relative",
    height: "100%",
    width: "100%",
    position: "relative",
    zIndex: "10",
    textAlign: direction === "lr" ? "left" : "right",
    color: hover?"var(--velvet)":"var(--midnight)",
    lineHeight: "5rem",
    justifyContent: "center",
    padding:direction==="lr"?"0 4rem 0 0":"0 0 0 4rem"
  }}
   >
        <div style={{fontWeight:"300",font:"4.3rem/1.7 'Yaldevi',sans-serif", letterSpacing:"0.0156rem",textTransform:"uppercase"}}><Icon/>{title}</div>
        <div className="subtitle1" style={{lineHeight:"3rem"}}></div>
        {boxDecorationTop && <div className="boxDecoration-navMobileTop"></div>}
        {boxDecorationBottom && <div className="boxDecoration-navMobileBottom"></div>}

    </div>

    </Link>


  )
}

export default LinksMobile
