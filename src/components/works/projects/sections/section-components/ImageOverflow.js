import ImageFadeIn from '../../../../../customHooks/imageFadeIn';
import useDraggableScroll from 'use-draggable-scroll';
import useDebounce from '../../../../../customHooks/useDebounce'
import useClickOutside from '../../../../../customHooks/useClickOutside';
import useEscKey from '../../../../../customHooks/useEscKey'

import {useRef, useState,useEffect} from 'react'
import ImageModal from './ImageModal'

const ImageOverflow = ({l, m, images=[], height="50vh", style, titles, alt}) => {

  const draggableScrollRef = useRef(null);
  const { onMouseDown } = useDraggableScroll(draggableScrollRef);
  const [isOpen, setIsOpen] = useState(false)
  const [imageArrNumber, setImageArrNumber] = useState(0)


  const modalRef = useRef()

  useClickOutside(modalRef, ()=>{
    if (isOpen) setIsOpen (false)
  })

  useEscKey(()=>{
    setIsOpen (false)}
  )


  const textMargin = () => {
    if (l) return "1rem 10rem"
    if (m) return "1rem 5rem"
    return "1rem 2rem"
  }

  const widthMarginLength = () => {
    if (l) return "26rem"
    if (m) return "18rem"
    return "12rem"
  }


  return (
    <div className={images.length===1?"Row":"Row"} ref={draggableScrollRef}
    onMouseDown={onMouseDown} style={{
      zIndex:"25",
      height:height,
      overflowX:"scroll",
      padding:images.length===1 ? "3rem" : "4rem"}}>

      <ImageModal isOpen={isOpen} modalRef={modalRef} setIsOpen={setIsOpen} image={images[imageArrNumber]} onClose={() => setIsOpen(false)}>
      </ImageModal>

     {images && images.map((image, number)=>{
       return <>
       {titles && <div style={{minWidth:"120px", width:l?"180px":"180px",textAlign:"left",margin:images.length===1? "1rem 2rem 0 0": "1rem 1rem 0 3rem", alignSelf:"flex-start", justifySelf:"flex-start"}}>
         <label for={titles[number]} style={{font:"1rem/1.5 'Yaldevi'", textTransform:"uppercase"}}>{titles[number]}</label>
       </div>}

       <div className="ImageOverflowImg Row">
       <ImageFadeIn src={image}
       onClick={(e) => {
         e.stopPropagation();
           setImageArrNumber(number);
           setIsOpen(true)
         }
       }
        draggable="false" style={{
         pointerEvents:"none",
         zIndex:"25",
         position:"absolute",
         width: "auto",
         alignSelf:"flex-start",
         maxHeight: images.length===1? `calc(${height} - 2rem)`:height,
         maxWidth: images.length===1? `calc(${height} - ${widthMarginLength()})`:height,
         display: "block",
         objectFit:"cover"}} style={style}/>
         </div>
         </>
     })}
     </div>
 )
}

export default ImageOverflow
