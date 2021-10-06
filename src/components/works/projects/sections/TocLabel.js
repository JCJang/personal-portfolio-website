import { IoPlayForwardSharp as GoTo } from "react-icons/io5";

const TocLabel = ({m, label, sublabel}) => {
  return (
    <div className="Column TocLabel transition" style={{
        margin:"0 2rem",
        paddingTop:m && "1.5rem",
        paddingBottom:!m && "1.5rem",
        alignItems:!m && "flex-end",
        width:!m && "50vw",
        textAlign:!m && "right",
        alignSelf:!m && "flex-end"}}>

        <div className="Row" style={{order:m?"1":"2"}}>
              <h6 style={{flex:"1"}}>{label}</h6>
              <GoTo style={{margin:"0.5rem", color:"var(--velvet)", alignSelf:"flex-end", fontSize:"1.3rem"}}/>
        </div>

        <div style={{paddingTop:"1rem",order:m?"2":"1"}}><em>{sublabel}</em></div>
    </div>

    )
}

export default TocLabel
