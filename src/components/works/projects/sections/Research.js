import ImageFadeIn from '../../../../customHooks/imageFadeIn'
import { IoLocateOutline as CompetitiveAnalysisIcon } from "react-icons/io5";
import { IoNewspaperOutline as SurveyResultsIcon } from "react-icons/io5";
import { IoNavigateOutline as DesignDirectionIcon } from "react-icons/io5";
import { IoGridOutline as FinalScreensIcon } from "react-icons/io5";
import { IoGitBranchOutline as UserFlowIcon } from "react-icons/io5";


import ScreensLabel from './section-components/ScreensLabel'
import Accordion from './section-components/Accordion'

const Research = ({s, m, l, ideationText, ideationEmphasis, researchText, competitiveAnalysisEmphasis,competitiveAnalysis, surveyResultsEmphasis, surveyResultsTitle, screenTitles, screenFeatures, designKeywords, designTone, valueProposal, userFlowImg, userFlowText,  sectionTitles, sectionResultsArr, sectionApplicationArr, problemSolution}) => {

      const researchStyle = () => {
        return {
          background:"var(--works-bg)",
          color: "var(--works-text)",
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
      <div className="Column" id="research" style={researchStyle()}>

<div className={m?"Row":"Column"} style={{margin:textMargin()}}>

        <div id="summary-col-1" className="Column" style={{padding:l?"2rem":"1.5rem", width:m?"40rem":"80vw"}}>
        <h2 className="ProjectSectionTitle">Ideation</h2>

        <br></br>
        <div className="body1">
        {ideationText}
        </div>
        </div>

        <div id="summary-col-2" className="Column" style={{padding:m?"8rem 2rem 2rem 5rem":"0 1.5rem 1.5rem 1.5rem",width:m?"25rem":"80vw"}}>
        <br></br>
        <h5><em>{ideationEmphasis}</em></h5>

        </div>

      </div>

<div className="Column"style={{margin:textMargin()}}>

        <div id="summary-col-1" className="Column" style={{padding:l?"2rem":"1.5rem", width:m?"40rem":"80vw"}}>
        <h2 className="ProjectSectionTitle">Research</h2>

        <br></br>

        <div className="body1">
        {researchText}
        </div>

        </div>

        {competitiveAnalysis &&
          <div style={{padding:l?"2rem":"1.5rem", width:m?"40rem":"80vw"}}>
          <h4 className="Row" style={{margin:"2rem 0"}}>
          <CompetitiveAnalysisIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
          Competitive Analysis</h4>
          {competitiveAnalysis.split("/").map((section)=>{
          return <>
          <div className="body1">
          {section}
          </div>
          <br></br>
          </>
          })}

          </div>}

        {surveyResultsTitle &&
          <div style={{padding:l?"2rem":"1.5rem", width:m?"40rem":"80vw"}}>
          <h4 className="Row" style={{margin:"2rem 0"}}>
          <SurveyResultsIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
          {surveyResultsTitle}</h4>

          <Accordion m={m} l={l} problemSolution={problemSolution} sectionTitles={sectionTitles} sectionResultsArr={sectionResultsArr} sectionApplicationArr={sectionApplicationArr}/>

          </div>}

        {screenTitles && <>

          <h4 className="Row" style={{margin:"2rem 0"}}>
          <FinalScreensIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
          Screens and Features</h4>
            <div className={l?"grid-container-screens-and-features":"grid-container-screens-and-features-tablet"}>
           {screenTitles.map((screen, i)=>{
             return <ScreensLabel m={m} screen={screen} features={screenFeatures[i]}/>
           })}

        </div>
      </>}

      {userFlowImg && <>

        <h4 className="Row" style={{margin:"2rem 0"}}>

        <UserFlowIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
        User Flow</h4>

        <div className="body1" style={{margin:textMargin()}}>
        {userFlowText}
        </div>

          <div className={m?"RowCentered":"ColumnCentered"}>

         <ImageFadeIn src={userFlowImg} style={{
           filter:"saturate(0.5)",
           width: m?"60vw":"auto",
           height:m?"auto":"60vh",
           overflowX: !m && "auto",
           display: "block",
           objectFit:"cover"}}/>


      </div>
    </>}

        </div>

<div className={m?"Row":"Column"} style={{background:"var(--midnight)",color:"var(--table-neutral)", padding:textMargin()}}>

  <div id="design-direction-col-2" className="Column" style={{padding:l?"2rem":"1.5rem", width:m?"40rem":"80vw"}}>

            <h4 className="Row" style={{margin:"2rem 0"}}>
            <DesignDirectionIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
            Design Direction</h4>

          <div className="Row">
            <div className="Column">
            <div className="overline" style={{margin:"2rem 0", marginRight:"3rem"}}>DESIGN KEYWORDS:</div>
            <div> {designKeywords.map((keyword)=>{
              return <div className="body1">{keyword}</div>
            })}</div>
            </div>

            <div style={{width:"0.1px",  borderLeft: "1.5px solid var(--neutral)", margin:"2rem"}}></div>

            <div className="Column">
            <div className="overline" style={{margin:"2rem 0"}}>TONE:</div>
            <div>{designTone.map((keyword)=>{
              return <div className="body1">{keyword}</div>
            })}</div>
            </div>
          </div>

          <div className="Column">
          <div className="overline" style={{margin:"2rem 0"}}>UNIQUE VALUE PROPOSAL:</div>
          <div className="body1">{valueProposal}
          </div>
          </div>

          </div>
  <div id="design-direction-col-1" className="Column" style={{padding:m?"8rem 2rem 2rem 5rem":"0 1.5rem 1.5rem 1.5rem", width:m?"20rem":"80vw"}}>

          <h6><em>{competitiveAnalysisEmphasis}</em></h6>

        <div className="boxDecoration" style={{borderColor:"var(--table-neutral)"}}></div>

          <h6><em>{surveyResultsEmphasis}</em></h6>
          </div>


      </div>




      </div>
    )
}

export default Research
