
import './App.css';
import { Banner } from './component/Banner';
import { Navbar } from './component/Navbar';
import { Row } from './component/Row';
import requests from './request';

function App() {
  const LargeRow=true
  return (
    <div className="App">

      <Navbar/>
      <Banner/>
     <Row title="NETFLIX ORIGINALS" LargeRow={LargeRow} fetch={requests.fetchNetflixOriginals}/>
     <Row title="TRENDING NOW" fetch={requests.fetchTrending}/>
     <Row title="TOP RATED" fetch={requests.fetchTopRated}/>
     <Row title="ACTION MOVIES" fetch={requests.fetchActionMovies}/>
     <Row title="COMEDY MOVIES" fetch={requests.fetchComedyMovies}/>
     <Row title="HORROR MOVIES" fetch={requests.fetchHorrorMovies}/>
     <Row title="ROMANCE MOVIES" fetch={requests.fetchRomanceMovies}/>
     <Row title="DOCUMENRARIES" fetch={requests.fetchDocumentaries}/>
     
    </div>
  );
}

export default App;
