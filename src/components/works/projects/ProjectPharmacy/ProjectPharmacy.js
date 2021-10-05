import Summary from '../sections/Summary'
import { useLocation } from "react-router-dom";

import {useState, useEffect} from 'react';


const ProjectPharmacy = ({m, l, setRouteFocus}) => {

  const location = useLocation();
  useEffect(()=>{
    setRouteFocus(location.pathname)
  },[])

  return (
    <div className="ColumnCentered" style={{width:"100vw"}}>
      <Summary
        m={m}
        l={l}
        title="Pharmacy Concept App"
       subtitle="How can I simplify pharmacy trips for users?"
       roles="UI and UX design"
       text="Lorem Ipsum"/>

    </div>
  )
}

export default ProjectPharmacy
