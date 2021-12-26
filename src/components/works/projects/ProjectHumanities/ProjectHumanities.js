import ProjectLoader from '../sections/ProjectLoader'
import {motion, AnimatePresence} from 'framer-motion'
import useDebounce from '../../../../customHooks/useDebounce'

//summary
import Summary from '../sections/Summary'

import mainImageV from './images/user-with-iphone-V.jpg'
import mainImageH from './images/preview-page-H.jpg'

import topView1 from './images/top-view/searchview-history.jpg'
import topView2 from './images/top-view/shelfview-historianscraft.jpg'
import topView3 from './images/top-view/detailsviewhistorianscraft.jpg'
import topView4 from './images/top-view/authornav-burke.jpg'
import topView5 from './images/top-view/authorpanel-burke.jpg'
import topView6 from './images/top-view/authorbg-burke.jpg'
import topView7 from './images/top-view/authorbio-burke.jpg'

//research
import Research from '../sections/Research'

import userFlowImg from './images/user-flow.png'

//design
import Design from '../sections/Design'

import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';
import lofiWireframesImage from './images/design/lofi.png'
import hifiMobile from './images/design/hifi-mobile.png'
import hifiTablet from './images/design/hifi-tablet.png'
import hifiDesktop from './images/design/hifi-desktop.png'

import textRefCover from './images/design/typography-ref.png'
import textRefHeavy from './images/design/textRef-heavy.jpg'
import textRefLight from './images/design/textRef-light.jpg'

import typographyFinalImg from './images/design/typography-final.png'

import moodboardSpring from './images/design/moodboard-spring.jpg'
import moodboardSummer from './images/design/moodboard-summer.jpg'
import moodboardWinter from './images/design/moodboard-winter.jpg'

import texturesSpring from './images/design/textures-spring.jpg'
import texturesSummer from './images/design/textures-summer.jpg'
import texturesWinter from './images/design/textures-winter.jpg'

import wireframeSpring from './images/design/wireframe-spring.png'
import wireframeSummer from './images/design/wireframe-summer.png'
import wireframeWinter from './images/design/wireframe-winter.png'

//Development
import Development from '../sections/Development'

import irisMarionYoungInfluences from './images/development/iris-marion-young-influences.jpg'
import simoneDeBeauvoirInfluenced from './images/development/simone-de-beauvoir-influenced.jpg'
import influencedResult from './images/development/influenced-result.jpg'

import filteredBg from './images/development/filtered-bg.jpg'
import filteredPublished from './images/development/filtered-published.jpg'

import Footer from '../sections/Footer'

