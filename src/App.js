import React, { useState } from "react";
import Accordion from "./components/accordion";
import items from "./data/widget-data";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";


const App = () => {
  const [activepage, setActivepage] = useState('dropdown');
  const [selectedop, setSelectedop] = useState('Select');


  const dropdownoptions = [
    {
      label: 'Option 1',
      value: 'op1'
    },
    {
      label: 'Option 2',
      value: 'op2'
    },
    {
      label: 'Option 3',
      value: 'op3'
    },
    {
      label: 'Option 4',
      value: 'op4'
    },
    {
      label: 'Option 5',
      value: 'op5'
    }
  ]

  return (
    <div className="App">
      <center>
        <button onClick={() => { setActivepage('search') }} >Search</button>
        <button onClick={() => { setActivepage('accordion') }} >Accordion</button>
        <button onClick={() => { setActivepage('dropdown') }} >Dropdown</button>
        <div>
          {activepage === 'search' ? <Search /> : ''}
          {activepage === 'accordion' ? <Accordion items={items} /> : ''}
          {activepage === 'dropdown' ? <Dropdown options={dropdownoptions} selectedop={selectedop} setSelectedop={setSelectedop} /> : ''}
        </div>
      </center>
    </div>
  );
}

export default App;
