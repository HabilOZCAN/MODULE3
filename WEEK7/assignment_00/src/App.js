import './App.css';
import CollectData from './componenents/CollectData';
import SendData from './componenents/SendData';

function App() {
  return (
    <div className="App">
      <CollectData/>
      <SendData id='SendDataID'/>
    </div>
  );
}

export default App;
