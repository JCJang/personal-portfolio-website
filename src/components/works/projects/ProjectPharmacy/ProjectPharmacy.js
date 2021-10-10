import Summary from '../sections/Summary'

import mainImageV from './images/design/1-pain-point-of-counting.jpg'
import mainImageH from './images/design/5-order-screen.jpg'

import displayImage1 from './images/design/3-checkout-flow.jpg'
import displayImage2 from './images/design/7-transfer-flow.jpg'
import displayImage3 from './images/design/9-add-rx-flow.jpg'
import displayImage4 from './images/design/motion-design-short.jpg'


//research
import Research from '../sections/Research'

import userFlowImg from './images/design/user-flow.jpg'

//design
import Design from '../sections/Design'

import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';
import lofiWireframesImage from './images/design/lofi.png'


import hifiMobile from '../ProjectHumanities/images/design/hifi-mobile.png'
import hifiTablet from '../ProjectHumanities/images/design/hifi-tablet.png'
import hifiDesktop from '../ProjectHumanities/images/design/hifi-desktop.png'

import textRef1 from '../ProjectHumanities/images/design/typography-ref.png'
import typographyFinalImg from '../ProjectHumanities/images/design/typography-final.png'

import descriptionSpring from '../ProjectHumanities/images/design/description-spring.png'
import descriptionSummer from '../ProjectHumanities/images/design/description-summer.png'
import descriptionWinter from '../ProjectHumanities/images/design/description-winter.png'

import moodboardSpring from '../ProjectHumanities/images/design/moodboard-spring.jpg'
import moodboardSummer from '../ProjectHumanities/images/design/moodboard-summer.jpg'
import moodboardWinter from '../ProjectHumanities/images/design/moodboard-winter.jpg'

import texturesSpring from '../ProjectHumanities/images/design/textures-spring.jpg'
import texturesSummer from '../ProjectHumanities/images/design/textures-summer.jpg'
import texturesWinter from '../ProjectHumanities/images/design/textures-winter.jpg'

import wireframeSpring from '../ProjectHumanities/images/design/wireframe-spring.png'
import wireframeSummer from '../ProjectHumanities/images/design/wireframe-summer.png'
import wireframeWinter from '../ProjectHumanities/images/design/wireframe-winter.png'

