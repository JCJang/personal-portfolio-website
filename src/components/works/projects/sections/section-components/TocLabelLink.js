import { IoPlayForwardSharp as GoTo } from "react-icons/io5";
import {useState} from 'react'
import {Link} from 'react-router-dom'

const TocLabelLink = ({m, link, label, about=false, sublabel}) => {

  const [hover, setHover] = useState(false)

  return (
    <Link onMouseEnter={() => setHover(true)}
      onMouseLeave={() => {setHover(false)}}
      className={about? "Column AboutLabel transition":"Column TocLabel transition"}
        to={link}
        style={{
        margin:"0 2rem",
        color:"inherit",
        textDecoration:"none",
        paddingTop:m && "1.5rem",
        paddingBottom:!m && "1.5rem",
        alignItems:!m && "flex-end",
        width:!m && "50vw",
        textAlign:!m && "right",
        alignSelf:!m && "flex-end"
      }}>

        <div className="Row" style={{order:m?"1":"2"}}>
              <h6 style={{flex:"1"}}>{label}</h6>
              <GoTo className="transition" style={{margin:"0.5rem", color:hover && about?"var(--desert-rose)":"var(--velvet)", alignSelf:"flex-end", fontSize:"1.3rem"}}/>
        </div>

        <div style={{paddingTop:"1rem",order:m?"2":"1"}}><em>{sublabel}</em></div>
    </Link>

    )
}

export default TocLabelLink
