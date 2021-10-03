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
  if(hover){
    return "var(--desert-rose)"
  }
}

  return (



    <Link to={routeName} style={{color:"inherit",textDecoration: "none"}}>
      <div className="desktopNavLink Row transition" onMouseEnter={() => setHover(true)}
        onMouseLeave={() => {setHover(false)}} onClick={()=>setRouteFocus(routeName)} style={{alignItems:"center", justifyContent:"center",height:"3.5rem", whiteSpace:"nowrap", background:background(),color:color()}}>
      <Icon style={{fontSize:"1.2rem", marginRight:"0.5rem"}}/>
    {label}
    </div>
    </Link>


  )
}

export default Links
