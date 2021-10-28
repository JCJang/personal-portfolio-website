import ImageOverflow from './section-components/ImageOverflow'
import Fade from 'react-reveal/Fade';
import { IoLogoGithub as GithubIcon } from "react-icons/io5"

import {IoTerminalOutline as ScreensIcon} from "react-icons/io5";
import {IoServerOutline as DatabaseIcon} from "react-icons/io5";
import {IoCloudUploadOutline as ServerIcon} from "react-icons/io5";

import {IoLinkOutline as RelationIcon} from "react-icons/io5";
import {IoCodeOutline as FunctionalIcon} from "react-icons/io5";

import ReactEmbedGist from 'react-embed-gist';

import ScreensLabel from './section-components/ScreensLabel'
import Accordion from './section-components/Accordion'

const Development = ({
  s,
  m,
  l,
  developmentText,
  finalStack,
  stackMemo,
  githubRepository,
  resourcesText,
  screenTitles,
  screenFeatures,
  screenDescriptions,
  databaseText,
  databaseCode,
  serverText,
  serverCode,
  relationalSearchText,
  relationalSearchClientCode,
  relationalSearchServerCode,
  relationalSearchImages,
  relationalSearchTitles,
  relationalSearchResultImg,
  relationalSearchResultTitle,
  functionalText,
  functionalCode,
  functionalProgrammingImages,
  functionalProgrammingTitles,

  organizationText,
  organizationImages,
  organizationTitles,
  resourcefulProblemSolvingText,
  carouselCode,
  modalCode
}) => {

  const developmentStyle = () => {
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

 const gistStyle = () => {
   return textMarginStyle()
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
  <div className="Column" style={developmentStyle()}>
    <h2 style={textMarginStyleHeader()}>Development</h2>

    <div className={m
        ? "Row"
        : "Column"}
      style={textMarginStyleRows()}>

      <div id="summary-col-1" className="Column" style={colLarge()}>

        <br></br>
        <div className="body1">
          {parseText(developmentText)}
        </div>
      </div>

    <div id="summary-col-2" className="Column" style={colHalf()}>
        <h5><a className="AboutWorksLink" href={githubRepository} target="_blank" style={{textDecoration:"none"}}><GithubIcon style={{  alignSelf: "center",
          marginRight: "0.8rem",
          fontSize: "1.6rem",
          minWidth:"1.6rem"}}/>click here for repository link</a></h5>


        <div className="boxDecoration" style={{
            borderColor: "var(--works-text)"
          }}></div>


        <h6 style={{paddingTop:col2PaddingTop()}}>
         Final stack: {finalStack}
        </h6>
        <br></br>
        <div><strong>{stackMemo}</strong></div>
    </div>
    </div>

{resourcesText &&  <>

  <h3 style={textMarginStyleHeader()}>Resources and Backend</h3>

  <div className="body1" style={textMarginStyle()}>
  {parseText(resourcesText)}
  </div>

    </>}


{screenTitles && <>

   <h4 className = "Row" style = {textMarginStyleH4()} > <ScreensIcon style={iconStyle()}/>
        Planning and Defining Resources</h4>


  <div className = {m?"grid-container-resources":"grid-container-resources-mobile"} style = {textMarginStyle()}>
          {screenTitles.map((screen, i) => {
            return <>
            <Fade bottom>
            <ScreensLabel m = {m}
            screen = {screen}
            features = {screenFeatures[i]}/>
            </Fade>
            <Fade>
            <div>{parseText(screenDescriptions[i])}</div>
            </Fade>
          </>
          })
        }
</div>

  </>}


{databaseText && <>

  <h4 className = "Row" style = {textMarginStyleH4()} >
  <DatabaseIcon style={iconStyle()}/> Database Design</h4>

<div className = "body1"  style = {textMarginStyle()}>
{parseText(databaseText)}
</div>


<div style={gistStyle()}>
  <ReactEmbedGist contentClass ="gistStyles" titleClass="displayNone"  gist={databaseCode}/>
</div>

<h4 className = "Row" style = {textMarginStyleH4()} >
  <ServerIcon style={iconStyle()}/>Server</h4>
    <div className = "body1"  style = {textMarginStyle()}>
    {parseText(serverText)}
    </div>

      <div style={gistStyle()}>
        <ReactEmbedGist contentClass ="gistStyles" titleClass="displayNone"  gist={serverCode}/>
      </div>
  </>
}

<h3 className="Column" style={textMarginStyleHeader()}>Frontend and problem-solving</h3>

{functionalText && <>
    <h4 className="Row" style={textMarginStyleH4()}>
        <RelationIcon style={iconStyle()}/>
        Implementing Search by Related Authors</h4>

  <div className="body1" style={textMarginStyle()}>
  {parseText(relationalSearchText)}
  </div>


  <div>

      <div style={gistStyle()}>
        <ReactEmbedGist contentClass ="gistStyles" titleClass="displayNone"  gist={relationalSearchClientCode}/>
      </div>

<br></br>

      <div style={gistStyle()}>
        <ReactEmbedGist contentClass ="gistStyles" titleClass="displayNone"  gist={relationalSearchServerCode}/>
      </div>

    </div>


    <br></br>

    <Fade>
        <div style={overflowStyle()}>
          <ImageOverflow l={l} m={m}images={relationalSearchImages} titles={relationalSearchTitles}/>
        </div>
    </Fade>

    <br></br>

    <Fade>
    <div className="RowCentered">
      <ImageOverflow l={l} m={m}images={relationalSearchResultImg} titles={relationalSearchResultTitle}
      height="70vh"/>
    </div>
</Fade>
  </>}

{functionalText && <>
 <h4 className = "Row" style = {textMarginStyleH4()} >
        <FunctionalIcon style={iconStyle()}/>
        Customizing Timelines with Functional programming </h4>

        < div className = "body1" style={textMarginStyle()}>
        {parseText(functionalText)}
        </div>


      <div style={gistStyle()}>
        <ReactEmbedGist contentClass ="gistStyles" titleClass="displayNone"  gist={functionalCode}/>
      </div>

<br></br>
<Fade>
    <div style={overflowStyle()}>
      <ImageOverflow l={l} m={m}height="80vh" images={functionalProgrammingImages} titles={functionalProgrammingTitles}/>
    </div>
</Fade>

  </>}


  {organizationText && <>
      <h4 className="Row" style={textMarginStyleH4()}>
          <RelationIcon style={iconStyle()}/>
          Organizing more maintainable code</h4>

    <div className="body1" style={textMarginStyle()}>
    {parseText(organizationText)}
    </div>

      <Fade>
          <div style={overflowStyle()}>
            <ImageOverflow l={l} m={m}images={organizationImages} titles={organizationTitles}/>
          </div>
      </Fade>
      <br></br>

    </>}


{organizationText && <>

  <h4 className="Row" style={textMarginStyleH4()}>
        <RelationIcon style={iconStyle()}/>
        Resourceful problem solving text</h4>

  <div className="body1" style={textMarginStyle()}>
  {parseText(resourcefulProblemSolvingText)}
  </div>


  <div>

      <div style={gistStyle()}>
        <ReactEmbedGist contentClass ="gistStyles" titleClass="displayNone" gist={carouselCode}/>
      </div>

<br></br>

      <div style={gistStyle()}>
        <ReactEmbedGist contentClass ="gistStyles" titleClass="displayNone" gist={modalCode}/>
      </div>

<br></br>

  </div>

  </>}


  </div>)
}

export default Development
