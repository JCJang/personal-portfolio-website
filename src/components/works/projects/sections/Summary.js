import ImageFadeIn from '../../../../customHooks/imageFadeIn'
import Carousel from './section-components/Carousel'
import TocLabel from './section-components/TocLabel'
import Fade from 'react-reveal/Fade';

const Summary = ({
  s,
  m,
  l,
  displayImages,
  mainImage,
  title,
  text,
  roles,
  summary,
  challenge,
  solution,
  carouselSlides,
  carouselSlidesTitles,
  carousel,
  websiteLink,
  background = false,
  research = false,
  design = false,
  development = false
}) => {

  const summaryStyle = () => {
    return {background: "var(--cinerous)", color: "var(--occlusion)", margin: "0", padding: "0"}
  };



        const textMarginStyle=()=>{
          if (l) return {
            margin:"1rem 10rem",
          }
          if (m) return {
            margin:"1rem 5rem"
          }
          return {margin:"1rem 2rem"}
        }

        const textMarginStyleHeader=()=>{
          if (l) return {
            margin:"1rem 10rem"
          }
          if (m) return {
            margin:"1rem 5rem",
          }
          return {margin:"1rem 2rem", fontSize:"2.5rem", textAlign:"center"}
        }

        const textMarginStyleH4=()=>{
          if (l) return {
            margin:"1rem 10rem",
          }
          if (m) return {
            margin:"1rem 5rem",
          }
          return {margin:"1rem 2rem", fontSize:"1.8rem"}
        }


        const textMarginStyleRows=()=>{
          if (l) return {
            margin:"1rem 10rem",
            gap:"5rem"
          }
          if (m) return {
            margin:"1rem 5rem",
            gap:"5rem"
          }
          return {margin:"1rem 2rem"}
        }

        const textMargin = () => {
          if (l) return "1rem 10rem"
          if (m) return "1rem 5rem"
          return "1rem 2rem"
        }

        const colLarge = () => {
          if (l) return {
              width:"calc(70vw - 12.5rem)"
            }
          if (m) return {
              width:"calc(70vw - 7.5rem)"
            }
            return{
              width:"80vw"
            }
        }
        const colSmall = () => {
          if (l) return {
              width:"calc(30vw - 12.5rem)"
            }
          if (m) return {
              width:"calc(30vw - 7.5rem)"
            }
            return{
              width:"80vw"
            }
        }

        const colHalf = () => {
          if (l) return {
              width:"calc(50vw - 12.5rem)"
            }
          if (m) return {
              width:"calc(50vw - 7.5rem)"
            }
            return{
              width:"80vw"
            }
        }

        const iconStyle = () => {
          return{
            alignSelf: "center",
            marginRight: "0.8rem",
            fontSize: "2rem",
            minWidth:"2rem"
          }
        }

       const overflowStyle = () => {
         return {
           width:"100vw",
           background:"var(--table-light)"
         }
       }

       const col2PaddingTop = () => {
         if (!m) return "2rem"
       }


  return (<div className="Column" id="summary" style={summaryStyle()}>

    <div className="Column" style={{
        position: "relative",
        zIndex: "29",
        padding: m?"1rem 5rem":"1rem 2rem",
        height: m
          ? "20rem"
          : "25rem",
        width: "100vw",
        color: "var(--occlusion)",
        background: "var(--table-neutral)"
      }}>
      <div style={{
          width: m
            ? "35vw"
            : "80vw"
        }}>
        <h2 className={l && "h1"} style={{paddingTop:"0"}}>{title}</h2>
        <br></br>
        <h5 style={{
            fontSize: l && "2rem"
          }}>{
            roles.split(",").map((role) => {
              return <div>{role}</div>
            })
          }</h5>
      </div>
    </div>

    <div className={s
        ? "mainImage-desktop"
        : "mainImage-mobile"} style={{
        position: "relative",
        height: "100vh",
        width: "100vw"
      }}>
      <Fade bottom>
      <ImageFadeIn src={mainImage} style={{
          filter: "saturate(0)",
          background: "var(--velvet)",
          position: "relative",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
          display: "block",
          objectFit: "cover"
        }}/>
      </Fade>
    </div>

    <div className={m
        ? "Column"
        : "Row"} style={{
        background: "var(--table-neutral)",
        paddingBottom: "3rem",
        paddingTop: "3rem",
        color: "var(--occlusion)"
      }}>

      {
        !m && <div className="subtitle1 selfCentered" style={{
              fontSize: "3.3rem",
              whiteSpace: "nowrap",
              width: "30vw",
              transform: "rotate(-90deg)"
            }}>Table of Contents</div>
      }

      <div className={m
          ? "Row"
          : "Column"} style={{margin:m?"1rem 5rem":"1rem 2rem"}}>
        {background && <TocLabel m={m} label="background" sublabel={background}/>}
        {research && <TocLabel m={m} label="research" sublabel={research}/>}
        {design && <TocLabel m={m} label="design" sublabel={design}/>}
        {development && <TocLabel m={m} label="development" sublabel={development}/>}
        <TocLabel m={m} label="Final Screens" sublabel="click to view"/>
      </div>
    </div>

<h2 style={textMarginStyleHeader()}>Summary</h2>

    <div className={m
        ? "Row"
        : "Column"} style={textMarginStyleRows()}>

      <div id="summary-col-1" className="Column" style={colHalf()}>
        <h5>
          <em>challenge: {challenge}</em>
        </h5>

        <div className="boxDecoration" style={{
            borderColor: "var(--velvet)"
          }}></div>

        <h6>
          <strong>{solution}</strong>
        </h6>

      </div>

      <div id="summary-col-2" className="Column" style={colHalf()}>
        <div className="body1" style={{paddingTop:col2PaddingTop()}}>
          {summary}
        </div>
      </div>

    </div>


    {carousel &&

        <div className="body2" id="Final Screens" style={{marginTop:m?"3rem":"2rem"}}>
          <Carousel carouselSlides={carouselSlides} carouselSlidesTitles={carouselSlidesTitles}/>
        </div>
    }

    {websiteLink && <div className="Column subtitle1" style={{
        margin: m? "2rem 5rem": "2rem 2rem",
        display: "inline",
        alignSelf:"flex-end"
      }}>

      Visit the Web App at <a href={`https://${websiteLink}`} target="_blank" className="AboutWorksLink">{websiteLink}</a>
    </div>}

  </div>)
}

export default Summary
