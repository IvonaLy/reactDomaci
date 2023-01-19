 
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <BrowserRouter  >
      <Navbar ></Navbar>
      <Routes>
         
        
      </Routes>
      
  </BrowserRouter>
    </div>
  );
}

export default App;
