import ImageFadeIn from '../../customHooks/imageFadeIn'
import { IoSendOutline as SendIcon } from "react-icons/io5";
import {useState} from 'react';
import useDebounce from '../../customHooks/useDebounce'

import bgImage from '../../images/pexels-cottonbro-4065864.png'


const Contact = ({m, l}) => {
  const [sender, setSender] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const contactStyle = () => {
    return {
      background:"var(--contact-bg)",
      color: "var(--contact-text)",
      height:"var(--desktopheight)",
      overflowY:"auto",
      padding:"2rem 5rem",
    }
  };

  const inputWidth = (half) => {
    if(half){
        if(m){
          return "12rem"
        }else{
          return "24.5vw"
        }
    }else{
        if(m){
          return "25rem"
        }else{
          return "90vw"
        }
  }
  }

  return (
    <div className="ColumnCentered" style={contactStyle()}>

        <form className="ColumnCentered" name="contact" method="POST" data-netlify="true" style={{position:"relative", zIndex:"1"}}>

      <div className="Row">

      <div className="Column" style={{width:inputWidth(true), marginRight:"1rem"}}>
      <label for="name">From:</label>
      <input onChange={(e)=>{setSender(e.target.value)}} type="text" id="name" name="name" value={sender} placeholder="your name" autofocus/>
      </div>

      <div className="Column" style={{width:inputWidth(true)}}>
      <label> To:</label>
      <input type="text" value="Jennifer" inactive/>
      </div>

      </div>

      <label for="email"> Your Email:</label>
      <input onChange={(e)=>{setEmail(e.target.value)}} type="email" id="email" name="email" value={email} style={{width:inputWidth()}} />

      <br></br>

      <label for="message">Let's collaborate on:</label>
       <textarea onChange={(e)=>{setMessage(e.target.value)}} rows="10" name="message" id="message" value={message} style={{width:inputWidth()}}></textarea>


      <button type="submit" className="RowCentered btn" style={{width:inputWidth(true)}}>
          <p className="selfCentered" style={{marginTop:"0.3rem"}}>Send</p>
          <SendIcon style={{fontSize:"1.2rem", marginLeft:"1rem"}}/>
      </button>

  </form>

      <div style={{position:"relative", zIndex:"1", background:"var(--contact-bg)", height:"1.1px",margin:"2rem 4rem 0 4rem",opacity:"0.8"}}></div>

      <div style={{height:"100vh", opacity:"0.5",width:"100vw", top:"0px", left:"0px", position:"absolute",overflow:"hidden"}}>
      <ImageFadeIn src={bgImage} style={{width:"100vw",height:"100vh",objectFit:"cover",filter:"saturate(0)"}}/>
    </div>

    </div>
  )
}

export default Contact
