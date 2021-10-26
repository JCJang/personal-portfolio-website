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
        finalScreens={false}
        mainImage={m?mainImageH:mainImageV}
         research="Ideation, Research, and user flow"
         design="color, typography, and wireframes"
         development = "defining resources and problem-solving in React"

         title="Personal Website"
         roles="Design and Development"

         challenge="How can I design a scalable and maintainable portfolio website?"
         solution="By using a design system and creating reusable sections and components."
         summary="In this project I scoped out portfolio content constraints for both UX designers and junior frontend developers, then established a design system so that my website can scale consistently. Finally, I experimented with a new workflow that involves simultaneous design and development. By designing and developing reusable components in React and keeping organized, I was able to launch my react website in 20 days."
         />

         <span id="research"></span>
       <Research
         m={m}
         l={l}


         researchText="As the first step of design, I looked at common portfolio content and structure, referencing Google's UX design course for UX portfolio criteria, and junior web developer portfolio reviews for frontend developer portfolio criteria."

         competitiveAnalysis="The Google UX design course on Coursera recommends that UX portfolios be consistent in tone, and have a minimum of three projects. Each case study should be illustrative of design thinking and process, and provide context, roles, takeaways, and a lot of visuals to make the case study skimmable. The tone should be clear and concise./Junior developer portfolios that received positive feedback shows the developer’s problem-solving skills and thought process, and include a link to the final project and repository. Sections such as ‘Skills’ are discouraged, since evaluators prefer to see how developers apply those skills. Users should have the ability to read about projects before clicking into one, and a summary section should be included at the top of each case study./I began structuring my case study contents according to this criteria. I included many visuals, and I tried to show my trials and errors, and how I solved the situation in each case. I also included many visuals and animations, as well as a table of contents and summary. To illustrate my development process, I created gist samples that demonstrate problem solving and included visuals."

         competitiveAnalysisEmphasis="Each case study should be illustrative of design thinking and process, and provide context, roles, takeaways, and a lot of visuals to make the case study skimmable... ... Sections such as ‘Skills’ are discouraged, since evaluators prefer to see how developers apply those skills."


         screenTitles={[`Works`, "About", `Contact`, 'nice to have']}
         screenFeatures={[
           ["Works minimum of three projects, each with table of contents, summary, context, takeaways", "consistent tone","research", "information architecture","clear navigation","final polished designs"], ["personal story", "photo", "values", "hobbies", "CV link"],
           ["email","contact form", "relevant links", "downloadable resume"],
           ["page transition animations", "custom 404 page", "loading animation", "microinteractions"]
          ]}

         designKeywords={["elegant", "tailored", "simplistic", "magazine-style"]}
         designTone={["straightforward", "genuine", "insightful"]}
        />

        <span id="design"></span>
        <Design m={m} l={l}
        design="While looking at many web developer and web designer portfolios as part of my project research, I noticed that many portfolio designs lean towards the image of “big tech” or “sports” brands, using bold black and white, background-removed photos, and bold sans serif fonts or all-caps text. Although I tried this layout at first, it was ultimately not reflective of my design style or personality; I needed a visual style reflective of my brand identity./By brainstorming on some qualities that make me and my designs unique, and decided on an elegant design, with bold but tasteful colors and a handwritten font that emphasizes craft."

        typography="With that starting point, I began looking at fonts. I wanted to find elegant and approachable fonts, more rectangular than boxed, and with an elongated stem. After briefly considering modern serifs, I decided that they tend to feel unapproachable, and turned to old-style serifs instead. I picked two serif fonts for the header, five sans serif ones for the body, and three for the handwritten decorative font. Then, I created a table of each header and body combination, assigned each combination the most complementary handwritten, then compared each before finally settling on ‘Lusitana’ for the header, ‘Yaldevi’ for the subtitles, and ‘La Belle Aurore’ for the handwritten font./Later in the development process I realized that Yaldevi can be quite difficult to read, so I brought in IBM Plex Sans to replace Yaldevi as the body font, keeping Yaldevi for subtitles."

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

        hifi="After viewing my high-fidelity design, a friend noted that the works design has a magazine-like quality to it. I decided to play with this design motif in my layout, adding elements such as dual columns, linear separators, and italics."
        hifiWireframesImages={[hifiMobile, hifiDesktop]}
        hifiWireframesTitles={["Mobile screens", "Desktop screens"]}

        colorTitles="Color as Personality"
        colorDescriptions="Since I consider color choices one of my design strengths, I wanted my portfolio to have exceptional colors."
        colorWireframes={wireframe}
        moodboardText="Using Pexels.com, I found various images which colors really speak to me, most of which have desaturated colors."

        colorTextures={texture}
        colorText="Noticing that the colors on the moodboard feel a bit too dreamy and eccentric, I added a bold and timeless burgundy./I also sought to add many greys, which not only convey professionality and elegance, but also make saturated colors stand out. The first grey I added to my website was a warm mid-dark grey, which really helped anchor the more vibrant colors on my existing palette. Desaturating photo elements also brought out many neutral greys to work with, while adding subtle gradients over them created further rootedness."
        colorMoodboards={moodboard}

     />
     <span id="development"></span>
    <Development
      m={m}
      l={l}

      developmentText="One of the things I wished I learned for my humanities database project was how to plan and organize code. For instance, I used too much inline CSS, which lead to readability issues whenever I needed to adjust the layout. Learning from that experience, I resolved to clearly plan my development folder tree."

      finalStack="HTML, CSS, JavaScript, React, HTML, CSS, JavaScript, React, Framer Motion."
      stackMemo="Hosted on Netlify"
      githubRepository="https://github.com/JCJang/personal-portfolio-website"

      organizationText="I started out my development process with pen and paper, writing down what template-like components I can create and reuse. As I began development, however, I encountered the same problem as I did before - the clutter of inline CSS. This is because I use a useMediaQuery hook for my responsive design, and cannot define styling classes in a separate file. To solve this problem, I developed class-like styling functions at the top of each component that I can add to elements. My final code separated text, inline CSS, and layout for a cleaner, more maintainable system."

      organizationImages={[inlineCSSFunctions, sectionLayout, projectParentText]}
      organizationTitles={["responsive inline CSS functions", "using CSS functions eliminates clutter from page structure", "parent component passes down text and images"]}

      resourcefulProblemSolvingText="Another skill I practiced while working on this project is being resourceful and really utilizing open source code and components. Although initially I thought that using and referencing too many exterior tools is 'cheating', I realized that my goal was not to make everything from scratch, but to make a functional, responsive website that delivers a high-quality user experience. By reading documentation and installing npm modules, I saved myself a lot of time and energy. For instance, to create the Carousel component and modal, I utilized react portal, code from a modal tutorial, custom hooks such as useDebounce, useTimeout, and useClickOutside, and useful packages like react-image-fade-in, react portal, and react-zoom-pan-pinch."

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
