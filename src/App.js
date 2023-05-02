import React from "react";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Header from "./component/Header";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Videos from "./component/Video";





function App() {
  return (
 <Router>
<Header/>
  
  <Routes>
    <Route path="/home" element={<Home/>}/>
    <Route path="/videos" element={<Videos/>}/>
   
  </Routes>
  <Footer/>
 </Router>
  )
  ;
}

export default App;

//npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion