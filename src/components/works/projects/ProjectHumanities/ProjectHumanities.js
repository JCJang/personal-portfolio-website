//summary
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

import Summary from '../sections/Summary'


import { useLocation } from "react-router-dom";
import {useState, useEffect} from 'react';


const ProjectHumanities = ({m, l, setRouteFocus}) => {

    console.log(displayImage1)
  const location = useLocation();
  useEffect(()=>{
    setRouteFocus(location.pathname)
  },[])

    return (
      <div style={{width:"100vw"}}>
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

      </div>
    )
}

export default ProjectHumanities
