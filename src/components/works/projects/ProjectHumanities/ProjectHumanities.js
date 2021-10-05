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
import topView5 from './images/top-view/authorview-bloch.jpg'
import topView6 from './images/top-view/authorpanel-burke.jpg'
import topView7 from './images/top-view/authorbg-burke.jpg'
import topView8 from './images/top-view/authorbio-burke.jpg'

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
          carouselSlides={[topView1, topView2, topView3, topView4, topView5, topView6, topView7, topView8]}

         title="Humanities Book Database"
         roles="Ideation, Design, Full Stack Development"
         text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
         summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
         challenge="How can I present quality humanities books to readers?"
         solution="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
         />

      </div>
    )
}

export default ProjectHumanities
