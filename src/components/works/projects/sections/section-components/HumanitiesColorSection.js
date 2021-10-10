import {useState, useEffect} from 'react'
import ImageFadeIn from '../../../../../customHooks/imageFadeIn'
import { IoEllipseSharp as CircleFilled } from "react-icons/io5";


const HumanitiesColorSection = ({textMargin, direction, colorTexture, colorWireframe, colorMoodboard, designColors, designDescription, designTitle, m, l, number}) => {

  const [openedLayout,setOpenedLayout] = useState(false)

  const leftToRight = () =>{
  if(direction==="lr"){
    return true;
  } else {
    return false;
  }
}

  return (
    <div className={l?"Row":"Column"} style={{
      flexDirection:!l && "column-reverse",
      margin:l? textMargin():"0rem",
      position:"relative",
      height:"fit-content",
      overflow:!l && "hidden",
      width:"100vw",
     color:"var(--midnight)",
     order:leftToRight()?"1":"2",
     position: "relative",
     left: !l? "0rem": leftToRight() && openedLayout ? "-20vw" :"0rem",
     right: !l? "0rem": !leftToRight() && openedLayout ? "20vw" : "0rem",
     transition: "left ease 0.7s, right ease 0.7s"}}>

    <div className="image-col ColumnCentered">
      <div  onClick={()=>{setOpenedLayout(!openedLayout)}}
          style={{
            cursor:"pointer",
            background: "var(--table-light)",
            top:!l && openedLayout && "0px",
            left:!l && openedLayout && "0px",
}}>
        <div style={{margin:l?"3rem":openedLayout?"0rem":"2rem", objectFit:"cover", transition:"margin linear 0.4s, transform ease 0.6s",            transform:l? "": openedLayout ?"scale(1.5,1.5)":"scale(1,1)", background: "var(--table-light)"}}>
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
    <div className="overline" style={{alignSelf:"flex-start", justifySelf:"flex-start", paddingTop:"1rem"}}>
      moodboard
    </div>
    </div>

    <div id="description-col" className="Column" style={{
      order:leftToRight()?"2":"1",
      width:l?"30vw":"80vw",
      marginLeft:"4rem"
    }}>

      <div className="subtitle1" style={{
        fontSize:"3rem",
        width:"30rem",
        position:"relative",
        left: !l? "": leftToRight() && openedLayout ? "55vw" : "1px",
        right: !l? "": !leftToRight() && openedLayout ? "55vw" : "1px",
        opacity: !l? "1" : openedLayout? "0" : "1",
        transition: "left ease 0.7s, right ease 0.7s, opacity linear 0.5s"}}>
        Design {number+1}: {designTitle}</div>

      <h4 className="h3" style={{
        margin:"1.5rem 0",
        fontSize:"1.2rem",
        position:"relative",
        left: leftToRight() && openedLayout ? "75vw" : "1px",
        right: !leftToRight() && openedLayout ? "75vw" : "1px",
        opacity: openedLayout? "0" : "1",
        transition: "left ease 0.9s, right ease 0.9s, opacity linear 0.6s"}}>
       {designDescription}</h4>

      <div className="Row" style={{
        margin:"0 0.5rem",
        flex:"1",
        position:"relative",
        left: leftToRight() && openedLayout ? "95vw" : "1px",
        right: !leftToRight() && openedLayout ? "95vw" : "1px",
        opacity: openedLayout? "0" : "1",
        transition: "left ease 0.9s, right ease 0.9s, opacity linear 0.6s"}}>
            {designColors.map((color)=>{
              return <div className="Column" style={{alignItems:"center"}}>
               <CircleFilled style={{height:"1.5rem", width:"1.5rem", color:color, margin:"0.25rem 1rem"}}/>
               {color}
               </div>
            })}
      </div>

      <div className="subtitle1" style={{
        position:"relative",
        paddingTop:!l && "4rem",
        alignSelf:"flex-end",
        justfySelf:l?"flex-end":"center",
        bottom: openedLayout ? "-3rem" : "1px",
        opacity: openedLayout? "0" : "1",
        transition: "bottom ease 0.7s, opacity linear 0.4s"
      }}>
            {!l? "Click moodboard below to view color concept":leftToRight()?"<= Click moodboard to view color concept":"Click moodboard to view color concept =>"}
      </div>
    </div>

  <div id="opened-col-colorTextures" className="Row" style={{
          position:"absolute",
          height:"fit-content",
          width:!l && "100vw",
          top:l?"-2rem":"7rem",
          left: leftToRight()?"": openedLayout && l? "8vw" : openedLayout ?"0rem" : "-155vw",
          right: !leftToRight()?"": openedLayout && l? "8vw" : openedLayout ?"0rem" : "-155vw",
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

      <div className="subtitle1" style={{marginLeft:l?"2rem":"3rem", fontSize:l?"2rem":"1.5rem", paddingTop:"2rem"}}>
       {leftToRight()?"<= Textures":"Textures =>"}
      </div>

      </div>

    <div id="opened-col-colorWireframe" className="Column" style={{
      position:"absolute",
      height:l?"100%":"fit-content",
      width:"fit-content",
      left: leftToRight()?"": openedLayout && l? "10vw" : openedLayout? "0rem": "-105vw",
      right: !leftToRight()?"": openedLayout && l? "10vw" : openedLayout? "0rem": "-105vw",
      justifyContent:"flex-end",
      top: l?"-2rem":"20rem",
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
  )
}

export default HumanitiesColorSection
