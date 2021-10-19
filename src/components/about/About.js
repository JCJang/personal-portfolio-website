import ImageFadeIn from '../../customHooks/imageFadeIn'
import ImageOverflow from '../works/projects/sections/section-components/ImageOverflow'
import Carousel from '../works/projects/sections/section-components/Carousel'
import TocLabel from '../works/projects/sections/section-components/TocLabel'
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom'

import { IoEllipseSharp as CircleFilled } from "react-icons/io5";

import { IoColorPaletteOutline as PaintingIcon } from "react-icons/io5";
import { IoAirplaneOutline as TravelingIcon } from "react-icons/io5";
import { IoLibraryOutline as ReadingIcon } from "react-icons/io5";

import { IoSendOutline as SendIcon } from "react-icons/io5";


import bgL from '../../images/about-bg-l.jpg'
import bgM from '../../images/about-bg-m.jpg'

import headshot from '../../images/20211003_011146-01.jpeg'

import jazz from '../../images/sketches/jazz.jpg'
import plants from '../../images/sketches/plants.jpg'
import rooftop from '../../images/sketches/rooftop.jpg'
import snow from '../../images/sketches/snow.jpeg'
import sunrise from '../../images/sketches/sunrise.jpeg'
import yiping from '../../images/sketches/yiping.jpg'

import map from '../../images/traveled-countries-violet.svg'

import { useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";

// <h6><strong>Contract me as a freelancer -</strong></h6>
//
// A webpage is an opportunity that your potential client’s attention – and I can help you communicate the right message. You have the best of both worlds working with me. As a designer, I think of storytelling and user interaction. As a developer, I breathe logic and interactivity into the design.
// You can expect a final product similar to this one, built in react with three to five pages and a fully responsive, user-friendly design. Tell me your story and target audience and I will craft a design that communicates your small business’s core values.
//
// <a>send me a message</a>

const About = ({m, l, setRouteFocus}) => {

    const location = useLocation();
    useEffect(()=>{
      setRouteFocus(location.pathname)
    },[])

    const [hobbyFocus, setHobbyFocus] = useState("travel")
    const [btnHover, setBtnHover] = useState(false)

    const aboutStyle = () => {
      return {
        background:"var(--cinerous)",
        color: "var(--velvet)",
        height:"var(--desktopheight)",
        width:"100vw",
        overflowY:"auto",
        overflowX:"hidden",
        scrollBehavior: "smooth",

      }
    };


  const textMarginStyle=()=>{
    if (l) return {
      margin:"1rem 10rem",
    }
    if (m) return {
      margin:"1rem 5rem",
    }
    return {margin:"1rem 2rem"}
  }

  const textMarginStyleLanding=()=>{
    if (l) return {
      padding:"1rem 10rem",
      position:"relative",
      color:"var(--highlight)",
      gap:"5rem",
      height:"var(--desktopheight)",
      zIndex:"10"
    }
    if (m) return {
      padding:"1rem 5rem",
      position:"relative",
      color:"var(--highlight)",
      gap:"5rem",
      height:"var(--desktopheight)",
    }
    return {
    padding:"1rem 2rem",
    position:"relative",
    color:"var(--highlight)",
    height:"var(--desktopheight)"
    }
  }


  const textMarginStyleHeader=()=>{
    if (l) return {
      margin:"1rem 10rem",
    }
    if (m) return {
      margin:"1rem 5rem",
    }
    return {margin:"1rem 2rem",fontSize:"2.5rem", textAlign:"center"}
  }

  const iconStyle = () => {
    return{
      alignSelf: "center",
      marginRight: "0.8rem",
      fontSize: "1.7rem",
      minWidth:"2rem"
    }
  }

  const textMarginStyleH4=()=>{
    if (l) return {
      margin:"1rem 10rem",
    }
    if (m) return {
      margin:"1rem 5rem",
    }
    return {margin:"1rem 2rem", fontSize:"1.8rem"}
  }


  const textMarginStyleRows=()=>{
    if (l) return {
      margin:"1rem 10rem",
      gap:"5rem"
    }
    if (m) return {
      margin:"1rem 5rem",
      gap:"5rem"
    }
    return {margin:"1rem 2rem"}
  }

  const textMargin = () => {
    if (l) return "1rem 10rem"
    if (m) return "1rem 5rem"
    return "1rem 2rem"
  }

  const colLarge = () => {
    if (l) return {
        width:"calc(70vw - 12.5rem)"
      }
    if (l) return {
        width:"calc(70vw - 7.5rem)"
      }
      return{
        width:"100%"
      }
  }
  const colSmall = () => {
    if (l) return {
        width:"calc(30vw - 12.5rem)"
      }
    if (l) return {
        width:"calc(30vw - 7.5rem)"
      }
      return{
        width:"100%"
      }
  }

  const colHalf = () => {
    if (l) return {
        width:"calc(50vw - 12.5rem)"
      }
    if (m) return {
        width:"calc(50vw - 7.5rem)"
      }
      return{
        width:"100%"
      }
  }

 const overflowStyle = () => {
   return {
     width:"100vw",
     background:"var(--table-light)"
   }
 }

 const col2PaddingTop = () => {
   if (!m) return "2rem"
 }

 const extraSpacing = () => {
   if (l) return "5rem"
   if (m) return "3rem"
   return "2rem"
 }

  return (
    <div className="Column" style={aboutStyle()}>


<div style={{height:"100vh",width:"100vw", position:"relative"}}>

  <a href="https://www.freepik.com/mariadetarosarinda" target="_blank" className="AboutWorksLink overline" style={{textDecoration:"none", position:"absolute", bottom:"0.5rem", right:"1rem", color:"var(--highlight)", opacity:"0.5", zIndex:"20"}}>pattern by Maria Deta Rosarinda</a>
 <ImageFadeIn src={l?bgL:bgM} className="bgImage" style={{position:"absolute"}}/>

<div className="Row AboutLanding" style={textMarginStyleLanding()}>

  <div id="summary-col-1" className="Column" style={{width:"50%", height:l?"var(--desktopheight)":"60vh", position:"relative",
    zIndex:"4"}}>

  <h2 style={{paddingTop:"1rem"}}>Designer & Frontend Developer</h2>

    <div className="boxDecoration" style={{
        borderColor: "var(--highlight)"
      }}></div>

    <h6 style={{flex:"1"}}>

    <Fade bottom delay={500}>
      <div><h6><em>How can I benefit people’s lives by combining psychology with the power of technology?</em></h6></div>
      </Fade>

    </h6>

  </div>
  <Fade bottom delay={700}>

  <div id="summary-col-2" className="Column" style={{position:"absolute",zIndex:"3",right:m?"10rem":"0", bottom:m?"5rem":"", top:m?"5rem":"2rem"}}>
  <div></div>
    <ImageFadeIn src={headshot} style={{minWidth:"200px", maxWidth:m?"400px":"70vw", minHeight:"300px",maxHeight:m?"60vh":"65vh",objectFit:"contain",zIndex:"1"}}/>

  </div>
  </Fade>

</div>
</div>



<div style={textMarginStyle()} className={m
    ? "Column"
    : "Row"} style={{
    background: "var(--occlusion)",
    paddingBottom: "3rem",
    paddingTop: "3rem",
    color: "var(--highlight)",
    position:"relative",
    zIndex:"4"

  }}>

  {
    !m && <div className="subtitle1 selfCentered" style={{
          fontSize: "3.3rem",
          whiteSpace: "nowrap",
          width: "30vw",
          transform: "rotate(-90deg)"
        }}>About</div>
  }

  <div className={m
      ? "RowCentered"
      : "Column"} style={{alignItems:"space-between",  position:"relative",
        zIndex:"4"}}>
    <Fade bottom delay={300}>
    <TocLabel m={m} label="who i am" sublabel="background" about={true}/>
    </Fade>
    <Fade bottom delay={450}>
     <TocLabel m={m} label="what inspires me" sublabel="hobbies" about={true}/>
     </Fade>
     <Fade bottom delay={700}>
     <TocLabel m={m} label="how i can help" sublabel="skills and languages" about={true}/>
     </Fade>
  </div>
</div>

<div style={{marginBottom:extraSpacing()}}></div>


<div id="who%20i%20am" className={m
    ? "Row"
    : "Column"} style={textMarginStyleRows()}>


  <div id="summary-col-1" className="Column" style={colHalf()}>

  <h2 style={{paddingTop:"0"}}>Who I am</h2>

    <div className="boxDecoration" style={{
        borderColor: "var(--velvet)"
      }}></div>

    <Fade bottom>
    <h6>
      How a psychology graduate went from writing papers to writing code.
    </h6>
    </Fade>

  </div>

  <div id="summary-col-2" className="Column" style={colHalf()}>
  <div style={{paddingTop:col2PaddingTop()}}></div>
  <div>Hi, my name is Jennifer Jang, and I'll be the first to admit it - I didn't always think of becoming a designer or developer. I first got into psychology because I was passionate about asking ‘why’ – but there I realized I was also passionate about <Link className="AboutWorksLink" target="_blank" to="/pharmacy-concept-app">problem-solving for ‘how’</Link>.
  <br></br>
  <br></br>
  By stumbling across UX design, which led me to frontend development, I discovered a niche in which I can explore both ‘Why’s and ‘How’s, all the while providing solutions to real life problems. This continues to be my main drive even today, to ask myself: “How can I benefit people’s lives by combining psychology with the power of technology?”

  <br></br>
  <br></br>
  <a className="AboutWorksLink" href="#how%20i%20can%20help" style={{textDecoration:"none"}}><em>currently available for full time positions</em></a>
  </div>
  </div>
</div>

<div style={{marginBottom:extraSpacing()}}></div>


<div style={{background:"var(--occlusion)", color:"var(--cinerous)"}}>

<div style={{marginBottom:extraSpacing()}}></div>

<div id="what%20inspires%20me" className={l
    ? "Row"
    : "Column"} style={{margin:l?"1rem 10rem":m?"1rem 5rem":"1rem 2rem", gap:l&&"5rem"}}>

      <div id="summary-col-1" className={m?"Column":"Row"} style={{width:l?"calc(50vw - 12.5rem)":"100%"}}>


      {
        !m && <div className="subtitle1 selfCentered" style={{
              fontSize: "2.3rem",
              whiteSpace: "nowrap",
              width: "33vw",
              alignSelf:"flex-end",
              marginBottom:"4rem",
              transform: "rotate(-90deg)",
              color:"var(--highlight)"
            }}>Inspirations</div>
      }

      {m && <h3 style={{paddingTop:"0",color:"var(--highlight)", fontFamily:"La Belle Aurore"}} id="what%20inspires%20me">What Inspires Me</h3>}



        <div className={l?"ColumnCentered":m? "RowCentered":"ColumnCentered"} style={{gap:"1rem", alignItems: l? "flex-start": !m? "flex-end":"", justifyContent:m && "space-between", marginTop:"2rem", width: !m && "calc(70vw - 3rem)"}}>

  <Fade bottom>
          <h6 className="HobbyLabel RowCentered" onClick={()=>{setHobbyFocus('travel')}} style={{
            color:hobbyFocus==='travel' && "var(--highlight)",
            borderBottom:hobbyFocus==='travel' && "1.8px solid var(--highlight)"

          }}>
          <TravelingIcon style={iconStyle()}/>
          Travel
          </h6>
  </Fade>
  <Fade bottom delay={150}>
          <h6 className="HobbyLabel RowCentered" onClick={()=>{setHobbyFocus('reading')}} style={{
            color:hobbyFocus==='reading' && "var(--highlight)",
            borderBottom:hobbyFocus==='reading' && "1.8px solid var(--highlight)"
          }}>
          <ReadingIcon style={iconStyle()}/>
          Reading
          </h6>
  </Fade>
  <Fade bottom delay={300}>
          <h6 className="HobbyLabel RowCentered" onClick={()=>{setHobbyFocus('painting')}} style={{
            color:hobbyFocus==='painting' && "var(--highlight)",
            borderBottom:hobbyFocus==='painting' && "1.8px solid var(--highlight)"
          }}>
          <PaintingIcon style={iconStyle()}/>
          Painting
          </h6>
  </Fade>
        </div>
      </div>

      <div id="summary-col-2" style={{width:l?"calc(50vw - 12.5rem)":"100%"}}>
      <div className="RowCentered" style={{position:"relative",right:"0"}}>

      <div className="Row" style={{
        position:"absolute",
        width:l?"calc(45vw - 7.5rem)":"80vw",
        bottom:"1rem",
        right:hobbyFocus==="painting"?"0":"-60vw",
        opacity:hobbyFocus==="painting"?"1":"0",
        transition:"right ease 0.9s, opacity linear 1s"}}>
            <Carousel carouselSlides={[snow,sunrise,plants,rooftop,jazz,yiping]}
            height="30vh"
            width={l?"calc(50vw - 7.5rem)":"80vw"}/>
      </div>

      <div className="ColumnCentered" style={{
        position:"relative",
        right:hobbyFocus==="travel"?"0px":"300px",
        pointerEvents:hobbyFocus==="travel"?"":"none",
        opacity:hobbyFocus==="travel"?"1":"0",
        transition:"right ease 0.9s, opacity linear 0.8s"}}>
        <div style={{order:l?"1":"2"}}>


    <div className="RowCentered" style={{gap:"0.5rem",marginTop:"3rem"}}>
    <Fade bottom>

        <div className="Column" style={{alignItems:"center"}}>
         <CircleFilled style={{height:"1.5rem", width:"1.5rem", color:"var(--highlight)", margin:"0.25rem 1.3rem"}}/>
         <div style={{fontSize:"0.7rem", opacity:"0.8"}}>been a guest</div>
         </div>
         <div className="Column" style={{alignItems:"center"}}>
          <CircleFilled style={{height:"1.5rem", width:"1.5rem",  color:"var(--contact-bg)", margin:"0.25rem 1.3rem"}}/>
          <div style={{fontSize:"0.7rem", opacity:"0.8"}}>to visit</div>
          </div>
          <div className="Column" style={{alignItems:"center"}}>
           <CircleFilled style={{height:"1.5rem", width:"1.5rem", color:"var(--lilac)", margin:"0.25rem 1.3rem"}}/>
           <div style={{fontSize:"0.7rem", opacity:"0.8"}}>Home zone</div>
           </div>
     </Fade>
    </div>

        <Fade bottom>
        <div className="RowCentered" style={{width:l?"calc(45vw - 7.5rem)":"100vw",height:"30vh",overflow:"hidden"}}>
        <ImageOverflow height="250px" images={[map]} style={{
            padding:"0"
          }}/>
        </div>
        </Fade>
    </div>


        </div>
    </div>



      <div  className="RowCentered body1" style={{
        paddingTop: !l && "1rem",
        transform:
        l && hobbyFocus==="reading"?"translateY(-15vh)":
        !l && hobbyFocus==="reading"?"translateY(-30vh)":
        !l?"":
        hobbyFocus==="painting"?"translateX(-1rem)"
        :hobbyFocus==="travel"?"translateX(1rem)"
        :"translateX(0)",
        transitionDuration:"0.5s"}}>
      {hobbyFocus==="travel"?
      <div className="Column">
      <div>
      Travel is not just a puzzle of practical problem-solving, or a window into diverse perspectives and stories, but also a personal testimony that the world’s vastness cannot compare to the vastness of people’s hearts. Although I travel by myself, I am never alone - I am grateful to all the countries that took me in as a temporary visitor, and the people and new friends that I met along the way.
      </div>

      </div>
      :hobbyFocus==="reading"?
      <div>
      For me, writing will always be the most impressive technology of them all. While <Link className="AboutWorksLink" target="_blank" to="/humanities-book-database">humanities books</Link> have helped me develop my own opinions and values, there is nothing I love more than good literature - from Jorge Luis Borges to Donna Tartt. Works of literature that explores complex thoughts and feelings were formative to my empathy and understanding of people.

      </div>
      :hobbyFocus==="painting"?
      <div>
      I am obsessed with capturing light, color, and mood in sketches, and enjoy the pure concentration that accompanies it. I find that many art concepts - such as composition, artistic styles, or even architectural styles – have become an arsenal for my design style.
      </div>
      :  <h6 style={{fontFamily:"La Belle Aurore"}}>
        Explore another hobby by clicking on it!
        </h6>}
      </div>


      </div>
  </div>

  <div style={{marginBottom:extraSpacing()}}></div>

</div>

<div style={{marginBottom:extraSpacing()}}></div>

<div id="how%20i%20can%20help" className={m ? "Row" : "Column"} style={textMarginStyleRows()}>

  <div id="summary-col-1" className="Column" style={colHalf()}>

  <h2 style={{paddingTop:"0"}}>How I can help</h2>

    <div className="boxDecoration" style={{
        borderColor: "var(--velvet)"
      }}></div>

  <Fade bottom delay={300}>
    <h6>
    I believe that listening and empathy are key to design - and to teamwork.
    </h6>
  </Fade>

  </div>

  <div id="summary-col-2" className="Column" style={colHalf()}>
  <div style={{paddingTop:col2PaddingTop()}}></div>
  <div style={{display:"inline"}}>
  I am an interdisciplinary learner that enjoys working at every stage of a product. Being an INTJ personality type, my strengths lie in solving problems logically and systematically. If you haven’t already, take a look at my <Link className="AboutWorksLink" target="_blank" to="/">case studies</Link> that follow my comprehensive design process, from research, design, to development of the final product.
  <br></br>
  <br></br>
   My ideal company is a small sized startup that uses technology to change people’s lives for the better. If this sounds like your team, I would love to hear from you!
  </div>

  <Link to="/contact"
    className="RowCentered btn contactBtn"
    onMouseEnter={() => setBtnHover(true)}
    onMouseLeave={() => {setBtnHover(false)}}
    onMouseDown={() => setBtnHover(true)}
    onMouseUp={() => {setBtnHover(false)}}

    style={{border:"none",
     padding:"none",
     background:btnHover?"var(--velvet)":"inherit",
     color:btnHover?"var(--cinerous)":"inherit",
     border:'5px double var(--velvet)',
     padding:"0.5rem 1rem",
     transition:"0.4s"}}>

          <p className="selfCentered" style={{marginTop:"0.3rem"}}>Contact me</p>
          <SendIcon style={{fontSize:"1.2rem", marginLeft:"1rem"}}/>
    </Link>

  </div>
</div>

<div style={{marginBottom:extraSpacing()}}></div>


<div style={textMarginStyle()}><em>A big thank you to all the wonderful people that selflessly share content online so that I could learn from and level up with you.</em></div>


<div style={{marginBottom:extraSpacing()}}></div>


</div>
  )
}

export default About