const ProjectHumanities = ({m, l, setRouteFocus}) => {

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
          mainImage={m? mainImageH : mainImageV}
          m={m}
          l={l}

          carousel = {true}
          carouselSlides={[topView1, topView2, topView3, topView4, topView5, topView6, topView7]}
          carouselSlidesTitles={['search by keyword - "history"', 'opened shelf - "How should humans relate to history?"', `table of contents - "The Historian's Craft" by Marc Bloch`, `author details for Kenneth Burke, author of "Attitudes Towards History"`, `Recommended books based on relation to Kenneth Burke`, `Historical background of Kenneth Burke`, `Biography of Kenneth Burke`]}

         research="Ideation, Research, and user flow"
         design="color, typography, and wireframes"
         development="defining resources, database design, and problem-solving in React"

         title="Humanities Book Database"
         roles="Ideation, Research, UI and UX Design, Development"
         summary="Through a user survey of 50 humanities book readers, I established four key criteria for book selection - rationality, specificity, systematicity, and personality - and gained insights about readers’ book selection behavior. Then, I organized research information into a user flow, and created a responsive design for mobile, tablet, and desktop sizes in Figma. Finally, I created the web app using React and node.js, using data from Google Books API, Wikipedia API, and my MongoDB book database."
         challenge="How can I present quality humanities books to readers?"
         solution="By pairing reader-defined quality books with an interface that prioritizes valued book selection criteria."
         websiteLink="humanitiesdatabase.com"
         />

         <span id="research"></span>
       <Research
         m={m}
         l={l}
         ideationText="What makes a good humanities book, and how do I discover one? I receive many humanities book recommendations from professors, or swap recommendations with friends, but asides from that, it can be actually pretty hard to land on books that accurately pinpoint my questions. Conversations with other readers seem to lead to the same conclusion - despite living in an information-rich world today, the best book recommendations seem to travel by word of mouth. My solution was to create a book database full of quality humanities books, so that other readers and I have a reliable resource to turn to with specific questions."
         ideationEmphasis="despite living in an information-rich world today, the best book recommendations seem to travel by word of mouth."

         researchText="As part of UX research I conducted (1) a competitive analysis of features offered by 11 similar book-focused websites and (2) a user survey. The bilingual survey (written using Google Forms) was distributed among four major Taiwanese University Facebook groups, and was filled out by 50 self-selected humanities readers."

         competitiveAnalysis="The competitive analysis helped me understand the existing range of resources and book-related features./For example, thedailyidea.org, a website that compiles philosophy resources, has several well-organized lists drawn from university curriculums. However, curriculum-style reading tend to include textbooks that explore broad ideas instead of specific ones. My goal is to make humanities reading highly specific and personal by only including works with narrowly-defined theses, so that instead of exploring “existentialism,” readers would explore question-formatted topics that pique their curiosity, such as “How Can Moral Consciousness Be Defined Outside Of Religion?” Each topic may include many different 'answers', including works written by existentialist authors - but not excluding other ones either."

         competitiveAnalysisEmphasis="My goal is to make humanities reading highly specific and personal by only including works with narrowly-defined theses."

         title="My Accordion"
         sectionTitles={[
          "How should I arrange bookshelves, and what information should I present with each book?",
          "Are my proposed features adequate for user purposes? What features do users suggest?",
          "How can I create meaningful discussions between users?",
          "How should I establish tone and reputation of the site?"
         ]}
         sectionResultsArr={[
          [`$top criteria for books$ Top criteria that influences the decision to read a book are subject matter, genre, and surprisingly, intuition. (66%, 61.7%, 53.2%) Intuition is followed by Reading a few pages (48.9%) and trust in the recommender (44.7%). Book popularity, book reviews, and ratings are of the least importance to users./
            $research conducted prior to reading$
            40.4% of users research a book’s subject matter, 38.3% research the Historical location of the book, while only 14.9% of readers research the authors' biography before reading a book./
            $prior-reading research motives$ 24 out of 34 readers who conduct research prior to reading (70.6%) gave qualitative answers as to why:/
        {=• To understand whether they’ll enjoy the book or the subject matter (33.3%)•	To affirm the quality and standard of the book (25.0%)
         •	To understand the author’s perspective (16.7%)
         •	To understand the book’s structure and discourse (12.5%)
         •	To understand a book’s historical location (12.5%)`,`$post-reading research motives$ After reading a book, more than half of users (61.7%) search for related or referenced books. In addition to searching for related books, users become more interested in the subject matter (46.8%) and the book’s historical background and author (40.4%, 44.7%)./$post-reading activity$  While only one person (2%) reports reading critical reviews before reading a book, almost half of readers read critical reviews (48.9%) after reading a book. Other common post-reading activities include discuss the book with friends (44.7%), or writing reviews or sharing thoughts on social media.
         `],
         [`World literature map featuring little known authors: 75% of readers are interested in the proposed map, while 25% gave a maybe.`],
         [` Book discussion partner matching: 72.7% are interested in this feature, while 25% gave a maybe, and 2.3% won’t use the feature. By asking readers to answer the qualitative question “What makes a good discussion?” I received plenty of feedback to consider. 29 (61.7%) people expressed their opinions on the matter, each of which falls into one or more of the categories below.
         {=•	Prerequisite of having deeper understanding of the topic and the author and the book’s structure. Share knowledge that you have about the historical context or the author.  (37.9%)
         •	Share your unique perspective (whether it be controversial or not) and opinions on the book. Debate but not to convince or persuade, but rather trade perspectives. (44.8%)
         •	Make participants curious about rereading the book or see it in a new light (13.8%)
         •	The ability to reason; systematicity. (13.8%)`],
         [`Results from the question “How do you prefer to discover books?” revealed that browsing bookstores, internet bookstores, or library shelves is their top preference for book discovery (68.1%). Coming in second is discovery via internet search (44.7%). On the contrary, recommendation platforms are scarcely used as sources of recommendation (6.4%).`]
         ]}
         sectionApplicationArr={[
          [`A crucial feature to implement would be a subject matter filter for users to quickly find relevant topics. A book’s historical location is at the very least of referential importance, and must be present in the book query. I would include the author’s major life events, display the book's original year of publishing, and include the author’s age when they wrote the book. A table of contents in addition to a previewed paragraph form the most crucial information when it comes to book selection.`,`Searching for related or referenced books (61.7%) is a highly popular book discovery method that should be implemented in the web app for its trustworthiness and practicality./
         Based on the popular actions taken by readers after reading a book, I will enclose in-depth book and author information in their own post-reading dashboard. It is important to visualize the book search user flow as a cycle: reading one book leads to another, and users engage in different activities in between books - the database should support this lifecycle and prioritize relevant content at each stage. For instance, since reviews are not as crucial to the book search process, they will also be located in the post-reading space.
         `],
          [`Literature and Philosophy are the top subject matters (87.2% and 60.0%) of interest and therefore should take priority in the database. The popularity of Literature also supports the development of a literature map function. A problem I began brainstorming is how to define “little-known”. The same thing comes to mind – why does this platform need to exist? The criteria that comes to mind is: date limit (must be ten years old), amount of reviews on goodreads etc. Where can I find quantitative data on a book’s popularity? Amount of google searches for the title of the book (regardless of author popularity).
         `],
          [`How the initial discussion should be formatted remains to be decided. I must form a good initial discussion form based on these guidelines.`],
          [`Given the low popularity of recommendation platforms and the high popularity of bookstore or library browsing, I would present my platform as a reliable library database with 'shelves' to comb through and explore. Word of mouth (38.3%) is the next preferred method of book discovery, which stresses the importance of reputation. For these reasons, the tone and design of the site will be more serious. Loading speeds must be minimal.
         `]
         ]}

         surveyResultsTitle="Survey Results"

         surveyResultsEmphasis="It is important to visualize the book search user flow as a cycle, and present it as such."
         screenFeatures={[
           ["Central thesis search bar","subject matter filter","subject matter introduction panel","basic referential data","table of contents","2-3 paragraphs that captures the author's central thesis and writing style"],

           ["in-depth referential data","subject matter introduction panel","Further reading – related books, authors, subjects etc.","Reviews","Discussion form"],
           ["saved books (read and to read)","saved questions", "contacts and submitted discussion forms","profile settings"], ["data visualization - book and spokes", "filter by referenced works/their authors"],
           ["filter by genre and year"],
           ["display count of readers that are interested in a yet-untranslated book and/or out-of-print books", "isbn etc. - more technical information"]
         ]}
         screenTitles={[`primary screen - Search by central argument`, `primary screen - post-reading screen`,"user account screen", "Search by related authors and works", "literature map", "publisher board"]}

         designKeywords={["single page", "cyclical flow", "minimalistic", "ink and paper"]}
         designTone={["serious", "concise", "rational", "neutral", "reputable", "academic"]}

         userFlowText = "With good user knowledge under my belt, I can now start planning the app layout. I enjoy starting with the information architecture to really lay out in the abstract what I am trying to accomplish."
         userFlowImg={userFlowImg}
        />

        <span id="design"></span>
        <Design m={m} l={l}

        lofiWireframesImage={lofiWireframesImage}

        lofi="Taking the insights and design keywords from the UX research, I created various paper wireframes for each screen based on different looks I pictured for the app. Selecting the most responsive and functional design, I created low fidelity wireframes for mobile and desktop versions of the web app."

        typographyEmphasis="The web app's typography alone should convey a message of trustworthiness and quality."
        typography="With my low-fidelity screens ready, I began thinking about typography. I needed to be careful about my selection - since my target audience consists of avid readers, the web app's typography alone should convey a message of trustworthiness and quality. By referencing several Classics on my bookshelf and recalling the reading experience for each book, I decided to stay away from thick stems or thick serifs, both of which are characteristic of old print, and examined typefaces that felt 'light weight' and 'effortless' instead. Finally, I decided on 'Amiri' for reading-heavy experiences in the web app. For the main interface of the app, I chose the sharp and angular 'Jost' font, which emulates the smart cover font used by Penguin classics, and selected the rounder 'Palanquin' for use in body texts."
        typographyRefImages={[textRefHeavy, textRefLight,textRefCover]}
        typographyRefTitles={["typefaces that feel 'heavier' due to their thick stems and serifs", "typefaces that feel 'lightweight' in comparison","Typefaces used in Classics covers"]}

        finalTypography={["4-App Titles: Jost", "4-App Body: Palanquin", "3-Reading-heavy texts: Amiri"]}
        typographyFinalImg={typographyFinalImg}

        hifiWireframesImages={[hifiMobile, hifiTablet, hifiDesktop]}
        hifiWireframesTitles={["Mobile wireframes", "Tablet wireframes", "Desktop wireframes"]}

        colorSection="Humanities"
        colorColors
        colorTitles={["Spring", "Summer", "Winter"]}
        colorDescriptions={["Shadows are soft, cast by strong, outdoor ambient light.", "Crisp, dark shadows cast by the mid-day sun.", "Dim shadows cast by soft, indoor ambient/bounce light."]}
        colorAccents={["silver", "copper", "bronze"]}

        colorLabels={[["search", "shelf", "details","action"],["search", "shelf", "details","action"],["search", "shelf", "details","action"]]}
        colorHexes={[["#F5EBE2","#E9D6CA","#494243","#F17C67"],["#CFDFE6","#9B6D57","#0C5A5A","#73BCBC"],["#D2E2F1","#8F7642","#373B4D","#446F8C"]]}
        colorWireframes={[wireframeSpring, wireframeSummer, wireframeWinter]}
        colorTextures={[texturesSpring, texturesSummer, texturesWinter]}
        colorMoodboards={[moodboardSpring, moodboardSummer, moodboardWinter]}
        />

        <span id="development"></span>
       <Development
         m={m}
         l={l}

         developmentText="With so many screens and features decided on in the research stage, I needed to decide on my focus for the first iteration – what is my minimum viable product? To me, the core value of the database lay in the search by central thesis screen and the further reading screen. These two screen feed into each other as illustrated through the user flow, and support readers with relevant information both before and after reading."

         finalStack="HTML, CSS, JavaScript, React, Axios, Node.js, Express, MongoDB."
         stackMemo="Server hosted on Heroku, Frontend hosted on Netlify."
         githubRepository="https://github.com/JCJang/Humanities-book-database/tree/aug-4-merged-with-main"

         screenDescriptions={["I established four book selection criteria by considering what users value in book discussions, and also by looking for common qualities in the book recommendations I received. Before conducting research, I already had fifty or so books that I read or were recommended to me. After adding reader recommendations from the survey, the list grew to around a hundred. I used the four selection criteria to filter through the list, then analyzed each book’s table of contents and content to come up with a central thesis question. Finally, I grouped together books which thesis share core ideas under the same question.",

         "The primary question I faced was where to find book information. Looking at online APIs, two major options were the openLibrary API and Google books API. At first I planned to fetch book information via openLibrary.org and use archive.org to preview the books. This was because openLibrary had the advantage of storing ‘works’ that cover information on every edition, while by contrast, Google books stores individual ISBN ‘editions’. However, after fetching test data from openlibrary API, I found out that the server is not integrated with archive.org, and that its data is often incomplete, inconsistent, or arbitrary. For instance, not every book has keywords stored under ‘subjects,’ while those that do contain arbitrary values such as publisher names. By contrast, Google books API yields consistent data, and the data integrates well with an embeddable viewer.",

         "For author data, I first looked for referenced sources such as the Encyclopedia Britannica, but found most such content online copyrighted. I could not find any open source history or biography APIs, so I turned to Wikipedia for both author biographical data and historical data. Wikipedia has quite complete information in English for the majority of authors that I plan to put in the database. However, the same pages may be grossly shorter or even nonexistent in other languages. This is something I have to think about when I scale the app - alternative sources such as Baidu API (a Chinese encyclopedia much like Wikipedia). Similarly, it has been difficult finding complete historical timelines online. My solution was to use Wikipedia's historical timelines for each country, from which I parsed and created simple json objects. The idea is to parse each object for an author-specific timeline at runtime."]}

         screenFeatures={[
           ["personality", "rationality", "specificity", "systematicity"],
           ["Central thesis search bar","subject matter filter","subject matter introduction panel","basic referential data","table of contents","2-3 paragraphs that captures the author's central thesis and writing style"],
           ["in-depth referential data","subject matter introduction panel","Further reading – related books, authors, subjects etc.","Reviews","Discussion form"]
         ]}
         screenTitles={["Book selection criteria", `primary screen - Search by central argument`, `primary screen - post-reading screen`]}

         databaseText="During this stage, I began thinking of what data I needed and how to store it. The main challenge is figuring out how to store data in multiple languages. Future entries may not always be created in English, and may be queried in any language./At first, being aware of potential overlaps in data such as country information, I thought I should use mySQL to minimize duplicate data. But as my database model grew to 18 tables, I decided to save myself the tears and switch to MongoDB, using which reorganized the tables into two major collections: one for the shelves and books, and the other one for author data. The two collections cleanly map onto their corresponding major screens – author data that belongs in the ‘further reading' screen, and shelf and book information that belongs in the ‘search by central thesis' screen./One downside of going without foreign keys is that the two collections are connected by author names alone, which can be risky for certain languages – for instance, Chinese translations of foreign names can vary widely based on the translator. Even with these downsides, however, choosing a document database allows me the freedom to make changes in the future."


         databaseCode="jcjang/295f625013e731ddaa5f1744bb29631a"

         serverText="Accessing the database was simple after that. I built a private screen that can use API data to autofill a submission form. Using Axios in the frontend, and Express as middleware, I pushed the data in my book list to the database. The advantage of this database structure is that I can also easily create new ‘editions’ or translations. For instance, I can query entries in English which do not have Chinese editions, for which users can help translate. The same principle applies to any language pair, and would be very helpful when it comes to incorporating user input from around the globe."

         serverCode="jcjang/a30c855283f48103c3426c2f9dd3ded5"

         frontendText="With the database and API set up, I began developing the main screens in React. By reusing logic from the private screen, most of the public screen logic is easily completed. I used inline CSS and CSS flexbox for the styling, and useState to hold data and manage DOM interactions."
         relationalSearchText="Even as I was creating the database, I could already notice connections between several authors, especially familiar names that were listed by many as an influence. I decided to use the ‘Influences’ and ‘Influenced’ lists, as taken from the Wikipedia API, to create a panel of related books. The problem, however, is that many authors may list another without a reciprocal listing./In the example below, Simone de Beauvoir does not have Iris Marion Young in the list of authors she influenced. However, Iris Marion Young listed Simone de Beauvoir as her influence. To discover and append Iris Marion Young to Simone de Beauvoir's list, I wrote an algorithm that searches the entire author collection for the target author's name. In this instance, Iris Marion Young would be returned as a match because her document contains a 'Simone de Beauvoir' entry. After appending new names to the author’s native list, I can then query the shelf collection for works that exist in the database."

         relationalSearchClientCode="JCJang/c9a57189bb48a02adbc070bd22e01605"
         relationalSearchServerCode="JCJang/dcd1b407f2a11d801f63c0e32746da5e"
         relationalSearchImages={[irisMarionYoungInfluences, simoneDeBeauvoirInfluenced]}
         relationalSearchTitles={["Iris Marion Young listed Simone de Beauvoir in her 'Influences' list", "While Simone de Beauvoir does not have Young in her 'Influenced' list"]}
         relationalSearchResultImg={[influencedResult]}
         relationalSearchResultTitle={["By searching for unreciprocated relationships in the database, I can append 'Iris Marion Young' to Simone de Beauvoir's 'Influenced' list."]}

         functionalText="Another feature I was excited to implement was a historical timeline for each author. I took Wikipedia’s ‘historical timeline’ pages of several countries, and parsed each timeline into a simple data object, with dates as keys, and events as values. Using author birth and death dates, I was able to filter through the object, returning a bracketed piece of history tailored to each author."

         functionalCode="JCJang/2bcdfa5f86b85269fac053ad0caf3ec1"
         functionalProgrammingImages={[filteredPublished, filteredBg]}
         functionalProgrammingTitles={["filtering for dates around a book's publication date", "filtering for dates in an author's lifespan"]}
        />

        <Footer m={m} l={l}  websiteLink="humanitiesdatabase.com"
        nextSteps={["implement a Chinese version using i18next","conduct user testing", "add profile functionality with OAuth and a simple RESTful API", "include data visualization of author relationships and book referential relationships - probably using D3.js"]}
        learned="Developing this project pushed me to discover and learn many technologies, from REST APIs to DNS configuration for my custom domain. One thing I did well was to create a roadmap of what I needed to do at each step, so that slowly and surely, I could complete the minimum viable product. Some things I wish I did or knew: guidelines or best practices on how to write organizable code – I can already foresee the headaches when I can jump back into the code. The more I learn about frontend development, the more I am aware of things that I still need to learn. I am very excited to equip myself with all the skills that will enable me to become a better developer."/>
      </div>
    )
}

export default ProjectHumanities
