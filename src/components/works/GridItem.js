import {Link} from 'react-router-dom'
import ImageFadeIn from '../../customHooks/imageFadeIn'
import Fade from 'react-reveal/Fade';
import Carousel from './projects/sections/section-components/Carousel'

import {useEffect, useState, useRef} from 'react';
const GridItem = ({m, l, direction, routeName, controlsHover=false, image, role, title, subtitle, specs, introduction, classes, carouselSlides=[]}) => {

  const [cardHover, setCardHover] = useState(false)
  const [buttonHover, setButtonHover] = useState(false)

const gradientSetting = () =>{
  if(cardHover) return `transition grid-lr-hover`;
  return `transition grid-lr` ;
}

  return (
    <div className="Column transition projectItem" onFocus={() => setCardHover(true)}
      onBlur={() => setCardHover(false)}
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => setCardHover(false)}
      style = {{
      borderRadius: "3px",
      background:controlsHover && "none",
      background:buttonHover && "var(--cinerous)",
      borderBottom: buttonHover && "6px solid var(--velvet)",
      boxShadow:cardHover && "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      width:"clamp(250px, 35vw, 500px)",
      margin:l?"0 1rem":"0.5rem 0",
      outline:controlsHover  && "1.5px solid var(--midnight)",
      outline:buttonHover && "none",
      transition: 'border-bottom 0s, border-radius 0.3s, outline 0.3s, box-shadow 0.3s, background linear 0.4s, outline 0.3s'
  }}>

    <div className="transition" style={{
      width:"clamp(250px, 35vw, 500px)",
      height:"45%",
      position:"relative",
      borderTopLeftRadius:"3px",
      borderTopRightRadius:"3px",
      overflow:"hidden"
      }}>
      <div className={gradientSetting()} style={{
        width:"100%", 
        zIndex:"5",
        height:"100%",
        position:"absolute",
        transform:buttonHover? "": !carouselSlides[0] ? "": cardHover? "translateY(-45vh) scale(1.1)":"",
        boxShadow:buttonHover? "": !carouselSlides[0] ? "": cardHover? "5px 8px":"",
        transition:"transform ease 0.4s, box-shadow 0.3"
}}>
        <ImageFadeIn role="presentation" className="gridImage transition" src={image} style={{ filter:cardHover?"saturate(0.6)":"saturate(0.1) opacity(0.8)",
        }}/>
<div className="transition Column" style = {{
    height: "100%",
    width: "100%",
    position: "relative",
    zIndex: "10",
    color: "var(--lilac)",
    lineHeight: "5rem",
    justifyContent: "center",
    alignContent:"center",
    padding:"1rem 2rem 0 1rem",
  }}
   >
    <Fade delay={700}>
          <div style={{fontWeight:"400",font:m?"2.2rem/1.5 'Lusitana',sans-serif":"1.5rem/1.2 'Lusitana',sans-serif", letterSpacing:"0.0156rem",textTransform:"", margin:"0.6rem 0"}}>{title}</div>
    </Fade>
    <Fade bottom delay={900}>

        <div className="subtitle1" style={{lineHeight:"2.3rem", fontWeight:"400",fontSize:"1.5rem", marginBottom:"0.2rem"}}>{subtitle}</div>
    </Fade>

    </div>

    </div>
    <div className="Column" style={{ height:"100%"}}>
      <div style={{padding:"1.5rem", marginTop:"auto"}}><Carousel carouselSlides = {carouselSlides}
      modalFunction = {false}
  height = "30vh"
  width = "calc( clamp(250px, 35vw, 500px) - 3rem)"/></div>
      
      </div>

    </div>
    <div className="Column" style={{height:"calc(55% - 3rem)",  padding:"0 1.5rem"}}>
    <Fade top delay={500}>
        <div style={{font:"1.2rem/1.5 'Yaldevi'", margin:"1rem 0 0.5rem 0",color:buttonHover?"var(--occlusion)":"var(--works-text)"}}>{role}</div>
    </Fade>

    <div className='body2' style={{color:buttonHover?"var(--occlusion)":"var(--midnight"}}>
        {introduction}
    </div>

    </div>
    
    <Link to={routeName}
     onFocus={() => setButtonHover(true)}
     onBlur={() => setButtonHover(false)}
     onMouseEnter={() => setButtonHover(true)}
     onMouseLeave={() => setButtonHover(false)}
     className="buttonLink"
      style={{
        justifySelf:"flex-end",
        width:"100%",
        height:"3rem",
        color:buttonHover?"var(--contact-text)":"var(--midnight)",
        padding:"1rem",
        paddingBottom: "calc( 1rem - 6px)",
        textAlign:"right",
        textDecoration: "none",
        background:controlsHover || buttonHover && "var(--velvet)"
    }}>GO TO CASE STUDY</Link>
    </div>

  )
}

export default GridItem
