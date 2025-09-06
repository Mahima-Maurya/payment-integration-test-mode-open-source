// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import Donation from './frontend/Donation.jsx'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <Donation/>
//   )
// }

// export default App


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Donation from "./Donation";


const App = () => {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Donation/>}/>   
    </Routes>
   </Router>
    
  );
};

export default App;

