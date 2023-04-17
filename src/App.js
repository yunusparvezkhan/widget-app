import React, { useState } from "react";
import Accordion from "./components/accordion";
import items from "./data/widget-data";
import Search from "./components/Search";


const App = () => {
  const [activepage, setActivepage] = useState('accordion');

  return (
    <div className="App">
      <center>
        <button onClick={() => { setActivepage('accordion') }} >Accordion</button>
        <button onClick={() => { setActivepage('search') }} >Search</button>
        <div>
          {activepage == 'search' ? <Search /> : <Accordion items={items} />}
        </div>
      </center>
    </div>
  );
}

export default App;
