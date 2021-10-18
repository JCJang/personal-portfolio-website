import { IoEllipseSharp as CircleFilled } from "react-icons/io5";
import ImageOverflow from './ImageOverflow'
import { IoColorFilterOutline as ColorIcon } from "react-icons/io5";
import Fade from 'react-reveal/Fade';


const PersonalColorSection = ({direction, colorTexture, colorText, colorWireframes, brandColorFinal, colorMoodboard, designColorLabels, designColorHexes, designDescription, designTitle, m, l, number}) => {

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

    <div className="subtitle1" style={textMarginStyle()}>
      {designTitle}</div>

  <div className={m?"Row":"Column"} style={textMarginStyle()}>

    <div id="pharmacy-color-col-1" style={colLarge()}>

    <div className="body1"  style={{
      margin:"1.5rem 0",
      fontSize:"1.2rem"}}>
     {designDescription}</div>
  </div>

  <Fade bottom>
    <div className="image-col ColumnCentered">
      <div style={colHalfRef()}>
        <ImageOverflow height={l?"70vh":"40vh"} images={[colorMoodboard]} style={{paddingTop:col2PaddingTop()}}/>
      </div>
    </div>
    </Fade>
  </div>


  <div className="Row" style={{justifyContent:"center", width:"100vw"}}><div className="boxDecoration" style={{width:"20vw", borderColor:"var(--velvet)",margin:""}}></div></div>


<div id="opened-col-colorText" className="Row" style={textMarginStyle()}>

<div style={{paddingBottom:extraSpacing()}}></div>

    <div style={colSmall()}>
        <div className="Column" style={{
          margin:"0 0.5rem"
        }}>
              {designColorHexes.map((hex, number)=>{
                return <Fade bottom>
                <div className="Column" style={{alignItems:"center"}}>
                 <CircleFilled style={{height:l?"2rem":"3rem", width:l?"2rem":"3rem", color:hex, margin:"0.25rem 1.3rem"}}/>
                 <div><strong> {designColorLabels && designColorLabels[number]}</strong></div>
                 <div style={{fontSize:"0.7rem", opacity:"0.8"}}>{hex}</div>
                 </div>
                 </Fade>
              })}
        </div>
    </div>

    <div className="body1" style={colLarge()}>
          <div className="subtitle1" style={{
                  fontSize:"3rem"}}>
                  Final Colors</div>
                  <br></br>
              {colorText.split("/").map((paragraph)=>{
                  return <>
                  <div>{paragraph}</div>

                  <br></br>

                  </>
              })}
    </div>
    <div style={{paddingBottom:extraSpacing()}}></div>
</div>



  <Fade bottom>
  <div className="image-col ColumnCentered">
      <ImageOverflow
      m={m}
      height="90vh"
      images={colorWireframes}
      style={{gap:"4rem"}}
      />
  </div>
  </Fade>


</>

  )
}

export default PersonalColorSection
