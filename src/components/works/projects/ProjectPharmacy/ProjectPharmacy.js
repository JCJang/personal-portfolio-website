import ProjectLoader from '../sections/ProjectLoader'
import {motion, AnimatePresence} from 'framer-motion'
import useDebounce from '../../../../customHooks/useDebounce'

import Summary from '../sections/Summary'

import mainImageV from './images/design/1-pain-point-of-counting.jpg'
import mainImageH from './images/design/5-order-screen.jpg'

import displayImage1 from './images/design/3-checkout-flow.jpg'
import displayImage2 from './images/design/7-transfer-flow.jpg'
import displayImage3 from './images/design/9-add-rx-flow.jpg'
import displayImage4 from './images/design/motion-design-short.jpg'

import motionDesignImg from './images/design/motion-design.png'

//research
import Research from '../sections/Research'

import jonathan from './images/jonathan.jpg'
import melissa from './images/melissa.jpg'
import userFlowImg from './images/design/user-flow-pharmacy.png'

//design
import Design from '../sections/Design'

import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';
import lofiWireframesImage from './images/design/lofi.png'

import textRef1 from './images/design/textRef-pharmacy.jpg'
import typographyFinalImg from '../ProjectHumanities/images/design/typography-final.png'

import moodboard from './images/design/color-ideation.png'
import brandColorFinal from './images/design/color-final.png'


import stickerSheet1 from './images/design/sticker-sheet-1.png'
import stickerSheet2 from './images/design/sticker-sheet-2.png'
import typographySystem from './images/design/typography-system.png'


import hifiImg1 from './images/design/hifi-ideation.png'
import hifiImg2 from './images/design/fixing-problems.png'
import hifiImg3 from './images/design/registration-screens.png'
import hifiImg4 from './images/design/refill-user-flow.png'
import hifiImg5 from './images/design/transfer-and-add-screens.png'

import Footer from '../sections/Footer'

// Inside the pharmacy, the phone is always ringing with refill and transfer requests. The same person calls, only to be addressed by different technicians and given different answers. Out front at the register, the line trails out into the hallway, where impatient feet-tapping and muted sighs proliferate. Whatever information seems to come as a shock to clients ??? ???You need your ID for this certain medication,??? ???Your medication isn???t done yet,??? ???We don???t take American Express.??? Users reply: ???No one told me this,??? ???I was told otherwise,??? or ???I didn???t know.???

