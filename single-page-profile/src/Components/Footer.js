import React from "react";
import Vector from "../Vector.png";
import I4G from "../I4G.png";

const Footer = () => {
    return (
        <footer className="footer">
            <hr />
            <div className="icon-div">
                <img src={Vector} className="left-icon" alt="icon" />
                <p>HNG Internship 9 Frontend Task</p>
                <img src={I4G} className="right-icon" alt="icon" />
            </div>
        </footer>
    )
}

export default Footer;