import React from 'react'

function popUp(props) {
  return (props.trigger) ?(
    <>
    <div className="popup">
        <div className='popup-inner'>
            <button className="close-button">X</button>
            {props.children}


        </div>
    </div>
    
    </>
  ) :"";
}

export default popUp;