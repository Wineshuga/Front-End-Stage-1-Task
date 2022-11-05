import React from "react";
import pic from "../pic.jpg";
import Icon from "../Icon.png";
import share from "../share-button.png"

const Header = () => {
    return (
        <header className="App-header">
            <img src={pic} id="profile__img" alt="logo" />
            <h5>Wineshuga</h5>
            <p id="slack">Slack: Wineshuga</p>
            <img className="share-icon" src={Icon} alt="icon" />
            <img className="share-icon-mobile" src={share} alt="icon" />
        </header>
    )
}

export default Header;