import ImageFadeIn from '../../../../../customHooks/imageFadeIn'
import useTimeout from '../../../../../customHooks/useTimeout'
import useDebounce from '../../../../../customHooks/useDebounce'

import { IoEllipseOutline as Circle } from "react-icons/io5";
import { IoEllipseSharp as CircleFilled } from "react-icons/io5";
import { IoChevronBackSharp as Prev } from "react-icons/io5";
import { IoChevronForwardSharp as Next } from "react-icons/io5";
import { IoPauseOutline as Pause } from "react-icons/io5";
import { IoPlayOutline as Play } from "react-icons/io5";



import {useEffect, useState, useRef} from 'react'
import useClickOutside from '../../../../../customHooks/useClickOutside';
import ImageOverflowModal from './ImageOverflowModal'

const Carousel = ({carouselSlides, carouselSlidesTitles, height="100vh", width="100vw"}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)


  const slideLeft =  (slide) => {
    if(slideNumber-carouselSlides.indexOf(slide) > 1){
      return `${105 * (slideNumber-carouselSlides.indexOf(slide))}vw`
    } else {
      return `${-105 * (slideNumber-carouselSlides.indexOf(slide))}vw`
    }
  }


  useTimeout(()=>{
      if(!isOpen && autoPlay){
        setSlideNumber(1)
      }
    },4000)


  useDebounce(()=>{
    if(!isOpen && autoPlay){
      if(slideNumber===carouselSlides.length-1){
        setSlideNumber(0)
      }else{
        setSlideNumber(slideNumber+1)
      }
    }
  },3500,[slideNumber])

//modal
  const [imageArrNumber, setImageArrNumber] = useState(0)
  const [isOpen, setIsOpen] = useState(false)


  const modalRef = useRef()
  useClickOutside(modalRef, ()=>{
    if (isOpen) setIsOpen (false)
  })

  return (
    <div className="Row" style={{position:"relative",height:height,width:width,background:"var(--velvet)",overflow:"hidden"}}>

          <ImageOverflowModal isOpen={isOpen} modalRef={modalRef} setIsOpen={setIsOpen} image={carouselSlides[imageArrNumber]} onClose={() => setIsOpen(false)}>
          </ImageOverflowModal>

      {carouselSlides.map((slide)=>{
      return  <div  className="carousel-gradient ImageOverflowImg" style={{
        position:"absolute",
        top:"0",
        left:slideLeft(slide),
        transition:"opacity linear 1s, left ease 0.7s, transform ease 0.7s",
        opacity:carouselSlides.indexOf(slide)!==slideNumber && "0"
      }}>

      <ImageFadeIn src={slide}
      dragabble="false"
      onClick={(e) => {
        e.stopPropagation();
          setImageArrNumber(carouselSlides.indexOf(slide));
          setIsOpen(true)
        }
      }
      key={carouselSlides.indexOf(slide)} style={{
        width: width,
        height:height,
        display: "block",
        objectFit:"cover"}}/>

      </div>
    })
  }


  < div id = "shelfNav"
      className = "Row transition"
      style = {{
          height:"4rem",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom:"1rem",
          position:"absolute",
          bottom:"0",
          left:"0",
        }} >



    <button className="ColumnCentered carouselBtn" onClick={()=>{if(slideNumber===0){  setSlideNumber(carouselSlides.length-1) }else{setSlideNumber(slideNumber-1)}}}
     style={{
       position:"absolute",
       bottom:"0",
       left:"0",
       height:height,
       fontSize:"2rem",
      }}>
       <Prev/>
       </button>


        <div className="Column" style={{justifyContent:"flex-end", alignItems:"center", position:"absolute", bottom:"0", color:"var(--cinerous)",height:"30vh"}}>

{carouselSlidesTitles &&
          <div className="body1" style={{width:"50vw", textAlign:"center"}}>
          {carouselSlidesTitles[slideNumber]}
          </div>}

          <div style={{padding:"0.5rem 0"}}>{carouselSlides.map((slide)=>{if(slideNumber===carouselSlides.indexOf(slide)){return <CircleFilled style={{margin:"0.1rem", fontSize:"0.5rem"}}/>}else{return <CircleFilled style={{opacity:"0.6", fontSize:"0.5rem", margin:"0.1rem"}}/>}})}</div>
        </div>

        <button className="ColumnCentered carouselBtn" onClick={()=>{if(slideNumber===carouselSlides.length-1){ setSlideNumber(0)
}else{setSlideNumber(slideNumber+1)}}}
        style={{
          position:"absolute",
          bottom:"0",
          right:"0",
          height:height,
          fontSize:"2rem"}}>
          <Next/>
          </button>

        </div>

    </div>

  )
}

export default Carousel
