import { IoPlayForwardSharp as GoTo } from "react-icons/io5";
import {useState} from 'react'
import Fade from 'react-reveal/Fade';


const ScreensLabel = ({m, user, userProfileKeys, userProfileValues, userDetailsKeys, userDetailsValues}) => {

  const [hover, setHover] = useState(false)

  return (
    <Fade bottom>
    <div  onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {setHover(false)}}
          className="Column screens-and-features-item transition">

        <div className="Row screens-and-features-title" style={{
          transform:hover ? "translateY(-15vh)":"translateY(0)",
          opacity:hover? "0": "1",
          color: "var(--midnight)",
          transition:"opacity ease-in 0.4s, transform ease 0.6s"}}>
              <h6 style={{flex:"1"}}>{user}'s Profile</h6>
        </div>

        <div style={{paddingTop:"1rem",
        color: "var(--works-text)",
        transform:hover ? "translateY(calc(-4rem)) scaleX(1.1) scaleY(1.3)":"translateY(0) scale(1)",
        transformOrigin:"left",
        opacity:hover? "1": "0.9",
        transition:"opacity linear 0.5s, transform ease 0.4s"}}
        ><em>{userProfileKeys.map((key, i)=>{
          return <div style={{marginTop:"0.2rem"}}><strong>{key}:</strong> {userProfileValues[i]}</div>
        })}</em></div>
    </div>
    </Fade>

    )
}

export default ScreensLabel
