import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeroList from './components/HeroList';
import HeroDetails from './components/HeroDetails';
import HeroFav from './components/HeroFav';

function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeroList/>}/>
          <Route path="/fav" element={<HeroFav/>}/>
          <Route path="/details" element={<HeroDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
