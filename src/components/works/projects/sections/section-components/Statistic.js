import { IoDiscOutline as StatisticIcon } from "react-icons/io5";
import {useState} from 'react'


const Statistic = ({l, m, title, text, sources}) => {

  const [hover, setHover] = useState(false)

  const textMargin = () => {
    if (l) return "5rem 10rem"
    if (m) return "3rem 5rem"
    return "2rem"
  }

  const iconStyle = () => {
    return{
      alignSelf: "center",
      marginRight: "0.8rem",
      fontSize: "2rem",
      minWidth:"2rem",
      position:"relative",
      top:"0.3rem"
    }
  }

  return (
    <div  onMouseEnter={() => setHover(true)}
          onMouseLeave={() => {setHover(false)}}
          className="Column body1"
          style={{
            background: "var(--midnight)",
            color:"var(--table-light)",
            gap:"2rem",
            width:"100vw",
            padding:textMargin(),
          }}>

        <div className="Row">
              <h5 style={{flex:"1", position:"relative"}}><StatisticIcon style={iconStyle()}/>Key Statistics: {title}</h5>
        </div>

        <div>{text}</div>

        <div className="Column" style={{alignItems:"flex-end", textAlign:"right",opacity:"0.8"}}>
            <div style={{padding:"1rem 0 0.5rem 0"}}><em>Source:</em></div>
            <div>{sources.map((source)=>{return <div className="overline" style={{marginTop:"0.8rem",fontSize:"0.7rem"}}><a href={source} target="_BLANK" style={{color:"inherit", display:"inline", cursor:"pointer"}}>{source}</a></div>})}
            </div>
        </div>
        </div>

    )
}

export default Statistic
