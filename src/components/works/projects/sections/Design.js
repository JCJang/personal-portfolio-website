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

const Design = ({s, m, l, lofi, typography, typographyEmphasis, color, lofiWireframesImage, hifiWireframesImages, hifiWireframesTitles, typographyRefImages, typographyFinalImg,finalTypography, colorWireframes, colorTextures, colorDescriptions, colorMoodboards,colorLabels, colorHexes, colorTitles}) => {

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
      </div>
</div>

<div className="Column">
          <div className="Column">
              {lofiWireframesImage && <>
                <h4 className="Row" style={{margin:textMargin(), padding:"2rem 0"}}>
                  <LofiIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
                Low-fidelity Wireframes</h4>
                <div>{lofi}</div>
                <div className="RowCentered" style={{height:l?"70vh":"85vh", width:"100vw", background:"var(--table-light)"}}>
                <ImageOverflow m={m} height={l?"60vh":"75vh"} images={[lofiWireframesImage]} style={{filter:"saturate(0)"}}/>
                </div>
            </>}

          </div>

        {typography &&
          <div>

          <div className={m?"Row":"Column"} style={{margin:textMargin()}}>
          <div id="typography-col-1" style={{padding:l?"2rem":"1.5rem", width:m?"30rem":"80vw"}}>

          <h4 className="Row" style={{margin:"2rem 7rem"}}>
          <TypographyIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
          Typography</h4>

          {typography.split("/").map((section)=>{
          return <>
          <div className="body1">
          {section}
          </div>
          <br></br>
          </>
          })}
          <div style={{}}>
          <ImageOverflow m={m} height={l?"30vh":"50vh"} images={[typographyRefImages]} style={{filter:"saturate(0)"}}/>
          </div>
          </div>

          <div id="typography-col-2" className="Column" style={{padding:m?"8rem 2rem 2rem 5rem":"0 1.5rem 1.5rem 1.5rem",width:m?"25rem":"80vw"}}>
          <br></br>

          <div className="body1">
          <h5><em>{typographyEmphasis}</em></h5>
          </div>
          </div>
          </div>


          <div className="RowCentered" style={{margin:textMargin(),paddingBottom:"4rem"}}>
          {finalTypography.map((typography)=>{

            return <div className={m?"RowCentered":"ColumnCentered"} style={{padding:"0 3rem", width:"28vw", justifyContent:"flex-start", height:!m && "15vh"}}>
            <div>
            <img src={serifTypes[typography.slice(0,1)-1]} style={{height:"8vw",width:"auto"}}></img>
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
          <div style={{width:"100vw", background:"var(--cinerous)", color:"var(--occlusion)"}}>
          <h4 className="Row" style={{padding:textMargin()}}>
          <ColorIcon style={{alignSelf:"center", color:"var(--velvet)",marginRight:"0.8rem"}}/>
          Color</h4>

          {colorWireframes && colorWireframes.map((wireframe, number)=>{
            return <HumanitiesColorSection
                  m={m}
                  l={l}
                  direction="lr"
                  number={number}
                  designColorLabels={colorLabels[number]}
                  designColorHexes={colorHexes[number]}
                  designTitle={colorTitles[number]}
                  textMargin={textMargin}
                  colorWireframe={wireframe}
                  colorTexture={colorTextures[number]}
                  colorMoodboard={colorMoodboards[number]}
                  designDescription={colorDescriptions[number]}/>
          })}

          </div>}



        <div className="Column">
            {hifiWireframesImages && <>

              <h4 className="Row" style={{margin:"4rem 5rem"}}>
                <HifiIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
              High-fidelity Wireframes</h4>
              <div className="RowCentered" style={{height:l?"70vh":"85vh",  width:"100vw", background:"var(--table-light)"}}>
              <ImageOverflow m={m} height={l?"60vh":"75vh"} images={hifiWireframesImages} titles={hifiWireframesTitles} style={{filter:"saturate(0.8)"}}/>
              </div>
          </>}

        </div>

        <div className={m?"Row":"Column"} style={{background:"var(--midnight)",color:"var(--table-neutral)", padding:textMargin()}}>
          <div id="design-direction-col-1" className="Column" style={{padding:l?"2rem":"1.5rem", width:m?"40rem":"80vw"}}>



                  <h6><strong>With the high fidelity wireframes ready, I had to return to my features map and begin the development process. However, the design process is far from over. Throughout development, I made changes and improvements to the design, such as stripping the navigation bar of its individual color and and making it blend in with the rest of the page. By doing so, I reinforced the single-page feeling that was a key target for the design.</strong></h6>

                <div className="boxDecoration" style={{borderColor:"var(--table-neutral)"}}></div>

                  <h6><strong>hi</strong></h6>
                  </div>

          <div id="design-direction-col-2" className="Column" style={{padding:l?"2rem":"1.5rem", width:m?"20rem":"80vw"}}>

                  <div className="Column">
                    <div className="Column">
                    <div className="overline" style={{margin:"2rem 0"}}>DESIGN KEYWORDS:</div>
                    hi
                    </div>
                  </div>

                  </div>

                  <div style={{width:"0.1px",  borderLeft: "1.5px solid var(--neutral)", margin:"2rem"}}></div>


              </div>


      </div>


      </div>
    )
}

export default Design
