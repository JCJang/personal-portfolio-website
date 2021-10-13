import ImageOverflow from './section-components/ImageOverflow'

import {IoLocateOutline as CompetitiveAnalysisIcon} from "react-icons/io5";
import {IoNewspaperOutline as SurveyResultsIcon} from "react-icons/io5";
import {IoNavigateOutline as DesignDirectionIcon} from "react-icons/io5";
import {IoGridOutline as FinalScreensIcon} from "react-icons/io5";
import {IoGitBranchOutline as UserFlowIcon} from "react-icons/io5";

import ScreensLabel from './section-components/ScreensLabel'
import Accordion from './section-components/Accordion'

const Research = ({
  s,
  m,
  l,
  ideationText,
  ideationEmphasis,
  researchText,
  competitiveAnalysisEmphasis,
  competitiveAnalysis,
  surveyResultsEmphasis,
  surveyResultsTitle,
  screenTitles,
  screenFeatures,
  designKeywords,
  designTone,
  userFlowImg,
  userFlowText,
  sectionTitles,
  sectionResultsArr,
  sectionApplicationArr,
  problemSolution
}) => {

  const researchStyle = () => {
    return {background: "var(--works-bg)", color: "var(--works-text)", margin: "0", padding: "0"}
  };

  const textMarginStyle=()=>{
    if (m) return {
      margin:"1rem 5rem",
    }
    return {margin:"1rem 2rem"}
  }

  const textMarginStyleHeader=()=>{
    if (m) return {
      margin:"1rem 5rem",
      color:"var(--midnight)"
    }
    return {margin:"1rem 2rem", color:"var(--midnight)", fontSize:"2.5rem", textAlign:"center"}
  }


  const textMarginStyleH4=()=>{
    if (m) return {
      margin:"1rem 5rem",

    }
    return {margin:"1rem 2rem", fontSize:"1.8rem"}
  }


  const textMarginStyleRows=()=>{
    if (m) return {
      margin:"1rem 5rem",
      gap:"5rem"
    }
    return {margin:"1rem 2rem"}
  }

  const textMargin = () => {
    if (m) return "1rem 5rem"
    return "1rem 2rem"
  }

  const colLarge = () => {
    if (m) return {
        width:"calc(70vw - 7.5rem)"
      }
      return{
        width:"80vw"
      }
  }
  const colSmall = () => {
    if (m) return {
        width:"calc(30vw - 7.5rem)"
      }
      return{
        width:"80vw"
      }
  }

  const colHalf = () => {
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
  return (

  <div className="Column" style={researchStyle()}>

<h2 className="ProjectSectionTitle" style={textMarginStyleHeader()}>Ideation</h2>

    <div className={m
        ? "Row"
        : "Column"} style={textMarginStyleRows()}>

      <div id="summary-col-1" className="Column body1" style={colLarge()}>
          {ideationText}
      </div>

      <div id="summary-col-2" className="Column" style={colHalf()}>
        <h5 style={{paddingTop:col2PaddingTop()}}><em>{ideationEmphasis}</em></h5>
      </div>
    </div>


<h2 className="ProjectSectionTitle" style={textMarginStyleHeader()}>Research</h2>

  <div className="body1" style={textMarginStyle()}>
          {researchText}
  </div>

<h4 className="Row" style={textMarginStyleH4()}><CompetitiveAnalysisIcon style={iconStyle()}/>Competitive Analysis</h4>

  <div style={textMarginStyle()}>
            {competitiveAnalysis.split("/").map((section) => {
                return <> <div className = "body1" > {
                  section
                } </div>

                  <br></br >
                </>
              })
            }
  </div>

<h4 className="Row" style={textMarginStyleH4()}><SurveyResultsIcon style={iconStyle()}/> {surveyResultsTitle}</h4>

<div style={textMarginStyle()}>
<Accordion m={m} l={l} problemSolution={problemSolution} sectionTitles={sectionTitles} sectionResultsArr={sectionResultsArr} sectionApplicationArr={sectionApplicationArr}/>
</div>

<h4 className = "Row" style={textMarginStyleH4()}> <FinalScreensIcon style={iconStyle()}/>
        Screens and Features</h4>

    <div className = {
          l? "grid-container-screens-and-features":
          m?"grid-container-screens-and-features-tablet":
          "grid-container-screens-and-features-mobile"
        } style={textMarginStyle()}>
        {screenTitles.map((screen, i) => {
            return <ScreensLabel m={m} screen={screen} features={screenFeatures[i]}/>
          })
        }
    </div>


<h4 className = "Row" style={textMarginStyle()} > <UserFlowIcon style={iconStyle()}/>
        User Flow</h4>

  <div className = "body1" style={textMarginStyle()}>
    {userFlowText}
  </div>


    <div style = {textMarginStyle()}>

        <ImageOverflow height="70vh" images={[userFlowImg]} style={{
            filter: "saturate(0.5)",
          }}/>

      </div>



<div style={{background: "var(--midnight)",
          color: "var(--table-neutral)"}}>

<h4 className="Row" style={textMarginStyle()}>
        <DesignDirectionIcon style={{
            alignSelf: "center",
            marginRight: "0.8rem"
          }}/>
        Design Direction</h4>

<div className={m? "Row" : "Column"} style={textMarginStyle()}>

    <div id="design-direction-col-1" className="Column" style={colHalf()}>

        <div className="Row">

          <div className="Column">
            <div className="overline" style={{
                margin: "2rem 0"
              }}>TONE:</div>
            <div>{
                designTone.map((keyword) => {
                  return <div className="body1">{keyword}</div>
                })
              }</div>
          </div>


          <div style={{
              width: "0.1px",
              borderLeft: "1.5px solid var(--neutral)",
              margin: "2rem"
            }}></div>

        <div className="Column">
          <div className="overline" style={{
              margin: "2rem 0",
              marginRight: "3rem"
            }}>DESIGN KEYWORDS:</div>
          <div>
            {
              designKeywords.map((keyword) => {
                return <div className="body1">{keyword}</div>
              })
            }</div>
        </div>
        </div>

      </div>
      <div id="design-direction-col-2" className="Column" style={colHalf()}>

        <h6 style={{paddingTop:col2PaddingTop()}}>
          <em>{competitiveAnalysisEmphasis}</em>
        </h6>

        <div className="boxDecoration" style={{
            borderColor: "var(--table-neutral)"
          }}></div>

        <h6>
          <em>{surveyResultsEmphasis}</em>
        </h6>
      </div>
    </div>
   </div>
  </div>)
}

export default Research
