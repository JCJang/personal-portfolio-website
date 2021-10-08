import ImageFadeIn from '../../../../customHooks/imageFadeIn'
import Carousel from './section-components/Carousel'
import TocLabel from './section-components/TocLabel'

const Summary = ({s, m, l, displayImages, mainImage, title, text, roles, summary, challenge, solution, carouselSlides, carouselSlidesTitles, carousel, background=false, research=false, design=false, development=false}) => {

      const summaryStyle = () => {
        return {
          background:"var(--cinerous)",
          color: "var(--velvet)",
          margin:"0",
          padding:"0",
        }
      };

      const textMargin = () => {
        if(m){
          return "3rem 5rem 1rem 5rem"
        }else{
          return "2rem 1rem"
        }
      }

    return (
      <div className="Column" id="summary" style={summaryStyle()}>

        <div className="Column" style={{position:"relative",zIndex:"29", padding:m?"4rem 5rem":"3rem 1.5rem", height:m?"20rem":"25rem", width:"100vw",color:"var(--occlusion)", background:"var(--table-neutral)"}}>
          <div style={{width:m?"35vw":"80vw"}}>
          <h2 className={l && "h1"}>{title}</h2>
          <br></br>
          <h5 style={{fontSize:l && "2rem"}}>{roles.split(",").map((role)=>{
            return <div>{role}</div>
          })}</h5>
          </div>
          </div>

        <div className={s?"mainImage-desktop":"mainImage-mobile"} style={{position:"relative",height:"100vh",width:"100vw"}}>
        <ImageFadeIn src={mainImage} style={{filter:"saturate(0)",background:"var(--velvet)", position:"relative",top:"0",left:"0",width: "100vw", height:"100vh", display: "block",objectFit:"cover"}}/>
        </div>


        <div className={m?"Column":"Row"} style={{background:"var(--table-neutral)",paddingBottom:"3rem", paddingTop:!m && "3rem",color:"var(--occlusion)"}}>

            { !m && <div className="subtitle1 selfCentered" style={{fontSize:"3.3rem",whiteSpace: "nowrap",width:"30vw", transform:"rotate(-90deg)"}}>Table of Contents</div>
            }

            <div className={m?"Row":"Column"} style={{padding:textMargin()}}>
              { background && <TocLabel m={m} label="background" sublabel={background}/>}
              { research && <TocLabel m={m} label="research" sublabel={research}/>}
              { design && <TocLabel m={m} label="design" sublabel={design}/>}
              { development && <TocLabel m={m} label="development" sublabel={development}/>}
              <TocLabel m={m} label="Final Screens" sublabel="click to view"/>
            </div>
        </div>


      <div className={m?"Row":"Column"} style={{margin:textMargin()}}>

        <div id="summary-col-1" className="Column" style={{padding:l?"2rem":"1.5rem", width:m?"25rem":"80vw"}}>
        <h2>Summary</h2>

        <br></br>

        <h5><em>challenge: {challenge}</em></h5>
        <div className="boxDecoration" style={{borderColor:"var(--velvet)"}}></div>
        <h6><strong>{solution}</strong></h6>

        </div>

        <div id="summary-col-2" className="Column" style={{padding:m?"8rem 2rem 2rem 5rem":"0 1.5rem 1.5rem 1.5rem",width:m?"40rem":"80vw"}}>
        <br></br>

        <div className="body1">
        {summary}
        </div>
        </div>

      </div>

        {carousel && <div className="body2" id="Final Screens">
        <Carousel carouselSlides={carouselSlides} carouselSlidesTitles={carouselSlidesTitles}/>
        </div>}


        <div className="Column subtitle1" style={{margin:textMargin(), alignSelf:"flex-end"}}>
          Visit the Web App at <a href="https://www.humanitiesdatabase.com" target="_blank" style={{textDecoration:"none", color:"inherit"}}>www.humanitiesdatabase.com</a>.
        </div>

      </div>
    )
}

export default Summary
