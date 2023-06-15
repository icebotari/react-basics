import logo from './logo.svg';
import './App.css';
import Button from "./containers/Button";

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Button className={'App-button'} buttonName={"Let's go"} navigateTo={'/users'}/>
        </p>
      </header>
    </div>
  );
}

export default App;
