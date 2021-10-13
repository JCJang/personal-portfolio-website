import ImageFadeIn from '../../../../../customHooks/imageFadeIn'
import useTimeout from '../../../../../customHooks/useTimeout'
import useDebounce from '../../../../../customHooks/useDebounce'

import { IoEllipseOutline as Circle } from "react-icons/io5";
import { IoEllipseSharp as CircleFilled } from "react-icons/io5";
import { IoCaretBackOutline as Prev } from "react-icons/io5";
import { IoCaretForwardOutline as Next } from "react-icons/io5";
import { IoPauseOutline as Pause } from "react-icons/io5";
import { IoPlayOutline as Play } from "react-icons/io5";



import {useEffect, useState, useRef} from 'react'
import useClickOutside from '../../../../../customHooks/useClickOutside';
import ImageOverflowModal from './ImageOverflowModal'

const Carousel = ({carouselSlides, carouselSlidesTitles}) => {

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
    <div className="Row" style={{position:"relative",height:"100vh",width:"100vw",background:"var(--velvet)"}}>

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
        filter:"saturate(0.5)",
        width: "100vw",
        height:"100vh",
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
          color:"var(--table-neutral)"
        }} >



    <div className="ColumnCentered" onClick={()=>{if(slideNumber===0){  setSlideNumber(carouselSlides.length-1) }else{setSlideNumber(slideNumber-1)}}}
     style={{
       position:"absolute",
       bottom:"0",
       left:"0",
       fontSize:"1.5rem"}}>
       <Prev/>
       prev
       </div>


        <div className="Column" style={{justifyContent:"center",alignItems:"center"}}>

{carouselSlidesTitles &&
          <div className="overline-details">
          {carouselSlidesTitles[slideNumber]}
          </div>}

          <div>{carouselSlides.map((slide)=>{if(slideNumber===carouselSlides.indexOf(slide)){return <CircleFilled style={{margin:"0.1rem"}}/>}else{return <Circle style={{margin:"0.1rem"}}/>}})}</div>
        </div>

        <div className="ColumnCentered" onClick={()=>{if(slideNumber===carouselSlides.length-1){ setSlideNumber(0)
}else{setSlideNumber(slideNumber+1)}}}
        style={{
          position:"absolute",
          bottom:"0",
          right:"0",
          fontSize:"1.5rem"}}>
          <Next/>
          next
          </div>

        </div>

    </div>

  )
}

export default Carousel
