import { IoPersonCircleOutline as UserIcon } from "react-icons/io5";
import useDebounce from '../../../../../customHooks/useDebounce';

import {useState, useEffect} from 'react'
import Fade from 'react-reveal/Fade';


const ScreensLabel = ({m, user, userProfileKeys, userProfileValues, userDetailsKeys, userDetailsValues, userStories}) => {

  const [hover, setHover] = useState(false)

  const [logoOpacity, setLogoOpacity] = useState(1)
  const [logoRotation, setLogoRotation] = useState("")

    useEffect(()=>{
      setLogoRotation("rotateY(70deg)")
      setLogoOpacity(0)
    },[hover])


    useDebounce(()=>{
      setLogoRotation("")
      setLogoOpacity(1)
    }, 200, [hover])

    useEffect(()=>{
      setLogoOpacity(1)
      setLogoRotation("")
    },[])


  const iconStyle = () => {
    return{
      alignSelf: "center",
      marginRight: "0.8rem",
      fontSize: "2rem",
      minWidth:"2rem"
    }
  }

  return (
    <Fade bottom>
    <div  onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {setHover(false)}}
          className="Column body1 screens-and-features-item transition"
          style={{outline:"6px double var(--midnight)", transition:"outline-offset ease 0.3s"}}>

        <div className="Row" style={{
          margin: !m && "1rem 0 1.5rem 0",
          color: "var(--midnight)"}}>
              <h5 style={{flex:"1"}} className="Row">
              <div className="selfCentered transition" style={{opacity:logoOpacity,transformOrigin:"center",transform:logoRotation}}>
              <UserIcon style={iconStyle()}/>
              </div>{user}'s Profile</h5>

        </div>

  <div className={m?"Row":"Column"}>
        <div style={{
        padding:"1rem",
        color: "var(--midnight)",
        display:"grid",
        gridTemplateColumns: "auto auto",
        gridRowGap:"0.5rem",
        gridColumnGap: "1rem",
        }}
        >
        {userProfileKeys.map((key, userNum)=>{
          return <>

          <p style={{justifySelf:"end", color:"var(--works-text)"}}><strong>{key}: </strong></p>
          <p>{userProfileValues[userNum]}</p>

        </>})}
        </div>

        <div style={{
            width: m && "0.1px",
            height: !m && "0.1px",
            borderLeft: m && "1.5px solid var(--midnight)",
            borderTop: !m && "1.5px solid var(--midnight)",
            margin: m?"2rem":"1rem"
          }}></div>

        <div style={{
        padding:"1rem",
        color: "var(--midnight)",
        display:"grid",
        gridTemplateColumns: "auto",
        gridRowGap:"0.2rem",
        gridColumnGap: "0.4rem",
        }}
        >
        {userDetailsKeys.map((key,keyNum)=>{
          return <>
          <p style={{color: "var(--works-text)"}}><strong>{key}: </strong></p>
          <ul>{userDetailsValues[keyNum].map((li)=><li style={{marginLeft:"2rem"}}>{li}</li>)}</ul>

        </>})}
        </div>
    </div>
  </div>
</Fade>

    )
}

export default ScreensLabel
