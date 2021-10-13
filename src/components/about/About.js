import ImageFadeIn from '../../customHooks/imageFadeIn'
import ImageOverflow from '../works/projects/sections/section-components/ImageOverflow'
import TocLabel from '../works/projects/sections/section-components/TocLabel'


import headshot from '../../images/figmav.jpg'

import jazz from '../../images/sketches/jazz.jpg'
import sunset from '../../images/sketches/sunset.jpg'
import plants from '../../images/sketches/plants.jpg'
import rooftop from '../../images/sketches/rooftop.jpg'
import snow from '../../images/sketches/snow.jpeg'
import sunrise from '../../images/sketches/sunrise.jpeg'
import park from '../../images/sketches/park.jpg'
import yiping from '../../images/sketches/yiping.jpg'
import bg from '../../images/F592-min.jpg'

import map from '../../images/traveled-countries-violet.svg'

const About = ({m, l}) => {

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
          if (m) return {
            margin:"1rem 5rem",
          }
          return {margin:"1rem 2rem"}
        }

        const textMarginStyleLanding=()=>{
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
          if (m) return {
            margin:"1rem 5rem",

          }
          return {margin:"1rem 2rem",fontSize:"2.5rem", textAlign:"center"}
        }

        const textMarginStyleH4=()=>{
          if (m) return {
            margin:"1rem 5rem",

          }
          return {margin:"1rem 2rem", fontSize:"1.8rem"}
        }


        const textMargin = () => {
          if (m) return "1rem 5rem"
          return "1rem 2rem"
        }

        const colLarge = () => {
          if (m) return {
              width:"calc(70vw - 7.5rem)"
            }
            return{
              width:"80vw"
            }
        }
        const colSmall = () => {
          if (m) return {
              width:"calc(30vw - 7.5rem)"
            }
            return{
              width:"80vw"
            }
        }

        const colHalf = () => {
          if (m) return {
              width:"calc(50vw - 7.5rem)"
            }
            return{
              width:"80vw"
            }
        }

        const iconStyle = () => {
          return{
            alignSelf: "center",
            marginRight: "0.8rem",
            fontSize: "2rem",
            minWidth:"2rem"
          }
        }

        const gistStyle = () => {
          const result = textMarginStyle()
          return result
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

        const textMarginStyleRows=()=>{
          if (m) return {
            margin:"1rem 5rem",
            gap:"5rem"
          }
          return {margin:"1rem 2rem"}
        }
  return (
    <div className="Column" style={aboutStyle()}>


<div className="Row" style={textMarginStyleLanding()}>

  <div id="summary-col-1" className="Column" style={{width:"50%", height:l?"var(--desktopheight)":"70vh",zIndex:"5"}}>

  <h2>Frontend Developer</h2>

    <div className="boxDecoration" style={{
        borderColor: "var(--highlight)"
      }}></div>

    <h6 style={{flex:"1"}}>
      <strong><h5>psychology<br></br>user experience<br></br>craft</h5></strong>
    </h6>

  </div>

  <div id="summary-col-2" className="Column" style={{position:"absolute",right:m?"5rem":"0"}}>
  <div style={{marginTop:"5rem"}}></div>
    <ImageFadeIn src={headshot} style={{minWidth:"200px", maxWidth:"400px", minHeight:"300px",maxHeight:"60vh",objectFit:"cover"}}/>
  </div>
</div>



<div style={textMarginStyle()} className={m
    ? "Column"
    : "Row"} style={{
    background: "var(--occlusion)",
    paddingBottom: "3rem",
    paddingTop: "3rem",
    color: "var(--highlight)"
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
      : "Column"} style={{alignItems:"space-between"}}>
    <TocLabel m={m} label="who i am" sublabel="background" about={true}/>
     <TocLabel m={m} label="what i love" sublabel="hobbies" about={true}/>
     <TocLabel m={m} label="how i can help" sublabel="skills and languages" about={true}/>
  </div>
</div>


<div id="who%20i%20am" className={m
    ? "Row"
    : "Column"} style={textMarginStyleRows()}>

  <div id="summary-col-1" className="Column" style={colHalf()}>

  <h1>Who I am</h1>

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


<div id="what%20i%20love" className={m
    ? "Row"
    : "Column"} style={textMarginStyleRows()}>

  <div id="summary-col-1" className="Column" style={colHalf()}>

  <h1 id="what i love">What I love</h1>

    <div className="boxDecoration" style={{
        borderColor: "var(--velvet)"
      }}></div>

    <h6>
    This is what I love
    </h6>

  </div>

  <div id="summary-col-2" className="Column" style={colHalf()}>
  <div style={{paddingTop:col2PaddingTop()}}></div>
    lorem ipsum Et qui possimus repellat soluta facilis. Aliquid tempore unde quasi sit ipsum doloribus dicta. Similique aut et voluptas maiores recusandae commodi fugiat. Provident facilis sunt officiis quo et ad iure.Et ipsum soluta voluptatem omnis. Ut aut facere quaerat quasi qui. Quia assumenda consequatur sed ducimus voluptas aut eaque.Rerum quam dolore vel aut perferendis. Ut quidem aliquam pariatur corrupti. Qui porro nemo ea in quibusdam. Iure incidunt tempora laudantium inventore numquam. Reiciendis fuga quis cupiditate ut dolor culpa quibusdam modi. Totam quis dignissimos atque sequi hic.

  </div>
</div>

<div className="RowCentered">

    <ImageOverflow height="50vh" images={[jazz,sunset,plants,rooftop,snow,sunrise,park,yiping]} style={{
        filter: "saturate(0)",
      }}/>

  </div>

  <div className="RowCentered">

      <ImageOverflow height="50vh" images={[map]} style={{
          filter: "saturate(0)",
        }}/>

    </div>



<div id="how%20i%20can%20help" className={m
    ? "Row"
    : "Column"} style={textMarginStyleRows()}>

  <div id="summary-col-1" className="Column" style={colHalf()}>

  <h1>How I can help</h1>

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



    </div>
  )
}

export default About
