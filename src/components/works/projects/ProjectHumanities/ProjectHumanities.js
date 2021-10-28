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
         roles="Ideation, Design, Full Stack Development"
         summary="Through a user survey of 50 humanities book readers, I established four key criteria for book selection - rationality, specificity, systematicity, and personality - and gleaned insight from readers’ book selection behavior. Then, I organized such information into a user flow, and created a responsive design for mobile, tablet, and desktop sizes. Finally, I created the web app using React and node.js, using data from Google Books API, Wikipedia API, and my MongoDB book database."
         challenge="How can I present quality humanities books to readers?"
         solution="By pairing reader-defined quality books with an interface that prioritizes valued book selection criteria."
         websiteLink="humanitiesdatabase.com"
         />

         <span id="research"></span>
       <Research
         m={m}
         l={l}
         ideationText="I chose psychology as my major in college because I thought the field would address human meaning and purpose. However, as I soon realized, Psychology had long shifted away from humanism and other forms of self-inquiry, taking a more behavioristic approach instead. Still driven by curiosity, I asked many Humanities professors for supplementary reading that addresses humanistic topics, and that was my main source of book recommendations. Conversations with other readers seem to lead to the same conclusion - despite living in an information-rich world today, the best book recommendations seem to travel by word of mouth. My solution was to create a book database full of quality humanities books, so that myself and other readers have a reliable resource to better understand meaning and ethics in life."
         ideationEmphasis="despite living in an information-rich world today, the best book recommendations seem to travel by word of mouth."

         researchText="As part of UX research I conducted (1) a competitive analysis of features offered by 11 similar book-focused websites and (2) a user survey. The bilingual survey (written using Google Forms) was distributed among four major Taiwanese University Facebook groups, and was filled out by 50 self-selected humanities readers."

         competitiveAnalysis="The competitive analysis gave me a better understanding of the existing range of resources and book-related features that readers may find attractive – along with their limitations./For example, thedailyidea.org, a website compiling philosophy resources, has several well-organized lists drawn from university curriculums. However, curriculum-style reading usually seeks to cover a whole topic. Books include 'Introduction to' or 'Cambridge companion to' or '...handbook', which thesis are to cover many ideas instead of exploring a specific one. I envision my own website to only include works that explore narrowly-defined questions, so that instead of exploring topics such as “existentialism,” the reader explores topics such as “How Can Moral Consciousness Be Defined Outside Of Religion?” The topic may include many different 'answers', including that written by existentialist authors - but not excluding other ones either. My goal is to make humanities reading highly specific and personal instead of broad and abstract."

         competitiveAnalysisEmphasis="My goal is to make humanities reading highly specific and personal instead of broad and abstract."

         title="My Accordion"
         sectionTitles={[
          "How should I arrange bookshelves, and what information should I present with each book?",
          "Are my proposed features adequate for user purposes? What features do users suggest?",
          "How can I create meaningful discussions between users?",
          "How should I establish tone and reputation of the site?"
         ]}
         sectionResultsArr={[
          [`Top criteria that influences the decision to read a book are subject matter, genre, and surprisingly, intuition. (66%, 61.7%, 53.2%) Following up are Reading a few pages (48.9%) and trust in the recommender (44.7%). Book popularity, book reviews, and ratings are of the least importance

            40.4% of users revealed that they research a book’s subject matter, and many readers also research the Historical location of the book (38.3%). 27.7% of readers do not conduct research, and only 14.9% of readers research the author’s biography before reading a book. 24 out of 34 readers who do conduct research (70.6%) gave qualitative answers as to why they do so, as categorized in one or more of the following reasons:
         •	To understand whether they’ll enjoy the book/whether the subject matter is to their liking (33.3%)
         •	To affirm the quality and standard of the book (25.0%)
         •	To understand the author’s perspective (16.7%)
         •	To understand the book’s structure and discourse (12.5%)
         •	To understand a book’s historical location (12.5%)`,`After reading a book, more than half of users (61.7%) search for related or referenced books. In addition to searching for related books, there is also a major boost of interest in both a book’s historical background and its author after reading a book (40.4%, 44.7%). Many readers also research the subject matter after reading the book (46.8%).
         After reading a book, almost half of the readers read reviews (48.9%), while 44.7% of readers discuss it with friends, and 36.2% write reviews or share their thoughts on social media.
         Critical reviews is of interest to people who finished reading a book (48.9%), but not as much crucial to book discovery (1 person) and the decision whether or not to read a book (11 people / 23.4%).
         `],
         [`World literature map featuring little known authors: 75% of readers are interested in the proposed map, while 25% gave a maybe.`],
         [` Book discussion partner matching: 72.7% are interested in this feature, while 25% gave a maybe, and 2.3% won’t use the feature. By asking readers to answer the qualitative question “What makes a good discussion?” I received plenty of feedback to consider. 29 (61.7%) people expressed their opinions on the matter, each of which falls into one or more of the categories below.
         •	Prerequisite of having deeper understanding of the topic and the author and the book’s structure. Share knowledge that you have about the historical context or the author.  (37.9%)
         •	Share your unique perspective (whether it be controversial or not) and opinions on the book. Debate but not to convince or persuade, but rather trade perspectives. (44.8%)
         •	Make participants curious about rereading the book or see it in a new light (13.8%)
         •	The ability to reason; systematicity. (13.8%)`],
         [`Results from the question “How do you prefer to discover books?” revealed that browsing bookstore/ internet bookstore /library shelves and internet search are the top preferred methods of discovering new books. (68.1%, 44.7%) On the contrary, recommendation platforms are scarcely used 3 people (6.4%).`]
         ]}
         sectionApplicationArr={[
          [`A crucial feature to implement would be a subject matter filter. Information specific to the subject matter should be defined for reference purposes (definitions, introductions). This can perhaps be the subtitle for the book’s central argument. A book’s historical location is at the very least of referential importance, and must be present in the book query. I would include the author’s major life events (try to filter the text for keywords / link-tags from Wikipedia), display the year of publishing, and include the author’s age when they wrote the book. A table of contents in addition to a previewed paragraph also lay out crucial information for readers regarding a book’s structure.`,`Considering the popularity of searching for related of referenced books (61.7%), some kind of relational book discovery method should be implemented. Such a page would be practical and trustworthy, since the recommendations come directly from relation to a book a reader enjoys. It is important to visualize the book search user flow as a cycle. One book leads to another, then to ten more, and the database should support the book reading lifecycle at each stage.
         Based on the popular actions taken by readers after reading a book, it seems reasonable to include more in-depth information regarding an author or the historical data of a book’s birth in the post-reading dashboard (keep the same key facts and smart transition to expand them). The subject matter panel from the pre-reading dashboard should also be available in the post-reading dashboard, and in the same location (but perhaps with reviews available). Since reviews are not as crucial to the book search process, reviews will be located in the post-reading space.
         `],
          [`Literature and Philosophy are the top subject matters (87.2% and 60.0%), meaning my initial database should prioritize these categories. In addition, this means that the development of a literature map is very much crucial.
         The problem would be how to define “little-known”. The same thing comes to mind – why does this platform need to exist? The criteria that comes to mind is: date limit (must be ten years old), amount of reviews on goodreads etc. Where can I find quantitative data on a book’s popularity? Amount of google searches for the title of the book (regardless of author popularity).
         `],
          [`How the initial discussion should be formatted remains to be decided. I must form a good initial discussion form based on these guidelines.`],
          [`Thus, it seems of a better choice to present my platform as more of a reliable library database. Word of mouth (38.3%) is the next preferred method, therefore the reputation of the site is important. The selected books must be of high caliber and rarity for the platform to have enough reason to exist.
         For these reasons, the tone and design of the site must take a more serious tone. Loading speeds must be minimal.
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

        typographyEmphasis="As an application designed for readers, its typography alone sends a crucial message of trust and quality."
        typography="While my usual approach to design begins with creating moodboards and deciding on a color scheme, for this project I began with typography - As an application designed for readers, its typography alone sends a crucial message of trust and quality. Recalling my own reading experiences with different fonts, I decided that I didn’t want my final typography to have thick stems or thick serifs, both of which are characteristic of old print. Moving through my bookshelf, I examined the typefaces used in Classics that emanate the message of being 'light weight' and 'effortless', finally deciding on 'Amiri' for reading-heavy experiences in the web app. For the interface of the app, I chose the sharp and angular 'Jost' font, which emulates the smart cover font used by Penguin classics, and selected the rounder 'Palanquin' for use in body texts."
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

         developmentText="With so many screens and features decided on in the research stage, I needed to decide what to focus on for the first iteration – what is my minimum viable product? To me it was clear that the core value of the database was: the query screen and the further reading screen, which form the bottom right enclosed cycle in the user flow. With this in mind, I revisited the screens and features page and began gathering resources for the development plan."

         finalStack="HTML, CSS, JavaScript, React, Axios, Node.js, Express, MongoDB."
         stackMemo="Server hosted on Heroku, Frontend hosted on Netlify."
         githubRepository="https://github.com/JCJang/Humanities-book-database/tree/aug-4-merged-with-main"

         screenDescriptions={["By the time I decided to begin the project, I already have fifty or so books that I read or were recommended to me. After counting reader recommendations from the survey, the list grew to around a hundred. I used the four selection criteria to filter through the list, then analyzed each book’s table of contents and content to summarize a central thesis question. For books which thesis share core ideas, I grouped together under the same question.",

         "The primary question I faced was where to find book information. Looking at online APIs, two major options were the openLibrary API and Google books API. At first I planned to fetch book information via openLibrary.org and use archive.org to preview the books. This was because openLibrary had the advantage of storing ‘works’ that cover information on every edition, while by contrast, Google books stores individual ISBN ‘editions’. However, after fetching test data from openlibrary API, I found out that the server is not integrated with archive.org, and that its data is often incomplete, inconsistent, or arbitrary. For instance, not every book has keywords stored under ‘subjects,’ while those that do contain arbitrary values such as the book’s publisher. By contrast, Google books API yields consistent data, and the data integrates well with an embeddable viewer.",

         "When it comes to author data, I first looked for referenced sources such as the Encyclopedia Britannica. However, as expected, most referenced content online is also copyrighted. After digging through the internet for history APIs and biography APIs, I found nothing available as open source, and had to turn to Wikipedia for both author biographical data and historical data. Wikipedia has quite adequate information in English, covering most of the authors that I plan to put in the database. However, many pages do not exist or are grossly shorter in other languages, so much that for such languages Wikipedia will not be an ideal source, and I will have to integrate other APIs such as Baidu– a Chinese encyclopedia page much like Wikipedia.Similarly, it has been difficult to find accurate historical timeline data for individual author's. Fortunately, Wikipedia has historical timelines for each country, from which I parsed and created simple json objects."]}

         screenFeatures={[
           ["specificity", "personality", "etc"],
           ["Central thesis search bar","subject matter filter","subject matter introduction panel","basic referential data","table of contents","2-3 paragraphs that captures the author's central thesis and writing style"],
           ["in-depth referential data","subject matter introduction panel","Further reading – related books, authors, subjects etc.","Reviews","Discussion form"]
         ]}
         screenTitles={["Book selection criteria", `primary screen - Search by central argument`, `primary screen - post-reading screen`]}

         databaseText="After testing the APIs, I began building a private screen that can autofill needed data into a form that I can edit and submit. During this stage, I decided on most of the data that I need and began thinking of how I can best store them. The main challenge is figuring out a way to store data in multiple languages. I did not want to use English as primary access, because future entries may not always be created in English. So, I had to create a highly flexible database that can be queried in any language./At first, being aware of the potential overlaps in data, such as author pages, author influences, or country information, I thought I should use mySQL to minimize duplicate data. But as my database model grew to the size of 18 tables, I decided to save myself some tears and use MongoDB instead, with which I was able to organize all tables into two major collections: one for the shelves and books, and the other one for author data. The two collections cleanly map onto their corresponding major screens – author data that belongs in the ‘further reading screen,’ and shelf and book information that belongs in the ‘discover books’ screen./One downside of going without foreign keys is that the two collections are connected by author names alone, which can be risky for certain languages – for instance, Chinese translations of foreign names can vary widely based on the translator. Even with these downsides, however, choosing a document database will allow me much freedom to make changes in the future, an advantage I will need since I have yet to consider data structures for other features such as user information."


         databaseCode="jcjang/295f625013e731ddaa5f1744bb29631a"

         serverText="Accessing the database was simple after that. Using Axios in the frontend, and Express as middleware, I pushed the data in my book list to the database. The advantage of this database structure is that I can also easily create new ‘editions’ or translations. For instance, I can query entries in English which do not have Chinese editions, for which users can help translate. The same principle applies to any language pair, and would be very helpful when it comes to incorporating user input from around the globe."

         serverCode="jcjang/a30c855283f48103c3426c2f9dd3ded5"

         frontendText="With database and API set up, I began developing the main screens of the web app in React. By reusing logic from the private screen, most of the public screen logic is easily completed. I used flexbox and inline CSS for the styling, and useState to hold data and manage DOM interactions."
         relationalSearchText="Even as I was creating the database, I could already notice connections between several authors, especially familiar names that were listed by many as an influence. I decided to use the ‘Influences’ and ‘Influenced’ lists, as taken from the Wikipedia API, to create a panel of related books. The problem, however, is that many authors may list another without a reciprocal listing./In the example below, when opening the related authors Simone de Beauvoir, Iris Marion Young is not one of the authors she influenced. However Iris Marion Young listed Simone de Beauvoir as her influence. To retrieve this information, I took the influenced and influences lists for the target author and searched the entire author collection for where his of her name may show up. After pushing new data to the author’s native list, I can then query the shelf collection for works that exist in the database./This feature takes advantage of existing relationships within the database, but admittedly lacks complexity. For future versions I may take advantage of visualization tools map out author relationships. Even more ideally, I would like to implement a search by reference feature that uses machine learning to predict user preferences. However, I can find no such database online, and given the fact that many books in the database are not digitalized, or are even out of print, I can only imagine the difficulty with locating their references."

         relationalSearchClientCode="JCJang/c9a57189bb48a02adbc070bd22e01605"
         relationalSearchServerCode="JCJang/dcd1b407f2a11d801f63c0e32746da5e"
         relationalSearchImages={[irisMarionYoungInfluences, simoneDeBeauvoirInfluenced]}
         relationalSearchTitles={["Iris Marion Young listed Simone de Beauvoir in her 'Influences' list", "While Simone de Beauvoir does not have Young in her 'Influenced' list"]}
         relationalSearchResultImg={[influencedResult]}
         relationalSearchResultTitle={["By searching for unreciprocated relationships in the database, Iris Marion Young appears in Simone de Beauvoir's 'Influenced' list."]}

         functionalText="Another feature I was excited to implement was a historical timeline for each author. Since the flow of time in biographies varies in accordance with the density of the author's life events, it may be helpful to include  linear historical time to situate an author in history./Taking Wikipedia’s ‘historical timeline of…’ several countries, I parsed each timeline into a simple data object, with dates as keys, and events as values. Using author birth and death dates, I was able to filter through the object, returning a bracketed piece of history in which the author lived (or continues to live in)."

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
