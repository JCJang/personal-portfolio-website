import ImageFadeIn from '../../../../customHooks/imageFadeIn'
import ImageOverflow from './section-components/ImageOverflow'

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
  developmentEmphasis,
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
  functionalText,
  functionalCode,
  functionalProgrammingImages,
  functionalProgrammingTitles
}) => {

  const developmentStyle = () => {
    return {background: "var(--works-bg)", color: "var(--works-text)", margin: "0", padding: "0"}
  };

  const textMarginStyle=()=>{
    if (m) return {
      margin:"1rem 5rem",
    }
    return {margin:"1rem 2rem"}
  }

  const textMarginStyleRows=()=>{
    if (m) return {
      margin:"1rem 5rem",
      gap:"5rem"
    }
    return {margin:"1rem 2rem"}
  }


  const textMarginStyleH3=()=>{
    if (m) return {
      margin:"1rem 5rem",
      color:"var(--midnight)"
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
      marginRight: "0.8rem"
    }
  }

  const gistStyle = () => {
    const result = textMarginStyle()
    return result
  }

  const overflowStyle = () => {
    return {
      width:"100vw",
      background:"var(--table-light)"
    }
  }

  return (
  <div className="Column" id="development" style={developmentStyle()}>

    <h2 className="ProjectSectionTitle" style={{ margin: textMargin()}}>Development</h2>

    <div className={m
        ? "Row"
        : "Column"}
      style={textMarginStyleRows()}>

      <div id="summary-col-1" className="Column" style={colLarge()}>

        <br></br>
        <div className="body1">
          {developmentText}
        </div>
      </div>

    <div id="summary-col-2" className="Column" style={colHalf()}>
        <h5>
          <em>{developmentEmphasis}</em>
        </h5>
    </div>
    </div>

    <h3 style={textMarginStyleH3()}>Resources and Backend</h3>


  <div className="body1" style={textMarginStyle()}>
          {resourcesText}</div>


  <h4 className = "Row" style = {textMarginStyle()} > <ScreensIcon style={iconStyle()}/>
        Screens and Features</h4>


  <div className = {m?"grid-container-resources":"grid-container-resources-mobile"} style = {textMarginStyle()}>
          {screenTitles.map((screen, i) => {
            return <>
            <ScreensLabel m = {m}
            screen = {screen}
            features = {screenFeatures[i]}/>

            <div>{screenDescriptions[i]}</div>
          </>
          })
        }
</div>

<h4 className = "Row" style = {textMarginStyle()} >
  <DatabaseIcon style={iconStyle()}/> Database Design</h4>

<div className = "body1"  style = {textMarginStyle()}> {databaseText}</div>

<div style={gistStyle()}>
  <ReactEmbedGist contentClass ="gistStyles" titleClass="displayNone"  gist={databaseCode}/>
</div>

<h4 className = "Row" style = {textMarginStyle()} >
  <ServerIcon style={iconStyle()}/>Server</h4>
    <div className = "body1"  style = {textMarginStyle()}> {serverText}</div>

      <div style={gistStyle()}>
        <ReactEmbedGist contentClass ="gistStyles" titleClass="displayNone"  gist={serverCode}/>
      </div>

    <h3 className="Column" style={textMarginStyleH3()}>Frontend and problem-solving</h3>

    <h4 className="Row" style={textMarginStyle()}>
        <RelationIcon style={iconStyle()}/>
        Implementing Search by Related Authors</h4>

  <div className="body1" style={textMarginStyle()}>
    {relationalSearchText}
  </div>

<br></br>

    <div style={overflowStyle()}>
      <ImageOverflow images={relationalSearchImages} titles={relationalSearchTitles}/>
    </div>

<br></br>

    <div>
      <div style={gistStyle()}>
        <ReactEmbedGist contentClass ="gistStyles" titleClass="displayNone"  gist={relationalSearchClientCode}/>
      </div>

<br></br>

      <div style={gistStyle()}>
        <ReactEmbedGist contentClass ="gistStyles" titleClass="displayNone"  gist={relationalSearchServerCode}/>
      </div>

    </div>

    <div className="RowCentered" style = {textMarginStyle()}>
      <ImageFadeIn src={relationalSearchResultImg} style={{
          width: m
            ? "60vw"
            : "auto",
          height: m
            ? "auto"
            : "60vh",
          overflowX: !m && "auto",
          display: "block",
          objectFit: "cover"
        }}/>
    </div>

 <h4 className = "Row" style = {textMarginStyle()} >
        <FunctionalIcon style={iconStyle()}/>
        Customizing Timelines with Functional programming </h4>

        < div className = "body1" style={textMarginStyle()}> {functionalText}</div>

      <div style={gistStyle()}>
        <ReactEmbedGist contentClass ="gistStyles" titleClass="displayNone"  gist={functionalCode}/>
      </div>

<br></br>

    <div style={overflowStyle()}>
      <ImageOverflow images={functionalProgrammingImages} titles={functionalProgrammingTitles}/>
    </div>
  </div>)
}

export default Development
