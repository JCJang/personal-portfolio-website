import {useState, useEffect} from 'react'
import AccordionLabel from './AccordionLabel'
const Accordion = ({m, l, sectionTitles, sectionResultsArr, sectionApplicationArr, problemSolution=false}) => {

const [focus, setFocus] = useState()

const textMargin = () => {
  if(m){
    return "3rem 5rem 1rem 5rem"
  }else{
    return "2rem 1rem"
  }
}

  return (

    <div className="Row" style={{background:"var(--table-neutral)",paddingBottom:"3rem", paddingTop:!m && "3rem",color:"var(--occlusion)"}}>

  <div className="subtitle1 transition selfCentered" style={{fontSize:"3.3rem",whiteSpace: "nowrap", width:"20vw",transform:"rotate(-90deg)"}}>{problemSolution?"Finding Solutions":"Results"}</div>

        <div className="Column">
            <div>{sectionTitles.map((title, index)=>{
                return <AccordionLabel problemSolution={problemSolution} m={m} title={title} focus={focus} setFocus={setFocus} sectionResults={sectionResultsArr[index]} sectionApplication={sectionApplicationArr[index]}/>})}
              </div>
        </div>
    </div>

  )
}

export default Accordion
