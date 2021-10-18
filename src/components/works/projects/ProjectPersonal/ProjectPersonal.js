import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';

//summary
import Summary from '../sections/Summary'

//research
import Research from '../sections/Research'

//design
import Design from '../sections/Design'

//Development
import Development from '../sections/Development'

const ProjectPersonal = ({m, l, setRouteFocus}) => {

  const location = useLocation();
  useEffect(()=>{
    setRouteFocus(location.pathname)
  },[])

    return (
      <div style={{
      color:"var(--works-text)",
      width:"100vw",
      height:"var(--desktopheight)",
      overflowY:"auto",
      overflowX:"hidden",
      scrollBehavior: "smooth"}}>


        <Summary
          m={m}
          l={l}

          carousel = {true}
          carouselSlides={[]}
          carouselSlidesTitles={["mobile"]}

         research="Ideation, Research, and user flow"
         design="color, typography, and wireframes"

         title="Personal Website"
         roles="Design and Development"
         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
         summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
         />

         <span id="research"></span>
       <Research
         m={m}
         l={l}
         ideationText="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
         ideationEmphasis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

         researchText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

         competitiveAnalysis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

         competitiveAnalysisEmphasis="Elegant and feminine, links to other pages"


         screenTitles={[`Works`, "About", `Contact`]}
         screenFeatures={[
           ["Works minimum of three projects, with summary"],
           ["basic story, storytelling"],
           ["saved books (read and to read)","saved questions", "contacts and submitted discussion forms","profile settings"], ["data visualization - book and spokes", "filter by referenced works/their authors"]
          ]}

         designKeywords={["single page", "cyclical flow", "minimalistic", "ink and paper"]}
         designTone={["serious", "concise", "rational", "neutral", "reputable", "academic"]}

         userFlowText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
         userFlowImg
        />

        <span id="design"></span>
        <Design m={m} l={l}

        lofi="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        typographyEmphasis="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        typography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        finalTypography={["1-Logo & Decoration: La Belle Aurore", "3-App Headings: Lusitana", "4-Subtitles: Yaldevi", "4-body: IBM Plex Sans"]}
        colorText="orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
        hifiWireframesImages={[]}
        hifiWireframesTitles={["Mobile screens", "Tablet screens", "Desktop screens"]}
        colorSection="Personal"
        colorTitles="Spring"
        colorDescriptions="Shadows are soft, cast by strong, outdoor ambient light."

        colorLabels={["velvet", "desert rose", "highlight","cinereous", "works", "contact"]}
        colorHexes={["#611016","#A94758","#e7b1a7","#C1BEBE","#A8B4B6","#4F577F"]}
        colorWireframes={[]}
        colorTextures={[]}
        colorMoodboards={[]}
        />

      </div>
    )
}

export default ProjectPersonal
