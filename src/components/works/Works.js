import GridItem from './GridItem'

import projectBookImg from '../../images/pexels-cottonbro-4065864.png'

import { IoAlbumsOutline as LofiIcon} from 'react-icons/io5/index.esm.js';
import { IoLayersOutline as HifiIcon} from 'react-icons/io5';

import { IoColorFilterOutline as ColorIcon} from 'react-icons/io5';
import { IoLocateOutline as UserFrustrationsIcon } from 'react-icons/io5';
import { IoTextOutline as TypographyIcon} from 'react-icons/io5';


const Works = ({m, l}) => {


const worksStyle = () => {
  return {
    background:"var(--works-accent)",
    color: "var(--midnight)",
    height:"var(--desktopheight)",
    overflowY:"auto",
    padding:"1.5rem 0"

  }
};

  return (
    <div className="Column" style={worksStyle()}>
      <div className="Row" style={{flex:"1"}}>
        <div className="Column" style={{padding:"2rem", width:"30vw"
  }}>
          <h2>Works</h2>
          <div className="boxDecoration"></div>
          <h5>some subtitles</h5>
          <br></br>
          <div className="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>

        </div>
        <div className="grid-container" >

            <GridItem image = {projectBookImg}
             classes = "grid-book"
             routeName = "/humanities-book-database"
             direction = "rl"
             role = "UX Designer, full stack development"
             title = "Humanities Book Database"
             subtitle = "How can I help readers find quality humanities books?" / >

             <GridItem
              image={projectBookImg}
              routeName = "/humanities-book-database"
              direction = "lr"
              role = "UX Designer"
              title = "Pharmacy concept app"
              subtitle = "How can I simplify pharmacy trips?" / >

              <GridItem
               routeName = "/humanities-book-database"
               direction = "rl"
               title = "Other projects"
               subtitle = "Including this site" / >
        </div>
      </div>
      <div style={{background:"var(--midnight)", height:"1.1px",margin:"2rem 4rem 0 4rem",opacity:"0.8"}}></div>
    </div>
  )
}

export default Works
