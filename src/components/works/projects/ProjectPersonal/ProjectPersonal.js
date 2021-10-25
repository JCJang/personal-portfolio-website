import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';

//summary
import Summary from '../sections/Summary'
import mainImageV from './images/main-v.jpg'
import mainImageH from './images/main-h.jpg'

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

import inlineCSSFunctions from './images/organization-inline-CSS-style-functions.jpg'
import sectionLayout from './images/organization-layout.jpg'
import projectParentText from './images/organization-text-only-project-files.jpg'


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
          mainImage={m?mainImageH:mainImageV}
         research="Ideation, Research, and user flow"
         design="color, typography, and wireframes"
         development = "defining resources and problem-solving in React"

         title="Personal Website"
         roles="Design and Development"

         challenge="How can I design a scalable and maintainable portfolio website?"
         solution="By using a design system and creating reusable sections and components."
         summary="Welcome to a very self-referential case study. In this project I scoped out what portfolio website requirements are. These established constraints on content allowed me to put more time into design rather than research, and also freed me to jump into development after I establishing a design system. By creating reusable components and keeping the development process organized, I was able to design and launch my react website in 20 days."
         />

         <span id="research"></span>
       <Research
         m={m}
         l={l}


         researchText="As a hybrid designer/developer, I had to figure out what and how to present information in my portfolio website. In my research, I looked at Google's UX design course criteria for online portfolios, portfolios by other designers, and junior web developer portfolio reviews. Using multiple sources, I organized common portfolio criteria for both UX designers and frontend developers."

         competitiveAnalysis="The Google UX design course on coursera states that ux portfolio should containt at least 3 projects, each being ‘Clear and concise’ and ‘skimmable’. Online articles suggest that each case study should include a summary section, and I later expanded into a table of contents in the case that recruiters are more interested in one section than the other./ I also looked at many web developer portfolio reviews to see what I should or should not include. Many key words that came up include ‘thought process’ and ‘actual code,’ so I needed to incorporate these elements. For this reason, my case studies are on the wordier side when compared to other UX portfolios, but I also included many visuals for each page to be easy to skim. For code, I created gist samples that are clear and succinct and demonstrate problem solving. /I viewed many portfolios online, and noticed that most are minimalistic but on the masculine side, with bold black and white, background-removed photos, and all sans serif, they convey big tech companies or sports brands.Although I tried this layout at first, I decided to scrap that design direction and go for something that is more reflective of my design taste. I wanted an elegant design that is more feminine, with bold but tasteful colors, and a handwritten font for a personal touch. Many other designer-developers organize their projects according to their roles, but since all of my projects thus far are solo projects, I felt that there is no need to separate them by category. Instead, I listed the roles on each. I chose a straightforward and informative tone for the content that reflects my communication style."

         competitiveAnalysisEmphasis="I wanted an elegant design that is more feminine, with bold but tasteful colors, and a handwritten font for a personal touch."


         screenTitles={[`Works`, "About", `Contact`, 'nice to have']}
         screenFeatures={[
           ["Works minimum of three projects, with summary", "photo"], ["personal story", "values", "hobbies", "CV link"],
           ["email","contact form", "social medial links"], ["data visualization - book and spokes", "filter by referenced works/their authors"],
           ["page transition animations", "custom 404 page", "loading animation", "nav and logo animation"]
          ]}

         designKeywords={["elegant", "tailored", "simplistic", "magazine-style"]}
         designTone={["straightforward", "genuine", "insightful"]}
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
        colorLabels={["rose", "highlight","celadon", "lavender", "midnight"]}
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
     <span id="development"></span>
    <Development
      m={m}
      l={l}

      developmentText=""

      finalStack=""
      githubRepository="https://github.com/JCJang/personal-portfolio-website"
      frontendText=""
      organizationText="One of the things I wished I learned for my first project was how to plan and organize code.   For instance, I used too much inline css in that project and had to deal with it. I l now have a better understanding of react components and how to reuse them. Since I will be creating many pages for projects, I wanted to create ‘template-like’ sections for me to resuse, so that when I upload future projects, I only have to populate the text areas. In this project, I strived to separate text, inline css, and layout for a cleaner, more maintainable system."
      organizationImages={[inlineCSSFunctions, sectionLayout, projectParentText]}
      organizationTitles={["responsive inline CSS functions", "using CSS functions eliminates clutter from page structure", "parent component passes down text and images"]}

      resourcefulProblemSolvingText="Another skill I practiced in this project is being resourceful and really utilizing open source code and components. Reading documentation and installing npm modules can save myself a lot of time than coding everything myself. After all, the end goal was to make things work. For instance, I to create the Carousel component, I utilized react portal, custom hooks such as useDebounce, useTimeout, and useClickOutside, useClickOutside, ImageFadeIn, react portal, react-zoom-pan-pinch, and a modal tutorial to assemble the carousel and modal."

      carouselCode="JCJang/bff02d9a762c95dfd8b41cabfb937ae7"
      modalCode="JCJang/81b00d9a0f737891b7c3eb666f38f0c4"
         />

        <Footer m={m} l={l}
      impact="lorem ipsum"
      learned="lorem ipsum"/>

      </div>
    )
}

export default ProjectPersonal
