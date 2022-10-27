import pic from "../pic.jpg";
import Icon from "../Icon.png";

const Header = () => {
    return (
        <header className="App-header">
            <img src={pic} id="profile__img" alt="logo" />
            <h5>WineShuga</h5>
            <img className="share-icon" src={Icon} alt="icon" />
        </header>        
    )
}

export default Header;