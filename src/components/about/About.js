import ImageFadeIn from '../../customHooks/imageFadeIn'
import ImageOverflow from '../works/projects/sections/section-components/ImageOverflow'
import Carousel from '../works/projects/sections/section-components/Carousel'
import TocLabel from '../works/projects/sections/section-components/TocLabel'
import Fade from 'react-reveal/Fade';
import { IoEllipseSharp as CircleFilled } from "react-icons/io5";

import { IoColorPaletteSharp as PaintingIcon } from "react-icons/io5";
import { IoAirplaneSharp as TravelingIcon } from "react-icons/io5";
import { IoLibrarySharp as ReadingIcon } from "react-icons/io5";


import headshot from '../../images/20211003_011146-01.jpeg'

import jazz from '../../images/sketches/jazz.jpg'
import plants from '../../images/sketches/plants.jpg'
import rooftop from '../../images/sketches/rooftop.jpg'
import snow from '../../images/sketches/snow.jpeg'
import sunrise from '../../images/sketches/sunrise.jpeg'
import yiping from '../../images/sketches/yiping.jpg'
import bg from '../../images/F592-min.jpg'

import map from '../../images/traveled-countries-violet.svg'

import { useEffect, useState} from 'react'
import { useLocation } from "react-router-dom";

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
      backgroundSize: "500px 500px",
      backgroundImage:`linear-gradient(to right, rgba(97, 16, 22, 0.3) 0%, rgba(97, 16, 22, 0.3)), linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5)), url(${bg}) `
    }
    if (m) return {
      padding:"1rem 5rem",
      position:"relative",
      color:"var(--highlight)",
      gap:"5rem",
      height:"var(--desktopheight)",
      backgroundSize: "500px 500px",
      backgroundImage:`linear-gradient(to right, rgba(97, 16, 22, 0.3) 0%, rgba(97, 16, 22, 0.3)), linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5)), url(${bg}) `

    }
    return {
    padding:"1rem 2rem",
    position:"relative",
    color:"var(--highlight)",
    height:"var(--desktopheight)",
    backgroundSize: "500px 500px",
    backgroundImage:`linear-gradient(to right, rgba(97, 16, 22, 0.3) 0%, rgba(97, 16, 22, 0.3)), linear-gradient(to right, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5)), url(${bg}) `
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


<div className="Row" style={textMarginStyleLanding()}>

  <div id="summary-col-1" className="Column" style={{width:"50%", height:l?"var(--desktopheight)":"60vh", position:"relative",
    zIndex:"4"}}>

  <h2 style={{paddingTop:"0"}}>Frontend Developer</h2>

    <div className="boxDecoration" style={{
        borderColor: "var(--highlight)"
      }}></div>

    <h6 style={{flex:"1"}}>

    <Fade bottom>
      <div><h5><strong>psychology</strong></h5></div>
      <div><h5><strong>user experience</strong></h5></div>
      <div><h5><strong>craft</strong></h5></div>
      </Fade>

    </h6>

  </div>

  <div id="summary-col-2" className="Column" style={{position:"absolute",right:m?"10rem":"0", bottom:m?"5rem":"", top:m?"5rem":"-1rem"}}>
  <div></div>
    <ImageFadeIn src={headshot} style={{minWidth:"200px", maxWidth:m?"400px":"70vw", minHeight:"300px",maxHeight:m?"60vh":"80vh",objectFit:"contain",zIndex:"1"}}/>
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
     <TocLabel m={m} label="what i love" sublabel="hobbies" about={true}/>
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
      A psychology graduate that dislikes psychology.
    </h6>

  </div>

  <div id="summary-col-2" className="Column" style={colHalf()}>
  <div style={{paddingTop:col2PaddingTop()}}></div>
    lorem ipsum Et qui possimus repellat soluta facilis. Aliquid tempore unde quasi sit ipsum doloribus dicta. Similique aut et voluptas maiores recusandae commodi fugiat. Provident facilis sunt officiis quo et ad iure.Et ipsum soluta voluptatem omnis. Ut aut facere quaerat quasi qui. Quia assumenda consequatur sed ducimus voluptas aut eaque.Rerum quam dolore vel aut perferendis. Ut quidem aliquam pariatur corrupti. Qui porro nemo ea in quibusdam. Iure incidunt tempora laudantium inventore numquam. Reiciendis fuga quis cupiditate ut dolor culpa quibusdam modi. Totam quis dignissimos atque sequi hic.

  </div>
</div>

<div style={{marginBottom:extraSpacing()}}></div>


<div style={{background:"var(--occlusion)", color:"var(--cinerous)"}}>

<div style={{marginBottom:extraSpacing()}}></div>

<div id="what%20i%20love" className={l
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
            }}>What I Love</div>
      }

      {m && <h2 style={{paddingTop:"0",color:"var(--highlight)"}} id="what i love">What I Love</h2>}


    {l && <div className="boxDecoration" style={{
        borderColor: "var(--highlight)"
      }}></div>}

        <div className={l?"ColumnCentered":m? "RowCentered":"ColumnCentered"} style={{gap:"3rem", alignItems: l? "flex-start": !m? "flex-end":"", justifyContent:m && "space-between", marginTop:"2rem", width: !m && "calc(70vw - 3rem)"}}>

          <h5 className="HobbyLabel RowCentered" onClick={()=>{if(hobbyFocus==='travel'){setHobbyFocus("")}else{setHobbyFocus('travel')}}} style={{
            color:hobbyFocus==='travel' && "var(--highlight)",
            borderBottom:hobbyFocus==='travel' && "1.8px solid var(--highlight)"

          }}>
          <TravelingIcon style={iconStyle()}/>Travel</h5>
          <h5 className="HobbyLabel RowCentered" onClick={()=>{if(hobbyFocus==='reading'){setHobbyFocus("")}else{setHobbyFocus('reading')}}} style={{
            color:hobbyFocus==='reading' && "var(--highlight)",
            borderBottom:hobbyFocus==='reading' && "1.8px solid var(--highlight)"
          }}>
          <ReadingIcon style={iconStyle()}/>Reading</h5>
          <h5 className="HobbyLabel RowCentered" onClick={()=>{if(hobbyFocus==='painting'){setHobbyFocus("")}else{setHobbyFocus('painting')}}} style={{
            color:hobbyFocus==='painting' && "var(--highlight)",
            borderBottom:hobbyFocus==='painting' && "1.8px solid var(--highlight)"
          }}>
          <PaintingIcon style={iconStyle()}/>Painting</h5>
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
      "This is what I love, traveling solo around the world, without a care in the world, suspending control to a world entirely foreign, immersing myself in somewhere different, exploring wonders and nature and speaking with people in different tongues, sharing experiences and stories."
      </div>

      </div>
      :hobbyFocus==="painting"?
      "My brain never rests, even when I wish it would. I am the kind of person that can never meditate, or even take a break in the afternoon. But when I am painting, I am humbled by the colors aof natures, I am somewhat mesmerized by color and light, and try to capture the effects I see to the best of my limited abilities. I love the pure concentration, and how time travels past me when I am in the zone."
      :hobbyFocus==="reading"?
      "There is no topic I love more than that of books. Although I made an entire web app dedicated to humanities books, what I love to discuss even more is literature. I love discovering new works and writing styles, or see the same narratives in two entirely different stories from different points on this globe."
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
    I can help with this
    </h6>

  </div>

  <div id="summary-col-2" className="Column" style={colHalf()}>
  <div style={{paddingTop:col2PaddingTop()}}></div>
    lorem ipsum Et qui possimus repellat soluta facilis. Aliquid tempore unde quasi sit ipsum doloribus dicta. Similique aut et voluptas maiores recusandae commodi fugiat. Provident facilis sunt officiis quo et ad iure.Et ipsum soluta voluptatem omnis. Ut aut facere quaerat quasi qui. Quia assumenda consequatur sed ducimus voluptas aut eaque.Rerum quam dolore vel aut perferendis. Ut quidem aliquam pariatur corrupti. Qui porro nemo ea in quibusdam. Iure incidunt tempora laudantium inventore numquam. Reiciendis fuga quis cupiditate ut dolor culpa quibusdam modi. Totam quis dignissimos atque sequi hic.

  </div>
</div>

<div style={{marginBottom:extraSpacing()}}></div>

</div>
  )
}

export default About
