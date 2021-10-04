import {Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";
import {useEffect, useState} from 'react';
const Links = ({Icon, routeName, colorForNav, routeFocus, setRouteFocus, label}) => {

  const location = useLocation();
  const [hover, setHover] = useState(false)
  useEffect(()=>{
    setRouteFocus(location.pathname)
  },[])

const background = () =>{
  if(hover){
    return "var(--desktop-nav-hover-gradient)"
  }
}

const color = () =>{
  if(hover || routeFocus===routeName){
      if(routeFocus==="/about"){
        return "var(--highlight)"
      }else if (routeFocus==="/works") {
        return "var(--velvet)"
      }else if (routeFocus==="/contact") {
        return "var(--highlight)"
      }else{
        return "var(--velvet)"
      }
    }
}

  return (



    <Link to={routeName} style={{color:"inherit",textDecoration: "none", font:hover?"italic 0.9rem/1.5 'Lusitana', serif":"italic 0.85rem/1.5 'Lusitana', serif"}}>
      <div className="desktopNavLink RowCentered transition" onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {setHover(false)}} onClick={()=>setRouteFocus(routeName)} style={{height:"3.5rem", whiteSpace:"nowrap", background:background(),color:color(), cursor:routeFocus===routeName?"default":"pointer"}}>

      <div className="ColumnCentered" style={{margin:"0.2rem",width:"2rem",height:"3.5rem",position:"relative"}}>
      <Icon className="transition" style={{margin:"auto",position:"relative", opacity:hover || routeFocus===routeName?"1":"0", transform:hover || routeFocus===routeName?"":"translateY(0.5rem)",visibility:hover?"visible":routeFocus!==routeName && "hidden", fontSize:routeFocus===routeName?"1rem":hover?"1.5rem":"1rem"}}/>
      </div>
    {label}
    </div>
    </Link>


  )
}

export default Links
