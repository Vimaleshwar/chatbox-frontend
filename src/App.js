import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Route} from "react-router-dom"
import Login from './components/login'
import Chatbox from './components/chatbox'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path='/' exact component={Login}/>
        <Route path='/chatbox' component={Chatbox}/>
      </Router>
    </div>
  );
}

export default App;
