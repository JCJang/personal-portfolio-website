import ImageFadeIn from '../../customHooks/imageFadeIn'
import ImageOverflow from '../works/projects/sections/section-components/ImageOverflow'
import Carousel from '../works/projects/sections/section-components/Carousel'
import TocLabel from '../works/projects/sections/section-components/TocLabel'
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom'

import { IoEllipseSharp as CircleFilled } from "react-icons/io5";

import { IoColorPaletteSharp as PaintingIcon } from "react-icons/io5";
import { IoAirplaneSharp as TravelingIcon } from "react-icons/io5";
import { IoLibrarySharp as ReadingIcon } from "react-icons/io5";

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

    const aboutStyle = () => {
      return {
        background:"var(--cinerous)",
        color: "var(--velvet)",
        height:"100vh",
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
      fontSize: "2.5rem",
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


 <ImageFadeIn src={l?bgL:bgM} className="bgImage" style={{position:"absolute"}}/>

<div className="Row AboutLanding" style={textMarginStyleLanding()}>

  <div id="summary-col-1" className="Column" style={{width:"50%", height:l?"var(--desktopheight)":"60vh", position:"relative",
    zIndex:"4"}}>

  <h2 style={{paddingTop:"0"}}>Designer & Frontend Developer</h2>

    <div className="boxDecoration" style={{
        borderColor: "var(--highlight)"
      }}></div>

    <h6 style={{flex:"1"}}>

    <Fade bottom>
      <div><h5><em>How can I benefit people’s lives by combining psychology with the power of technology?</em></h5></div>
      </Fade>

    </h6>

  </div>

  <div id="summary-col-2" className="Column" style={{position:"absolute",right:m?"10rem":"0", bottom:m?"5rem":"", top:m?"5rem":"-1rem"}}>
  <div></div>
    <ImageFadeIn src={headshot} style={{minWidth:"200px", maxWidth:m?"400px":"70vw", minHeight:"300px",maxHeight:m?"60vh":"80vh",objectFit:"contain",zIndex:"1"}}/>
  </div>

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
    <TocLabel m={m} label="who i am" sublabel="background" about={true}/>
     <TocLabel m={m} label="what inspires me" sublabel="hobbies" about={true}/>
     <TocLabel m={m} label="how i can help" sublabel="skills and languages" about={true}/>
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

    <h6>
      How a psychology graduate went from writing papers to writing code.
    </h6>

  </div>

  <div id="summary-col-2" className="Column" style={colHalf()}>
  <div style={{paddingTop:col2PaddingTop()}}></div>
  <div>
  I got into psychology because I was passionate about asking ‘why’ – and I left it because I was also passionate about <Link className="AboutWorksLink" target="_blank" to="/works/pharmacy-concept-app">problem-solving for ‘how’</Link>. By learning UX design and frontend development, I explore both ‘Why’s and ‘How’s at the same time, providing solutions to real life problems. This continues to be my main drive even today, to ask myself: “How can I benefit people’s lives by combining psychology with the power of technology?”

  <br></br>
  <br></br>
  currently <a className="AboutWorksLink" href="#how%20i%20can%20help" style={{textDecoration:"none"}}><em>available for hire</em></a>
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
              fontSize: "3.3rem",
              whiteSpace: "nowrap",
              width: "30vw",
              transform: "rotate(-90deg)",
              color:"var(--highlight)"
            }}>What Inspires Me</div>
      }

      {m && <h2 style={{paddingTop:"0",color:"var(--highlight)"}} id="what%20inspires%20me">What Inspires Me</h2>}


    {l && <div className="boxDecoration" style={{
        borderColor: "var(--highlight)"
      }}></div>}


        <div className={l?"ColumnCentered":m? "RowCentered":"ColumnCentered"} style={{gap:"3rem", alignItems: l? "flex-start": !m? "flex-end":"", justifyContent:m && "space-between", marginTop:"2rem", width: !m && "calc(70vw - 3rem)"}}>

          <h5 className="HobbyLabel RowCentered" onClick={()=>{setHobbyFocus('travel')}} style={{
            color:hobbyFocus==='travel' && "var(--highlight)",
            borderBottom:hobbyFocus==='travel' && "1.8px solid var(--highlight)"

          }}>
          <TravelingIcon style={iconStyle()}/>
          Travel
          </h5>

          <h5 className="HobbyLabel RowCentered" onClick={()=>{setHobbyFocus('reading')}} style={{
            color:hobbyFocus==='reading' && "var(--highlight)",
            borderBottom:hobbyFocus==='reading' && "1.8px solid var(--highlight)"
          }}>
          <ReadingIcon style={iconStyle()}/>
          Reading
          </h5>
          <h5 className="HobbyLabel RowCentered" onClick={()=>{setHobbyFocus('painting')}} style={{
            color:hobbyFocus==='painting' && "var(--highlight)",
            borderBottom:hobbyFocus==='painting' && "1.8px solid var(--highlight)"
          }}>
          <PaintingIcon style={iconStyle()}/>
          Painting
          </h5>
        </div>
      </div>

      <div id="summary-col-2" style={{width:l?"calc(50vw - 12.5rem)":"100%"}}>


      <div  className="RowCentered body1" style={{
        paddingTop: !l && "2rem",
        transform:
        !l?"":
        hobbyFocus==="painting"?"translateX(-1rem)"
        :hobbyFocus==="travel"?"translateX(1rem)"
        :"translateX(0)",
        transitionDuration:"0.5s"}}>
      {hobbyFocus==="travel"?
      <div className="Column">
      <div>
      Having grown up on a small island, it can be easy for me to forget how big the world is – but that I never forgot after traveling by myself with a 40-liter backpack. For me, travel is not just a puzzle that requires practical problem-solving, or a narrative of different perspectives and stories. Travel is a personal testimony that the world’s bigness is nothing in compared to the bigness of people’s hearts. I am grateful to all the countries that took me in as a temporary visitor, and the people and new friends that I met along the way.
      </div>

      </div>
      :hobbyFocus==="reading"?
      <div>
      For me, writing will always be the most impressive technology of them all. While <Link className="AboutWorksLink" target="_blank" to="/works/humanities-book-database">humanities books</Link> have helped me develop my own opinions and values, there is nothing I love more than good literature - from Jorge Luis Borges to Donna Tartt. Works of literature that explores complex thoughts and feelings were formative to my understanding of people and my empathy.

      </div>
      :hobbyFocus==="painting"?
      <div>
      I am obsessed with capturing light, color, and mood in sketches, and enjoy the pure concentration that accompanies it. I find that many art concepts - such as composition, artistic styles, or even architectural styles – have become an arsenal for my design style.
      </div>
      :  <h6 style={{fontFamily:"La Belle Aurore"}}>
        Explore another hobby by clicking on it!
        </h6>}
      </div>

      <div className="RowCentered" style={{position:"relative"}}>

      <div className="Row" style={{
        position:"absolute",
        width:l?"calc(50vw - 7.5rem)":"80vw",
        bottom:"1rem",
        right:hobbyFocus==="painting"?"0rem":"-60vw",
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
         <CircleFilled style={{height:"2rem", width:"2rem", color:"var(--highlight)", margin:"0.25rem 1.3rem"}}/>
         <div style={{fontSize:"0.7rem", opacity:"0.8"}}>been a guest</div>
         </div>
         <div className="Column" style={{alignItems:"center"}}>
          <CircleFilled style={{height:"2rem", width:"2rem",  color:"var(--contact-bg)", margin:"0.25rem 1.3rem"}}/>
          <div style={{fontSize:"0.7rem", opacity:"0.8"}}>to visit</div>
          </div>
          <div className="Column" style={{alignItems:"center"}}>
           <CircleFilled style={{height:"2rem", width:"2rem",  width:l?"2rem":"3rem", color:"var(--lilac)", margin:"0.25rem 1.3rem"}}/>
           <div style={{fontSize:"0.7rem", opacity:"0.8"}}>Home zone</div>
           </div>
     </Fade>
  </div>

        <Fade bottom>
        <div className="selfCentered" style={{width:l?"45vw":"100vw",height:"30vh"}}>
        <ImageOverflow height="30vh" images={[map]} style={{
            padding:"0"
          }}/>
        </div>
        </Fade>
  </div>


        </div>
    </div>


      </div>
  </div>

  <div style={{marginBottom:extraSpacing()}}></div>

</div>

<div style={{marginBottom:extraSpacing()}}></div>

<div id="how%20i%20can%20help" className={m
    ? "Row"
    : "Column"} style={textMarginStyleRows()}>

  <div id="summary-col-1" className="Column" style={colHalf()}>

  <h2 style={{paddingTop:"0"}}>How I can help</h2>

    <div className="boxDecoration" style={{
        borderColor: "var(--velvet)"
      }}></div>

    <h6>
    I believe that listening and empathy are key to good design.   </h6>

  </div>

  <div id="summary-col-2" className="Column" style={colHalf()}>
  <div style={{paddingTop:col2PaddingTop()}}></div>

  <h6><strong>Invite me to join your team -</strong></h6>

  <em>currently available for full time positions</em>

  I am an interdisciplinary learner that enjoys working at every stage of a product. What matters even more than the work itself is the work environment – working with people towards an aligned purpose or goal. My ideal company is a small sized startup uses technology to change people’s lives for the better.
  I speak native English and Mandarin Chinese, as well as fluent Spanish, and excel at analytical and communicatory skills.


  <button type="submit" className="RowCentered btn contactBtn">
      <p className="selfCentered" style={{marginTop:"0.3rem"}}>Contact me</p>
      <SendIcon style={{fontSize:"1.2rem", marginLeft:"1rem"}}/>
  </button>


  <em>Technology is a field that requires constant learning and evolving. A big thank you to all the wonderful people that selflessly share content online so that I could learn and evolve with them!</em>

  </div>
</div>

<div style={{marginBottom:extraSpacing()}}></div>

</div>
  )
}

export default About