const ProjectPharmacy = ({m, l, setRouteFocus}) => {

  const location = useLocation();
  useEffect(()=>{
    setRouteFocus(location.pathname)
  },[])

  return (
    <div className="ColumnCentered" style={{width:"100vw"}}>
      <Summary
        m={m}
        l={l}

         mainImage={m? mainImageH : mainImageV}
         carousel = {true}
         carouselSlides={[displayImage1, displayImage2, displayImage3, displayImage4]}
         carouselSlidesTitles={['user flow - order a refill. The app tracks medication count and highlights medications that are running low. Users have access to live status of their order and pharmacy wait times.','user flow - transfer a medication. Common questions about the transfer process are anticipated, and the user is guided through the process.', 'user flow - add a prescription via scan. The upload process can be overwhelming. Here I found a solution that presents information clearly without overwhelming the user, and also anticipated user questions regarding other methods of adding a prescription, answered in the tab "expand for other options', 'app hierarchy - menu and log-in screens on top, overlays in the middle, and the rest located in two main screens: Rx and Orders.']}

        research="Ideation, Research, and user flow"
        design="color, typography, and wireframes"

        title="Pharmacy Concept App"
        roles="Ideation, UI and UX design"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        summary="As a former employee of a hospital outpatient pharmacy in Maine, I had first-hand experience working with pharmacy users, through which I understood many recurring user pain points. In this project I address common complaints at the pharmacy - lack of transparency, such as medication packaging times, shipped medication status, wait line times - and common problems faced by Maine users, such as timing refills, remembering dosage changes, or making an order in a foreign language. This conceptual app remedies transparency pain points by including order processing time estimates, order live status, wait line times, and answers to common questions. The app also has built-in notifications, medication details, transfer assistence, and multilingual support. Setting user expectations beforehand minimizes frustration, and more importantly, empowers users to plan their day and feel in control of something so personal - one's health and wellbeing."
        challenge="How can I simplify pharmacy trips for users?"
        solution="By listening to common user frustrations and integrating needed transparency into a mobile app."
        />

      <Research
        m={m}
        l={l}
        ideationText="I chose psychology as my major in college because I thought the field would address human meaning and purpose. However, as I soon realized, Psychology had long shifted away from humanism and other forms of self-inquiry, taking a more behavioristic approach instead. Still driven by curiosity, I asked many Humanities professors for supplementary reading that addresses humanistic topics, and that was my main source of book recommendations. Conversations with other readers seem to lead to the same conclusion - despite living in an information-rich world today, the best book recommendations seem to travel by word of mouth. My solution was to create a book database full of quality humanities books, so that myself and other readers have a reliable resource to better understand meaning and ethics in life."
        ideationEmphasis="despite living in an information-rich world today, the best book recommendations seem to travel by word of mouth."

        researchText="As part of UX research I conducted (1) a competitive analysis of features offered by 11 similar book-focused websites and (2) a user survey. The bilingual survey (written using Google Forms) was distributed among four major Taiwanese University Facebook groups, and was filled out by 50 self-selected humanities readers."

        competitiveAnalysis="The competitive analysis gave me a better understanding of the existing range of resources and book-related features that readers may find attractive – along with their limitations./For example, thedailyidea.org, a website compiling philosophy resources, has several well-organized lists drawn from university curriculums. However, curriculum-style reading usually seeks to cover a whole topic. Books include 'Introduction to' or 'Cambridge companion to' or '...handbook', which thesis are to cover many ideas instead of exploring a specific one. I envision my own website to only include works that explore narrowly-defined questions, so that instead of exploring topics such as “existentialism,” the reader explores topics such as “How Can Moral Consciousness Be Defined Outside Of Religion?” The topic may include many different 'answers', including that written by existentialist authors - but not excluding other ones either. My goal is to make humanities reading highly specific and personal instead of broad and abstract."

        competitiveAnalysisEmphasis="My goal is to make humanities reading highly specific and personal instead of broad and abstract."

        surveyResults="The competitive analysis gave me a better understanding of the existing range of resources and book-related features that readers may find attractive – along with their limitations./For example, thedailyidea.org, a website compiling philosophy resources, has several well-organized lists drawn from university curriculums. However, curriculum-style reading usually seeks to cover a whole topic. Books include 'Introduction to' or 'Cambridge companion to' or '...handbook', which thesis are to cover many ideas instead of exploring a specific one. I envision my own website to only include works that explore narrowly-defined questions, so that instead of exploring topics such as “existentialism,” the reader explores topics such as “How Can Moral Consciousness Be Defined Outside Of Religion?” The topic may include many different 'answers', including that written by existentialist authors - but not excluding other ones either. My goal is to make humanities reading highly specific and personal instead of broad and abstract."

        surveyResultsEmphasis="It is important to visualize the book search user flow as a cycle, and present it as such."
        screenFeatures={[
          ["Central thesis search bar","subject matter filter","subject matter introduction panel","basic referential data","table of contents","2-3 paragraphs that captures the author's central thesis and writing style"],

          ["in-depth referential data","subject matter introduction panel","Further reading – related books, authors, subjects etc.","Reviews","Discussion form"],
          ["saved books (read and to read)","saved questions", "contacts and submitted discussion forms","profile settings"], ["data visualization - book and spokes", "filter by referenced works/their authors"],
          ["filter by genre and year"],
          ["display count of readers that are interested in a yet-untranslated book and/or out-of-print books", "isbn etc. - more technical information"]
        ]}
        screenTitles={[`<strong>primary feature</strong> - Search by central argument (book exploration)`, `<strong>primary feature</strong> - post-reading screen`,"user account screen", "relational search (by related authors or by references)", "literature map", "publisher board"]}

        designKeywords={["single page", "cyclical flow", "minimalistic", "linear motif"]}
        designTone={["serious", "concise", "rational", "neutral", "reputable", "academic"]}
        valueProposal="The selected books must be of high enough quality to be of value for users. Personality: This person is not writing a textbook; it is a passionate argument of a person’s opinion and core beliefs.     Rationality: this person is using facts as presented to him or her. They have tried to get perspective before making an opinion. Aka, they know what they’re talking about.           Specificity: The book is not an overview on a topic. The author explores a particular question, and returns his or her systematic thoughts on the matter.           Systematicity: The table of contents breaks down the core question into arguments."

        userFlowText = "With good user knowledge under my belt, I can now start planning the app layout. I enjoy starting with the information architecture to really lay out in the abstract what I am trying to accomplish."
        userFlowImg={userFlowImg}
       />

       <Design m={m} l={l}

       lofiWireframesImage={lofiWireframesImage}

       lofi=""

       typographyEmphasis="As an application designed for readers, its typography alone sends a crucial message of trust and quality."
       typography="I began looking at various signage around Maine Medical Center. My initial decision was to match the typography - using a serif font for headings and a sans serif for text and buttons./For the headings and subtitles I wanted something that matched the MaineHealth Logo - serious, traditional, and elegant./On the other hand, for the sans serif font that will be the body text, I wanted something lightweight. In addition, I wanted the text to be more box shaped than rectangular./Using the low-fidelity RX screen, which has the most variety of text, I mapped out all the combinations and narrowed it down to the final look."

       finalTypography={["4-App Titles - Lora", "4-App Body - Quicksand"]}

       typographyRefImages={[textRef1]}
       typographyFinalImg={typographyFinalImg}

       color="Now that I have a limited palette, I want to narrow my choices even further. Here I consider Maine Medical Center’s architecture and interior design, looking for elements or recurring colors that might guide my color choices. I also look for existing brand colors on Maine Medical Center’s website and campus. I also pull up my user flow and consider how the colors might screen. With the right colors, I can structure the app like an in-person trip to Maine Medical Center. Bold black and red will be featured in the splash screen and login screen, reflecting MaineHealth’s logo and Maine Medical Center’s historical building materials. Transfer screens also use these colors, reinforcing the MaineHealth brand and reputation. A leaf green will be used for the add Rx screen and confirmation screens, reflecting the warm interiors. Blue green and light blue will guide the rest of the user experience. These colors not only match the campus’s more modern glass exteriors, but also convey security, trust and reliability. Here I asked myself: What core values do I want to present to users? The pharmacy app should have the emphasis of being patient-centered, transparency, and trust-worthiness. Here I searched for various key words in both google Play Store and Google Images, then extracted key colors form each palette."


       hifiWireframesImages={[hifiMobile, hifiTablet, hifiDesktop]}
       hifiWireframesTitles={["Mobile screens", "Tablet screens", "Desktop screens"]}

       colorColors
       colorTitles={["Spring", "Summer", "Winter"]}
       colorDescriptions={["Shadows are soft, cast by strong, outdoor ambient light.", "Crisp, dark shadows cast by the mid-day sun.", "Dim shadows cast by soft, indoor ambient/bounce light."]}
       colorAccents={["silver", "copper", "bronze"]}

       colorLabels={[["search", "shelf", "details","action"],["search", "shelf", "details","action"],["search", "shelf", "details","action"]]}
       colorHexes={[["#F5EBE2","#E9D6CA","#494243","#F17C67"],["#CFDFE6","#9B6D57","#0C5A5A","#73BCBC"],["#D2E2F1","#8F7642","#373B4D","#446F8C"]]}
       colorWireframes={[wireframeSpring, wireframeSummer, wireframeWinter]}
       colorTextures={[texturesSpring, texturesSummer, texturesWinter]}
       colorMoodboards={[moodboardSpring, moodboardSummer, moodboardWinter]} />
    </div>
  )
}

export default ProjectPharmacy