const ProjectPharmacy = ({m, l, setRouteFocus}) => {

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
  <div style={{width:"100vw", height:"var(--desktopheight)", overflowY:"auto", overflowX:"hidden", scrollBehavior: "smooth"}}>

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

         mainImage={m? mainImageH : mainImageV}
         carousel = {true}
         carouselSlides={[displayImage1, displayImage2, displayImage3, displayImage4]}
         carouselSlidesTitles={['user flow - order a refill. The app tracks medication count and highlights medications that are running low. Users have access to live status of their order and pharmacy wait times.','user flow - transfer a medication. Common questions about the transfer process are anticipated, and the user is guided through the process.', 'user flow - add a prescription via scan. The upload process can be overwhelming. Here I found a solution that presents information clearly without overwhelming the user, and also anticipated user questions regarding other methods of adding a prescription, answered in the tab "expand for other options', 'app hierarchy - menu and log-in screens on top, overlays in the middle, and the rest located in two main screens: Rx and Orders.']}

        research="Ideation, Research, and user flow"
        design="color, typography, and wireframes"
        prototype = "motion design"
        title="Pharmacy Concept App"
        roles="Ideation, Research, UI & UX Design"
        summary="In this project I researched common complaints and problems faced by Maine pharmacy users, then created a mobile app design and prototype with solutions such as transparent pricing, medication packaging status, refill notifications, and foreign language options. Setting user expectations beforehand minimizes frustration, and more importantly, empowers users to plan their day and feel in control of something so personal - one's health and wellbeing."
        challenge="How can I simplify pharmacy trips for users?"
        solution="By listening to common user frustrations and integrating needed transparency into a mobile app."
        />

        <span id="research"></span>
      <Research
        m={m}
        l={l}
        ideationText="Inside the pharmacy, the phone is always ringing with refill and transfer requests, slowing down packaging times. The same person calls, only to be addressed by different technicians and given different answers. Throughout my experience as a pharmacy technician, the same scenario kept coming up ??? I would communicate something: ???You need your ID for this certain medication,??? or ???Your medication isn???t done yet,??? and users would reply: ???No one told me this,??? or ???I was told otherwise.??? In this project, my goal was to find out how I can guide users through a pharmacy trip without surprises - in other words, set and meet user expectations. When it comes to something as personal as one???s health, pharmacies need to make their clients feel informed and in control."

        ideationEmphasis="When it comes to something as personal as one???s health, pharmacies need to make their clients feel informed and in control."

        researchText="Drawing from months of experience both observing and interacting with users, I created two user profiles that will serve as my target user. Through their backstories and perspectives, I mapped out common problems and frustrations experienced at the pharmacy. In addition, I conducted a competitive analysis that surveyed both mobile and desktop experiences offered by direct and indirect competitors. The main goal was to understand the following questions: what unique services and value propositions do competing pharmacies offer? How is information organized and presented by competitors?"



        competitiveAnalysis="$Competitor services and value propositions:$/Pharmacy tone of voice varies greatly across brands. Most market themselves as professional, transparent, and trustworthy. Some brands chose a clear, practical, and more impersonal tone, while others were enthusiastic and bordering on pompous. One smaller startup chose a more personal and persuasive tone which fosters trust. Seeing that my target pharmacy is part of a large hospital, a clear and practical tone seemed the most suitable choice./Regardless of tone, most brands are proactive at answering questions and concerns about their service. In fact, it seems that anticipating questions plays an important role in convincing users to switch to their service - Big brands tend to market themselves as 'convenient' and 'time-saving'. For instance, Walmart???s has a dedicated a fast-track line for users that order ahead of time, a solution that my app will take and implement./$Competitor information organization and presentation:$/Websites for the companies I surveyed are quite convoluted, with interfaces cluttered with banners, advertisements, and links. They also lack in accessibility, most being English-only. By contrast, mobile experience was generally pleasant and optimized. Many pharmacy apps include many secondary features such as dosage calculators. However, most of these feature-heavy apps also tend to use a hub-and-spoke navigation pattern, which does not suggest any guided user flow. Taking this cue, I aimed to make my application's user navigation as 'flat' as possible, locating screen entrance points and endpoints where they logically belong."


        competitiveAnalysisEmphasis="I aimed to make my application's user navigation as 'flat' as possible, locating screen entrance points and endpoints where they logically belong."

        users={['Melissa', 'Jonathan']}
        userJourneys={[[melissa], [jonathan]]}
        userJourneyTitles={[["Melissa's typical experience at the pharmacy"], ["Jonathan's typical experience at the pharmacy"]]}
        userProfileKeys={["Name", "Age", "Education", "Hometown", "Family", "Occupation"]}
        userProfileValues={
          [["Melissa", "29", "Radiography Degree", "Boston, MA", "Husband and one dog", "Radiologic Technologist"],["Jonathan","70","PhD in Physics","Bangor, ME", "Wife and two cats", "Retired"]]
        }

        userDetailsKeys={["Goals", "Frustrations"]}
        userDetailsValues={[
        [
          ["Melissa???s parents are ???snowbirds??? that wait out Maine???s cold winter in sunny Florida. Melissa must get her parents??? prescriptions for them during this part of the year. Her parents prefer to have their medications labeled in Spanish."],
          ["Told inconsistent information over the phone.","Cannot track or manage her parents??? medications."]
        ],

        [
          ["Remember refills and medication directions","Track changes in dosage","Make sure the medication is ready for pickup"],
          ["Cannot pronounce medication names","Assumes that pharmacy would call the doctor for refills","Lives 1 hour away from the pharmacy","The pharmacy takes hours to process and package medications"]
        ]
      ]}

        userStories={["Melissa started out in sales but did not feel fulfilled in her work. She began taking radiography courses at the local community college, and upon graduation, started working at the local hospital. She is known for her big heart and good humor. Although work at the hospital is tough and the shifts are long, she loves working with people and finds it rewarding. She saves on most things except healthy food, and wants to retire in Florida, where she would purchase a house near her parents??? winter home.","Jonathan is a veteran who became a college professor in physics after 10 years in the navy. He enjoys reading history and taking care of his grandchildren in the house, often showering them with attention and gifts. He values education and practicality and feels frustrated and fearful of his deteriorating memory."]}

        statisticTitles={["Diversity in Maine","Population Aging in Maine"]}
        statisticTexts={["Melissa???s case of needing medications labeled in a foreign language is hardly unique. According to Data USA, as of 2019, 6.87% of residents are foreign born, with the top three being Canada, followed by Vietnam, and unspecified African countries. At the pharmacy, users that require an interpreter communicate in Portuguese, French or Arabic, and occasionally, Spanish or Vietnamese. Building a multilingual app frees users from external support and hands them control over their own health.","Maine is often ranked one of the U.S. states with the oldest population. As of 2021, Maine has a 23% population over 65, and by 2026, this percentage is expected to grow to 26%. As a pharmacy dedicated to the local community, its services need to be optimized for accessibility. Jonathan???s case of Alzheimer???s is hardly an isolated case in Maine. In 2021, there are 29,000 people aged over 65 with Alzheimer???s, and this is expected to grow to 35,000 by 2025. By integrating notifications and medication count into the app, users can have the information they need right in their pocket ??? a more optimal solution than constant over-the-phone communication with the pharmacy."]}

        statisticSources={[["https://datausa.io/profile/geo/maine/"],["https://www.maine.gov/dafs/economist/sites/maine.gov.dafs.economist/files/inline-files/Maine%20Population%20Outlook%20to%202026.pdf","https://www.alz.org/media/Documents/maine-alzheimers-facts-figures-2021.pdf"]]}

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
         [`???As an American being caught in our unforgiving healthcare system, I would like to have more price transparency, so that I can know my options and be able to budget for medication costs.??? - Melissa`],
       [`???As a person who lives far away from the pharmacy, I would like to track the status of my medications, so that I know that they???ll be ready when I get there.??? - Jonathan`,`???As a caring daughter, I would like to easily monitor my order, so that I can make sure my parents get their medication on time.??? - Melissa`],
       [`???As a tired worker, I would like to know pharmacy wait times in advance, so that I can evaluate whether to make the trip another day.??? - Melissa`],
       [`???As someone getting medications for non-native English speakers, I would like to easily change the pharmacy label language in advance, so that I can have minimal hassle at the pharmacy, and they can follow directions in their native tongue.???`],
       [`???As a stranger to life sciences, I want to order refills without putting a knot in my tongue, so that I can refill my medications without any miscommunication or embarrassment.??? - Jonathan`],
       [`???As a person with worsening memory, I want to be reminded to order a refill or to call my doctor, so that I can track and maintain stock of my numerous medications.??? - Jonathan`],
       [`???Being told information too late: that my medications are too soon to refill when I'm already there; that my credit card is not accepted when it is my only payment option; that my ID is required when I didn't bring it, etc.??? - Unhappy Users`]
     ]}
       sectionApplicationArr={[
         [`Display prices in-app, in addition to in-app payment options.`],
         [`Many pharmacy users drive as far as two to three hours and call ahead of time to get estimates of how long. At the end of the drive, they face frustration of being told that their order is on hold for an issue, for instance, if a pharmacist needed to call a prescriber to confirm dosage amounts or possible drug interactions. The app must reflect the status of the user's order so that they can get the reason why their medication is on hold or delayed.`,`The same problem applies when it comes to medication shipping, and can cause considerable anxiety when it involves life-dependent drugs like insulin. I wanted users to have updated information regarding their pharmacy order ??? be it in-pharmacy or shipping.`],
         [`Display pharmacy wait times. Setting user expectations beforehand allows them more control over how they should plan their day.`],
         [`The app should support multiple languages and notify the pharmacy about users' language of choice for medication labels. This functionality benefits non-native residents or even tourists from abroad.`],
        [`Provide refill via app functionality, and audio pronunciation guide for medications.
         `],[`Notify users when a medications is out of refills or running low.`],
         [`Questions should be anticipated and their answers included where users may need clarification. For instance, although the ???add new Rx??? screen only allows Rx upload via scan, there is a tab that tells users about the other methods of adding a prescription. Anticipating problems can save both users and pharmacy workers time and energy.`]
     ]}

        surveyResultsTitle="User Problems and Solutions"
        surveyResultsEmphasis="Anticipating problems can save both users and pharmacy workers time and energy."
        screenTitles={[`Current Medications`,"Transfer Screen", "Add Rx Screen", "Fill or Refill screens", "Orders screen", "Past orders screen", "Login or Registration screens", "Other"]}

        screenFeatures={[
          ["medications","medication details", "medication count by days left", "prescriber information and number", "refills remaining", "option to filter by date or alphabetic order", "select to refill"],
          ["phone book of local pharmacies", "transfer process explanation"],
          ["scanner for phone", "prescription upload success screen", "other methods for adding prescriptions."],
          ["price after insurance", "pickup or shipping options", "payment screens", "order success screen."],
          ["order status", "pharmacy wait times"],
          ["sort by date or price", "search order by date or medication name", "medication details", "prescriber information and number."],
          ["health related forms"],
          ["notifications etc."]

        ]}

        designKeywords={["flat architecture", "convenient", "simple", "guided"]}
        designTone={["reliable", "transparent", "trustworthy", "clear"]}
        valueProposal="Anticipating problems can save both users and pharmacy workers time and energy."

        userFlowText = "With good user knowledge under my belt, I began organizing the screens into a coherent user flow. I ended up with three main user flows tha all have entry points in the current medications screen. I organized the three flows around two main screens - the orders screen and the current medications screen."

        userFlowImg={userFlowImg}

       />

       <span id="design"></span>
       <Design m={m} l={l}

       lofiWireframesImage={lofiWireframesImage}

       lofi="I created low-fidelity wireframes based on the clear user flows defined on the graph."

       usability="After creating the wireframes, I conducted a usability study with 7 users, using prompts that guide users through the main user task - placing an order. Although most users eventually complete each given task on their own, many did so with delay or difficulty. For such cases I took note and asked users for feedback about I could make the experience better."

       usabilityTitlesArr={[
        "Please simulate uploading a prescription. How would you complete this task?",
        "How would you go about locating the 'past orders' screen?",
        "Find the current medications screen and complete a refill order for the first three medications on the list.",
        "Additional insights"
       ]}

       usabilityResultsArr={[
        ["6 out of 8 (75%) completed this task without difficulty, while 2 out of 8 (25%) had difficulty with it."],
        ["6 out of 8 (75%) completed this task without difficulty, while 2 out of 8 (25%) had difficulty with it."],
        ["4 out of 8 (50%) completed this task without difficulty, while 4 out of 8 (50%) had difficulty with it."],
        ["Since I chose the user profile screen as the landing screen, some users had difficulty navigating to other screens (2 out of 8, 25%)."]
       ]}
       usabilityApplicationArr={[
        ["Since the low-fidelity wireframes were not linked to an actual camera, many users needed to confirm with me that they indeed finished the task. To clarify upload succes, I made sure to include clearer instructions and explanations for each step of the 'add Rx' user flow."],
        ["2 out of 8 mistook the current order screen as the past order screen due to the 'past orders' label at the bottom of the screen. My solution was to merge 'current' and 'past' orders to further minimizing the app."],
        ["Thinking that the 'click to select medications for refill' prompt above should be enough, I did not include a visual indicator such as a checkbox, thus allocating more space to medication details. However, since 3 out of 7 users had trouble or took time with selecting medications, I will include a checkbox as a visual cue in the final design.","3 out of 8 had trouble choosing between shipping and pickup. Solution: I will include a prompt that asks the user to select an option before continuing, and add a checkbox to each option as a visual cue. My lofi prototype blurs the 'next' to indicate that the user cannot proceed, but since this confuses users, I will make the button background grey instead so that its text is still legible."],
        ["To prevent distraction from the main screens, I will collapse menu screen into an overlay and bring users directly to the main screen upon opening the app."]
       ]}

       typography="After refining the UX backbone for the final app, I felt confident enough to begin adding design elements. I began by looking at various signage around the hospital campus. My initial decision was to match the typography - using a serif font for headings and a sans serif for text and buttons./For the headings and subtitles I wanted something that matched the hospital's logo - serious, traditional, and elegant. On the other hand, for the sans serif font that will be the body text, I wanted something lightweight and box-shaped. Using the low-fidelity RX screen, which has the most variety of text, I mapped out all the combinations and narrowed it down to the final two choices below."

       typographyRefImages={[textRef1]}
       typographyRefTitles={["reference typefaces from around the hospital campus"]}

       finalTypography={["3-App Titles: Lora", "4-App Body: Quicksand"]}

       color="After defining a limited palette, I needed to narrow down my choices. Here I considered the hospital's architecture and interior design, looking for elements or recurring colors that might guide my color choices. I also looked for existing brand colors on the hospital's website and campus. I asked myself what core values I wanted to convey to users, considering both existing brand colors and design guidelines from the research stage."

       designSystemImages={[stickerSheet1, stickerSheet2, typographySystem]}

       hifiWireframesImages={[hifiImg1, hifiImg2, hifiImg3, hifiImg4, hifiImg5]}
       hifiWireframesTitles={["High-fidelity ideation", "Fixing problems with animation continuity", "Registration Screens", "Refill User flow"]}

       colorTitles="Color as Storytelling"
       colorDescriptions="The pharmacy app should have the emphasis of being patient-centered, transparency, and trust-worthiness. First I searched for various key words in both google Play Store and Google Images, then extracted key colors from each palette, grouping them by similarity in tone and shade."
       colorSection="Pharmacy"
       colorLabels={["ruby", "cast iron", "sprout","patina", "snow"]}
       colorHexes={["#CE3434","#111422","#B4CB59","#319AAC","#7DC1ED"
       ]}
       colorWireframes={[brandColorFinal]}

       colorText="I was inspired by the idea of coloring the application's user flow like an in-person trip to the outpatient pharmacy./First, bold black and red will be featured in the splash screen and login screen, reflecting the hospital's red logo and historical building materials. Transfer screens also use these colors, reinforcing the brand color as part of the transfer experience./A leaf green will be used for the add Rx screen and confirmation screens, reflecting the warm interiors of the hospital./Blue green and light blue will guide the rest of the user experience. These colors not only match the campus???s more modern glass exteriors, but also convey security, trust and reliability."
       colorMoodboards={moodboard}

       prototype="lorem ipsum"
       prototypeIllustration={[motionDesignImg]}
       prototypeLink="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F4kEUnH9BBuB7MCdCdqSyP1%2FPharmacy-Concept-App-Prototype%3Fnode-id%3D399%253A29340%26scaling%3Dscale-down%26page-id%3D399%253A27182%26starting-point-node-id%3D399%253A29340"/>
       <Footer m={m} l={l}
       learned="In this project, I implemented the design process and learned to empathize with users and gain insights that lead to problem-solving. It is thrilling to see something through from start to finish, and I am very grateful to Google???s certificate program on Coursera, and its instructors who guided me through every step of the design process."/>
    </div>
  )
}

export default ProjectPharmacy
