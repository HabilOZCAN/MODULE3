import './App.css';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import CollectData from './componenents/CollectData';
import SendData from './componenents/SendData';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

function App() {

  return (
    <div>
        <nav className='navbar navbar-light'>
        <ul className='nav navbar-nav'>
          <li>
            <Link to = "/">MainPage</Link>
          </li>
          <li>
            <Link to = "/PersonList">PersonList</Link>
          </li>
          <li>
            <Link to = "/SendPersonInfo">SendPersonInfo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path = '/'><Home/></Route>
        <Route exact path = '/PersonList'><CollectData/></Route>
        <Route exact path = '/SendPersonInfo'><SendData id='SendDataID'/></Route>
      </Switch>      
    </div>
  );
}

export default App;
