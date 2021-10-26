import {useState, useEffect} from 'react'
import ImageFadeIn from '../../../../../customHooks/imageFadeIn'
import { IoEllipseSharp as CircleFilled } from "react-icons/io5";
import { IoColorFilterOutline as ColorIcon } from "react-icons/io5";
import Fade from 'react-reveal/Fade';


const HumanitiesColorSection = ({textMargin, colorTexture, colorWireframe, colorMoodboard, designColorLabels, designColorHexes, designDescription, designTitle, m, l, number}) => {

  const [openedLayout,setOpenedLayout] = useState(false)
  const [hover,setHover] = useState(false)

  const leftToRight = () =>{
  if(number===0 || number === 2){
    return true;
  } else {
    return false;
  }
}

const rightToLeft = () =>{
if(number===1){
  return true;
} else {
  return false;
}
}

  return (
    <>

    {number === 0 && <>
      <br></br>

    <h4 className="Row"  style={{margin:m?"1rem 5rem 0 5rem":"1rem 2rem 0 2rem"}}>
    <ColorIcon style={{alignSelf: "center",
    marginRight: "0.8rem"}}/>
    Color</h4>

    </>}

    <div className={l?"Row":"Column"} style={{
      flexDirection:l && rightToLeft()? "row-reverse": !l && "column-reverse",
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
            onClick={()=>{setOpenedLayout(!openedLayout)}}
          style={{
            position: "relative",
            right: !l? "0rem": rightToLeft() && openedLayout ? "-20vw" : rightToLeft() ? "0rem" : "",
            left: !l? "0rem": leftToRight() && openedLayout ? "-20vw" : leftToRight() ? "0rem" : "",
            transition: "left ease 0.7s, right ease 0.7s",
            cursor:"pointer",
            background: "var(--works-bg)",
            top:!l && openedLayout && "0px",
}}>
        <div
              style={{margin:l?"3rem":openedLayout?"0rem":"2rem", objectFit:"cover", transition:"margin linear 0.4s, transform ease 0.6s",
          transform: l && hover? "scale(1.2)":l? "": openedLayout ?"scale(1.5)":"scale(1)", background: "var(--table-light)"}}>
          <div style={{opacity:openedLayout && "0.4", transition: "opacity ease 0.9s"}}>
              <ImageFadeIn alt="moodboard" style={{
                transition: "filter linear 0.5s",
                height:l?"30vw":"70vw",
                width:l?"30vw":"70vw",
                filter:openedLayout && "saturate(0)"
              }} src={colorMoodboard}/>
          </div>
        </div>
      </div>

    </Fade>
    <div className="overline" style={{alignSelf:leftToRight()? "flex-start":"flex-end", justifySelf:"flex-start", paddingTop:"1rem",
    marginLeft:!l && leftToRight() && "5rem",
    marginRight:!l && rightToLeft() && "5rem"}}>
      moodboard
    </div>
    </div>

    <div id="description-col" className="Column" style={{
      width:l?"30vw":"80vw",
      marginLeft:!m?"":leftToRight() && "4rem",
      marginRight:!m?"":rightToLeft() && "4rem",
      textAlign:rightToLeft() && "right",
      alignSelf:!l && rightToLeft() && "flex-end"

    }}>

      <div className="subtitle1" style={{
        fontSize:"3rem",
        position:"relative",
        marginLeft:!m && leftToRight() && "2rem",
        marginRight:!m && rightToLeft() && "2rem",
        left: !l? "": leftToRight() && openedLayout ? "55vw" : leftToRight() ? "1px" : "",
        right: !l? "": rightToLeft() && openedLayout ? "55vw" : rightToLeft() ?  "1px" : "",
        opacity: !l? "1" : openedLayout? "0" : "1",
        transition: "left ease 0.7s, right ease 0.7s, opacity linear 0.5s"}}>
        Design {number+1}: {designTitle}</div>

      <Fade bottom>
      <h4 className="h3" style={{
        margin:"1.5rem 0",
        fontSize:"1.2rem",
        position:"relative",
        marginLeft:!m && leftToRight() && "2rem",
        marginRight:!m && rightToLeft() && "2rem",
        left: leftToRight() && openedLayout ? "100vw" : leftToRight() ? "1px" : "",
        right: rightToLeft() && openedLayout ? "100vw" : rightToLeft() ? "1px" : "",
        opacity: openedLayout? "0" : "1",
        transition: "left ease 0.9s, right ease 0.9s, opacity linear 0.6s"}}>
       {designDescription}</h4>

      <div className="Row" style={{
        justifyContent:rightToLeft() && "flex-end",
        margin:"0 0.5rem",
        flex:"1",
        position:"relative",
        left: leftToRight() && openedLayout ? "95vw" : leftToRight() ? "1px" : "",
        right: rightToLeft() && openedLayout ? "95vw" :  rightToLeft() ? "1px" : "",
        opacity: openedLayout? "0" : "1",
        transition: "left ease 0.9s, right ease 0.9s, opacity linear 0.6s"}}>
            {designColorHexes.map((hex, number)=>{
              return <div className="Column" style={{alignItems:"center"}}>
               <CircleFilled style={{height:l?"2rem":"3rem", width:l?"2rem":"3rem", color:hex, margin:"0.25rem 1.3rem"}}/>
               <div><strong> {designColorLabels && designColorLabels[number]}</strong></div>
               <div style={{fontSize:"0.7rem", opacity:"0.8"}}>{hex}</div>
               </div>
            })}
      </div>
      </Fade>
      <div className="subtitle1" style={{
        opacity: openedLayout? "0" : "1",
        position:"relative",
        paddingTop:!l && "4rem",
        marginLeft:!m && leftToRight() && "2rem",
        marginRight:!m && rightToLeft() && "2rem",
        alignSelf:l?"flex-end":"center",
        justifySelf:l?"flex-end":"center",
        bottom: openedLayout ? "-3rem" : "1px",
        transition: "bottom ease 0.7s, opacity linear 0.4s"
      }}>
            {!l? "Click moodboard below to view color concept":
            leftToRight()?"<= Click moodboard to view color concept":
            "Click moodboard to view color concept =>"}
      </div>
    </div>

  <div id="opened-col-colorTextures" className="Row" style={{
          flexDirection:l && rightToLeft() ? "row-reverse" : "",
          position:"absolute",
          height:"fit-content",
          width:!l && "100vw",
          top:l?"0.5rem":"10rem",
          left: leftToRight()?"": openedLayout && l? "8vw" : openedLayout ?"0rem" : "-155vw",
          right: rightToLeft()?"": openedLayout && l? "8vw" : openedLayout ?"0rem" : "-155vw",
          alignContent:"flex-start",
          transition: "left ease 1.1s, right ease 1.1s",
          }}>
            <div style={{transform:"rotate(90deg)",
                width:l?"40vw":"70vw"}}>
            <ImageFadeIn alt="photo textures that inspired color choices" style={{
              transition: "filter linear 0.5s",
              height:l?"40vw":"70vw",
              width:"auto",
            }} src={colorTexture}/>
            </div>

      <div className="subtitle1" style={{margin:l?"2rem":"3rem", fontSize:l?"2rem":"1.5rem"}}>
       {leftToRight()?"<= Textures":"Textures =>"}
      </div>

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
      left: leftToRight()?"": openedLayout && l? "10vw" : openedLayout? "0rem": "-105vw",
      right: rightToLeft()?"": openedLayout && l? "10vw" : openedLayout? "0rem": "-105vw",
      justifyContent:"flex-end",
      top: l?"0rem":"20rem",
      alignItems:"flex-end",
      transition: "left ease 0.6s, right ease 0.6s",
    }}>
    <div>
    <ImageFadeIn
      alt="wireframe inspired by moodboard and textures" style={{
      transition: "filter linear 0.5s",
      height:l?"30vw":"60vw",
      width:"auto",
    }} src={colorWireframe}/>

    </div>
    </div>
    </Fade>

    </div>
    {number!==2 && <div className="Row" style={{justifyContent:"center", width:"100vw"}}><div className="boxDecoration" style={{width:"20vw", borderColor:"var(--velvet)"}}></div></div>}
</>
  )
}

export default HumanitiesColorSection
