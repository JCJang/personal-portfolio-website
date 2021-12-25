import GridItem from './GridItem'
import useDraggableScroll from 'use-draggable-scroll';

import projectBookImg from '../../images/woman-using-laptop-V.jpg'
import projectPharmacyImg from '../../images/5-order-screen.jpg'
import projectPersonalImg from '../../images/project-personal-thumbnail.jpg'

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

import { IoAlbumsOutline as LofiIcon} from 'react-icons/io5/index.esm.js';
import { IoLayersOutline as HifiIcon} from 'react-icons/io5';

import { IoColorFilterOutline as ColorIcon} from 'react-icons/io5';
import { IoLocateOutline as UserFrustrationsIcon } from 'react-icons/io5';
import { IoTextOutline as TypographyIcon} from 'react-icons/io5';

import {useState, useEffect, useRef} from 'react'
import { useLocation } from "react-router-dom";


const Works = ({s, m, l, setRouteFocus}) => {

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
    border: controlsHover ? "1.5px solid var(--velvet)" : "1.5px solid var(--midnight)",
    borderRadius: "3px",
    padding: "1rem",
    margin:"2rem 0"
        
}
}
const draggableScrollRef = useRef(null);
const { onMouseDown } = useDraggableScroll(draggableScrollRef);

  return (
    <div className="Column" style={worksStyle()}>

      <div className={l?"Row":"Column"} style={{flex:"1", margin:l && "0rem 0"}}>
        <div className= {l?"Column":"ColumnCentered"} style={{padding:"2rem", flex:"1", display:!l && "none"}}>
          <h2>Works</h2>
          <div className="boxDecoration"></div>
          <br></br>
          <div>View case studies that follow my comprehensive design process, from research, design, to development of the final product.</div>


        </div>

        <div className="ColumnCentered worksControls" id="leftControl" tabIndex="1" style={controlsStyle()} 
      onFocus={() => setControlsHover(true)}
      onBlur={() => setControlsHover(false)}
      onMouseEnter={() => setControlsHover(true)}
      onMouseLeave={() => setControlsHover(false)}
      onClick={() => {document.getElementById("projectItemsContainer").scrollBy({
        left: -400,
        behavior: "smooth"
     })}}>
          left
        </div>
        <div id="projectItemsContainer" className={l?"Row":"Column"} ref={draggableScrollRef}
    onMouseDown={onMouseDown} style={{
      overflowX:"scroll",
      padding:"3rem"}}>

            <GridItem
             image = {projectBookImg}
             carouselSlides={[humanitiesSlide1,humanitiesSlide2,humanitiesSlide3,humanitiesSlide4,humanitiesSlide5,humanitiesSlide6,humanitiesSlide7]}
             s = {s}
             m = {m}
             l = {l}
             controlsHover={controlsHover}
             classes = ""
             routeName = "/humanities-book-database"
             direction = "rl"
             role = "Ideation, UX Research, Design, full stack development"
             title = "Humanities Book Database"
             subtitle = "How can I help readers find quality humanities books?"
             specs = "Figma, React, Node.js, MongoDB"
             introduction = "In this project I addressed difficulties readers face when searching for humanities books by asking readers about their book search process. After analyzing user feedback, I created a full responsive web app by integrating data from Google Books API, Wikipedia API, and my multilingual MongoDB book database."/ >

              <GridItem
              image={projectPharmacyImg}
              
              carouselSlides={[trekinnSlide1,trekinnSlide2,trekinnSlide3,trekinnSlide4]}
              s = {s}
              m = {m}
              l = {l}
              controlsHover={controlsHover}
              specs = "Figma, React, Node.js"
              introduction = "In this project I helped a client reorganize website content and create a responsive design true to the original tone."
              routeName = "/trekinn"
              direction = "lr"
              role = "UI and UX Design, Development, Internationalization"
              title = "Trekinn Website"
              subtitle = "How can I reorganize a website without losing its brand image?" / >

             <GridItem
              image={projectPharmacyImg}
              carouselSlides={[pharmacySlide1,pharmacySlide2,pharmacySlide3,pharmacySlide4]}
              s = {s}
              m = {m}
              l = {l}
              controlsHover={controlsHover}
              specs = "Figma"
              introduction = "In this project I researched common complaints and problems faced by Maine pharmacy users, then created a mobile app design and prototype with solutions such as transparent pricing, medication packaging status, refill notifications, and foreign language options."
              routeName = "/pharmacy-concept-app"
              direction = "lr"
              role = "Ideation, UX Research, UI and UX Design"
              title = "Pharmacy concept app"
              subtitle = "How can I simplify pharmacy trips?" / >


              <GridItem
                s = {s}
                m = {m}
                l = {l}
                image={projectPersonalImg}
               routeName = "/personal-website"
               direction = "rl"
               controlsHover={controlsHover}
               title = "Personal Website"
               specs = "Figma, React"
               introduction = "page in development. In this project I created a personal portfolio to showcase my work and design process."
               role = "Design and Development"
              / >
        </div>
        <div className="ColumnCentered worksControls" tabIndex="1" style={controlsStyle()} 
onFocus={() => setControlsHover(true)}
      onBlur={() => setControlsHover(false)}
      onMouseEnter={() => setControlsHover(true)}
      onMouseLeave={() => setControlsHover(false)}
      onClick={() => {document.getElementById("projectItemsContainer").scrollBy({
        left: 400,
        behavior: "smooth"
     })}}>
          right
        </div>
      </div>


    </div>
  )
}

export default Works
