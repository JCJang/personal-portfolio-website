import React from 'react'
import TocLabelLink from '../works/projects/sections/section-components/TocLabelLink'
import Fade from 'react-reveal/Fade';


const NotFound = ({m, l}) => {

  const notFoundStyle = () => {
    return {
      background:"var(--works-bg)",
      color: "var(--works-text)",
      height:"var(--desktopheight)",
      overflowY:"auto"
    }
  };

  const textMargin = () => {
    if (l) return "1rem 10rem"
    if (m) return "1rem 5rem"
    return "1rem 2rem"
  }

  const extraSpacing = () => {
    if (l) return "5rem"
    if (m) return "3rem"
    return "2rem"
  }

  return (
    <div className="ColumnCentered" style={notFoundStyle()}>
    <h2 style={{padding:textMargin(), marginTop:l && "5rem"}}>Oops... no page found.</h2>
    <h5 style={{padding:textMargin()}}>sorry to leave you hanging. These links work, I promise:</h5>
    <div>
    <div className="Column" id="summary">

      <div className={m
          ? "Column"
          : "Row"} style={{
          paddingBottom: "3rem",
          paddingTop:!m && "3rem"
        }}>

        {
          !m && <div className="subtitle1 selfCentered" style={{
                fontSize: "3.3rem",
                whiteSpace: "nowrap",
                width: "30vw",
                transform: "rotate(-90deg)"
              }}>Where to?</div>
        }
        <Fade bottom>
        <div className={m
            ? "RowCentered"
            : "Column"} style={{margin:m?"1rem 5rem":"1rem 2rem"}}>
          <TocLabelLink m={m} label="/" label="Works" sublabel="view my case studies"/>
          <TocLabelLink m={m} link="/about" label="About" sublabel="get to know me more"/>
          <TocLabelLink m={m} link="/contact" label="Contact" sublabel="send me a message"/>
        </div>
        </Fade>
      </div>
      <div style={{marginBottom:extraSpacing()}}></div>


    </div>

        </div>
    </div>
  )
}

export default NotFound
