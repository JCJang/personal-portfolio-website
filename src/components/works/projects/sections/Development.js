import ImageFadeIn from '../../../../customHooks/imageFadeIn'
import ImageOverflow from './section-components/ImageOverflow'

import {IoTerminalOutline as ScreensIcon} from "react-icons/io5";
import {IoServerOutline as DatabaseIcon} from "react-icons/io5";
import {IoCloudUploadOutline as ServerIcon} from "react-icons/io5";

import {IoLinkOutline as RelationIcon} from "react-icons/io5";
import {IoCodeOutline as FunctionalIcon} from "react-icons/io5";

import ReactEmbedGist from 'react-embed-gist';

import ScreensLabel from './section-components/ScreensLabel'
import Accordion from './section-components/Accordion'

const Development = ({
  s,
  m,
  l,
  developmentText,
  developmentEmphasis,
  resourcesText,
  screenTitles,
  screenFeatures,
  screenDescriptions,
  databaseText,
  databaseCode,
  serverText,
  serverCode,
  relationalSearchText,
  relationalSearchClientCode,
  relationalSearchServerCode,
  relationalSearchImages,
  relationalSearchTitles,
  relationalSearchResultImg,
  functionalText,
  functionalCode,
  functionalProgrammingImages,
  functionalProgrammingTitles
}) => {

  const developmentStyle = () => {
    return {background: "var(--works-bg)", color: "var(--works-text)", margin: "0", padding: "0"}
  };

  const textMargin = () => {
    if (m) {
      return "3rem 5rem 1rem 5rem"
    } else {
      return "2rem 1rem"
    }
  }

  return (<div className="Column" id="development" style={developmentStyle()}>

    <div className={m
        ? "Row"
        : "Column"} style={{
        margin: textMargin()
      }}>

      <div id="summary-col-1" className="Column" style={{
          padding: l
            ? "2rem"
            : "1.5rem",
          width: m
            ? "40rem"
            : "80vw"
        }}>
        <h2 className="ProjectSectionTitle">Development</h2>

        <br></br>
        <div className="body1">
          {developmentText}
        </div>
      </div>

      <div id="summary-col-2" className="Column" style={{
          padding: m
            ? "8rem 2rem 2rem 5rem"
            : "0 1.5rem 1.5rem 1.5rem",
          width: m
            ? "25rem"
            : "80vw"
        }}>
        <br></br>
        <h5>
          <em>{developmentEmphasis}</em>
        </h5>

      </div>

    </div>

    <div className="Column" style={{
        margin: textMargin()
      }}>

      <div id="summary-col-1" className="Column" style={{
          padding: l
            ? "2rem"
            : "1.5rem",
          width: m
            ? "40rem"
            : "80vw"
        }}>
        <h3 className="ProjectSectionTitle">Resources and Backend</h3>

        <br></br>

        <div className="body1">
          {resourcesText}
        </div>

      </div>

      {
        screenTitles && <> < h4 className = "Row" style = {{margin:"2rem 0"}} > <ScreensIcon style={{
            alignSelf: "center",
            marginRight: "0.8rem"
          }}/>
        Screens and Features</h4> < div className = "grid-container-screens-and-features-tablet" > {
          screenTitles.map((screen, i) => {
            return <> < div style = {{margin:textMargin()}} > {
              i === 0 && screenDescriptions[i]
            }</div> < ScreensLabel m = {
              m
            }
            screen = {
              screen
            }
            features = {
              screenFeatures[i]
            } /> <div style={{
                margin: textMargin()
              }}>{i === 1 && screenDescriptions[i]}</div>
          </>
          })
        }

        </div>
    </>
      }

      {
        databaseText && <> < h4 className = "Row" style = {{margin:"2rem 0"}} > <DatabaseIcon style={{
            alignSelf: "center",
            marginRight: "0.8rem"
          }}/>
        Database Design</h4> < div className = "body1" > {
          databaseText
        }
        </div>

      <div style={{
          width: "80vw"
        }}>
        <ReactEmbedGist contentClass ="gistStyles" gist={databaseCode}/>
      </div>
    </>
      }

      {
        serverText && <> < h4 className = "Row" style = {{margin:"2rem 0"}} > <ServerIcon style={{
            alignSelf: "center",
            marginRight: "0.8rem"
          }}/>
        Server</h4> < div className = "body1" > {
          serverText
        }
        </div>

      <div style={{
          width: "80vw"
        }}>
        <ReactEmbedGist contentClass ="gistStyles" gist={serverCode}/>
      </div>
    </>
      }

    </div>
    <div className="Column" style={{
        margin: textMargin()
      }}>

      <h3 className="ProjectSectionTitle">Frontend and problem-solving</h3>

      <br></br>

      <h4 className="Row" style={{
          margin: "2rem 0"
        }}>

        <RelationIcon style={{
            alignSelf: "center",
            marginRight: "0.8rem"
          }}/>
        Implementing Search by Related Authors</h4>

      <div className="body1">
        {relationalSearchText}
      </div>
    </div>

    <div style={{
        background: "var(--table-light)"
      }}>
      <ImageOverflow images={relationalSearchImages} titles={relationalSearchTitles}/>
    </div>
    <div>
      <div style={{
          width: "80vw"
        }}>
        <ReactEmbedGist contentClass ="gistStyles" gist={relationalSearchClientCode}/>
      </div>
      <div style={{
          width: "80vw"
        }}>
        <ReactEmbedGist contentClass ="gistStyles" gist={relationalSearchServerCode}/>
      </div>

    </div>

    <div className="RowCentered">
      <ImageFadeIn src={relationalSearchResultImg} style={{
          width: m
            ? "60vw"
            : "auto",
          height: m
            ? "auto"
            : "60vh",
          overflowX: !m && "auto",
          display: "block",
          objectFit: "cover"
        }}/>
    </div>

    <div className="Column" style={{
        margin: textMargin()
      }}>

      {
        functionalText && <> < h4 className = "Row" style = {{margin:"2rem 0"}} >
        <FunctionalIcon style={{
            alignSelf: "center",
            marginRight: "0.8rem"
          }}/>
        Customizing Timelines with Functional programming </h4> < div className = "body1" > {
          functionalText
        }
        </div>

      <div style={{
          width: "80vw"
        }}>
        <ReactEmbedGist contentClass ="gistStyles" gist={functionalCode}/>
      </div>

    </>
      }
    </div>
    <div style={{
        background: "var(--table-light)"
      }}>
      <ImageOverflow images={functionalProgrammingImages} titles={functionalProgrammingTitles}/>
    </div>
  </div>)
}

export default Development
