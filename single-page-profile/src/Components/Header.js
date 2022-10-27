import pic from "../pic.jpg";

const Header = () => {
    return (
        <header className="App-header">
            <img src={pic} className="my-picture" alt="logo" />
            <p>WineShuga</p>
      </header>        
    )
}

export default Header;