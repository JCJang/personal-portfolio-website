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
    padding:"2rem 0"

  }
};

  return (
    <div className="Row" style={worksStyle()}>
      <div className="Column" style={{padding:"1rem", width:"30vw", justifyContent:"center"
}}>
        <h2>Works</h2>
        <div className="boxDecoration"></div>
        <h5>some subtitles</h5>
        <div>lorem ipsum</div>

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
            subtitle = "How can I simplify pharmacy trips for users?" / >

            <GridItem
             routeName = "/humanities-book-database"
             direction = "rl"
             title = "Other projects"
             subtitle = "Including this site" / >
      </div>
    </div>
  )
}

export default Works
