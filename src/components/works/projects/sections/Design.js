import ImageFadeIn from '../../../../customHooks/imageFadeIn'
import ImageOverflow from './section-components/ImageOverflow'
import HumanitiesColorSection from './section-components/HumanitiesColorSection'
import PharmacyColorSection from './section-components/PharmacyColorSection'

import { IoTextOutline as TypographyIcon } from "react-icons/io5";
import { IoAlbumsOutline as LofiIcon } from "react-icons/io5";
import { IoShapesOutline as HifiIcon } from "react-icons/io5";

import handwriting from './images/font-types/1-handwriting.png'
import modern from './images/font-types/2-modern.png'
import oldStyle from './images/font-types/3-old-style.png'
import sans from './images/font-types/4-sans.png'
import slab from './images/font-types/5-slab.png'
import transitional from './images/font-types/6-transitional.png'



import Accordion from './section-components/Accordion'

const Design = ({s, m, l, lofi, typography, typographyEmphasis, color, lofiWireframesImage, hifiWireframesImages, hifiWireframesTitles, typographyRefImages,typographyRefTitles, typographyFinalImg,finalTypography, colorSection, colorWireframes, colorTextures, colorText, colorDescriptions, colorMoodboards,colorLabels, colorHexes, colorTitles}) => {

  const serifTypes = [handwriting, modern, oldStyle, sans, slab, transitional]

      const designStyle = () => {
        return {
          background:"var(--works-bg)",
          color: "var(--works-text)",
          margin:"0",
          padding:"0",
        }
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
     const overflowStyle = () => {
       return {
         width:"100vw",
         background:"var(--table-light)"
       }
     }

    return (
<div className="Column" id="design" style={designStyle()}>

  <h2 className="ProjectSectionTitle" style={textMarginStyle()}>Design Process</h2>

  <h4 className="Row" style={textMarginStyle()}>
    <LofiIcon style={iconStyle()}/>
  Low-fidelity Wireframes</h4>

  <div style={textMarginStyle()}>{lofi}</div>

  <br></br>

  <div className="RowCentered" style={overflowStyle()}>
    {lofiWireframesImage && <ImageOverflow m={m} height={l?"60vh":"75vh"} images={[lofiWireframesImage]} style={{filter:"saturate(0)"}}/>}
  </div>

  <br></br>

  <h4 className="Row" style={textMarginStyle()}><TypographyIcon style={iconStyle()}/>
  Typography</h4>

  <div className={m?"Row":"Column"} style={textMarginStyleRows()}>
    <div id="typography-col-1" style={colLarge()}>
        {typography.split("/").map((section)=>{
        return <>

            <div className="body1">
            {section}
            </div>

            <br></br>
        </>
        })}
    </div>

    <div id="typography-col-2" style={colHalf()}>
        <h5><em>{typographyEmphasis}</em></h5>
    </div>
  </div>

  <div style={textMarginStyle()}>
    <ImageOverflow m={m} height="60vh" images={typographyRefImages} titles={typographyRefTitles} style={{filter:"saturate(0)"}}/>
  </div>

  <br></br>

  <div className="RowCentered" style={textMarginStyle()}>

    {finalTypography.map((typography)=>{
      return <div className={m?"RowCentered":"ColumnCentered"} style={{padding:"0 2rem", width:"28vw", justifyContent:"flex-start", height:!m && "15vh"}}>
      <div>
      <img src={serifTypes[typography.slice(0,1)-1]} style={{height:"8vw",width:"auto"}}></img>
      </div>
      <div className={`${typography.split(':')[1].split(/\s/).join(" ").trim()}`} style={{color:"var(--midnight)", fontSize:"1.2rem", width:m?"13vw":"28vw", marginLeft:"2rem", marginTop:!m&&"1rem"}}>
      {typography.slice(2)}
      </div>
      </div>})}

  </div>

  <br></br>

  <div className="RowCentered" style={overflowStyle()}>
      {typographyFinalImg && <ImageOverflow m={m} height="70vh" images={[typographyFinalImg]}/>}
  </div>

  <div style={{width:"100vw", background:"var(--cinerous)", color:"var(--occlusion)"}}>

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
      }):colorSection==="Pharmacy"?
       <PharmacyColorSection
            m={m}
            l={l}
            designColorLabels={colorLabels}
            designColorHexes={colorHexes}
            designTitle={colorTitles}
            textMargin={textMargin}
            colorWireframe={colorWireframes}
            colorText={colorText}
            colorTexture={colorTextures && colorTextures}
            colorMoodboard={colorMoodboards}
            designDescription={colorDescriptions}/>
        :""
      }

  </div>


  <h4 className="Row" style={textMarginStyle()}><HifiIcon style={iconStyle()}/>
  High-fidelity Wireframes</h4>

  <br></br>

  <div className="RowCentered" style={overflowStyle()}>
    {hifiWireframesImages && <ImageOverflow m={m} height={l?"60vh":"75vh"} images={hifiWireframesImages} titles={hifiWireframesTitles} style={{filter:"saturate(0.8)"}}/>}
  </div>

  <br></br>

  <div className={m?"Row":"Column"} style={textMarginStyleRows()} style={{background:"var(--midnight)",color:"var(--table-neutral)"}}>

    <div id="design-direction-col-1" className="Column" style={colLarge()}>
        <h6><strong>With the high fidelity wireframes ready, I had to return to my features map and begin the development process. However, the design process is far from over. Throughout development, I made changes and improvements to the design, such as stripping the navigation bar of its individual color and and making it blend in with the rest of the page. By doing so, I reinforced the single-page feeling that was a key target for the design.</strong></h6>

        <div className="boxDecoration" style={{borderColor:"var(--table-neutral)"}}></div>

        <h6><strong>hi</strong></h6>
    </div>

    <div id="design-direction-col-2" className="Column" style={colSmall()}>

      <div className="overline" style={{margin:"2rem 0"}}>DESIGN KEYWORDS:</div>
      hi
    </div>

    <div style={{width:"0.1px",  borderLeft: "1.5px solid var(--neutral)", margin:"2rem"}}></div>
  </div>

</div>
    )
}

export default Design
