import ImageOverflow from './section-components/ImageOverflow'
import Fade from 'react-reveal/Fade';

import {IoPeopleOutline as UserStoriesIcon} from "react-icons/io5";
import {IoLocateOutline as CompetitiveAnalysisIcon} from "react-icons/io5";
import {IoNewspaperOutline as SurveyResultsIcon} from "react-icons/io5";
import {IoGridOutline as FinalScreensIcon} from "react-icons/io5";
import {IoGitBranchOutline as UserFlowIcon} from "react-icons/io5";
import {IoNavigateOutline as DesignDirectionIcon} from "react-icons/io5";

import ScreensLabel from './section-components/ScreensLabel'
import UserStoriesLabel from './section-components/UserStoriesLabel'
import Accordion from './section-components/Accordion'
import Statistic from './section-components/Statistic'

const Research = ({
  s,
  m,
  l,
  ideationText,
  ideationEmphasis,
  researchText,
  competitiveAnalysisEmphasis,
  competitiveAnalysis,
  users,
  userJourneys,
  userJourneyTitles,
  userProfileKeys,
  userProfileValues,
  userDetailsKeys,
  userDetailsValues,
  userStories,
  statisticTitles,
  statisticTexts,
  statisticSources,
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
      margin:"1rem 10rem",
      color:"var(--midnight)",
    }
    if (m) return {
      margin:"1rem 5rem",
      color:"var(--midnight)",
    }
    return {margin:"1rem 2rem", color:"var(--midnight)", fontSize:"2.5rem", textAlign:"center"}
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

 const extraSpacing = () => {
   if (l) return "5rem"
   if (m) return "3rem"
   return "2rem"
 }

 const parseText = (text) =>{
   if(!text) return
   return text.split("/").map((section, num)=>{
     return  <>
     <div>
     {section}
     </div>
     {num!==text.split("/").length && <br></br>}
     </>
   }
  )}


  return (

<div className="Column" style={researchStyle()}>


<h2 className="ProjectSectionTitle" style={textMarginStyleHeader()}>Ideation</h2>

    <div className={m
        ? "Row"
        : "Column"} style={textMarginStyleRows()}>

      <div id="summary-col-1" className="Column body1" style={colLarge()}>
        {parseText(ideationText)}
      </div>

      <div id="summary-col-2" className="Column" style={colHalf()}>
        <h5 style={{paddingTop:col2PaddingTop()}}><em>{ideationEmphasis}</em></h5>
      </div>
    </div>

<h2 className="ProjectSectionTitle" style={textMarginStyleHeader()}>Research</h2>

  <div className="body1" style={textMarginStyle()}>
  {parseText(researchText)}
  </div>


  {users && <>
  <h4 className="Row" style={textMarginStyleH4()}><UserStoriesIcon style={iconStyle()}/>User Stories</h4>
        {users.map((user, i) => {
              return <>

              <div style={textMarginStyle()}>
                <UserStoriesLabel m={m}
                user={user}
                userProfileKeys={userProfileKeys}
                userProfileValues={userProfileValues[i]}
                userDetailsKeys={userDetailsKeys}
                userDetailsValues={userDetailsValues[i]}
                userStories={userStories[i]}/>
              </div>
                <div className="RowCentered" style = {{width:"100vw"}}>
                    <ImageOverflow l={l} m={m}height="80vh" images={userJourneys[i]} titles={userJourneyTitles[i]} style={{
                        filter: "saturate(0.5)",
                      }}/>
                </div>
                <div style={{width:"100vw"}}>
                  <Statistic m={m} l={l} title = {statisticTitles[i]} text={statisticTexts[i]} sources={statisticSources[i]}/>
                </div>

                <div style={{marginBottom:extraSpacing()}}></div>
              </>
            })}
  </>}


{problemSolution && <>
<h4 className="Row" style={textMarginStyleH4()}><SurveyResultsIcon style={iconStyle()}/> {surveyResultsTitle}</h4>

<div style={{paddingBottom:extraSpacing()}}></div>

<div style={textMarginStyle()}>
<Accordion m={m} l={l} problemSolution={problemSolution} sectionTitles={sectionTitles} sectionResultsArr={sectionResultsArr} sectionApplicationArr={sectionApplicationArr}/>
</div>
</>
}

<h4 className="Row" style={textMarginStyleH4()}><CompetitiveAnalysisIcon style={iconStyle()}/>Competitive Analysis</h4>

  <div style={textMarginStyle()}>
  {parseText(competitiveAnalysis)}
  </div>

{!problemSolution && <>
<h4 className="Row" style={textMarginStyleH4()}><SurveyResultsIcon style={iconStyle()}/> {surveyResultsTitle}</h4>

<div style={{paddingBottom:extraSpacing()}}></div>

<div style={textMarginStyle()}>
<Accordion m={m} l={l} problemSolution={problemSolution} sectionTitles={sectionTitles} sectionResultsArr={sectionResultsArr} sectionApplicationArr={sectionApplicationArr}/>
</div>
</>
}

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

<div style={{paddingBottom:extraSpacing()}}></div>

<h4 className = "Row" style={textMarginStyle()} > <UserFlowIcon style={iconStyle()}/>
        User Flow</h4>

  <div className = "body1" style={textMarginStyle()}>
  {parseText(userFlowText)}
  </div>


<Fade bottom>
    <div className="RowCentered">

        <ImageOverflow l={l} m={m}height="80vh" width="100vw" images={[userFlowImg]} style={{
            filter: "saturate(0.5)",
          }}/>

      </div>

</Fade>


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
