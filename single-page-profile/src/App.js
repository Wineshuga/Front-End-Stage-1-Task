import Main from "./Components/Main";
import pic from "./pic.svg";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pic} className="App-logo" alt="logo" />
        <p>Annette Black</p>
      </header>
      <Main/>
    </div>
  );
}

export default App;
