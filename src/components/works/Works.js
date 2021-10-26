import GridItem from './GridItem'

import projectBookImg from '../../images/woman-using-laptop-V.jpg'
import projectPharmacyImg from '../../images/5-order-screen.jpg'
import projectPersonalImg from '../../images/project-personal-thumbnail.jpg'


import { IoAlbumsOutline as LofiIcon} from 'react-icons/io5/index.esm.js';
import { IoLayersOutline as HifiIcon} from 'react-icons/io5';

import { IoColorFilterOutline as ColorIcon} from 'react-icons/io5';
import { IoLocateOutline as UserFrustrationsIcon } from 'react-icons/io5';
import { IoTextOutline as TypographyIcon} from 'react-icons/io5';

import {useEffect} from 'react'
import { useLocation } from "react-router-dom";


const Works = ({s, m, l, setRouteFocus}) => {


const location = useLocation();
useEffect(()=>{
  setRouteFocus(location.pathname)
},[])

const worksStyle = () => {
  return {
    background:"var(--works-accent)",
    color: "var(--midnight)",
    height:"var(--desktopheight)",
    overflowY:"auto",
    width:"100vw",
    padding:l && "1.5rem 0"

  }
};

  return (
    <div className="Column" style={worksStyle()}>
      <div className={l?"Row":"Column"} style={{flex:"1"}}>
        <div className= {l?"Column":"ColumnCentered"} style={{padding:"2rem", flex:"1", display:!l && "none"}}>
          <h2>Works</h2>
          <div className="boxDecoration"></div>
          <br></br>
          <div>View case studies that follow my comprehensive design process, from research, design, to development of the final product.</div>


        </div>
        <div className={l?"grid-container":"grid-container-mobile"}>

            <GridItem
             image = {projectBookImg}
             s = {s}
             m = {m}
             l = {l}
             classes = "grid-book"
             routeName = "/humanities-book-database"
             direction = "rl"
             role = "Ideation, UX Research, Design, full stack development"
             title = "Humanities Book Database"
             subtitle = "How can I help readers find quality humanities books?"
             specs = "Figma, React, Node.js, MongoDB"
             introduction = "In this project I addressed difficulties readers face when searching for humanities books by asking readers about their book search process. After analyzing user feedback, I created a full responsive web app by integrating data from Google Books API, Wikipedia API, and my multilingual MongoDB book database."/ >

             <GridItem
              image={projectPharmacyImg}
              s = {s}
              m = {m}
              l = {l}
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
               title = "Personal Website"
               specs = "Figma, React"
               introduction = "page in development. In this project I created a personal portfolio to showcase my work and design process."
               role = "Design and Development"
              / >
        </div>
      </div>

      {l && <div style={{background:"var(--midnight)", height:"1.1px",margin:"2rem 4rem 0 4rem",opacity:"0.8"}}></div>}
    </div>
  )
}

export default Works
