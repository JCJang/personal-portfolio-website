import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';

//summary
import Summary from '../sections/Summary'


//research
import Research from '../sections/Research'

//design
import Design from '../sections/Design'

import hifiMobile from './images/hifi-mobile.png'
import hifiDesktop from './images/hifi-desktop.png'

import textRefHandwritten from './images/textRef-handwritten-options.png'
import textRefAllOptions from './images/textRef-typography-options.jpg'
import textRefBodyText from './images/textRef-body-text-readability-comparison.png'

import typographyFinalImg from './images/typography-final.png'

import texture from './images/moodboard-color-description.png'
import moodboard from './images/moodboard.jpg'
import wireframe from './images/photo-desaturated.jpg'


//Development
import Development from '../sections/Development'


import Footer from '../sections/Footer'


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

         research="Ideation, Research, and user flow"
         design="color, typography, and wireframes"
         development = "defining resources and problem-solving in React"

         title="Personal Website"
         roles="Design and Development"

         challenge="How can I design a scalable and maintainable portfolio website?"
         solution="By using a design system and creating reusable sections and components."
         summary="Welcome to a very self-referential case study. With the established contents of the standard portfolio website structure allowed me to focus more on design rather than research, and I experimented with concurrent design and development after establishing a design system. By creating reusable components and keeping the development process organized, I was able to design and launch my react website in 20 days."
         />

         <span id="research"></span>
       <Research
         m={m}
         l={l}


         researchText="As a hybrid designer/developer, I had to figure out how to present information in my portfolio and how. Many other designer-developers organize their projects according to their roles, but since all of my projects thus far are solo projects, and they are few in count, I felt that there is no need to separate them by category. Instead, I can list the roles on each. "

         competitiveAnalysis="The Google UX design certificate for ux portfolio guidelines – at least 3 projects, ‘Clear and concise’ and ‘skimmable’. Online articles suggest that each case study should include a summary section, and I later expanded into a table of contents in the case that recruiters are more interested in one section than the other. I also looked at many web developer portfolio reviews to see what I should or should not include. Many key words that came up include ‘thought process’ and ‘actual code,’ so I needed to incorporate these elements. For this reason, my case studies are on the wordier side when compared to other UX portfolios, but I also included many visuals for each page to be easy to skim. For code, I created gist samples that are clear and succinct and demonstrate problem solving. /I viewed many portfolios online, and noticed that most are minimalistic but on the masculine side, with bold black and white, background-removed photos, and all sans serif, they convey big tech companies or sports brands.Although I tried this layout at first, I decided to scrap that design direction and go for something that is more reflective of my design taste. I wanted an elegant design that is more feminine, with bold but tasteful colors, and a handwritten font for a personal touch. For the tone a straightforward, succinct, but so informative and reflective of my that communication style."

         competitiveAnalysisEmphasis="I wanted an elegant design that is more feminine, with bold but tasteful colors, and a handwritten font for a personal touch."


         screenTitles={[`Works`, "About", `Contact`, 'nice to have']}
         screenFeatures={[
           ["Works minimum of three projects, with summary", "photo"], ["personal story", "values", "hobbies", "CV link"],
           ["email","contact form", "social medial links"], ["data visualization - book and spokes", "filter by referenced works/their authors"],
           ["page transition animations", "custom 404 page", "loading animation", "nav and logo animation"]
          ]}

         designKeywords={["elegant", "tailored", "simplistic", "magazine-style"]}
         designTone={["straightforward", "succinct", "genuine", "informative"]}
        />

        <span id="design"></span>
        <Design m={m} l={l}

        typography="I wanted fonts that are elegant and approachable. I first decided on a serif font for headers, a handwritten font for details and styling, and a sans serif font for the body text./With this general idea in mind, I began browsing Google fonts for the header font. At first I considered modern serifs, but due to the feeling of unapproachability they convey, I turned to old-style serifs that never fail to convey craft and timelessness. I wanted one with a tall, elongated stem, and found two that are to my liking. I found three that I liked and noted them down, but there were numerous sans serif fonts that are similar to the header font, a similar shape and feeling, elongated and slim with a longer stem./I created a table of each header and body combination, then assigned each combination the most complementary handwritten font, leaving me with over a dozen choices. I finally decided on Lusitana for the header, Yaldevi for the subtitles, and La Belle Aurore for the handwritten font./Later in the development process I realized that Yaldevi can be quite difficult to read, so I brought in IBM Plex Sans to replace Yaldevi as the font, keeping Yaldevi for subtitles only, for I still is the best match for my headings font."

        finalTypography={["1-Logo & Decoration: La Belle Aurore", "3-App Headings: Lusitana", "4-Subtitles: Yaldevi", "4-body: IBM Plex Sans"]}
        typographyRefImages={[textRefHandwritten, textRefAllOptions,textRefBodyText]}
        typographyRefTitles={["options for handwritten fonts", "all font combination options","comparison of readability between 'Yaldevi' and 'IBM Plex Sans'"]}
        typographyFinalImg={typographyFinalImg}

        finalColorLabels={["velvet", "cinereous", "neutral"]}
        finalColorHexes ={["#611016", "#C1BEBE","#DDE1E4"]}
        colorLabels={["rose", "highlight","celadon", "lilac", "midnight"]}
        colorHexes ={["#A94758","#e7b1a7","#A8B4B6","#79839C", "#2E3B4A"]}

        designTitle ="Color Ideation"
        colorSection="Personal"

        hifiWireframesImages={[hifiMobile, hifiDesktop]}
        hifiWireframesTitles={["Mobile screens", "Desktop screens"]}

        colorTitles="Color as Personality"
        colorDescriptions="Since I consider color choices one of my design strengths, I wanted my portfolio to have exceptional colors."
        colorWireframes={wireframe}
        moodboardText="Using Pexels.com, I found various images which color palette really speak to me, most of which have desaturated colors except for a dark pink color. The colors convey very different messages on their own, and together, really speak to me."

        colorTextures={texture}
        colorText="Noticing that the colors in the moodboard alone are too dreamy and unrooted, I added a bold and timeless burgundy. Greys are also key. In art I have learned that greys are the key to guiding the eye on the canvas and making saturated colors stand out. In fashion, greys not only convey professionality, but also elegance. / To neutralize the pastel-like colors, I added a warm mid-dark grey, and by desaturating my photo elements, brought out many neutral greys. Adding subtle gradients to the design language adds groundedness. A friend noted that the works design has a magazine-like quality in it, which I decided to playout in my layout, adding elements such as dual columns, linear separators, and italics. I even included a tiny banner in the works section"
        colorMoodboards={moodboard}

     />
        <Footer m={m} l={l}/>

      </div>
    )
}

export default ProjectPersonal
