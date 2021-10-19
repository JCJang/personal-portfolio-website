import {Link} from 'react-router-dom'
import ImageFadeIn from '../../customHooks/imageFadeIn'
import { useState} from 'react';


const LinksMobile = ({m, l, direction, setNavShelf, setRouteFocus,routeName, boxDecorationTop, boxDecorationBottom, icon, hoverIcon, image, title, subtitle, classes}) => {

  const [hover, setHover] = useState(false)


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

    <Link to={routeName} className={gradientSetting()} onClick={()=>setNavShelf(false)} onMouseDown ={() => setHover(true)}
      onMouseUp={() => setHover(false)} style = {{ textDecoration: "none",
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
        <div style={{fontWeight:"300",
        font:"3rem/1.7 'Yaldevi',sans-serif",
        display:"flex",
        justifyContent: direction === "lr" ? "flex-start" : "flex-end",
        alignItems:"center",
        letterSpacing:"0.0156rem",
        textTransform:"uppercase"}}>
        <img src={hover?hoverIcon:icon} style={{height:"3.4rem",width:"3.4rem", padding:"0.5rem"}}/>{title}</div>
        {boxDecorationTop && <div className="boxDecoration-navMobileTop"></div>}
        {boxDecorationBottom && <div className="boxDecoration-navMobileBottom"></div>}

    </div>

    </Link>


  )
}

export default LinksMobile
