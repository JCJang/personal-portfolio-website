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
import assessment from './images/assessment.png'
import userFlowBefore from './images/user-flow-before.png'
import userFlowAfter from './images/user-flow-after.png'
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
        carouselSlidesTitles={["Trekinn's Landing page. Tablet screens are in English","Rooms page with photo Carousel", 'Map & Destinations page (laptop, phone) and Contact page (tablet). The mobile version of Map & Destinations has a button below the map. It opens the Google Maps app for quick navigation.', 'About page (laptop, phone) and Map & Destinations (tablet)']}

        mainImage={m?mainImageH:mainImageV}
         research="Assessment, Reorganization, and user flow"
         design="color, typography, and wireframes"
         development = "Working with tailwind and i18n in React"

         title="Trekinn Website"
         roles="UI and UX Design, Development, Internationalization"

         challenge="How can I redesign a website while maintaining its original tone?"
         solution="By extracting themes from website content and designing in accordance."
         summary="In this project I scoped out portfolio content constraints for both UX designers and junior frontend developers, then established a design system so that my website can scale consistently. Finally, I experimented with a new workflow that involves simultaneous design and development. By designing and developing reusable components in React and keeping organized, I was able to launch my react website in 20 days."
         websiteLink="vibrant-ritchie-da2a24.netlify.app"

         />

         <span id="research"></span>
       <Research
         m={m}
         l={l}


         researchText="Trekinn is a local-owned homestay in Hualien - a popular gateway to some of the most scenic areas in Taiwan. Trekinn has two two-bed rooms and three one-bed rooms. Primary clients are young adults and families with young children."
         assessmentText="The website uses minimal storytelling, and instead takes a direct and transparent tone that conveys simplicity and honesty. Website content emphasizes Trekinn’s cleanliness, excellent location, and locality – “We know our way around, and we can help you plan the best trip possible.” There are some thoughtful features such as a functional nav bar that allows users to quickly contact the homestay./Assessing the site, I can see very thoughtful information, but a lack of presentation - for instance, useful travel information and services are located under a “bulletin” page instead of being highlighted. The final scope of the project was information reorganization, increase of intra-website mobility, separation of Chinese and English versions, and overall, a responsive design that presents Trekinn in its best light."
          assessmentImages={[assessment, userFlowBefore]}
          assessmentTitles={["analysis of the original website's UX", "original website's information architecture"]}


          singleStatistic={true}
          statisticTitles={["Do I need a responsive website?"]}
          statisticTexts={["The owner, who had created the original site, had taken a mobile-centered approach, and mentioned that most bookings were done via mobile. Since most of Trekinn's customers only book through mobile, is a desktop version needed? My answer is a wholehearted 'Yes'. According to a study by TripAdvisor, more than 55% of travelers use their laptops to plan or book a trip, in comparison to 42% for laptops - perhaps the lack of desktop bookings is not a prediction of desktop user behavior, but rather an indication that Trekinn’s website is not optimized for such users - the data collected by the owner was skewed by survivor bias (see source blog post). Optimizing for either mobile only or desktop only would be missing on many customers – a responsive design is crucial to providing a high quality and consistent experience for all users."]}
  
          statisticSources={["https://ir.tripadvisor.com/news-releases/news-release-details/tripadvisor-study-reveals-42-travelers-worldwide-use-smartphones","https://www.trevorbragdon.com/when-data-gives-the-wrong-solution/"]}

          userFlowText = "I ended up organizing site information into five screens: About, Rooms, Map & Destinations, and Contact. I also planned for a Landing page that would serve as an entry point to each page, and increased intra-website mobility by placing relavant links where needed. For instance, there is a link to the Contact page in the footer, and a link to Map & Destinations in the Rooms page, located right after booking information. This link is for users that just completed booking, and would like to explore things to do near the homestay or plan their itinerary in Hualien."

          userFlowImg={userFlowAfter}
         designKeywords={["elegant", "relaxing", "brochure-style"]}
         designTone={["(established)","practical","informative","transparent", "genuine", "insightful"]}
        />

        <span id="design"></span>
        <Design m={m} l={l}
        design="I wanted to present Trekinn as a no frills, cost-effective, practical, and quiet space to relax and recharge. With this and the target audience of young adults and families in mind, I wanted the site to feel playful but not frivolous, modern but not too high end or eccentric. I began envisioning a brochure-like design quality, with many visuals, but also concentrated, well-organized information with a focus on exploring Hualien. With themes of warmth, elegance, and nature in mind, I jumped into my design workflow, starting with typography."

        typography="Since most customers are from Taiwan, my design approach is Chinese-first. For Chinese I wanted a Ming (serifed) font, which generally feels more serious and academic. I landed on Gen Wan Ming, which was a beautiful typeface that was both elegant and scholarly, with slightly rounded angles. The typeface pairs well with the serious tone of being direct and trustworthy, and also pairs well with the brochure quality I wanted./For the body text, I chose Genseki, a Gothic font. For the English body text, though at first I considered Noto Sans for its rounded quality, but finally turned to Roboto for its compactness and box-like quality that matches Chinese characters. At a late stage of development, I swapped the English Headers from the default Gen Wan Ming to the more Modern-leaning Rufina. This increased the coherency of the English website due to Rufina’s slimmer horizontal lines that ties in with Roboto./I encountered some difficulties tailoring the English version to the Chinese layout. For instance, optimal readability for Chinese or character-based languages falls between a line height of 1.5-1.7 (the default line height for Bootstrap is 1.4). When mapping English text onto the Chinese, line height can seem ‘off.’ This is why it is important to take a Chinese-first approach when it suits the project needs."

        finalTypography={["3-Chinese Headings: Gen Wan Ming", "4-Chinese body: Genseki", "4-English Headings: Rufina","4-English body: Roboto"]}
        typographyRefImages={[textRefEnglish, textRefBodyText]}
        typographyRefTitles={["options for English headers", "Compatability of 'Genseki'-'Noto Sans' and 'Genseki'-'Roboto'"]}
        typographyFinalImg={typographyFinalImg}

        finalColorLabels={["sapling", "tropical", "ginger","plum"]}
        finalColorHexes ={ ['#A7C9AF','#83C4D2',"#C9AD83",'#E4816C']}
        colorLabels={["cream", "beige","rapids", "taroko", "ravine"]}
        colorHexes ={['#FFF6F2','#EDE2DD','#D8E5E3',"#3E4F54", '#384A2C']}

        designTitle ="Color Ideation"
        colorSection="Trekinn"

        colorTitles="Color as Brand Message"
        colorDescriptions="Although guests are highly encouraged to explore Hualien’s nature, there were not too many visuals. So the first thing I incorporated into the design assets were high-quality photos showcasing the local scenery. Since all of them are highly saturated, I wanted the website to have low to medium saturated colors for balance."
        moodboardText="To generate a palette, I sampled both nature photos and photos of Trekinn’s interior, matched the sampled colors to each theme, then desaturated and tweaked each color individually until I have a low, medium, and high brightness colors for each theme."

        colorTextures={texture}
        colorText="lorem ipsum."
        colorMoodboards={moodboard2}
        
        hifi="I wanted the site to be of medium contrast, with neutral to rounded components."
        hifiWireframesImages={[hifiMobile, hifiDesktop]}
        hifiWireframesTitles={["Mobile screens", "Desktop screens"]}


     />
     <span id="development"></span>
    <Development
      m={m}
      l={l}

      developmentText="I am quite familiar with my React workflow at this point, but learning from my last project, wanted to learn and incorporate new tools. The first thing I did was setting up tailwind for quicker responsive coding. Being used to vanilla CSS, I had some difficulty finding corresponding classes by name, but having the cheatsheet from tailwindcomponents.com on hand really helped. Once I adapted, I loved working with tailwind, and I appreciated the freedom of coding CSS state changes without leaving JSX."

      finalStack="HTML, CSS, JavaScript, React, Tailwind, i18n."
      stackMemo="Hosted on Netlify"
      githubRepository="https://github.com/JCJang/personal-portfolio-website"

  internationalizationText="Instead of creating a separate English version of the site, I used i18n, which allows in-app language changes – no reload needed. It works by mapping json values onto their corresponding keys in the UI, and is fairly easy to work with."
  i18nTemplateCode="JCJang/4787555b42f172425b8cb8d0a3aaaff9"

  i18nJsonCode="JCJang/aa368419652cca4c9c63a15c9762beb8"
         />

        <Footer m={m} l={l}
      learned="I learned so much from this project, from tab navigation, integrating Netlify with react, to debugging across browsers. I also had fun working on ‘finishing touch’ features like a custom 404 page, loaders, and nav bar animations. What would I do differently for my next project? Enhance the vanilla CSS that I've been using thus far with tools like tailwind, with which I can manage ‘hover’ states. I also need to learn more about accessibility and how to solve related problems, like how to implement tab navigation inside modals./If you are reading this paragraph, thank you so much for following my journey. If you have any ideas or feedback about what I can do better, feel free to send me your thoughts in the 'contact' page! Your input would help me learn and grow as a designer and developer."/>

      </div>
    )
}

export default ProjectTrekinn
