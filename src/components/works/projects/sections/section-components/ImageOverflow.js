import ImageFadeIn from '../../../../../customHooks/imageFadeIn';
import  useDraggableScroll from 'use-draggable-scroll';
import useDebounce from '../../../../../customHooks/useDebounce'
import useClickOutside from '../../../../../customHooks/useClickOutside';

import {useRef, useState,useEffect} from 'react'
import ImageOverflowModal from './ImageOverflowModal'

const ImageOverflow = ({m, images=[], height="50vh", width="100%", style, titles}) => {

  const draggableScrollRef = useRef(null);
  const { onMouseDown } = useDraggableScroll(draggableScrollRef);
  const [isOpen, setIsOpen] = useState(false)
  const [imageArrNumber, setImageArrNumber] = useState(0)


  const modalRef = useRef()

  useClickOutside(modalRef, ()=>{
    if (isOpen) setIsOpen (false)
  })


  return (
    <div className="Row" ref={draggableScrollRef}
    onMouseDown={onMouseDown} style={{
      zIndex:"25",
      height:height,
      overflowX:"scroll",
      width:m? width:"100vw",
      padding:"4rem"}}>

      <ImageOverflowModal isOpen={isOpen} modalRef={modalRef} setIsOpen={setIsOpen} image={images[imageArrNumber]} onClose={() => setIsOpen(false)}>
      </ImageOverflowModal>

     {images && images.map((image, number)=>{
       return <>
       <div className="overline" style={{alignSelf:"flex-start", justifySelf:"flex-start", paddingTop:"1rem", padding:"0 2rem"}}>
         {titles && titles[number]}
       </div>
       <div className="ImageOverflowImg" style={{
         display:"flex",
         flexDirection:images.length===1 ? "reverse-column" : "row"
       }}>
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
         width: "fit-content",
         height: height,
         display: "block",
         objectFit:"cover"}} style={style}/>
         </div>
         </>
     })}
     </div>
 )
}

export default ImageOverflow
