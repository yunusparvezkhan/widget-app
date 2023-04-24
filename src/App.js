import React, { useState } from "react";
import Route from "./route";
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
        <div className="ui secondary pointing menu">
          <a href='/search'><button>Search</button></a>
          <a href='/sb-slokas'><button>ŚB Slokas</button></a>
          <a href='/dropdown'><button>Dropdown</button></a>
          <a href='/translate'><button>Translate</button></a>
        </div >
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

          <Route path='/accordion'>
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
