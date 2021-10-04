import ImageFadeIn from '../../customHooks/imageFadeIn'
import { IoSendOutline as SendIcon } from "react-icons/io5";
import { IoCubeOutline as WorksIconLogo } from "react-icons/io5";

import {useState} from 'react';
import useDebounce from '../../customHooks/useDebounce'

import bgImage from '../../images/pexels-cottonbro-4065864.png'


const Contact = ({m, l}) => {
  const [sender, setSender] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const contactStyle = () => {
    return {
      background:"var(--contact-accent)",
      color: "var(--contact-text)",
      height:"var(--desktopheight)",
      padding:"0 2rem",
      overflowY:"auto"
    }
  };

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

  return (
    <div className="ColumnCentered" style={contactStyle()}>

    <div className={m?"Row":"Column"} style={{overflowY:"auto"}}>

            <div className={m?"Column":"ColumnCentered"} style={{position:"relative",zIndex:"1", padding:"0 2rem", width:"inputWidth()", color:"var(--contact-text)"}}>
              <h2>Contact me</h2>
              <div className="boxDecoration" style={{ border:"1.5px solid var(--contact-text)", width:!l && "40vw"}}></div>
              <h5>You can also write to me directly at: inbox@jcjang.com</h5>
              <br></br>
              <div className="body2">I am currently available for both freelance projects and full-time oppurtunities. Don't hesitate to reach out to me if my skills are a good fit for your project!
              </div>
              </div>

            <form className="ColumnCentered" name="contact" method="POST" data-netlify="true" style={{position:"relative", zIndex:"1"}}>

                <div className="Row">

                <div className="Column" style={{width:inputWidth(true), marginRight:"1rem"}}>
                <label for="name">From:</label>
                <input onChange={(e)=>{setSender(e.target.value)}} type="text" id="name" name="name" value={sender} placeholder="your name" autofocus/>
                </div>

                <div className="Column" style={{width:inputWidth(true)}}>
                <label> To:</label>
                <input type="text" value=" Jennifer" inactive/>
                </div>

                </div>

                <label for="email">Email:</label>
                <input onChange={(e)=>{setEmail(e.target.value)}} placeholder="I will reach out to this inbox" type="email" id="email" name="email" value={email} style={{width:inputWidth()}}/>
                <br></br>

                <label for="message" className="RowCentered"><WorksIconLogo style={{fontSize:"1.2rem", marginRight:"0.5rem"}}/> Let's collaborate:</label>
                 <textarea onChange={(e)=>{setMessage(e.target.value)}} rows={m?"7":"10"} name="message" id="message" value={message} placeholder="Send me your idea! I can develop your design, or craft your idea into a website you'll love." style={{width:inputWidth()}}></textarea>


                <button type="submit" className="RowCentered btn" style={{width:inputWidth(true)}}>
                    <p className="selfCentered" style={{marginTop:"0.3rem"}}>Send</p>
                    <SendIcon style={{fontSize:"1.2rem", marginLeft:"1rem"}}/>
                </button>

            </form>

      </div>

      <div style={{position:"relative", zIndex:"1", background:"var(--contact-bg)", height:"1.1px",margin:"2rem 4rem 0 4rem",opacity:"0.8"}}></div>

      <div style={{height:"100vh", opacity:"0.5",width:"100vw", top:"0px", left:"0px", position:"absolute",overflow:"hidden"}}>
      <ImageFadeIn src={bgImage} className="bgImage"/>
    </div>

    </div>
  )
}

export default Contact
