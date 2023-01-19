 
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Kontakt from './Kontakt';
import { useState } from 'react';
import Dogadjaji from './Dogadjaji';

function App() {
  const [dogadjaji] = useState([
    {
      id: 1,
      image: "https://belgrade-beat.rs/photos/activities/3423/t-1673860579.jpg",
      naziv: "Okupacija Srbije",    
      opis:  "Posetite tribinu i konferenciju za štampu pod nazivom Okupacija Srbije ",
      vreme: "13:00",
      mesto: "Pres centar UNS",
      cena_ulaznice: 1000
    },
    {
      id: 2,
      image: "https://belgrade-beat.rs/photos/activities/505/t-1515769313.jpg",
      naziv: "Plivanje za Casni krst",    
      opis:  "Tradicionalna verska manifestacija obeležavanje praznika Krstovdan i Bogojavljenje ",
      vreme: "12:00",
      mesto: "Zemunski kej",
      cena_ulaznice: 0

    },
    {
      id: 3,
      image: "https://belgrade-beat.rs/photos/activities/3353/t-1669822980.jpg",
      naziv: "Benito Roman",    
      opis:  "Izložba Veličanstvena decenija. Ustav u praksi. Fotografije Benita Romana, 1975 - 1985.",
      vreme: "13:00",
      mesto: "Institut Servantes",
      cena_ulaznice:300

    },
    {
      id: 4,
      image: "https://belgrade-beat.rs/photos/activities/3383/t-1671250452.jpg",
      naziv: "Zimski festival na Tasmajdanu",    
      opis:  "Bogat programmom za sve generacije ",
      vreme: "10:00",
      mesto: "Park Tasmajdan",
      cena_ulaznice:400

    },
  ])
  return (
    <div className="App">
       <BrowserRouter  >
      <Navbar ></Navbar>
      <Routes>
        <Route path="/" element={<Dogadjaji dogadjaji={dogadjaji}></Dogadjaji>}></Route>
         
        <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>
        
      </Routes>
        <Footer></Footer>
  </BrowserRouter>
    </div>
  );
}

export default App;
