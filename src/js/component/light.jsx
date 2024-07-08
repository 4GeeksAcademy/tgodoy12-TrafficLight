import React from "react";

const Light = (props) => {
    return (
        <div className="d-flex justify-content-center p-3">
            <button className={`${props.color}${props.color === props.currentColor ? " bright" : ""}`} onClick={props.onclick}>
            </button>   
        </div>
        
        
    )
}

export default Light;