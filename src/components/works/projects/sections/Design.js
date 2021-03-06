import ImageOverflow from './section-components/ImageOverflow'
import HumanitiesColorSection from './section-components/HumanitiesColorSection'
import PharmacyColorSection from './section-components/PharmacyColorSection'
import PersonalColorSection from './section-components/PersonalColorSection'
import TrekinnColorSection from './section-components/TrekinnColorSection'
import Fade from 'react-reveal/Fade';

import { IoTextOutline as TypographyIcon } from "react-icons/io5";
import { IoAlbumsOutline as LofiIcon } from "react-icons/io5";
import { IoAccessibilityOutline as UsabilityIcon } from "react-icons/io5";
import { IoShapesOutline as DesignSystemIcon } from "react-icons/io5";
import { IoPhonePortraitOutline as HifiIcon } from "react-icons/io5";
import { IoGlassesOutline as PrototypeIcon } from "react-icons/io5";


import handwriting from './images/font-types/1-handwriting.png'
import modern from './images/font-types/2-modern.png'
import oldStyle from './images/font-types/3-old-style.png'
import sans from './images/font-types/4-sans.png'
import slab from './images/font-types/5-slab.png'
import transitional from './images/font-types/6-transitional.png'



import Accordion from './section-components/Accordion'
const Design = ({
  s,
  m,
  l,
  lofi,
  typography,
  typographyEmphasis,
  color,
  lofiWireframesImage,
  usability,
  usabilityTitlesArr,
  usabilityResultsArr,
  usabilityApplicationArr,
  designSystemImages,
  designSystemTitles,
  hifiWireframesImages,
  hifiWireframesTitles,
  typographyRefImages,
  typographyRefTitles,
  typographyFinalImg,
  finalTypography,
  colorSection,
  colorWireframes,
  brandColorFinal,
  colorTextures,
  colorText,
  colorDescriptions,
  colorMoodboards,
  moodboardText,
  colorLabels,
  colorHexes,
  finalColorLabels,
  finalColorHexes,
  colorTitles,
  prototype,
  prototypeIllustration,
  prototypeLink
}) => {

  const serifTypes = [handwriting, modern, oldStyle, sans, slab, transitional]

      const designStyle = () => {
        return {
          background:"var(--works-bg)",
          color: "var(--works-text)",
          margin:"0",
          padding:"0"
        }
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

    return (

<div className="Column" style={designStyle()}>
  <h2 className="ProjectSectionTitle" style={textMarginStyleHeader()}>Design Process</h2>

{lofi && <>

  <h4 className="Row" style={textMarginStyleH4()}>
    <LofiIcon style={iconStyle()}/>
  Low-fidelity Wireframes</h4>

  <div style={textMarginStyle()}>
  {parseText(lofi)}
  </div>
  <br></br>

<Fade>
  <div className="RowCentered" style={overflowStyle()}>
    {lofiWireframesImage && <ImageOverflow l={l}m={m} height={l?"60vh":"75vh"} alt="low fidelity wireframes" images={[lofiWireframesImage]} style={{filter:"saturate(0)"}}/>}
  </div>
</Fade>

  <div style={{marginBottom:extraSpacing()}}></div>

  </>}

{usability && <>
  <h4 className="Row" style={textMarginStyleH4()}>
    <UsabilityIcon style={iconStyle()}/>
  Usability study</h4>

  <div style={textMarginStyle()}>
    {parseText(usability)}
    </div>

  <div style={textMarginStyle()}>
  <Accordion m={m} l={l} sectionTitles={usabilityTitlesArr} sectionResultsArr={usabilityResultsArr} sectionApplicationArr={usabilityApplicationArr}/>
  </div>
</>
}

  <h4 className="Row" style={textMarginStyleH4()}><TypographyIcon style={iconStyle()}/>
  Typography</h4>

  <div className={m?"Row":"Column"} style={textMarginStyleRows()}>
    <div id="typography-col-1" style={typographyEmphasis && colLarge()}>
    {parseText(typography)}
    </div>

{typographyEmphasis &&
    <div id="typography-col-2" style={colHalf()}>
        <h5 style={{paddingTop:col2PaddingTop()}} ><em>{typographyEmphasis}</em></h5>
    </div>
}
  </div>
<Fade>
  <div>
    <ImageOverflow l={l} m={m} height={l?"50vh":"35vh"} images={typographyRefImages} titles={typographyRefTitles} style={{filter:"saturate(0)"}}/>
  </div>

<div style={{marginBottom:extraSpacing()}}></div>

  <div className={m?"RowCentered":"ColumnCentered"} style={textMarginStyle()}>

    {finalTypography.map((typography)=>{
      return <div className={m?"RowCentered":"ColumnCentered"} style={{padding:m?"0 2rem":"2rem", width:"28vw", justifyContent:"flex-start"}}>
      <div>
      <img src={serifTypes[typography.slice(0,1)-1]} alt={`${serifTypes[typography.slice(0,1)-1]} serif`} style={{height:m?"8vw":"100px",width:"auto"}}></img>
      </div>
      <div className={`${typography.split(':')[1].split(/\s/).join("").trim()}`} style={{color:"var(--midnight)", fontSize:"1.2rem", width:m?"13vw":"28vw", marginLeft:m&&"2rem", marginTop:!m&&"1rem", textAlign:!m && "center"}}>
      {typography.slice(2)}
      </div>
      </div>})}

  </div>
</Fade>

<div style={{marginBottom:extraSpacing()}}></div>

  <div className="RowCentered" style={overflowStyle()}>
      {typographyFinalImg && <ImageOverflow l={l} m={m} height="50vh" alt="final typography choices" images={[typographyFinalImg]}/>}
  </div>
  <div style={{width:"100vw", background:"var(--cinerous)", color:"var(--occlusion)"}}>
  <div style={{paddingBottom:extraSpacing()}}></div>
      {colorSection==="Humanities"? colorWireframes.map((wireframe, number)=>{
        return <HumanitiesColorSection
              m={m}
              l={l}
              number={number}
              designColorLabels={colorLabels[number]}
              designColorHexes={colorHexes[number]}
              designTitle={colorTitles[number]}
              textMargin={textMargin}
              colorWireframe={wireframe}
              colorTexture={colorTextures && colorTextures[number]}
              colorMoodboard={colorMoodboards[number]}
              designDescription={colorDescriptions[number]}/>
      })
      :colorSection==="Pharmacy"?
       <PharmacyColorSection
            m={m}
            l={l}
            textMargin={textMargin}
            designColorLabels={colorLabels}
            designColorHexes={colorHexes}
            designTitle={colorTitles}
            textMargin={textMargin}
            colorWireframes={colorWireframes}
            brandColorFinal={brandColorFinal}
            colorText={colorText}
            colorTexture={colorTextures && colorTextures}
            colorMoodboard={colorMoodboards}
            designDescription={colorDescriptions}/>
      :colorSection==="Personal"?
      <PersonalColorSection
           m={m}
           l={l}
           textMargin={textMargin}
           designColorLabels={colorLabels}
           designColorHexes={colorHexes}
           finalColorLabels = {finalColorLabels}
           finalColorHexes ={finalColorHexes}
           designTitle={colorTitles}
           textMargin={textMargin}
           colorWireframes={colorWireframes}
           brandColorFinal={brandColorFinal}
           colorText={colorText}
           colorTexture={colorTextures}
           colorMoodboard={colorMoodboards}
           moodboardText={moodboardText}
           designDescription={colorDescriptions}/>
        :colorSection==="Trekinn"?
        <TrekinnColorSection
             m={m}
             l={l}
             textMargin={textMargin}
             designColorLabels={colorLabels}
             designColorHexes={colorHexes}
             finalColorLabels = {finalColorLabels}
             finalColorHexes ={finalColorHexes}
             designTitle={colorTitles}
             textMargin={textMargin}
             colorWireframes={colorWireframes}
             brandColorFinal={brandColorFinal}
             colorText={colorText}
             colorTexture={colorTextures}
             colorMoodboard={colorMoodboards}
             moodboardText={moodboardText}
             designDescription={colorDescriptions}/>
             :""
      }
  <div style={{paddingBottom:extraSpacing()}}></div>
  </div>


{designSystemImages && <>
  <div style={{paddingBottom:extraSpacing()}}></div>

  <h4 className="Row" style={textMarginStyleH4()}><DesignSystemIcon style={iconStyle()}/>
  Design System</h4>

  <br></br>
  <div className="RowCentered" style={overflowStyle()}>
  <ImageOverflow l={l} m={m} height={l?"100vh":"85vh"} images={designSystemImages} titles={designSystemTitles} alt="design system" style={{filter:"saturate(0.8)"}}/>

  </div>
  <div style={{paddingBottom:extraSpacing()}}></div>

</>}

<br></br>

  <h4 className="Row" style={textMarginStyleH4()}><HifiIcon style={iconStyle()}/>
  High-fidelity Wireframes</h4>

  <br></br>
<Fade>
  <div className="RowCentered" style={overflowStyle()}>
    {hifiWireframesImages && <ImageOverflow l={l} m={m} height={l?"80vh":"50vh"} images={hifiWireframesImages} titles={hifiWireframesTitles} alt="high fidelity wireframes" style={{filter:"saturate(0.8)"}}/>}
  </div>
</Fade>
  {prototype && <>
  <div style={{color:"var(--velvet)", background:"var(--cinerous)"}}>
  <div style={{paddingBottom:extraSpacing()}}></div>

  <h4 id="prototype"  className="Row" style={textMarginStyleH4()}><PrototypeIcon style={iconStyle()}/>
  motion design and Prototype</h4>

  <div style={textMarginStyle()}>
  {parseText(prototype)}
  </div>

  <Fade>
  <div className="RowCentered" style={{height:"60vh"}}>
   <ImageOverflow l={l} m={m} height={l?"70vh":"75vh"} images={prototypeIllustration} alt="motion design hierarchy of prototype" style={{filter:"saturate(0.8)"}}/>
  </div>
  </Fade>
  <div style={{paddingBottom:extraSpacing()}}></div>

  <div className="selfCentered" style={{height:"800px", width:"100vw", overflowX:"auto", padding:textMargin()}}>
      <div style={{paddingBottom:extraSpacing()}}></div>

      <iframe title="prototype" width="400px" height="800px" style={{all:"inherit"}} src={prototypeLink} allowfullscreen></iframe>

      <div style={{paddingBottom:extraSpacing()}}></div>

  </div>
</div>
</>}

</div>
    )
}

export default Design
