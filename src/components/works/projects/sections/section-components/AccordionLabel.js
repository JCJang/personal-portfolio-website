import {useState} from 'react'

const AccordionLabel = ({m, problemSolution, sectionResults, focus, setFocus, title, sectionApplication}) => {

  const [resultsOrApplication, setResultsOrApplication] = useState(true)

  return (
        <div>
        <div className="AccordionLabel" onClick={()=>{
          if(focus===title){
            setFocus("")
          }else{
            setFocus(title)
        }}}
        style={{
          color:focus===title && "var(--velvet)",
          borderLeft: focus===title && "9px solid var(--velvet)"
        }}>{problemSolution?
          <div className="h5" id={title.split(" ").join("-")}>
          <strong><a style={{textDecoration:"none", color:"inherit", height:"100%", width:"100%"}} href={`#${title.split(" ").join("-")}`}>{title}</a></strong>
          </div>
          :
          <a id={title.split(" ").join("-")} href={`#${title.split(" ").join("-")}`} style={{textDecoration:"none", color:"inherit", height:"100%", width:"100%"}}>{title}</a>
          }

          </div>


            <div className="Column transition" style={{
              position:"relative",
              transform:focus!==title && "scaleY(0.1)",
              transformOrigin:"top",
              opacity:focus===title?"1":"0",
              height:focus===title?"auto":"2rem",
              margin:focus===title && "2rem 0"
            }}>

            {sectionResults.map((section, i)=>{ return <>
              {i>0 && <div className="boxDecoration" style={{alignSelf:"flex-end"}}></div>}

              <div  className={m?"body1 Row transition":"body1 Column transition"}>

              <div className="Column" style={{minWidth:"29vw"}}>
                <h6>{problemSolution?"User Problems":"Solutions"}</h6>
                <div style={{margin:"1rem"}}>{problemSolution ? <em style={{fontSize:"1.2rem"}}>{section}</em> : <div>{section}</div>}</div>
              </div>

            <div style={{width:m && "0.1px", height:!m && "0.1px", borderLeft:m && "1.5px solid var(--neutral)", borderTop:!m && "1.5px solid var(--neutral)", margin:"2rem"}}></div>

              <div className="Column" style={{minWidth:"29vw"}}>
                <h6>{problemSolution?"Solutions":"Results"}</h6>
                <div style={{margin:"1rem"}}>{sectionApplication[i]}</div>
              </div>
            </div>
          </>})}

            </div>


            </div>
  )
}

export default AccordionLabel
