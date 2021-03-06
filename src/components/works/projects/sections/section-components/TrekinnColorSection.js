import { IoEllipseSharp as CircleFilled } from "react-icons/io5";
import { IoColorFilterOutline as ColorIcon } from "react-icons/io5";
import Fade from 'react-reveal/Fade';
import {useState} from 'react'

import ImageFadeIn from '../../../../../customHooks/imageFadeIn'
import ImageOverflow from './ImageOverflow'


const TrekinnColorSection = ({direction, colorTexture, colorText, colorWireframes, brandColorFinal, colorMoodboard, moodboardText, designColorLabels, designColorHexes,finalColorLabels, finalColorHexes, designDescription, designTitle, m, l, number}) => {

const [openedLayout, setOpenedLayout] = useState(false)
const [hover, setHover] = useState(false)


  const textMarginStyle=()=>{
    if (l) return {
      margin:"1rem 10rem",
    }
    if (m) return {
      margin:"1rem 5rem"
    }
    return {margin:"1rem 2rem"}
  }


  const textMarginStyleH4=()=>{
    if (l) return {
      margin:"1rem 10rem",
    }
    if (m) return {
      margin:"1rem 5rem",
    }
    return {margin:"1rem 2rem", fontSize:"1.8rem"}
  }


  const colLarge = () => {
    if (l) return {
        width:"calc(70vw - 12.5rem)"
      }
    if (m) return {
        width:"calc(70vw - 7.5rem)"
      }
      return{
        width:"80vw"
      }
  }

  const colHalfRef = () => {
    if (l) return {
      width:"calc(50vw - 12.5rem)",
      }
    if (m) return {
        width:"calc(50vw - 7.5rem)"
      }
      return{
        width:"100vw"
      }
  }
  const colSmall = () => {
    if (l) return {
        width:"calc(30vw - 12.5rem)",
        paddingRight:"4rem",
        paddingTop:"5rem"

      }
    if (m) return {
        width:"calc(30vw - 7.5rem)",
        paddingRight:"4rem",
        paddingTop:"5rem"


      }
      return{
        width:"20vw",
        paddingRight:"2rem",
        paddingTop:"7rem"

      }
  }

  const colHalf = () => {
    if (l) return {
        width:"calc(50vw - 12.5rem)"
      }
    if (m) return {
        width:"calc(50vw - 7.5rem)"
      }
      return{
        width:"80vw"
      }
  }

  const iconStyle = () => {
    return{
      alignSelf: "center",
      marginRight: "0.8rem",
      fontSize: "2rem",
      minWidth:"2rem"
    }
  }

 const overflowStyle = () => {
   return {
     width:"100vw",
     background:"var(--table-light)"
   }
 }

 const col2PaddingTop = () => {
   if (!m) return "2rem"
 }


 const extraSpacing = () => {
   if (l) return "5rem"
   if (m) return "3rem"
   return "2rem"
 }

  return (
    <>
    <h4 className="Row"  style={textMarginStyleH4()}>
    <ColorIcon style={iconStyle()}/>
    Color</h4>

    <div className="body1" style={textMarginStyle()}>
    {designDescription}
    </div>

  <div className={l?"Row":"Column"} style={{
    flexDirection: !l && "column-reverse",
    margin:l? "2.5rem":"2.5rem 0",
    position:"relative",
    height:"fit-content",
    overflow:!l && "hidden",
    width:l?"calc(100vw - 5rem)":"100vw",
   color:"var(--occlusion)",
   position: "relative",
  }}>


  <div className="image-col ColumnCentered">
  <Fade bottom>

    <div tabindex = "0"
          onFocus={() => setHover(true)}
          onBlur={() => setHover(false)}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          onMouseDown={() => setHover(true)}
          onMouseUp={() => setHover(false)}
          onClick={()=> setOpenedLayout(!openedLayout)}
          onKeyPress={(e)=>{
            if (e.which === 13)  setOpenedLayout(!openedLayout)}}
        style={{
          position: "relative",
          left: !l? "0rem": openedLayout ? "-20vw" : "0rem",
          transition: "left ease 0.7s, right ease 0.7s",
          cursor:"pointer",
          background: "var(--works-bg)",
          top:!l && openedLayout && "0px",
          marginLeft:l && "7.5rem",
          marginTop: !l && "2rem",
          boxShadow: openedLayout?"rgba(17, 17, 26, 0.1) 0px 1px 0px": "rgba(0, 0, 0, 0.15) 0px 3px 3px 0px"
}}>
      <div
            style={{margin:l?"3rem":openedLayout?"0rem":"2rem", objectFit:"cover", transition:"margin linear 0.4s, transform ease 0.6s",
        transform: l && hover? "scale(1.2)":l? "": openedLayout ?"scale(1.5)":"scale(1)", background: "var(--table-light)"}}>
        <div style={{opacity:openedLayout && "0.4", transition: "opacity ease 0.9s"}}>
            <ImageFadeIn
              alt="moodboard"
              style={{
              transition: "filter linear 0.5s",
              height:l?"30vw":m?"calc(100vw - 14rem)":"calc(100vw - 8rem)",
              width:l?"30vw":m?"calc(100vw - 14rem)":"calc(100vw - 8rem)",
              filter:openedLayout && "saturate(0)"
            }} src={colorMoodboard}/>
        </div>
      </div>
    </div>

  </Fade>
  <div className="overline" style={{
  alignSelf:"flex-start",
  justifySelf:"flex-start",
  paddingTop:"1rem",
  marginLeft:l?"7.5rem":m?"5rem":"2rem",
  position:"relative",
  bottom: openedLayout ? "-3rem" : "1px",
  opacity: openedLayout? "0" : "1",
  transition: "bottom ease 0.7s, opacity linear 0.4s"
}}>
    click moodboard for selection process
  </div>
  </div>

  <div id="description-col" className="Column" style={{
    width:l?"30vw":"80vw",
    paddingLeft:l && "4rem",
    margin:l?"":m?"1rem 5rem":"1rem 2rem"
  }}>

    <div className="subtitle1" style={{
      fontSize:"3rem",
      position:"relative",
      marginLeft:!m && "2rem",
      left: !l? "": openedLayout ? "55vw" : "1px",
      opacity: !l? "1" : openedLayout? "0" : "1",
      transition: "left ease 0.7s, right ease 0.7s, opacity linear 0.5s"}}>
      {designTitle}</div>

    <Fade bottom>
    <div className="body2" style={{
      margin:"1.5rem 0",
      position:"relative",
      marginLeft:!m && "2rem",
      left: openedLayout ? "100vw" : "1px",
      opacity: openedLayout? "0" : "1",
      transition: "left ease 0.9s, right ease 0.9s, opacity linear 0.6s"}}>
     {moodboardText}</div>


    <div style={{
      margin:"0 0.5rem",
      display:"grid",
      gridTemplateColumns:"1fr 1fr 1fr",      
      position:"relative",
      left: openedLayout ? "95vw" : "1px",
      opacity: openedLayout? "0" : "1",
      transition: "left ease 0.9s, right ease 0.9s, opacity linear 0.6s"}}>
          {designColorHexes.map((hex, number)=>{
            return <div className="Column" style={{alignItems:"center"}}>
             <div style={{height:l?"1.5rem":"2rem", width:l?"1.5rem":"2rem", background:hex, margin:"0.25rem 1.3rem",  borderRadius:"2px"}}></div>
             <div>{designColorLabels && designColorLabels[number]}</div>
             <div style={{fontSize:"0.7rem", opacity:"0.8"}}>{hex}</div>
             </div>
          })}
    </div>
    </Fade>


  </div>

    <Fade bottom>
  <div id="opened-col-colorWireframe"
  className="Column"
  onClick={()=>{if(l) return
    setOpenedLayout(!openedLayout)}}
  style={{
    position:"absolute",
    height:l?"100%":"fit-content",
    width:"fit-content",
    right: openedLayout && l? "10vw" : openedLayout? "0rem": "-105vw",
    justifyContent:"flex-end",
    top: l?"0":"10rem",
    alignItems:"flex-end",
    transition: "left ease 0.6s, right ease 0.6s",
  }}>
  <div>
  <ImageFadeIn
  alt=""
  style={{
    transition: "filter linear 0.5s",
    height:l?"40vw":"75vw",
    width:"auto",
    marginRight:l?"3rem":"2rem"
  }} src={colorTexture}/>

  </div>
  </div>
  </Fade>

  </div>


</>

  )
}

export default TrekinnColorSection
