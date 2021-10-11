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


import hifiImg1 from './images/design/hifi-ideation.png'
import hifiImg2 from './images/design/fixing-problems.png'
import hifiImg3 from './images/design/registration-screens.png'
import hifiImg4 from './images/design/refill-user-flow.png'
import hifiImg5 from './images/design/transfer-and-add-screens.png'

import textRef1 from '../ProjectHumanities/images/design/typography-ref.png'
import typographyFinalImg from '../ProjectHumanities/images/design/typography-final.png'

import moodboard from './images/design/color-ideation.png'

import texturesSpring from './images/design/brand-color.png'

import brandColorImg from './images/design/brand-color.png'

const ProjectPharmacy = ({m, l, setRouteFocus}) => {

  const location = useLocation();
  useEffect(()=>{
    setRouteFocus(location.pathname)
  },[])

  return (
  <div style={{width:"100vw", height:"var(--desktopheight)", overflowY:"auto", overflowX:"hidden", scrollBehavior: "smooth"}}>
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
        ideationText="Inside the pharmacy, the phone is always ringing with refill and transfer requests. The same person calls, only to have different people pick up the phone and give different answers. Out front at the register, the line trails out into the hallway, impatient feet tapping, sighs made inaudible out of Maine politeness. Whatever information seems to come as a shock to clients – “I’m sorry, but we need to verify your ID for this certain medication,” “I’m sorry, your medication isn’t done yet,” “I’m sorry, but we don’t take American Express.” “No one told me this,” “I was told otherwise” or “I didn’t know.”/I find myself constantly apologizing – and wondering how the process can be such a mess. When it comes to something as personal as one’s health, pharmacies need to make their clients feel informed and in control. How can I make information as transparent as possible, so that customers can set expectations, and have them met without surprises?"

        ideationEmphasis="When it comes to something as personal as one’s health, pharmacies need to make their clients feel informed and in control."

        researchText="Primary research – working experience and observation. Secondary research – competitive analysis. Surveyed both mobile and desktop experiences offered by direct and indirect competitors, looking for room for improvement of the user stories. Competitive analysis of both direct and indirect competitors:  what features do competing apps have? How is information organized and presented? Unique product offerings and value propositions?"

        competitiveAnalysis="Drawing from the competitive analysis, one tendency I noticed of pharmacy apps is to overcrowd the screen, and implement a hub-and-spoke approach navigation pattern that does not suggest any user flow. Taking this cue, I tried to make my navigation AS FLAT AS POSSIBLE. This chart is valuable and later acts as a guide to animation that reinforces the architecture hierarchy."

        competitiveAnalysisEmphasis="one tendency I noticed of pharmacy apps is to overcrowd the screen."

        title="My Accordion"
        problemSolution={true}
        sectionTitles={[
         "Price Transparency",
         "Order tracking",
         "pharmacy wait times",
         "multilingual support",
         "medication pronunciation audio",
         "notifications and reminders",
         "Anticipating user questions"
       ]}
        sectionResultsArr={[
         [`“As an American being caught in our unforgiving healthcare system, I would like to have more price transparency, so that I can know my options and be able to budget for medication costs.”`],
       [`“As a person who lives far away from the pharmacy, I would like to track the status of my medications, so that I know that they’ll be ready when I get there.”`,`“As a caring daughter, I would like to easily monitor my order, so that I can make sure my parents get their medication on time.”`],
       [`“As a tired worker, I would like to know pharmacy wait times in advance, so that I can evaluate whether to make the trip another day.”`],
       [`“As a non-native English speaker, I would like to easily change the pharmacy label language in advance, so that I have minimal hassle at the pharmacy, and I can follow directions in my native tongue.”`],
       [`“As a stranger to life sciences, I want to order refills without putting a knot in my tongue, so that I can refill my medications without any miscommunication or embarrassment.”`],
       [`“As a person with worsening memory, I want to be reminded to order a refill or to call my doctor, so that I can track and maintain stock of my numerous medications.”`],
       [`“Being told unexpected information: medications that are too soon to refill, which credit cards are accepted or not, whether my ID is required for pickup, etc.”`]
     ]}
       sectionApplicationArr={[
         [`Provide price in app, and use app for advanced payments.`],
         [`A significant user pain point is the lack of transparency about the status of medications. Many pharmacy users drive as far as two to three hours and call ahead of time to get estimates of how long. At the end of the drive, they face frustration of being told that their order is on hold for an issue, for instance, if a pharmacist needed to call a prescriber to confirm dosage amounts or possible drug interactions.
       `,`The same problem applies when it comes to medication shipping, and can cause considerable anxiety when it comes to users’ life-dependent drugs such as insulin. In this screen I want users to have updated information regarding their pharmacy order – be it in-pharmacy or shipping.`],
         [`Display pharmacy wait times. Setting user expectations beforehand allows them more control over how they should plan their day - users should be empowered especially when it comes to something as personal as getting prescription drugs for one’s health.
`],
         [`App should support multiple languages and should sync with medication label.
       `],
       [`Refill via app, Pronunciation audio for medications
         `],[`Notifications when medications are out of refills or are running out.`],
         [`"All of the small rules. The “add new Rx” screen with questions regarding other methods of adding a prescription. Thus
         Anticipating problems not only saves users time and energy, but also saves time for workers in the Pharmacy because they can save time both at the counter and behind the phone."
`]
     ]}

        surveyResultsTitle="User Problems and Solutions"

        surveyResultsEmphasis="Anticipating problems not only saves users time and energy, but also saves time for workers in the Pharmacy because they can save time both at the counter and behind the phone."
        screenFeatures={[
          ["Central thesis search bar","subject matter filter","subject matter introduction panel","basic referential data","table of contents","2-3 paragraphs that captures the author's central thesis and writing style"],

          ["in-depth referential data","subject matter introduction panel","Further reading – related books, authors, subjects etc.","Reviews","Discussion form"],
          ["saved books (read and to read)","saved questions", "contacts and submitted discussion forms","profile settings"], ["data visualization - book and spokes", "filter by referenced works/their authors"],
          ["filter by genre and year"],
          ["display count of readers that are interested in a yet-untranslated book and/or out-of-print books", "isbn etc. - more technical information"]
        ]}
        screenTitles={[`primary feature - Search by central argument (book exploration)`, `primary feature - post-reading screen`,"user account screen", "relational search (by related authors or by references)", "literature map", "publisher board"]}

        designKeywords={["single page", "cyclical flow", "minimalistic", "linear motif"]}
        designTone={["serious", "concise", "rational", "neutral", "reputable", "academic"]}
        valueProposal="Anticipating problems not only saves users time and energy, but also saves time for workers in the Pharmacy because they can save time both at the counter and behind the phone."

        userFlowText = "With good user knowledge under my belt, I can now start planning the app layout. I enjoy starting with the information architecture to really lay out in the abstract what I am trying to accomplish."
        userFlowImg={userFlowImg}
       />

       <Design m={m} l={l}

       lofiWireframesImage={lofiWireframesImage}

       lofi="I created lo-fi wireframes based on the flat architecture, making sure to implement clear user flows where needed. The goal is to make each goal’s entry point as easy to find as possible, and each goal’s completion as smooth and distraction-free as possible."

       typography="I began looking at various signage around Maine Medical Center. My initial decision was to match the typography - using a serif font for headings and a sans serif for text and buttons./For the headings and subtitles I wanted something that matched the MaineHealth Logo - serious, traditional, and elegant./On the other hand, for the sans serif font that will be the body text, I wanted something lightweight. In addition, I wanted the text to be more box shaped than rectangular./Using the low-fidelity RX screen, which has the most variety of text, I mapped out all the combinations and narrowed it down to the final look."

       finalTypography={["3-App Titles: Lora", "4-App Body: Quicksand"]}

       typographyRefImages={[textRef1]}

       color="Now that I have a limited palette, I want to narrow my choices even further. Here I consider Maine Medical Center’s architecture and interior design, looking for elements or recurring colors that might guide my color choices. I also look for existing brand colors on Maine Medical Center’s website and campus. Here I asked myself: What core values do I want to present to users?"


       hifiWireframesImages={[hifiImg1, hifiImg2, hifiImg3, hifiImg4, hifiImg5]}
       hifiWireframesTitles={["High-fidelity ideation", "Fixing problems with animation continuity", "Registration Screens", "Refill User flow"]}

       colorTitles="Color as Storytelling"
       colorDescriptions="The pharmacy app should have the emphasis of being patient-centered, transparency, and trust-worthiness. First I searched for various key words in both google Play Store and Google Images, then extracted key colors from each palette."
       colorSection="Pharmacy"
       colorLabels={["ruby", "cast iron", "sprout","patina", "snow"]}
       colorHexes={["#CE3434","#111422","#B4CB59","#319AAC","#7DC1ED"
       ]}
       colorWireframes={brandColorImg}
       colorText="I want to structure the app like an in-person trip to MMC./Bold black and red will be featured in the splash screen and login screen, reflecting MaineHealth’s logo and MMC’s historical building materials. Transfer screens also use these colors, reinforcing the MaineHealth brand and reputation./A leaf green will be used for the add Rx screen and confirmation screens, reflecting the warm interiors./Blue green and light blue will guide the rest of the user experience. These colors not only match the campus’s more modern glass exteriors, but also convey security, trust and reliability."
       colorMoodboards={moodboard} />
    </div>
  )
}

export default ProjectPharmacy
