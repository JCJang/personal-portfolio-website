import ImageFadeIn from '../../../../../customHooks/imageFadeIn'
import useTimeout from '../../../../../customHooks/useTimeout'
import useDebounce from '../../../../../customHooks/useDebounce'
import useClickOutside from '../../../../../customHooks/useClickOutside';
import {useEffect, useState, useRef} from 'react'

import {IoEllipseOutline as Circle} from "react-icons/io5";
import {IoEllipseSharp as CircleFilled} from "react-icons/io5";
import {IoChevronBackSharp as Prev} from "react-icons/io5";
import {IoChevronForwardSharp as Next} from "react-icons/io5";

import ImageModal from './ImageModal'

const Carousel = ({
  tabindex = "0",
  carouselSlides =[],
  carouselSlidesTitles,
  hideTitles = false,
  height = "100vh",
  width = "100vw",
  modalFunction = true
}) => {

  const [slideNumber, setSlideNumber] = useState(0)
  const slidePosition = (slide) => {
    const num = carouselSlides.indexOf(slide)
    if (slideNumber - num > 1) {
      return `${ 105 * (slideNumber - num)}vw`
    } else {
      return `${ - 105 * (slideNumber - num)}vw`
    }
  }

  const nextSlide = (e) => {
    e.stopPropagation()
      if (slideNumber === carouselSlides.length - 1) {
        setSlideNumber(0)
      } else {
        setSlideNumber(slideNumber + 1)
      }
    }

  const prevSlide = (e) => {
    e.stopPropagation()
      if (slideNumber === 0) {
        setSlideNumber(carouselSlides.length - 1)
      } else {
        setSlideNumber(slideNumber - 1)
      }
    }

  //triggers slideNumber change after 4 seconds after page loads
  useTimeout(() => {
    if (!isOpen) {
      setSlideNumber(1)
    }
  }, 4000)

  //useDebounce adds 1 to slideNumber hence
  useDebounce(() => {
    if (!isOpen) {
      if (slideNumber === carouselSlides.length - 1) {
        setSlideNumber(0)
      } else {
        setSlideNumber(slideNumber + 1)
      }
    }
  }, 3500, [slideNumber])

  //modal props
  const [imageArrNumber, setImageArrNumber] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const modalRef = useRef()
  useClickOutside(modalRef, (e) => {
    e.stopPropagation()
    if (isOpen)
      setIsOpen(false)
  })

  return (<div className="Row"
      id="carousel"
      style={{
      position: "relative",
      height: height,
      width: width,
      background: "var(--velvet)",
      overflow: "hidden"
    }}>

    <ImageModal isOpen={isOpen} modalRef={modalRef} setIsOpen={setIsOpen} image={carouselSlides[imageArrNumber]} onClose={() => setIsOpen(false)}></ImageModal>

    {
      carouselSlides.map((slide, num) => {
        return <div className={modalFunction?"carousel-gradient ImageOverflowImg":"carousel-gradient"} style={{
          
            position: "absolute",
            top: "0",
            left: slidePosition(slide),
            transition: "opacity linear 1s, left ease 0.7s, transform ease 0.7s",
            opacity: num !== slideNumber && "0"
          }}>

          <ImageFadeIn src={slide} alt={carouselSlidesTitles && carouselSlidesTitles[num]} draggable="false" 
            onClick={(e) => {
              if(modalFunction === false) return;
              e.stopPropagation();
              setImageArrNumber(num);
              setIsOpen(true)
            }} key={num} style={{
              width: width,
              height: height,
              display: "block",
              objectFit: "cover"
            }}/>

        </div>
      })
    }

    < div id="shelfNav" className="Row transition" style={{
        height: "4rem",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "1rem",
        position: "absolute",
        bottom: "0",
        left: "0"
      }}>

      <button className="ColumnCentered carouselBtn"
         tabindex={tabindex}
         onClick={prevSlide}
         style={{
          position: "absolute",
          bottom: "0",
          left: "0",
          height: height,
          fontSize: "0.65rem"
        }}>
        <Prev style={{width:"2rem", height:"2rem"}}/>
        PREVIOUS<br></br>SLIDE
      </button>

      <div className="Column" style={{
          justifyContent: "flex-end",
          alignItems: "center",
          position: "absolute",
          bottom: "0",
          color: "var(--cinerous)",
          height: "50px"
        }}>

        {
          carouselSlidesTitles && !hideTitles && <div className="body1" style={{
                width: "50vw",
                textAlign: "center"
              }}>
              {carouselSlidesTitles[slideNumber]}
            </div>
        }

        <div style={{
            padding: "0.5rem 0"
          }}>{
            carouselSlides.map((slide, num) => {
              if (slideNumber === num) {
                return <CircleFilled style={{
                    margin: "0.1rem",
                    fontSize: "0.5rem"
                  }}/>
              } else {
                return <CircleFilled style={{
                    opacity: "0.6",
                    fontSize: "0.5rem",
                    margin: "0.1rem"
                  }}/>
              }
            })
          }</div>
      </div>

      <button for="carousel" className="ColumnCentered carouselBtn"
      onClick={nextSlide}
      tabindex={tabindex}
      style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          height: height,
          fontSize: "0.65rem"
        }}>
        <Next style={{width:"2rem", height:"2rem"}}/>
      NEXT<br></br>SLIDE
      </button>

    </div>

  </div>)
}

export default Carousel
