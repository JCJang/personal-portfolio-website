import ImageFadeIn from '../../customHooks/imageFadeIn'
import headshot from '../../images/figmav.jpg'


const About = ({m, l}) => {

    const aboutStyle = () => {
      return {
        background:"var(--velvet)",
        color: "var(--cinerous)",
        height:"var(--desktopheight)",
        overflowY:"auto",
        padding:"2rem 5rem"
      }
    };

  return (
    <div className="Column" style={aboutStyle()}>
      <div className="Column" style={{width:"50vw"}}>
      <h2>Front end developer</h2>
      <h5>psychology<br></br>user experience<br></br>craft</h5>
    </div>
      <ImageFadeIn src={headshot} style={{position:"absolute",right:"5rem",top:"8rem",width:"30vw",height:"60vh",objectFit:"cover"}}/>

    </div>
  )
}

export default About
