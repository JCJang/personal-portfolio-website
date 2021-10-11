import {useState, useEffect} from 'react'
import ImageFadeIn from '../../../../../customHooks/imageFadeIn'
import { IoEllipseSharp as CircleFilled } from "react-icons/io5";
import ImageOverflow from './ImageOverflow'


const HumanitiesColorSection = ({textMargin, direction, colorTexture, colorText, colorWireframe, colorMoodboard, designColorLabels, designColorHexes, designDescription, designTitle, m, l, number}) => {

  const [hover,setHover] = useState(false)

  return (
    <>
    <div className={l?"Row":"Column"} style={{
      flexDirection:l ? "row-reverse": "column-reverse",
      margin:l? "5rem":"3rem 0",
      position:"relative",
      height:"fit-content",
      overflow:!l && "hidden",
      width:l?"calc(100vw - 10rem)":"100vw",
     color:"var(--occlusion)",
     position: "relative",
    }}>

    <div className="image-col ColumnCentered">
      <div>
<ImageFadeIn style={{
                transition: "filter linear 0.5s",
                height:l?"30vw":"auto",
                width:l?"auto":"100vw",
                margin:"3rem",
                filter:hover && "saturate(0)"
              }} src={colorMoodboard}/>
      </div>
    </div>

    <div id="description-col" className="Column" style={{
      width:l?"30vw":"80vw",
      marginLeft: "4rem",
    }}>

      <div className="subtitle1" style={{
        fontSize:"3rem"}}>
        {designTitle}</div>

      <h4 className="h3" style={{
        margin:"1.5rem 0",
        fontSize:"1.2rem"}}>
       {designDescription}</h4>
    </div>
    </div>

    <div className="Row" style={{justifyContent:"center", width:"100vw"}}><div className="boxDecoration" style={{width:"20vw", borderColor:"var(--velvet)"}}></div></div>


      <div id="opened-col-colorText" className="Row" style={{
              height:"fit-content",
              margin:"5rem 0",
              width:!l && "100vw",
              top:l?"-2rem":"7rem",
              alignContent:"flex-start",
              }}>

              <div className="Column" style={{
                width:"30vw",
                margin:"0 0.5rem"
              }}>
                    {designColorHexes.map((hex, number)=>{
                      return <div className="Column" style={{alignItems:"center"}}>
                       <CircleFilled style={{height:l?"2rem":"3rem", width:l?"2rem":"3rem", color:hex, margin:"0.25rem 1.3rem"}}/>
                       <div><strong> {designColorLabels && designColorLabels[number]}</strong></div>
                       <div style={{fontSize:"0.7rem", opacity:"0.8"}}>{hex}</div>
                       </div>
                    })}
              </div>

            {colorText && <div className="body1" style={{  flex:"1", width:"30vw", margin:"0 3rem 3rem 3rem"}}>
            <div className="subtitle1" style={{
              fontSize:"3rem"}}>
              Final Colors</div>
              <br></br>
                  {colorText.split("/").map((paragraph)=>{
                    return <><div>{paragraph}</div><br></br></>
                  })}
                </div>}


          </div>

<div style={{ width:"100vw", background:"var(--table-light)"}}>
    <ImageOverflow
      m={m}
    style={{
      transition: "filter linear 0.5s",
    }}
    height={l?"110vh":"70vh"}
    width={l?"100vw":"auto"}
    images={[colorWireframe]}/>
</div>
</>
  )
}

export default HumanitiesColorSection
