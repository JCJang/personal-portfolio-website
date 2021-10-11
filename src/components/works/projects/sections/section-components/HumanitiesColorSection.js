import {useState, useEffect} from 'react'
import ImageFadeIn from '../../../../../customHooks/imageFadeIn'
import { IoEllipseSharp as CircleFilled } from "react-icons/io5";


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
    <div className={l?"Row":"Column"} style={{
      flexDirection:l && rightToLeft()? "row-reverse": !l && "column-reverse",
      margin:l? "5rem":"5rem 0",
      position:"relative",
      height:"fit-content",
      overflow:!l && "hidden",
      width:l?"calc(100vw - 10rem)":"100vw",
     color:"var(--occlusion)",
     position: "relative",
    }}>

    <div className="image-col ColumnCentered">
      <div  onMouseEnter={() => setHover(true)}
            onMouseLeave={() => {setHover(false)}}
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
          transform: hover? "scale(1.2)":l? "": openedLayout ?"scale(1.5)":"scale(1)", background: "var(--table-light)"}}>
          <div style={{opacity:openedLayout && "0.4", transition: "opacity ease 0.9s"}}>
              <ImageFadeIn style={{
                transition: "filter linear 0.5s",
                height:l?"30vw":"80vw",
                width:l?"30vw":"80vw",
                filter:openedLayout && "saturate(0)"
              }} src={colorMoodboard}/>
          </div>
        </div>
      </div>
    <div className="overline" style={{alignSelf:leftToRight()? "flex-start":"flex-end", justifySelf:"flex-start", paddingTop:"1rem",
    marginLeft:!l && leftToRight() && "4rem",
    marginRight:!l && rightToLeft() && "4rem"}}>
      moodboard
    </div>
    </div>

    <div id="description-col" className="Column" style={{
      width:l?"30vw":"80vw",
      marginLeft:leftToRight() && "4rem",
      marginRight:rightToLeft() && "4rem",
      textAlign:rightToLeft() && "right",
      alignSelf:!l && rightToLeft() && "flex-end"

    }}>

      <div className="subtitle1" style={{
        fontSize:"3rem",
        position:"relative",
        left: !l? "": leftToRight() && openedLayout ? "55vw" : leftToRight() ? "1px" : "",
        right: !l? "": rightToLeft() && openedLayout ? "55vw" : rightToLeft() ?  "1px" : "",
        opacity: !l? "1" : openedLayout? "0" : "1",
        transition: "left ease 0.7s, right ease 0.7s, opacity linear 0.5s"}}>
        Design {number+1}: {designTitle}</div>

      <h4 className="h3" style={{
        margin:"1.5rem 0",
        fontSize:"1.2rem",
        position:"relative",
        left: leftToRight() && openedLayout ? "75vw" : leftToRight() ? "1px" : "",
        right: rightToLeft() && openedLayout ? "75vw" : rightToLeft() ? "1px" : "",
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

      <div className="subtitle1" style={{
        position:"relative",
        paddingTop:!l && "4rem",
        alignSelf:l?"flex-end":"center",
        justifySelf:l?"flex-end":"center",
        bottom: openedLayout ? "-3rem" : "1px",
        opacity: openedLayout? "0" : "1",
        transition: "bottom ease 0.7s, opacity linear 0.4s"
      }}>
            {!l? "Click moodboard below to view color concept":leftToRight()?"<= Click moodboard to view color concept":"Click moodboard to view color concept =>"}
      </div>
    </div>

  <div id="opened-col-colorTextures" className="Row" style={{
          flexDirection:l && rightToLeft() ? "row-reverse" : "",
          position:"absolute",
          height:"fit-content",
          width:!l && "100vw",
          top:l?"-2rem":"7rem",
          left: leftToRight()?"": openedLayout && l? "8vw" : openedLayout ?"0rem" : "-155vw",
          right: rightToLeft()?"": openedLayout && l? "8vw" : openedLayout ?"0rem" : "-155vw",
          alignContent:"flex-start",
          transition: "left ease 1.1s, right ease 1.1s",
          }}>
            <div style={{transform:"rotate(90deg)",
                width:l?"40vw":"70vw"}}>
            <ImageFadeIn style={{
              transition: "filter linear 0.5s",
              height:l?"40vw":"70vw",
              width:"auto",
            }} src={colorTexture}/>
            </div>

      <div className="subtitle1" style={{margin:l?"2rem":"3rem", fontSize:l?"2rem":"1.5rem"}}>
       {leftToRight()?"<= Textures":"Textures =>"}
      </div>

      </div>

    <div id="opened-col-colorWireframe" className="Column" style={{
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
    <ImageFadeIn style={{
      transition: "filter linear 0.5s",
      height:l?"30vw":"60vw",
      width:"auto",
    }} src={colorWireframe}/>

    </div>
    </div>
    </div>
    {number!==2 && <div className="Row" style={{justifyContent:"center", width:"100vw"}}><div className="boxDecoration" style={{width:"20vw", borderColor:"var(--velvet)"}}></div></div>}
</>
  )
}

export default HumanitiesColorSection
