
import './App.css';
import { Row } from './component/Row';
import requests from './request';

function App() {
  return (
    <div className="App">
     <Row title="NETFLIX ORIGINALS" fetch={requests.fetchNetflixOriginals}/>
     
    </div>
  );
}

export default App;
