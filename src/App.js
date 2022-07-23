import React from 'react';
import {Main} from "./Components/Main/Main";
import { HomeList } from "./MockUp/MockapDados";

  function App() {
    return (
      <Main guardaLista={HomeList}/>
    );
  }
  
  export default App;
