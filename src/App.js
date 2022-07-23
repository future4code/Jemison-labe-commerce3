import React from "react";
import { Principal } from "./Components/Principal/Principal";

function App() {
  return (
    <div className="App">
      <Principal/>
    </div>
  );
}

export default App;
import React from 'react';
import {Main} from "./Components/Main/Main";
import { HomeList } from "./MockUp/MockapDados";

  function App() {
    return (
      <Main guardaLista={HomeList}/>
    );
  }
  
  export default App;
