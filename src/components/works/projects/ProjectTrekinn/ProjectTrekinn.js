import ProjectLoader from '../sections/ProjectLoader'
import {motion, AnimatePresence} from 'framer-motion'
import useDebounce from '../../../../customHooks/useDebounce'


import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';

//summary
import Summary from '../sections/Summary'
import mainImageV from './images/main-v.jpg'
import mainImageH from './images/main-h.jpg'
import displayImage1 from './images/carousel-1.jpg'
import displayImage2 from './images/carousel-2.jpg'
import displayImage3 from './images/carousel-3.jpg'
import displayImage4 from './images/carousel-4.jpg'

//research
import Research from '../sections/Research'
import userFlowAfter from './images/user-flow-after.png'
import userFlowBefore from './images/user-flow-before.png'
//design
import Design from '../sections/Design'

import hifiMobile from './images/hifi-mobile.png'
import hifiDesktop from './images/hifi-desktop.png'

import textRefEnglish from './images/textRef-english-options.jpg'
import textRefBodyText from './images/textRef-body-text-readability-comparison.png'

import typographyFinalImg from './images/typography-final.png'

import texture from './images/moodboard-color-description.png'
import moodboard2 from './images/moodboard2.jpg'


//Development
import Development from '../sections/Development'
import Footer from '../sections/Footer'


