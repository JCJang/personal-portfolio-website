import GridItem from './GridItem'

import projectBookImg from '../../images/woman-using-laptop-V.jpg'
import projectPharmacyImg from '../../images/5-order-screen.jpg'


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
    padding:l && "1.5rem 0"

  }
};

  return (
    <div className="Column" style={worksStyle()}>
      <div className={l?"Row":"Column"} style={{flex:"1", overflowY:"auto"}}>
        <div className= {l?"Column":"ColumnCentered"} style={{padding:"2rem", width:"30vw", display:!l && "none"}}>
          <h2>Works</h2>
          <div className="boxDecoration"></div>
          <h5>some subtitles</h5>
          <br></br>
          <div className="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>

        </div>
        <div className={l?"grid-container":"grid-container-mobile"}>

            <GridItem
             image = {projectBookImg}
             s = {s}
             m = {m}
             l = {l}
             classes = "grid-book"
             routeName = "/works/humanities-book-database"
             direction = "rl"
             role = "Ideation, UX Research, Design, full stack development"
             title = "Humanities Book Database"
             subtitle = "How can I help readers find quality humanities books?"
             specs = "Figma, React, Node.js, MongoDB"
             introduction = "In this project I address the difficulty readers face when searching for humanities books. I surveyed readers to understand their book search process as well as what makes a good humanities book, then I created a full responsive web app using React and node.js, using data from Google Books API, Wikipedia API, and my multilingual MongoDB book database."/ >

             <GridItem
              image={projectPharmacyImg}
              s = {s}
              m = {m}
              l = {l}
              specs = "hi"
              introduction = "In this project I created a mobile app design and prototype that resolves the common complaints at the pharmacy - lack of transparency, such as medication packaging times, shipped medication status, wait line times - and common problems faced by Maine users, such as timing refills, remembering dosage changes, or making an order in a foreign language."
              routeName = "/works/pharmacy-concept-app"
              direction = "lr"
              role = "Ideation, UX Research, UI and UX Design"
              title = "Pharmacy concept app"
              subtitle = "How can I simplify pharmacy trips?" / >

              <GridItem
                s = {s}
                m = {m}
                l = {l}
               routeName = "/works/more"
               direction = "rl"
               title = "Other projects"
               subtitle = "Including this site" / >
        </div>
      </div>

      {l && <div style={{background:"var(--midnight)", height:"1.1px",margin:"2rem 4rem 0 4rem",opacity:"0.8"}}></div>}
    </div>
  )
}

export default Works
