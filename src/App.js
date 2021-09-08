
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {useState} from 'react';

function App() {
  const [pokemon, setPokemon] = useState([]);

  const onClickHandler = () => {
    console.log("clicked");
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => {
        setPokemon(res.data.results);
      })
      .catch(err => console.log(err))

  }
  return (
    <div className="App">
      <h1>hey it's me</h1>
      <button onClick={onClickHandler} className="btn btn-warning btn-lg">Click me</button>
    <ol>
      {
        pokemon.map((item, i)=>{
          return <li key={i}>{item.name}</li>
        })
      }
    </ol>

    </div>
  );
}

export default App;
