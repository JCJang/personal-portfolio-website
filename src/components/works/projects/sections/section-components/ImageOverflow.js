import ImageFadeIn from '../../../../../customHooks/imageFadeIn'

const ImageOverflow = ({m, images, height="50vh"}) => {

  return (
    <div style={{position:"relative", height:"20rem", width:m? "100%":"100vw"}}>
    <div className={m?"Row":"Column"} style={{position:"absolute", left:!m && "0px", height:"20rem",overflowX:"auto", width:m?"100%":"100vw"}}>
     {images && images.map((image)=>{
       return <ImageFadeIn src={image} style={{
         filter:"saturate(0.5)",
         width: "auto",
         height: height,
         margin:"2rem",
         display: "block",
         objectFit:"cover"}}/>
     })}
     </div>
    </div>  )
}

export default ImageOverflow
