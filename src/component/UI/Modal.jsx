// import React from 'react'
import PropTypes from 'prop-types';
import { Fragment } from "react";
import ReactDOM from "react-dom";   

const Backdrop = (props) => {
    return <div className="fixed top-0 left-0 w-full h-full bg-[#000000b8] "/>
};

const ModalOverlay = (props) => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-[#000000b8] flex justify-center items-center z-20">
            <div className="">{props.children}</div>
        </div>
    )
};

const portalElement = document.getElementById('overlays');

 const Modal = (props) => {
  return <Fragment> 
        {ReactDOM.createPortal(<Backdrop/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,
            portalElement
        )} 
     </Fragment>
  
}
export default Modal

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
