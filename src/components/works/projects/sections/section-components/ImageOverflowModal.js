import ImageFadeIn from '../../../../../customHooks/imageFadeIn';
import React  from 'react'
import ReactDom from 'react-dom'
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import { VscZoomIn as ZoomInIcon } from "react-icons/vsc";
import { VscZoomOut as ZoomOutIcon } from "react-icons/vsc";
import { IoResizeOutline as ResetIcon } from "react-icons/io5";
import { VscClose as CloseIcon } from "react-icons/vsc";

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: 'var(--table-light)',
  zIndex: 1000
}

const overlayStyle = {
  position: 'fixed',
  pointerEvents:"none",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'var(--cinerous)',
  opacity: "0.7",
  zIndex: 1000
}



export default function ImageOverflowModal({ isOpen, modalRef, setIsOpen, children, onClose, image }) {
  if (!isOpen) return null


  return ReactDom.createPortal(
    <>
      <div style={overlayStyle} onClick={(event)=>event.stopPropagation()}/>
      <div style={modalStyle} ref={modalRef}>
      <TransformWrapper>
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
         <React.Fragment>
           <div className="Row" style={{position:"relative"}}>
             <button className="modalBtn" onClick={() => zoomIn()}><ZoomInIcon style={{fontSize:"1.2rem"}}/></button>
             <button className="modalBtn" onClick={() => zoomOut()}><ZoomOutIcon style={{fontSize:"1.2rem"}}/></button>
             <button className="modalBtn" onClick={() => resetTransform()}><ResetIcon style={{fontSize:"1.2rem"}}/></button>
             <button className="modalBtn modalCloseBtn" style={{right:"0", position:"absolute"}} onClick={onClose}><CloseIcon style={{fontSize:"1.2rem"}}/></button>
           </div>
        <TransformComponent>
              <ImageFadeIn src={image} draggable="false" style={{
                pointerEvents:"none",
                height: "80vh",
                width:"95vw",
                objectFit:"contain"
              }}/>
        </TransformComponent>
        </React.Fragment>
        )}
      </TransformWrapper>
        </div>
    </>,
    document.getElementById('portal')
  )
}
