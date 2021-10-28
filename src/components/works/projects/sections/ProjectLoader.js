import {useEffect, useState} from 'react'
import { css } from "@emotion/react";
import SquareLoader from "react-spinners/SquareLoader";
import useDebounce from '../../../../customHooks/useDebounce'
import useTimeout from '../../../../customHooks/useTimeout'
import Fade from 'react-reveal/Fade';


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const Loader = () => {


  const loaderTextArr = [
    "Interviewing users",
    "Compiling insights",
    "Sketching wireframes",
    "Taking an espresso shot",
    "Analyzing research data",
    "Brainstorming ideas",
    "Fixing a bug"
  ]
  const [arrNum, setArrNum] = useState(Math.floor((Math.random() * loaderTextArr.length)))

  useTimeout(()=>{
    if(arrNum===loaderTextArr.length-1){
      setArrNum(0)
    }else{
      setArrNum(arrNum+1)
    }
    },2500)


  useDebounce(()=>{
    if(arrNum===loaderTextArr.length-1){
      setArrNum(0)
    }else{
      setArrNum(arrNum+1)
    }

  },2000,[arrNum])


  const loaderStyle = () => {
    return {
      width:"100vw",
      height:"100vh",
      position:"absolute",
      top:"0px",
      background:"var(--works-bg)",
      color:"var(--occlusion)"
    }
  }


  return (
    <div className="ColumnCentered" style={loaderStyle()}>

      <Fade top>
      <div style={{marginBottom: "20vh"}}>
      <SquareLoader color="var(--velvet)" css={override} speedMultiplier={0.7} size={100}/>
      <div className="subtitle1" style={{marginTop:"2rem"}}>{loaderTextArr[arrNum]}</div>
      </div>
      </Fade>

    </div>

    )
}

export default Loader
