import ImageFadeIn from '../../../../../customHooks/imageFadeIn'

const ImageOverflow = ({m, images, height="50vh", style}) => {

  return (
    <div className={m?"Row":"Column"} style={{position:"relative", zIndex:"25", left:"0px", height:height ,overflowX:"auto", width:m? "100%":"100vw"}}>
     {images && images.map((image)=>{
       return <ImageFadeIn src={image} style={{
         filter:"saturate(0.5)",
         zIndex:"25",
         position:"absolute",
         width: "fit-content",
         height: height,
         display: "block",
         objectFit:"cover"}} style={style}/>
     })}
     </div>
 )
}

export default ImageOverflow
