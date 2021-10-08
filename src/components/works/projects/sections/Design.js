import ImageFadeIn from '../../../../customHooks/imageFadeIn'
import ImageOverflow from './section-components/ImageOverflow'

import { IoColorFilterOutline as ColorIcon } from "react-icons/io5";
import { IoTextOutline as TypographyIcon } from "react-icons/io5";
import { IoAlbumsOutline as LofiIcon } from "react-icons/io5";
import { IoShapesOutline as HifiIcon } from "react-icons/io5";



import Accordion from './section-components/Accordion'

const Design = ({s, m, l, designText, designEmphasis,typography, color, lofiWireframesImg, hifiWireframesImg, typographyRefImages, typographyFinalImg}) => {

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

<div className="Column"style={{margin:textMargin()}}>

        {typography &&
          <div style={{padding:l?"2rem":"1.5rem", width:m?"25rem":"80vw"}}>
          <h4 className="Row" style={{margin:"2rem 0"}}>
          <TypographyIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
          Typography</h4>

          <div className={m?"Row":"Column"}>
          <div id="typography-col-1" style={{width:m?"25rem":"80vw"}}>
          {typography.split("/").map((section)=>{
          return <>
          <div className="body1">
          {section}
          </div>
          <br></br>
          </>
          })}
          </div>

          <div id="typography-col-2">
            <ImageOverflow m={m} height="20rem" images={typographyRefImages}/>
          </div>

          </div>

          </div>}

        {color &&
          <div style={{padding:l?"2rem":"1.5rem", width:m?"40rem":"80vw"}}>
          <h4 className="Row" style={{margin:"2rem 0"}}>
          <ColorIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
          Color</h4>

          <Accordion m={m} l={l}/>

          </div>}


        <div className={m?"Row":"Column"}>
            {lofiWireframesImg && <>

              <h4 className="Row" style={{margin:"2rem 0"}}>
                <LofiIcon style={{alignSelf:"center", marginRight:"0.8rem"}}/>
              Lofi Wireframes</h4>
              <div className={m?"Row":"Column"}>
               <ImageFadeIn src={lofiWireframesImg} style={{
                 filter:"saturate(0.5)",
                 width: "80vw",
                 height:"60vh",
                 display: "block",
                 objectFit:"cover"}}/>
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
