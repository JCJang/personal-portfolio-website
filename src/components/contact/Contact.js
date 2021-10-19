import ImageFadeIn from '../../customHooks/imageFadeIn'
import { IoSendOutline as SendIcon } from "react-icons/io5";
import { IoCubeOutline as WorksIconLogo } from "react-icons/io5";


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
      padding:textMargin(),
      overflowY:"auto"
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

  const col2PaddingTop = () => {
    if (!m) return "2rem"
  }

  return (
    <div className="ColumnCentered noScrollBar" style={contactStyle()}>

    <div className={m?"Row noScrollBar":"Column noScrollBar"} style={{overflowY:"auto"}}>

            <div className={m?"Column":"ColumnCentered"} style={{position:"relative",zIndex:"1", paddingRight:m && "2rem", width:"inputWidth()", color:"var(--contact-text)"}}>
              <h2 style={{padding:"0px"}}>Contact me</h2>
              <div className="boxDecoration" style={{ border:"1.5px solid var(--contact-text)", width:!l && "40vw"}}></div>
              <h5>You can also write to me directly at: inbox@jcjang.com</h5>
              <br></br>
              <div className="body2">I am currently available for both freelance projects and full-time oppurtunities. Don't hesitate to reach out to me if my skills are a good fit for your project!
              </div>
              </div>

            <form className="ColumnCentered"
            name="contact"
            method="POST"
            style={{position:"relative", zIndex:"1", paddingTop:col2PaddingTop()}}>
            <input type="hidden" name="contact-form" value="contact" />

                <div className="Row">

                <div className="Column" style={{width:inputWidth(true), marginRight:"1rem"}}>
                <label for="name">From:</label>
                <input onChange={(e)=>{setSender(e.target.value)}} type="text" id="name" name="name" value={sender} placeholder="your name" autofocus required />
                </div>

                <div className="Column" style={{width:inputWidth(true)}}>
                <label> To:</label>
                <input type="text" value=" Jennifer" inactive/>
                </div>

                </div>

                <label for="email">Email:</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} placeholder="I will reach out to this inbox" type="email" id="email" name="email" value={email} style={{width:inputWidth()}} required />
                <br></br>

                <label for="message" className="RowCentered"><WorksIconLogo style={{fontSize:"1.2rem", marginRight:"0.5rem"}}/> Let's collaborate:</label>
                 <textarea onChange={(e)=>{setMessage(e.target.value)}} rows={m?"7":"10"} name="message" id="message" value={message} placeholder="Send me your idea! I can develop your design, or craft your idea into a website you'll love." style={{width:inputWidth()}} required ></textarea>


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

            </form>

      </div>

      <div style={{height:"100vh", opacity:"0.35",width:"100vw", top:"0px", left:"0px", position:"absolute",overflow:"hidden",mixBlendMode:"overlay"}}>
      <ImageFadeIn src={bgImage} className="bgImage"/>
      </div>

    </div>
  )
}

export default Contact
