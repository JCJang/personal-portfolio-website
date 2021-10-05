import ImageFadeIn from '../../../../customHooks/imageFadeIn'

const Summary = ({s, m, l, displayImages, mainImage, title, text, roles, summary, challenge, solution, carouselSlides, carousel}) => {
console.log(carouselSlides)
      const summaryStyle = () => {
        return {
          background:"var(--cinerous)",
          color: "var(--velvet)",
          height:"var(--desktopheight)",
          width:"100vw",
          overflowY:"auto"
        }
      };

      const textMargin = () => {
        if(m){
          return "4rem 5rem"
        }else{
          return "2rem 1rem"
        }
      }

    return (
      <div className="Column" style={summaryStyle()}>

        <div className="Column" style={{position:"relative",zIndex:"29", padding:"4rem 5rem", height:m?"10rem":"20rem", width:"100vw"}}>
          <div style={{width:m?"35vw":"80vw"}}>
          <h2>{title}</h2>
          <br></br>
          <h5>{roles.split(",").map((role)=>{
            return <div>{role}</div>
          })}</h5>
          </div>
          </div>

          <br></br>

        <div className={s?"mainImage-desktop":"mainImage-mobile"} style={{position:"relative",height:"100vh",width:"100vw"}}>
        <ImageFadeIn src={mainImage} style={{filter:"saturate(0.5)", position:"relative",top:"0",left:"0",width: "100vw", height:"100vh", display: "block",objectFit:"cover"}}/>
        </div>


        <div className={m?"Row":"Column"} style={{margin:textMargin()}}>

        <div id="summary-col-1" className="Column" style={{padding:"2rem", width:m?"40rem":"80vw"}}>
        <h2>Summary</h2>
        <div className="body2">
        {summary}
        </div>
        </div>

        <div id="summary-col-2" className="Column" style={{padding:"2rem",width:m?"25rem":"80vw"}}>
        <h5><em>challenge: {challenge}</em></h5>

        <div className="boxDecoration" style={{borderColor:"var(--velvet)"}}></div>

        <h6>{solution}</h6>
        </div>

        </div>


        <div className="body2">
        {displayImages && displayImages.split(",").map((image)=>{return <ImageFadeIn src={image} style={{width:"30vw",height:"60vh",objectFit:"cover"}}/>})}
        </div>


        <div className="Column" style={{margin:textMargin(), alignSelf:"flex-end"}}>
        <div className="subtitle1">
          go to final screens >
        </div>
        <div className="subtitle2">
          or visit <a href="https://www.humanitiesdatabase.com" target="_blank" style={{textDecoration:"none", color:"inherit"}}>www.humanitiesdatabase.com</a>.
        </div>
        </div>


      </div>
    )
}

export default Summary
