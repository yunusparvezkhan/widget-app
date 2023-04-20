import React, { useState } from "react";
import Accordion from "./components/accordion";
import items from "./data/widget-data";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import dropdownoptions from './data/Dropdown-data.js'
import Translate from "./components/Translate";

const App = () => {
  const [activepage, setActivepage] = useState('translate');
  const [selectedop, setSelectedop] = useState({ label: 'Select', value: '#202020' });


  return (
    <div className="App">
      <center>
        <button onClick={() => { setActivepage('search') }} >Search</button>
        <button onClick={() => { setActivepage('accordion') }} >Accordion</button>
        <button onClick={() => { setActivepage('dropdown') }} >Dropdown</button>
        <button onClick={() => { setActivepage('translate') }} >Translate</button>
        <div>
          {activepage === 'search' ? <Search /> : ''}
          {activepage === 'accordion' ? <Accordion items={items} /> : ''}
          {activepage === 'dropdown' ? <Dropdown options={dropdownoptions} selectedop={selectedop} onSelectedopChange={setSelectedop} /> : ''}
          {activepage === 'translate' ? <Translate /> : ''}
        </div>
      </center>
    </div>
  );
}

export default App;
