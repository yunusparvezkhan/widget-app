import React, { useState } from "react";
import Accordion from "./components/accordion";
import items from "./data/widget-data";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import dropdownoptions from './data/Dropdown-data.js'
import Translate from "./components/Translate";
import './styles/StyleLib.css'

const App = () => {
  const [activepage, setActivepage] = useState('translate');
  const [selectedop, setSelectedop] = useState({ label: 'Select', value: '#202020' });
  const [colorboxtop, setColorboxtop] = useState('0px');


  return (
    <div className="App">
      <center>
        <button onClick={() => { setActivepage('search') }} >Search</button>
        <button onClick={() => { setActivepage('accordion') }} >Accordion</button>
        <button onClick={() => { setActivepage('dropdown') }} >Dropdown</button>
        <button onClick={() => { setActivepage('translate') }} >Translate</button>
        <div>
          {activepage === 'search' ? <div className='eighty page-body' >
            <h1>Search</h1>
            <Search />
          </div> : ''}

          {activepage === 'accordion' ? <div className='eighty page-body'>
            <h1 className='page-header'>Srimad Bhagavatam Slokas</h1>
            <Accordion items={items} />
          </div> : ''}

          {activepage === 'dropdown' ?
            <div className="eighty page-body">
              <h1>Dropdown</h1>
              <div className='ui segment' >
                <Dropdown options={dropdownoptions} selectedop={selectedop} onSelectedopChange={setSelectedop} onColorboxtopChange={setColorboxtop} />
              </div>
              <div className='color-box' style={{ backgroundColor: selectedop.value, top: colorboxtop }}></div>
            </div> : ''}

          {activepage === 'translate' ? <div className='eighty page-body'><Translate /></div> : ''}
        </div>
      </center>
    </div>
  );
}

export default App;
