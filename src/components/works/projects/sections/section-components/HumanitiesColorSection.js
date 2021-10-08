import {useState, useEffect} from 'react'
import ImageFadeIn from '../../../../../customHooks/imageFadeIn'
import { IoEllipseSharp as CircleFilled } from "react-icons/io5";


const HumanitiesColorSection = ({textMargin, colorTexture, colorWireframe, colorMoodboard, designColors, designDescription, designTitle, m, l, number}) => {

  const [openedLayout,setOpenedLayout] = useState(false)
  const leftToRight = (number) =>{
  if(number===0 || number === 2){
    return true;
  } else {
    return false;
  }
}

  const rightToLeft = (number) =>{
  if(number===1){
    return true;
  } else {
    return false;
  }
}

  return (
    <div className={l?"Row":"Column"} style={{position:"relative", margin:textMargin(), color:"var(--midnight)",order:leftToRight?"1":"2"}}>

    <div className="image-col ColumnCentered" style={{background:"var(--table-light)", position:"relative", left:leftToRight && openedLayout?"-30vw":leftToRight && "-3rem", right:rightToLeft && openedLayout? "30vw":rightToLeft && "3rem"}}>
    <div style={{margin:"3rem", objectFit:"cover"}} onClick={()=>{setOpenedLayout(!openedLayout)}}>
    <ImageFadeIn style={{height:l?"30vw":"20",width:l?"30vw":"20vw"}} src={colorMoodboard}/>
    </div>
    </div>

    <div id="description-col" className="Column" style={{order:leftToRight?"2":"1"}}>

      <div className="subtitle1" style={{fontSize:"3rem", width:"30rem"}}>Design {number+1}: {designTitle}</div>

      <h4 style={{margin:"1.5rem 0", fontSize:"1.2rem"}}>{designDescription}</h4>

      <div className="Row" style={{margin:"0 0.5rem",flex:"1"}}>
            {designColors.map((color)=>{
              return <div className="Column" style={{alignItems:"center"}}>
               <CircleFilled style={{height:"1.5rem", width:"1.5rem", color:color, margin:"0.25rem 1rem"}}/>
               {color}
               </div>
            })}
      </div>

      <div className="subtitle1">
            &lt;= Click moodboard to view color concept
      </div>
    </div>

    </div>
  )
}

export default HumanitiesColorSection
