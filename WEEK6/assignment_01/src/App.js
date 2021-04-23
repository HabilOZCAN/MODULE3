import './App.css';
import FetchApiHO from './components/FetchApiHO.js';
//with props API_Url passed to fetchApiHO.js component. Here API_URL desingned for needed search
function App() {

  const API_KEY =  "b73e2ef9";
  let pIMDb_ID = "tt1285016";//`tt3896198`;
  const API_URL =   new URL (`http://www.omdbapi.com/`);
  API_URL.searchParams.set('i',pIMDb_ID);
  API_URL.searchParams.set('apikey', API_KEY);

  return (
    <div className="App">
      <FetchApiHO API_URL={API_URL}/>
    </div>
  );
}
export default App;
