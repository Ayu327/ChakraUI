import React from "react";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Header from "./component/Header";
import Home from "./component/Home";





function App() {
  return (
 <Router>
<Header/>
  <h1>Hello</h1>
  <Routes>
    <Route path="/home" element={<Home/>}/>
  </Routes>
 </Router>
  )
  ;
}

export default App;

//npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion