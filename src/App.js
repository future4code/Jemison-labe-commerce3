import React from 'react';
import {Main} from "./Components/Main";
import { HomeList } from "../MockapDados";

  function App() {
    return (
      <Main guardaLista={HomeList}/>
    );
  }
  
  export default App;
