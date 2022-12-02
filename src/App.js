import { useState } from 'react';
import Home from './components/Home/Home';
import Favourites from './components/Favourites/Favourites';
import './App.css';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [favourites, setFavourites] = useState([])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home setFavourites={setFavourites} favourites={favourites}/>} end/>
        <Route path='/fav' element={<Favourites setFavourites={setFavourites} favourites={favourites}/>}/>
      </Routes>
    </div>
  );
}

export default App;
