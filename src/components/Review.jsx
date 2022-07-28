import React from "react";


export default function Review(props){


    return(
        <div className="item">
            <div className="item-img">
                <i className="fa-solid fa-quote-right item-img-icon"></i>
                <img src={props.img} alt="img" />
            </div>
            <h3 className="item-name">{props.name}</h3>
            <h6 className="item-job">{props.job}</h6>
            <p className="item-info">{props.text}</p>
            <div className="item-arrows">
                <i className="fa-solid fa-angle-left" onClick={props.decrement}></i>
                <i className="fa-solid fa-angle-right" onClick={props.increment}></i>
            </div>
            <button className="item-btn" onClick={props.surprise}>Surprise Me!</button>
        </div>
    )
}