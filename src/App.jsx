import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "boostrap/dist/css/boostrap.min.css";
import { BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import { Navbar } from "./Components/Navbar";

function App() {}
  const [count, setCount] = useState(0)

  return <>
  
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      </Routes>
     
    </BrowserRouter>;

export default App;
