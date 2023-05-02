import React from "react";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Header from "./component/Header";





function App() {
  return (
 <Router>
<Header/>
  <h1>Hello</h1>
  <Routes>
    <Route/>
  </Routes>
 </Router>
  )
  ;
}

export default App;

//npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion