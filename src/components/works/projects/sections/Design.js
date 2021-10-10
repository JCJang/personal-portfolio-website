import ImageFadeIn from '../../../../customHooks/imageFadeIn'
import ImageOverflow from './section-components/ImageOverflow'
import HumanitiesColorSection from './section-components/HumanitiesColorSection'

import { IoColorFilterOutline as ColorIcon } from "react-icons/io5";
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

const Design = ({s, m, l, designText, designEmphasis,typography, color, lofiWireframesImg, hifiWireframesImg, typographyRefImages, typographyFinalImg,finalTypography, colorWireframes, colorTextures, colorDescriptions, colorMoodboards, colorColors, colorTitles}) => {

  const serifTypes = [handwriting, modern, oldStyle, sans, slab, transitional]

      const designStyle = () => {
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
      <div className="Column" id="design" style={designStyle()}>

<div className={m?"Row":"Column"} style={{margin:textMargin()}}>

        <div id="summary-col-1" className="Column" style={{padding:l?"2rem":"1.5rem", width:m?"40rem":"80vw"}}>
        <h2 className="ProjectSectionTitle">Design Process</h2>

        <br></br>
        <div className="body1">
        {designText}
        </div>
        </div>

        <div id="summary-col-2" className="Column" style={{padding:m?"8rem 2rem 2rem 5rem":"0 1.5rem 1.5rem 1.5rem",width:m?"25rem":"80vw"}}>
        <br></br>
        <h5><em>{designEmphasis}</em></h5>

        </div>

      </div>

<div className="Column">

        {typography &&
          <div>
          <h4 className="Row" style={{margin:"2rem 5rem"}}>
          <TypographyIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
          Typography</h4>

          <div className={m?"Row":"Column"}>
          <div id="typography-col-1" style={{width:m?"25rem":"80vw",margin:textMargin()}}>
          {typography.split("/").map((section)=>{
          return <>
          <div className="body1">
          {section}
          </div>
          <br></br>
          </>
          })}
          </div>

          <div id="typography-col-2" style={{width:m?"calc(100vw - 25rem - 4rem)":"100vw"}}>
            <ImageOverflow m={m} height="20rem" images={typographyRefImages}/>
          </div>
          </div>

          <div className="RowCentered" style={{margin:textMargin()}}>
          {finalTypography.map((typography)=>{

            return <div className={m?"RowCentered":"ColumnCentered"} style={{padding:"0 3rem", width:"30vw", justifyContent:"flex-start", height:!m && "15vh"}}>
            <div>
            <img src={serifTypes[typography.slice(0,1)-1]} style={{height:"9vw",width:"auto"}}></img>
            </div>
            <div className="subtitle2" style={{color:"var(--midnight)", width:m?"13vw":"28vw", marginLeft:"2rem", marginTop:!m&&"1rem"}}>
            {typography.slice(2)}
            </div>
            </div>})}
          </div>

          <div className="RowCentered" style={{height:"80vh", margin:"2rem 0",  width:"100vw", background:"var(--table-light)"}}>
          <ImageOverflow m={m} height="70vh" images={[typographyFinalImg]}/>
          </div>
          </div>}

        {color &&
          <div style={{padding:l?"2rem":"0", width:m?"40rem":"100vw"}}>
          <h4 className="Row" style={{margin:"2rem 0"}}>
          <ColorIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
          Color</h4>

          {colorWireframes && colorWireframes.map((wireframe, number)=>{
            return <HumanitiesColorSection
                  m={m}
                  l={l}
                  direction="lr"
                  number={number}
                  designColors={["blue", "green", "red"]}
                  designTitle={colorTitles[number]}
                  textMargin={textMargin}
                  colorWireframe={wireframe}
                  colorTexture={colorTextures[number]}
                  colorMoodboard={colorMoodboards[number]}
                  designDescription={colorDescriptions[number]}/>
          })}

          </div>}


        <div className="Column">
            {lofiWireframesImg && <>

              <h4 className="Row" style={{margin:"2rem 0"}}>
                <LofiIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
              Lofi Wireframes</h4>
              <div className="RowCentered" style={{height:l?"70vh":"85vh", margin:"2rem 0",  width:"100vw", background:"var(--table-light)"}}>
              <ImageOverflow m={m} height={l?"60vh":"75vh"} images={[lofiWireframesImg]} style={{filter:"saturate(0)"}}/>
              </div>
          </>}

        </div>

            <div className={m?"Row":"Column"}>
            {hifiWireframesImg && <>

              <h4 className="Row" style={{margin:"2rem 0"}}>
                <HifiIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
              HiFi Wireframes</h4>
              <div className={m?"Row":"Column"}>
               <ImageFadeIn src={hifiWireframesImg} style={{
                 filter:"saturate(0.5)",
                 width: "80vw",
                 height:"60vh",
                 display: "block",
                 objectFit:"cover"}}/>
              </div>
          </>}

        </div>
      </div>


      </div>
    )
}

export default Design
