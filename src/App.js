import React, { useState } from "react";
import Accordion from "./components/accordion";
import items from "./data/widget-data";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import dropdownoptions from './data/Dropdown-data.js'
import Translate from "./components/Translate";
import './styles/StyleLib.css'

const App = () => {
  const [activepage, setActivepage] = useState('search');
  const [selectedop, setSelectedop] = useState({ label: 'Select', value: '#202020' });
  const [colorboxtop, setColorboxtop] = useState('0px');

  return (
    <div className="App">
      <center>
        <button onClick={() => { window.location.pathname = '/search' }} >Search</button>
        <button onClick={() => { window.location.pathname = '/accordion' }} >ŚB Slokas</button>
        <button onClick={() => { window.location.pathname = '/dropdown' }} >Dropdown</button>
        <button onClick={() => { window.location.pathname = '/translate' }} >Translate</button>
        <div>
          {window.location.pathname === '/' ? <div className='eighty page-body' >
            <h1>Search</h1>
            <Search />
          </div> : ''}

          {window.location.pathname === '/search' ? <div className='eighty page-body' >
            <h1>Search</h1>
            <Search />
          </div> : ''}

          {window.location.pathname === '/accordion' ? <div className='eighty page-body'>
            <h1 className='page-header'>Srimad Bhagavatam Slokas</h1>
            <Accordion items={items} />
          </div> : ''}

          {window.location.pathname === '/dropdown' ?
            <div className="eighty page-body">
              <h1>Dropdown</h1>
              <div className='ui segment' >
                <Dropdown selectionlabel={'Select an Option'} options={dropdownoptions} selectedop={selectedop} onSelectedopChange={setSelectedop} onColorboxtopChange={setColorboxtop} />
              </div>
              <div className='color-box' style={{ backgroundColor: selectedop.value, top: colorboxtop }}></div>
            </div> : ''}

          {window.location.pathname === '/translate' ? <div className='fifty page-body'>
            <h1 className='page-header'>Translate</h1>
            <Translate />
          </div> : ''}
        </div>
      </center>
    </div>
  );
}

export default App;