const ProjectTrekinn = ({m, l, setRouteFocus}) => {

  const location = useLocation();
  useEffect(()=>{
    setRouteFocus(location.pathname)
  },[])

  const [loading, setLoading] = useState(true);
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(()=>{
     setDomLoaded(true)
  },[])

  useDebounce(()=>{
     setLoading(false)
  },1000, [domLoaded])


    return (
      <div style={{
      color:"var(--works-text)",
      width:"100vw",
      height:"var(--desktopheight)",
      overflowY:"auto",
      overflowX:"hidden",
      scrollBehavior: "smooth"}}>


    <AnimatePresence>
    {loading && <motion.div key="loader" style={{
          zIndex:"50",
          width:"100vw",
          height:"100vh",
          position:"absolute",}} exit={{y:1000, transition:{duration:1.2}}}><ProjectLoader/></motion.div>}
    </AnimatePresence>

        <Summary
          m={m}
          l={l}
        finalScreens={true}
        carousel = {true}
        carouselSlides={[displayImage1, displayImage2, displayImage3, displayImage4]}
        carouselSlidesTitles={['user flow - order a refill. The app tracks medication count and highlights medications that are running low. Users have access to live status of their order and pharmacy wait times.','user flow - transfer a medication. Common questions about the transfer process are anticipated, and the user is guided through the process.', 'user flow - add a prescription via scan. The upload process can be overwhelming. Here I found a solution that presents information clearly without overwhelming the user, and also anticipated user questions regarding other methods of adding a prescription, answered in the tab "expand for other options', 'app hierarchy - menu and log-in screens on top, overlays in the middle, and the rest located in two main screens: Rx and Orders.']}

        mainImage={m?mainImageH:mainImageV}
         research="Ideation, Research, and user flow"
         design="color, typography, and wireframes"
         development = "Working with tailwind and i18n in React"

         title="Trekinn Website"
         roles="UI and UX Design, Development, Internationalization"

         challenge="How can I design a scalable and maintainable portfolio website?"
         solution="By using a design system and creating reusable sections and components."
         summary="In this project I scoped out portfolio content constraints for both UX designers and junior frontend developers, then established a design system so that my website can scale consistently. Finally, I experimented with a new workflow that involves simultaneous design and development. By designing and developing reusable components in React and keeping organized, I was able to launch my react website in 20 days."
         websiteLink="vibrant-ritchie-da2a24.netlify.app"

         />

         <span id="research"></span>
       <Research
         m={m}
         l={l}


         researchText="As the first step of design, I looked at common portfolio content and structure, referencing Google's UX design course for UX portfolio criteria, and junior web developer portfolio reviews for frontend developer portfolio criteria."

          competitiveAnalysisEmphasis="Each case study should be illustrative of design thinking and process, and provide context, roles, takeaways, and a lot of visuals to make the case study skimmable... ... Sections such as ‘Skills’ are discouraged, since evaluators prefer to see how developers apply those skills."

          singleStatistic={true}
          statisticTitles={["Do I need a responsive website?"]}
          statisticTexts={["abcd"]}
  
          statisticSources={[["https://datausa.io/profile/geo/maine/"]]}
          userFlowText = "With good user knowledge under my belt, I began organizing the screens into a coherent user flow. I ended up with three main user flows tha all have entry points in the current medications screen. I organized the three flows around two main screens - the orders screen and the current medications screen."

          userFlowImg={userFlowAfter}
         designKeywords={["elegant", "tailored", "simplistic", "brochure-style"]}
         designTone={["straightforward", "genuine", "insightful"]}
        />

        <span id="design"></span>
        <Design m={m} l={l}
        design="While looking at many web developer and web designer portfolios as part of my project research, I noticed that many portfolio designs lean towards the image of “big tech” or “sports” brands, using bold black and white, background-removed photos, and bold sans serif fonts or all-caps text. Although I tried this layout at first, it was ultimately not reflective of my design style or personality./By brainstorming on some qualities that make me and my designs unique, and decided on an elegant design, with bold and tasteful colors and a handwritten font that emphasizes craft."

        typography="With that starting point, I began looking at fonts. I wanted to find elegant and approachable fonts, more rectangular than boxed, and with an elongated stem. After briefly considering modern serifs, I decided that they tend to feel unapproachable, and turned to old-style serifs instead. I picked two serif fonts for the header, five sans serif ones for the body, and three for the handwritten decorative font. Then, I created a table of each header and body combination, assigned each combination the most complementary handwritten, then compared each before finally settling on ‘Lusitana’ for the header, ‘Yaldevi’ for the subtitles, and ‘La Belle Aurore’ for the handwritten font./Later in the development process I realized that Yaldevi can be quite difficult to read, so I brought in IBM Plex Sans to replace Yaldevi as the body font, keeping Yaldevi for subtitles."

        finalTypography={["3-Chinese Headings: Lusitana", "4-Chinese body: Noto Sans", "4-English Headings: Rufina","4-English body: Roboto"]}
        typographyRefImages={[textRefEnglish, textRefBodyText]}
        typographyRefTitles={["options for handwritten fonts", "all font combination options","comparison of readability between 'Yaldevi' and 'IBM Plex Sans'"]}
        typographyFinalImg={typographyFinalImg}

        finalColorLabels={["sapling", "tropical", "ginger","plum"]}
        finalColorHexes ={ ['#A7C9AF','#83C4D2',"#C9AD83",'#E4816C']}
        colorLabels={["cream", "beige","rapids", "taroko", "taroko"]}
        colorHexes ={['#FFF6F2','#EDE2DD','#D8E5E3',"#3E4F54", '#384A2C']}

        designTitle ="Color Ideation"
        colorSection="Trekinn"

        hifi="After viewing my high-fidelity design, a friend noted that the works design has a magazine-like quality to it. I decided to play with this design motif in my layout, adding elements such as dual columns, linear separators, and italics."
        hifiWireframesImages={[hifiMobile, hifiDesktop]}
        hifiWireframesTitles={["Mobile screens", "Desktop screens"]}

        colorTitles="Color as Brand Message"
        colorDescriptions="Three color groups reflect design keywords of warmth, nature, and elegance."
        moodboardText="Using Pexels.com, I found various images which colors really speak to me, most of which have desaturated colors."

        colorTextures={texture}
        colorText="Noticing that the colors on the moodboard feel a bit too dreamy and eccentric, I added a bold and timeless burgundy./I also sought to add many greys, which not only convey professionality and elegance, but also make saturated colors stand out. The first grey I added to my website was a warm mid-dark grey, which really helped anchor the more vibrant colors on my existing palette. Desaturating photo elements also brought out many neutral greys to work with, while adding subtle gradients over them created further rootedness."
        colorMoodboards={moodboard2}
        

     />
     <span id="development"></span>
    <Development
      m={m}
      l={l}

      developmentText="One of the things I wished I learned for my humanities database project was how to plan and organize code. For instance, I used too much inline CSS, which lead to readability issues whenever I needed to adjust the layout. Learning from that experience, I resolved to clearly plan my development folder tree."

      finalStack="HTML, CSS, JavaScript, React, Framer Motion."
      stackMemo="Hosted on Netlify"
      githubRepository="https://github.com/JCJang/personal-portfolio-website"

  internationalizationText="internationalization/text"
  i18nTemplateCode="JCJang/4787555b42f172425b8cb8d0a3aaaff9"

  i18nJsonCode="JCJang/aa368419652cca4c9c63a15c9762beb8"
         />

        <Footer m={m} l={l}
      learned="I learned so much from this project, from tab navigation, integrating Netlify with react, to debugging across browsers. I also had fun working on ‘finishing touch’ features like a custom 404 page, loaders, and nav bar animations. What would I do differently for my next project? Enhance the vanilla CSS that I've been using thus far with tools like tailwind, with which I can manage ‘hover’ states. I also need to learn more about accessibility and how to solve related problems, like how to implement tab navigation inside modals./If you are reading this paragraph, thank you so much for following my journey. If you have any ideas or feedback about what I can do better, feel free to send me your thoughts in the 'contact' page! Your input would help me learn and grow as a designer and developer."/>

      </div>
    )
}

export default ProjectTrekinn
