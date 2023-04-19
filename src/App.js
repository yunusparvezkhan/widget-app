import React, { useState } from "react";
import Accordion from "./components/accordion";
import items from "./data/widget-data";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";


const App = () => {
  const [activepage, setActivepage] = useState('dropdown');

  return (
    <div className="App">
      <center>
        <button onClick={() => { setActivepage('search') }} >Search</button>
        <button onClick={() => { setActivepage('accordion') }} >Accordion</button>
        <button onClick={() => { setActivepage('dropdown') }} >Dropdown</button>
        <div>
          {activepage === 'search' ? <Search /> : ''}
          {activepage === 'accordion' ? <Accordion items={items} /> : ''}
          {activepage === 'dropdown' ? <Dropdown /> : ''}
        </div>
      </center>
    </div>
  );
}

export default App;
