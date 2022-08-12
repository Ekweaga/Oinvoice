
import './App.css';
import Home from './Home';
import {Switch,Route} from "react-router-dom"
import Login from './components/Login';
import Signup from './components/Signup';
import Mainapp from './MainApp/Mainapp';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
        <Home/>
        </Route>
        <Route path="/login" exact>
        <Login/>
        </Route>
        <Route path="/signup" exact>
        <Signup/>
        </Route>
        <Route path="/mainapp" exact>
          <Mainapp/>
        </Route>
      </Switch>
   
    </div>
  );
}

export default App;
