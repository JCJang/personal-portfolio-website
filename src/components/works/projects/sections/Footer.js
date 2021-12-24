import TocLabelLink from './section-components/TocLabelLink'
import TocLabel from './section-components/TocLabel'
import Fade from 'react-reveal/Fade';

const Footer = ({
  m,
  l,
  websiteLink,
  nextSteps,
  learned
}) => {

  const footerStyle = () => {
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

       const parseText = (text) =>{
         if(!text) return
         if(text.indexOf("/") === -1)return text

         return text.split("/").map((section, num)=>{
           return  <>
           <div>
           {section}
           </div>
           {num!==text.split("/").length && <br></br>}
           </>
         }
        )}


       const col2PaddingTop = () => {
         if (!m) return "2rem"
       }

       const extraSpacing = () => {
         if (l) return "5rem"
         if (m) return "3rem"
         return "2rem"
       }

  return (<div className="Column" id="summary" style={footerStyle()}>

<div style={{background:"var(--works-bg)", color:"--works-text"}}>

<h2 style={textMarginStyleHeader()}>Takeaways</h2>

      <div className={m
          ? "Row"
          : "Column"} style={textMarginStyleRows()}>

        {nextSteps &&

        <div id="summary-col-1" className="Column" style={colHalf()}>

          <h5>
            Next Steps:
          </h5>
          <div className="body1" style={{marginTop:"1rem"}}>
            <div>{nextSteps.map((li)=><div><strong>-</strong> {li}</div>)}</div>
          </div>

        </div>
      }

        <div id="summary-col-2" className="Column" style={nextSteps && colHalf()}>
        {nextSteps && <h5 style={{paddingTop:col2PaddingTop()}}>
          What I Learned:
        </h5>}
          <div className="body1" style={{marginTop:"1rem"}}>
            {parseText(learned)}
          </div>
        </div>

      </div>

      <div style={{marginBottom:extraSpacing()}}></div>

</div>

<div style={{marginBottom:extraSpacing()}}></div>


        <h4 className="Column" style={{
            margin: m? "3rem 5rem": "3rem 2rem",
            display: "inline",
            textAlign: "center",
            alignSelf:"center",
            color:"var(--velvet)"
          }}><p>Thank you for your time.</p>
        {websiteLink && <p style={{
            display: "inline",
            fontFamily: "Yaldevi",
            fontSize:"1rem"
          }}>Visit the Web App at <a href={`https://${websiteLink}`} target="_blank" className="AboutWorksLink">{websiteLink}</a>
        </p>}

        </h4>



    <div className={m
        ? "Column"
        : "Row"} style={{
        background: "var(--cinerous)",
        paddingBottom: "3rem",
        color: "var(--velvet)"
      }}>


      {
        !m && <div className="subtitle1 selfCentered" style={{
              fontSize: "3.3rem",
              whiteSpace: "nowrap",
              width: "30vw",
              transform: "rotate(-90deg)"
            }}>Where to?</div>
      }
      <Fade bottom>
      <div className={m
          ? "RowCentered"
          : "Column"} style={{margin:m?"1rem 5rem":"1rem 2rem"}}>
        <TocLabel m={m} label="Final Screens" sublabel="click to view"/>
        <TocLabelLink m={m} link="/about" label="About" sublabel="get to know me more"/>
        <TocLabelLink m={m} link="/contact" label="Contact" sublabel="send me a message"/>
      </div>
      </Fade>
    </div>


    <div style={{margin:textMargin(), color:"var(--velvet)"}}><em>A big thank you to all the wonderful people that selflessly share content online so that I could learn from and level up with you.</em></div>

    <div style={{marginBottom:extraSpacing()}}></div>


  </div>)
}

export default Footer
