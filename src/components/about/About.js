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

      <div className="Column" style={{position:"relative",zIndex:"1", padding:"0 2rem", width:"inputWidth()", color:"var(--contact-text)"}}>
        <h2>Front end developer</h2>
        <div className="boxDecoration" style={{ border:"1.5px solid var(--cinerous)", width:!l && "40vw"}}></div>
        <h5>psychology<br></br>user experience<br></br>craft</h5>
        <br></br>
        <div className="body2">I am currently available for both freelance projects and full-time oppurtunities. Don't hesitate to reach out to me if my skills are a good fit for your project!
        </div>
        </div>
        
        <br></br>

        <div className={m?"Column":"ColumnCentered"} style={{position:"relative",zIndex:"1", padding:"0 2rem", width:"inputWidth()", color:"var(--contact-text)"}}>
          <h4 className="subtitle1">my Interests</h4>
          <div className="boxDecoration" style={{ border:"1.5px solid var(--cinerous)", width:!l && "40vw"}}></div>
          <h5>travel<br></br>reading<br></br>painting</h5>
          <br></br>
          <div className="body2">
          map of places I traveled to (replaces headshot in the bg. useRef and scroll to detect)
          </div>
          </div>

      <ImageFadeIn src={headshot} style={{position:"absolute",right:"5rem",top:"8rem",width:"30vw",height:"60vh",objectFit:"cover"}}/>

    </div>
  )
}

export default About
