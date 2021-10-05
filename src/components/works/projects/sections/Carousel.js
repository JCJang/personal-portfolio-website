import ImageFadeIn from '../../../../customHooks/imageFadeIn'


import {useEffect, useState} from 'react'
const Carousel = ({carouselSlides}) => {

  const [slideNumber, setSlideNumber] = useState(0)

  return (
    <div style={{position:"relative",height:"100vh",width:"100vw"}}>
    <ImageFadeIn src={carouselSlides[slideNumber]} style={{filter:"saturate(0.5)", position:"relative",top:"0",left:"0",width: "100vw", height:"100vh", display: "block",objectFit:"cover"}}/>
    <div className="ColumnCentered" onClick={()=>{if(slideNumber===0){return}else{setSlideNumber(slideNumber-1)}}}
     style={{
       position:"absolute",
       bottom:"0",
       left:"0",
       fontSize:"1.5rem"}}>prev</div>

    <div className="ColumnCentered" onClick={()=>{if(slideNumber===carouselSlides.length-1){return}else{setSlideNumber(slideNumber+1)}}}
    style={{
      position:"absolute",
      bottom:"0",
      right:"0",
      fontSize:"1.5rem"}}>next</div>

    </div>

  )
}

export default Carousel
