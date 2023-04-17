import React, { useState } from "react";
import Accordion from "./components/accordion";
import items from "./data/widget-data";


const App = () => {
  return (
    <div className="App">
      <center>
        <Accordion items={items} />
      </center>
    </div>
  );
}

export default App;
