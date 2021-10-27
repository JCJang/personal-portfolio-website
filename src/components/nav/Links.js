import {Link} from 'react-router-dom'
import {useState} from 'react';
const Links = ({Icon, routeName, colorForNav, routeFocus, setRouteFocus, label}) => {

  const [hover, setHover] = useState(false)


const background = () =>{
  if(hover){
    return "var(--desktop-nav-hover-gradient)"
  }
}

const color = () =>{
  if(hover || routeFocus===routeName){
      if(routeFocus==="/about") return "var(--desert-rose)"
      if (routeFocus==="/contact") return "var(--highlight)"
      return "var(--velvet)"
  }
}

  return (



    <Link to={routeName}
    onFocus={() => setHover(true)}
    onBlur={() => setHover(false)}
    onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}
    onMouseDown={() => setHover(true)}
    onMouseUp={() => setHover(false)}
      style={{color:"inherit",textDecoration: "none", font:hover?"0.9rem/1.5 'Yaldevi', serif":"0.85rem/1.5 'Yaldevi', serif"}}>
      <div className="desktopNavLink RowCentered transition"
        style={{height:"3.5rem", whiteSpace:"nowrap", background:background(),color:color(), cursor:routeFocus===routeName?"default":"pointer"}}>

      <div className="ColumnCentered" style={{margin:"0.2rem",width:"2rem",height:"3.5rem",position:"relative"}}>
      <Icon className="transition" style={{margin:"auto",position:"relative", opacity:hover || routeFocus===routeName?"1":"0", transform:hover || routeFocus===routeName?"":"translateY(0.5rem)",visibility:hover?"visible":routeFocus!==routeName && "hidden", fontSize:routeFocus===routeName?"1rem":hover?"1.5rem":"1rem"}}/>
      </div>
    {label}
    </div>
    </Link>


  )
}

export default Links
