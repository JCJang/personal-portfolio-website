import ImageFadeIn from '../../../../customHooks/imageFadeIn'

const Summary = ({m, l, displayImages, mainImage, title, subtitle, text}) => {

      const summaryStyle = () => {
        return {
          background:"var(--velvet)",
          color: "var(--cinerous)",
          height:"var(--desktopheight)",
          overflowY:"auto",
          padding:"2rem 5rem"
        }
      };

    return (
      <div className="Column" style={summaryStyle()}>

        <div className="Column" style={{position:"relative",zIndex:"1", padding:"0 2rem", width:"inputWidth()", color:"var(--contact-text)"}}>
          <h2>{title}</h2>
          <div className="boxDecoration" style={{ border:"1.5px solid var(--cinerous)", width:!l && "40vw"}}></div>
          <h5>{subtitle}</h5>
          <br></br>
          <div className="body2">
          {text}
          </div>
          </div>

          <br></br>

        <ImageFadeIn src={mainImage} style={{position:"absolute",right:"5rem",top:"8rem",width:"30vw",height:"60vh",objectFit:"cover"}}/>

        <div className="body2">
        {displayImages && displayImages.split(",").map((image)=>{return <ImageFadeIn src={image} style={{width:"30vw",height:"60vh",objectFit:"cover"}}/>})}
        </div>

      </div>
    )
}

export default Summary
