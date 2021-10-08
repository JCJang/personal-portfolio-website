//summary
import Summary from '../sections/Summary'

import mainImageV from './images/user-with-iphone-V.jpg'
import mainImageH from './images/preview-page-H.jpg'

import displayImage1 from './images/top-view-author-mockup-H.jpg'
import displayImage2 from './images/user-with-iphone-V.jpg'
import displayImage3 from './images/woman-using-laptop-V.jpg'
import displayImage4 from './images/front-view-mockup-H.jpg'

import topView1 from './images/top-view/searchview-history.jpg'
import topView2 from './images/top-view/shelfview-historianscraft.jpg'
import topView3 from './images/top-view/detailsviewhistorianscraft.jpg'
import topView4 from './images/top-view/authornav-burke.jpg'
import topView5 from './images/top-view/authorpanel-burke.jpg'
import topView6 from './images/top-view/authorbg-burke.jpg'
import topView7 from './images/top-view/authorbio-burke.jpg'

//research
import Research from '../sections/Research'

import userFlowImg from './images/user-flow-result.png'

//design
import Design from '../sections/Design'

import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';
import lofiWireframesImg from './images/design/lofi.png'
import hifiMobile from './images/design/hifi-mobile.png'
import hifiTablet from './images/design/hifi-tablet.png'
import hifiDesktop from './images/design/hifi-desktop.png'

import textRef1 from './images/design/typography-ref.png'
import typographyFinalImg from './images/design/typography-final.png'

const ProjectHumanities = ({m, l, setRouteFocus}) => {

    console.log(displayImage1)
  const location = useLocation();
  useEffect(()=>{
    setRouteFocus(location.pathname)
  },[])

    return (
      <div style={{width:"100vw", height:"var(--desktopheight)", overflowY:"auto", overflowX:"hidden", scrollBehavior: "smooth"}}>
        <Summary
          mainImage={m? mainImageH : mainImageV}
          m={m}
          l={l}

          carousel = {true}
          carouselSlides={[topView1, topView2, topView3, topView4, topView5, topView6, topView7]}
          carouselSlidesTitles={['search by keyword - "history"', 'opened shelf - "How should humans relate to history?"', `table of contents - "The Historian's Craft" by Marc Bloch`, `author details for Kenneth Burke, author of "Attitudes Towards History"`, `Recommended books based on relation to Kenneth Burke`, `Historical background of Kenneth Burke`, `Biography of Kenneth Burke`]}

         research="Ideation, Research, and user flow"
         design="color, typography, and wireframes"
         development="defining resources, database design, and problem-solving"

         title="Humanities Book Database"
         roles="Ideation, Design, Full Stack Development"
         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
         summary="Through a user survey of 50 humanities book readers, I established four key criteria for book selection - rationality, specificity, systematicity, and personality - and gleaned insight from readers’ book selection behavior. Then, I organized such information into a user flow, and created a responsive design for mobile, tablet, and desktop sizes. Finally, I created the web app using React and node.js, using data from Google Books API, Wikipedia API, and my MongoDB book database."
         challenge="How can I present quality humanities books to readers?"
         solution="By pairing reader-defined quality books with an interface that prioritizes valued book selection criteria."
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
        designText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

        designEmphasis="hi"
        typography="prior to creating a mood board, I jumped into typography. Since this application is for book lovers, I was certain that finding the right typography sends a crucial message regarding the platform’s quality. I didn’t want something with a thick stem or a thick and serif, which feelreminds one of old print.For something more lightweight, I tried to remember the most flawless reading experiences I had, and one of the top ones was reading Everyman’s library’s edition of Naguib Mahfouz’s The cairo trilogy. Moving through my bookshelf, I looked for other typesets used in Classics that emanate the message of being 'light weight' and 'effortless'."
        typographyRefImages={[textRef1]}
        typographyFinalImg={typographyFinalImg}
        color="hi"
        lofiWireframesImg={lofiWireframesImg}
        hifiMobile={hifiMobile}
        hifiTablet={hifiTablet}
        hifiDesktop={hifiDesktop}
        />


      </div>
    )
}

export default ProjectHumanities
