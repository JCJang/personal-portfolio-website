import {useEffect, useState} from 'react'
import { css } from "@emotion/react";
import SquareLoader from "react-spinners/SquareLoader";
import useDebounce from '../../customHooks/useDebounce'
import useTimeout from '../../customHooks/useTimeout'
import Fade from 'react-reveal/Fade';


const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`

const Loader = () => {


  const loaderStyle = () => {
    return {
      width:"100vw",
      height:"100vh",
      position:"absolute",
      top:"0px",
      background:"#C1BEBE",
      color:"var(--occlusion)"
    }
  }


  return (
    <div className="ColumnCentered" style={loaderStyle()}>

      <Fade>
      <SquareLoader color="var(--velvet)" css={override} speedMultiplier={0.7} size={100}/>
      </Fade>

    </div>

    )
}

export default Loader
