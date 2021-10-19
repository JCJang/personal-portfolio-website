import ImageFadeIn from '../../customHooks/imageFadeIn'
import { IoSendOutline as SendIcon } from "react-icons/io5";
import { IoCubeOutline as WorksIconLogo } from "react-icons/io5";
import Fade from 'react-reveal/Fade';


import {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";

import useDebounce from '../../customHooks/useDebounce'

import bgImage from '../../images/‭‬03‭_‬047-min.jpg'


const Contact = ({m, l, setRouteFocus}) => {
  const [sender, setSender] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [btnHover, setBtnHover] = useState(false)

const location = useLocation();
useEffect(()=>{
  setRouteFocus(location.pathname)
},[])

  const contactStyle = () => {
    return {
      background:"var(--contact-bg)",
      color: "var(--contact-text)",
      height:"var(--desktopheight)",
      overflowY:"auto",
      width:"100vw",
      padding: textMargin(),
    }
  };



  const textMargin = () => {
    if (l) return "1rem 10rem"
    if (m) return "1rem 5rem"
    return "1rem 2rem"
  }

  const inputWidth = (half) => {
    if(half){
        if(m){
          return "12rem"
        }else{
          return "38.5vw"
        }
    }else{
        if(m){
          return "25rem"
        }else{
          return "80vw"
        }
  }
  }

  const colLarge = () => {
    if (l) return {
        width:"calc(60vw - 12.5rem)"
      }
    if (m) return {
        width:"calc(60vw - 7.5rem)"
      }
      return{
        width:"80vw"
      }
}
  const colHalf = () => {
    if (l) return {
        width:"calc(40vw - 12.5rem)",
        marginRight: "5rem"
      }
    if (m) return {
        width:"calc(40vw - 7.5rem)",
        marginRight: "5rem"
      }
      return{
        width:"80vw"
      }
  }
  const col2PaddingTop = () => {
    if (!m) return "2rem"
  }

  return (
    <div className="Column noScrollBar" style={contactStyle()}>
      <div className={l?"Row":"Column"} style={{zIndex:"10"}}>
        <div className= {l?"Column":"ColumnCentered"}  style={colHalf()}>
        <h2 style={{padding:"0px"}}>Contact me</h2>
        <div className="boxDecoration" style={{borderColor:"var(--contact-text)"}}></div>
        <h6 style={{maxWidth:l?"":inputWidth()}}>Or write to:
        <Fade delay={500}>
        <div style={{fontSize:"1rem", paddingTop:"1rem"}}>
        jennifer@jenniferjang.dev
        </div>
        </Fade>
        </h6>

        </div>
        <div style={colLarge()}>

                <form className="ColumnCentered"
                name="contact"
                method="POST"
                style={{position:"relative", zIndex:"1", paddingTop:col2PaddingTop()}}>



                <input type="hidden" name="form-name" value="contact" />

                    <div className="Row">

                <Fade bottom delay={400}>
                    <div className="Column" style={{width:inputWidth(true), marginRight:"1rem"}}>
                    <label for="name">From:</label>
                    <input onChange={(e)=>{setSender(e.target.value)}} type="text" id="name" name="name" value={sender} placeholder="your name" autofocus required />
                    </div>
                </Fade>

                <Fade bottom delay={600}>

                    <div className="Column" style={{width:inputWidth(true)}}>
                    <label> To:</label>
                    <input type="text" value=" Jennifer" inactive/>
                    </div>
                </Fade>
                    </div>

                <Fade bottom delay={900}>
                    <div className="Column" style={{width:inputWidth()}}>
                    <label for="email">Email:</label>
                    <input onChange={(e)=>{setEmail(e.target.value)}} placeholder="I will reach out to this inbox" type="email" id="email" name="email" value={email} required />
                    </div>
                    <br></br>
                </Fade>

                <Fade bottom delay={1200}>
                <div className="Column" style={{width:inputWidth()}}>
                    <label for="message" className="RowCentered"><WorksIconLogo style={{fontSize:"1.2rem", marginRight:"0.5rem"}}/> Let's collaborate:</label>
                     <textarea onChange={(e)=>{setMessage(e.target.value)}} rows={m?"7":"10"} name="message" id="message" value={message} placeholder="Send me your idea! I can develop your design, or craft your idea into a website you'll love."  required ></textarea>
                  </div>
                </Fade>

                <Fade bottom delay={1500}>
                    <button  onMouseEnter={() => setBtnHover(true)}
                        onMouseLeave={() => {setBtnHover(false)}}
                        onMouseDown={() => setBtnHover(true)}
                        onMouseUp={() => {setBtnHover(false)}}
                        type="submit" className="RowCentered btn contactBtn" style={{
                          width:inputWidth(true),
                          background:btnHover?"var(--velvet)":"",
                          transition:"0.4s"}}>
                        <p className="selfCentered" style={{marginTop:"0.3rem"}}>Send</p>
                        <SendIcon style={{fontSize:"1.2rem", marginLeft:"1rem"}}/>
                    </button>
                </Fade>

                </form>

        </div>
      </div>

      {l && <div style={{background:"var(--contact-text)", height:"1.1px",margin:"2rem 4rem 0 4rem",opacity:"0.8"}}></div>}


      <div style={{height:"var(--desktopheight)", opacity:"0.15",width:"100vw", bottom:"0px", left:"0px", position:"absolute",overflow:"hidden",mixBlendMode:"overlay"}}>
      <ImageFadeIn src={bgImage} className="bgImage"/>
      </div>
    </div>
  )
}

export default Contact
