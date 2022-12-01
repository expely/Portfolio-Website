import React from 'react'
import { Image } from 'react-bootstrap';
import CloseImage from "../Images/Popup/X-Button.svg"
import './Components.css'
function Popup(props) {
    
    const closePopup = () => {
        const currentGroup = document.querySelector(`[data-index="${props.index}"]`)

        props.setTrigger(false)
        props.element.dataset.status = "inactive"
        currentGroup.dataset.status = "active"
    }

    return (props.trigger) ? ( 
        <div className="popup">
            <div className="popup-inner">
                <Image src={CloseImage} className='close-button' onClick={closePopup}/>
                {props.children}
            </div>
        </div>
     ) : "";
}
 
export default Popup;