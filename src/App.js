 
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Kontakt from './Kontakt';
import { useState } from 'react';

function App() {
  const [products] = useState([
    {
      id: 1,
      image: "https://belgrade-beat.rs/photos/activities/3423/t-1673860579.jpg",
      naziv: "Okupacija Srbije",    
      opis:  "Posetite tribinu i konferenciju za štampu pod nazivom Okupacija Srbije ",
      vreme: "13:00",
      mesto: "Pres centar UNS",

    },
    {
      id: 2,
      image: "https://belgrade-beat.rs/photos/activities/505/t-1515769313.jpg",
      naziv: "Plivanje za Casni krst",    
      opis:  "Tradicionalna verska manifestacija obeležavanje praznika Krstovdan i Bogojavljenje ",
      vreme: "12:00",
      mesto: "Zemunski kej",
    },
    {
      id: 3,
      image: "https://belgrade-beat.rs/photos/activities/3353/t-1669822980.jpg",
      naziv: "Benito Roman",    
      opis:  "Izložba Veličanstvena decenija. Ustav u praksi. Fotografije Benita Romana, 1975 - 1985.",
      vreme: "13:00",
      mesto: "Institut Servantes",
    },
    {
      id: 4,
      image: "https://belgrade-beat.rs/photos/activities/3383/t-1671250452.jpg",
      naziv: "Zimski festival na Tasmajdanu",    
      opis:  "Bogat programmom za sve generacije ",
      vreme: "10:00",
      mesto: "Park Tasmajdan",
    },
  ])
  return (
    <div className="App">
       <BrowserRouter  >
      <Navbar ></Navbar>
      <Routes>
         
        <Route path="/kontakt" element={<Kontakt></Kontakt>}></Route>
        
      </Routes>
        <Footer></Footer>
  </BrowserRouter>
    </div>
  );
}

export default App;
