import {Link} from 'react-router-dom'
import ImageFadeIn from '../../customHooks/imageFadeIn'
import Fade from 'react-reveal/Fade';

import {useEffect, useState} from 'react';
const GridItem = ({m, l, direction, routeName, image, role, title, subtitle, specs, introduction, classes}) => {

  const [cardHover, setCardHover] = useState(false)
  const [buttonHover, setButtonHover] = useState(false)

const gradientSetting = () =>{
  if(cardHover) return `transition grid grid-lr-hover ${classes}`;
  return `transition grid grid-lr ${classes}` ;
}


  return (

    
    <div className="transition" onFocus={() => setCardHover(true)}
      onBlur={() => setCardHover(false)}
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
      onMouseDown={() => setCardHover(true)}
      onMouseUp={() => setCardHover(false)}  
      style = {{
      borderRadius: cardHover?"3px":"8px",
      borderBottom: cardHover? "6px solid var(--lilac)":"6px solid var(--cinerous)",
      boxShadow:cardHover?"none":"rgba(60, 84, 82, 0.25) 0px 6px 12px -2px, rgba(60, 84, 82, 0.3) 0px 3px 7px -3px",
      width:"35vw",
      margin:l?"0 1.5rem":"1rem 0",
      background:buttonHover?"none":"var(--lilac)",
      outline:buttonHover?"1.5px solid var(--midnight)":"var(--lilac)"
  }}>

    <div className={gradientSetting()} style={{
      width:"35vw",
      transform:cardHover && "translateY(-25vh)",
    }}>
          <ImageFadeIn role="presentation" className="gridImage transition" src={image} style={{ filter:cardHover?"saturate(0.6)":"saturate(0.1) opacity(0.8)",
          }}/>
<div className="transition Column" style = {{
    height: "50%",
    width: "100%",
    position: "relative",
    zIndex: "10",
    color: "var(--lilac)",
    lineHeight: "5rem",
    justifyContent: "center",
    padding:"1rem 4rem 0 1rem",
  }}
   >
    <Fade delay={700}>
          <div style={{fontWeight:"400",font:m?"2rem/1.3 'Lusitana',sans-serif":"1.5rem/1.2 'Lusitana',sans-serif", letterSpacing:"0.0156rem",textTransform:"", margin:"0.6rem 0"}}>{title}</div>
    </Fade>
    <Fade bottom delay={900}>

        <div className="subtitle1" style={{lineHeight:"1.7rem", fontWeight:"400",fontSize:"1.2rem", marginBottom:"0.2rem"}}>{subtitle}</div>
    </Fade>

    </div>
    </div>
    <div className="Column">
    <Fade top delay={500}>
        <div style={{font:"0.8rem/1.5 'Yaldevi'", marginTop:"0.5rem"}}>{role}</div>
    </Fade>

    <div>
        hihihihihihi
    </div>

    <Link to={routeName}
     onFocus={() => setButtonHover(true)}
     onBlur={() => setButtonHover(false)}
     onMouseEnter={() => setButtonHover(true)}
     onMouseLeave={() => setButtonHover(false)}
     onMouseDown={() => setButtonHover(true)}
     onMouseUp={() => setButtonHover(false)} 
      style={{
        justifySelf:"flex-end",
        width:"100%",
        color:"var(--contact-text)",
        padding:"1rem",
        textAlign:"right",
        textDecoration: "none",
        opacity:cardHover? "1" : "0",
      background:buttonHover?"var(--velvet)":"var(--desert-rose)"
    }}>GO TO CASE STUDY</Link>
    </div>
    </div>

  )
}

export default GridItem
