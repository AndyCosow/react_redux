import logo from './logo.svg';
import './App.css';
import Profile from "./components/Profile"
import Login from "./components/Login"
import SetColor from "./components/SetColor";

function App() {
  return (
    <div className="App">
      <Profile/>
        <Login/>
        <SetColor/>
    </div>
  );
}

export default App;
