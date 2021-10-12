import ImageFadeIn from '../../../../../customHooks/imageFadeIn'
import ScrollHorizontal from './mouseScroll.js'
const ImageOverflow = ({m, images=[], height="50vh", style, titles}) => {

  return (
    <div className="Row" style={{position:"relative", zIndex:"25", left:"0px", height:height ,overflowX:"scroll", width:m? "100%":"100vw",padding:"4rem"}}>
     {images && images.map((image, number)=>{
       return <>
       <div className="overline" style={{alignSelf:"flex-start", justifySelf:"flex-start", paddingTop:"1rem", padding:"0 2rem"}}>
         {titles && titles[number]}
       </div>
       <ImageFadeIn src={image} style={{
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
