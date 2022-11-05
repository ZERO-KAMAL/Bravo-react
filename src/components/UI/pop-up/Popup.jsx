import React from "react";
import "./Popup.scss";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup">
    
        {props.children}
     
    </div>
  ) : (
    ""
  );
};

export default Popup;
