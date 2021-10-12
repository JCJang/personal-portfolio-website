import ImageFadeIn from '../../../../../customHooks/imageFadeIn';
import  useDraggableScroll from 'use-draggable-scroll';
import {useRef, useState,useEffect} from 'react'

const ImageOverflow = ({m, images=[], height="50vh", style, titles}) => {

  const ref = useRef(null);
  const [whileMouseDown, setWhileMouseDown] = useState(false)

  const { onMouseDown } = useDraggableScroll(ref);





  return (
    <div className="Row" ref={ref} onMouseDown={onMouseDown} style={{
      position:"relative",
      zIndex:"25",
      left:"0px",
      height:height,
      overflowX:"scroll",
      width:m? "100%":"100vw",
      padding:"4rem"}}>

     {images && images.map((image, number)=>{
       return <>
       <div className="overline" style={{alignSelf:"flex-start", justifySelf:"flex-start", paddingTop:"1rem", padding:"0 2rem"}}>
         {titles && titles[number]}
       </div>
       <ImageFadeIn src={image} draggable="false" style={{
         pointerEvents:"none",
         zIndex:"25",
         position:"absolute",
         width: "fit-content",
         height: height,
         display: "block",
         objectFit:"cover"}} style={style}/>
         </>
     })}
     </div>
 )
}

export default ImageOverflow
