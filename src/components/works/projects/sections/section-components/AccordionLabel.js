import {useState} from 'react'

const AccordionLabel = ({m, sectionResults, focus, setFocus, title, sectionApplication, problemSolution}) => {


  const parseText = (text) =>{
    if(!text) return
    return text.split("/").map((section, num)=>{
      return  <>
      <div>
      {
        section.split("$").map((titleSection, num) => {
          if (num % 2 === 1 ) return <strong > {titleSection}< /strong>
          if (titleSection.split("{=").length === 1) return titleSection
          return titleSection.split("•").slice(1).map(
                (sec, num) => <div>- {sec}</div>)})

                } < /div>
      {num!==text.split("/").length && <br></br>}
      </>
    }
   )}

  return (
        <div>
        <div className="AccordionLabel"
          tabindex = "0"
          onKeyPress={(e)=>{
            if (e.which === 13 && focus===title)  {
              setFocus("")
            }
            if(e.which === 13){
              setFocus(title)
            }
            return;
          }
        }
        onClick={()=>{
          if(focus===title){
            setFocus("")
          }else{
            setFocus(title)
        }}}
        style={{
          color:focus===title && "var(--velvet)",
          borderLeft: focus===title && "9px solid var(--velvet)"
        }}>{title}</div>


            <div className="Column" style={{
              position:"relative",
              transform:focus!==title && "scaleY(0.1)",
              opacity:focus===title?"1":"0",
              height:focus!==title && "2rem",
              margin:focus===title && "2rem 0"
            }}>

            {sectionResults.map((section, i)=>{ return <>
              {i>0 && <div className="boxDecoration" style={{alignSelf:"flex-end"}}></div>}

              <div  className={m?"body2 Row transition":"body2 Column Transition"}>

              <div className="Column" style={{minWidth:"30vw"}}>
                <h6>{problemSolution?"Pain Points":"Results"}</h6>
                <div style={{margin:"1rem"}}>{parseText(section)}</div>
              </div>

            <div style={{width:m && "0.1px", height:!m && "0.1px", borderLeft:m && "1.5px solid var(--neutral)", borderTop:!m && "1.5px solid var(--neutral)", margin:"2rem"}}></div>

              <div className="Column" style={{minWidth:"30vw"}}>
                <h6>{problemSolution?"Solutions":"Application"}</h6>
                <div style={{margin:"1rem"}}>{parseText(sectionApplication[i])}</div>
              </div>
            </div>
          </>})}

            </div>


            </div>
  )
}

export default AccordionLabel
