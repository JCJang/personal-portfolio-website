import GridItem from './GridItem'
import useDraggableScroll from 'use-draggable-scroll';

import humanitiiesCoverImage from './projects/ProjectHumanities/cover-image-humanities.jpg'
import pharmacyCoverImage from './projects/ProjectPharmacy/cover-image-pharmacy.jpg'
import personalCoverImage from './projects/ProjectPersonal/cover-image-personal.jpg'
import trekinnCoverImage from './projects/ProjectTrekinn/cover-image-trekinn.jpg'

import humanitiesSlide1 from './projects/ProjectHumanities/thumbnail-humanities/searchview-history.jpg'
import humanitiesSlide2 from './projects/ProjectHumanities/thumbnail-humanities/shelfview-historianscraft.jpg'
import humanitiesSlide3 from './projects/ProjectHumanities/thumbnail-humanities/detailsviewhistorianscraft.jpg'
import humanitiesSlide4 from './projects/ProjectHumanities/thumbnail-humanities/authornav-burke.jpg'
import humanitiesSlide5 from './projects/ProjectHumanities/thumbnail-humanities/authorpanel-burke.jpg'
import humanitiesSlide6 from './projects/ProjectHumanities/thumbnail-humanities/authorbg-burke.jpg'
import humanitiesSlide7 from './projects/ProjectHumanities/thumbnail-humanities/authorbio-burke.jpg'

import pharmacySlide1 from './projects/ProjectPharmacy/thumbnail-pharmacy/3-checkout-flow.jpg'
import pharmacySlide2 from './projects/ProjectPharmacy/thumbnail-pharmacy/7-transfer-flow.jpg'
import pharmacySlide3 from './projects/ProjectPharmacy/thumbnail-pharmacy/9-add-rx-flow.jpg'
import pharmacySlide4 from './projects/ProjectPharmacy/thumbnail-pharmacy/motion-design-short.jpg'

import trekinnSlide1 from './projects/ProjectTrekinn/thumbnail-trekinn/carousel-1.jpg'
import trekinnSlide2 from './projects/ProjectTrekinn/thumbnail-trekinn/carousel-2.jpg'
import trekinnSlide3 from './projects/ProjectTrekinn/thumbnail-trekinn/carousel-3.jpg'
import trekinnSlide4 from './projects/ProjectTrekinn/thumbnail-trekinn/carousel-4.jpg'


import {IoChevronBackSharp as Prev} from "react-icons/io5";
import {IoChevronForwardSharp as Next} from "react-icons/io5";


import { IoAlbumsOutline as LofiIcon} from 'react-icons/io5/index.esm.js';
import { IoLayersOutline as HifiIcon} from 'react-icons/io5';

import { IoColorFilterOutline as ColorIcon} from 'react-icons/io5';
import { IoLocateOutline as UserFrustrationsIcon } from 'react-icons/io5';
import { IoTextOutline as TypographyIcon} from 'react-icons/io5';

import {useState, useEffect, useRef} from 'react'
import { useLocation } from "react-router-dom";


const Works = ({s, m, l, setRouteFocus}) => {

  const projectItems = document.querySelectorAll(".projectItem")

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle("showLilac",entry.isIntersecting)
      })
    },
    {
      root: document.querySelector('#projectItemsContainer'),
      threshold: 0.9  }
  )
  projectItems.forEach((entry)=>{
    observer.observe(entry)
  })

const [controlsHover, setControlsHover] = useState(false)

  const location = useLocation();
useEffect(()=>{
  setRouteFocus(location.pathname)
},[])

const worksStyle = () => {
  return {
    background:"var(--works-accent)",
    color: "var(--midnight)",
    height:"var(--desktopheight)",
    width:"100vw",
  }
};

