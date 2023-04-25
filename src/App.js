import React, { useState } from "react";
import Header from "./components/Header";
import Route from "./route";
import Accordion from "./components/accordion";
import items from "./data/widget-data";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import dropdownoptions from './data/Dropdown-data.js'
import Translate from "./components/Translate";
import './styles/StyleLib.css'


const App = () => {
  const [selectedop, setSelectedop] = useState({ label: 'Select', value: '#202020' });
  const [colorboxtop, setColorboxtop] = useState('0px');

  return (
    <div className="App">
      <center>
        <Header />
        <div>

          <Route path='/' >
            <div className='eighty page-body' >
              <h1>Search</h1>
              <Search />
            </div>
          </Route>

          <Route path='/search'>
            <div className='eighty page-body' >
              <h1>Search</h1>
              <Search />
            </div>
          </Route>

          <Route path='/sb-slokas'>
            <div className='eighty page-body'>
              <h1 className='page-header'>Srimad Bhagavatam Slokas</h1>
              <Accordion items={items} />
            </div>
          </Route>

          <Route path='/dropdown'>
            <div className="eighty page-body">
              <h1>Dropdown</h1>
              <div className='ui segment' >
                <Dropdown selectionlabel={'Select an Option'} options={dropdownoptions} selectedop={selectedop} onSelectedopChange={setSelectedop} onColorboxtopChange={setColorboxtop} />
              </div>
              <div className='color-box' style={{ backgroundColor: selectedop.value, top: colorboxtop }}></div>
            </div>
          </Route>

          <Route path='/translate'>
            <div className='fifty page-body'>
              <h1 className='page-header'>Translate</h1>
              <Translate />
            </div>
          </Route>

        </div>
      </center >
    </div >
  );
}

export default App;
