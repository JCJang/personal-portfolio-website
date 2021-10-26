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
    "Be right there! Sorry for the delay",
    "Sketching wireframes",
    "Taking an espresso shot",

  ]
  const [arrNum, setArrNum] = useState(0)



  useTimeout(()=>{
        setArrNum(1)
    },3000)


  useDebounce(()=>{
    if(arrNum===loaderTextArr.length-1){
      setArrNum(0)
    }else{
      setArrNum(arrNum+1)
    }

  },4500,[arrNum])


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