const controlsStyle = () => {
return {
    borderRadius: "3px",
    padding: "0.5rem",
    margin:"1.2rem 0",
    zIndex: "11",
    cursor:"pointer"
        
}
}
const draggableScrollRef = useRef(null);
const { onMouseDown } = useDraggableScroll(draggableScrollRef);
// View case studies that follow my comprehensive design process, from research, design, to development of the final product.
  return (
    <div className="Column" style={worksStyle()}>

      <div className="Row" style={{flex:"1", height:"calc(100% - 2rem - 1.2px)", padding: "0 3rem"}}>
        {/* {<div className= {l?"Column":"ColumnCentered"} style={{paddingRight:"1.5rem", margin:"1.5rem 0", flex:"1", display:!l && "none",textAlign:"right"}}>

          <div style={{height:"45%"}}>
          <h3>Case Studies</h3>
          <br></br>
          <div>Target problem</div>
          </div>
          <div>
          <div>my role</div>
          <div>summary</div>
          <br></br>
          <div>go</div>
          
          </div>


        </div>} */}

        <div className="ColumnCentered worksControls unselectable" id="leftControl" tabIndex="1" style={controlsStyle()} 
      onFocus={() => setControlsHover(true)}
      onBlur={() => setControlsHover(false)}
      onMouseEnter={() => setControlsHover(true)}
      onMouseLeave={() => setControlsHover(false)}
      onKeyPress={(e)=>{
        if (e.which === 13) document.getElementById("leftControl").click()
       }}
      onClick={() => {document.getElementById("projectItemsContainer").scrollBy({
        left: -400,
        behavior: "smooth"
     })}}>
       <Prev/>
          <div>scroll</div>
          <div>left</div>
        </div>
        <div id="projectItemsContainer" className={l?"Row":"Column"} ref={draggableScrollRef}
    onMouseDown={onMouseDown} style={{
      overflowX:"scroll",
      padding:"1.5rem 0",
     }}>

            <GridItem
             image = {humanitiiesCoverImage}
             carouselSlides={[humanitiesSlide1,humanitiesSlide2,humanitiesSlide3,humanitiesSlide4,humanitiesSlide5,humanitiesSlide6,humanitiesSlide7]}
             s = {s}
             m = {m}
             l = {l}
             controlsHover={controlsHover}
             classes = ""
             routeName = "/humanities-book-database"
             direction = "rl"
             role = "Ideation, Research, UI and UX Design, Development"
             title = "Humanities Book Database"
             subtitle = "How can I help readers find quality humanities books?"
             specs = "Figma, React, Node.js, MongoDB"
             introduction = "In this project I addressed difficulties readers face when searching for humanities books by asking readers about their book search process. After analyzing user feedback, I created a full responsive web app by integrating data from Google Books API, Wikipedia API, and my multilingual MongoDB book database."/>


              <GridItem
              image={trekinnCoverImage}
              
              carouselSlides={[trekinnSlide1,trekinnSlide2,trekinnSlide3,trekinnSlide4]}
              s = {s}
              m = {m}
              l = {l}
              controlsHover={controlsHover}
              specs = "Figma, React, Node.js, i18n, tailwind"
              introduction = "In this project I remade a homestay’s website by reorganizing website content into relevant pages, creating a landing page with a call to action button, and separating Chinese and English versions through in-app internationalization. I also analyzed the original tone of the website and created a responsive design accordingly."
              routeName = "/trekinn"
              direction = "lr"
              role = "UI & UX Design, Development, Internationalization"
              title = "Trekinn Website"
              subtitle = "How can I reorganize a website without losing its brand image?" / >

             <GridItem
              image={pharmacyCoverImage}
              carouselSlides={[pharmacySlide1,pharmacySlide2,pharmacySlide3,pharmacySlide4]}
              s = {s}
              m = {m}
              l = {l}
              controlsHover={controlsHover}
              specs = "Figma"
              introduction = "In this project I researched common complaints and problems faced by Maine pharmacy users, then created a mobile app design and prototype with solutions such as transparent pricing, medication packaging status, refill notifications, and foreign language options."
              routeName = "/pharmacy-concept-app"
              direction = "lr"
              role = "Ideation, Research, UI & UX Design"
              title = "Pharmacy concept app"
              subtitle = "How can I simplify pharmacy trips?" / >


              <GridItem
                s = {s}
                m = {m}
                l = {l}
                image={personalCoverImage}
               routeName = "/personal-website"
               direction = "rl"
               controlsHover={controlsHover}
               title = "Personal Website"
               subtitle = "How can I design a scalable and maintainable portfolio website?"
               specs = "Figma, React, Node.js"
               introduction = "In this project I scoped out portfolio content constraints for both UX designers and junior frontend developers, then established a design system so that my website can scale consistently. Using a new workflow that involves simultaneous design and development of reusable components in React, I was able to launch the basic site within 20 days."
               role = "Research, UI & UX Design, Development"
              / >
        </div>
        <div id="rightControl" className="ColumnCentered worksControls unselectable" tabIndex="1" style={controlsStyle()} 
      onFocus={() => setControlsHover(true)}
      onBlur={() => setControlsHover(false)}
      onMouseEnter={() => setControlsHover(true)}
      onMouseLeave={() => setControlsHover(false)}
      onKeyPress={(e)=>{
        if (e.which === 13) document.getElementById("rightControl").click()
       }}
      onClick={() => {document.getElementById("projectItemsContainer").scrollBy({
        left: 400,
        behavior: "smooth"
     })}}>
       <Next/>
         <div>scroll</div>
         <div>right</div>
        </div>
      </div>

      <div style={{background:"var(--works-accent)", paddingBottom:"2rem"
      ,borderTop:"1.2px solid var(--works-text)",margin:"0 3rem",opacity:"0.8"}}></div>
    </div>
  )
}

export default Works
