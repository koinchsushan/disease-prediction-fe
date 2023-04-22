import React from "react";
import Button from "../Button/Button";

import "./Card.css";
function Card() {
    return (
        <div className="square">
            <div className="circle">  <img src={require("./services.png")} /></div>
            <div className="square-text">
                <p>
                    Tell us a bit about yourself and how you’re feeling for
                    suggested next stetexts and common treatment plans.
                </p>
                <div className="square-btn">
                    <Button>Check Now</Button>
                </div>
            </div>
        </div>
    );
}

export default Card;
