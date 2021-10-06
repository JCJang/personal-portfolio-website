import ImageFadeIn from '../../../../customHooks/imageFadeIn'
import { IoLocateOutline as CompetitiveAnalysisIcon } from "react-icons/io5";
import { IoNewspaperOutline as SurveyResultsIcon } from "react-icons/io5";
import Accordion from './Accordion'
// <div className="boxDecoration" style={{borderColor:"var(--velvet)"}}></div>

const Research = ({s, m, l, ideationText, ideationEmphasis, researchText, competitiveAnalysisEmphasis,competitiveAnalysis, surveyResultsEmphasis, surveyResults}) => {

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

<div className={m?"Row":"Column"} style={{margin:textMargin()}}>

        <div id="summary-col-1" className="Column" style={{padding:l?"2rem":"1.5rem", width:m?"40rem":"80vw"}}>
        <h2 className="ProjectSectionTitle">Research</h2>

        <br></br>

        <div className="body1">
        {researchText}
        </div>

        {competitiveAnalysis &&
          <div>
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

        </div>

        <div id="summary-col-2" className="Column" style={{padding:m?"8rem 2rem 2rem 5rem":"0 1.5rem 1.5rem 1.5rem",width:m?"25rem":"80vw"}}>
        <br></br>
        <h5><em>{competitiveAnalysisEmphasis}</em></h5>
        </div>

      </div>

<div className={m?"Row":"Column"} style={{margin:textMargin()}}>


        {surveyResults &&
          <div>
          <h4 className="Row" style={{margin:"2rem 0"}}>
          <SurveyResultsIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
          Survey Results</h4>

          <Accordion m={m} l={l}/>

          </div>}


      </div>


      </div>
    )
}

export default Research
