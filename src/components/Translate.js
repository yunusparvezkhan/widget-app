import React, { useState } from 'react'
import Dropdown from './Dropdown'

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
]

const Translate = () => {
    const [selectedop, setSelectedop] = useState({ label: 'Select', value: '#202020' });
    const [bugfixingstate, setBugfixingstate] = useState('0px'); // Ignore this state, this one is made to keep up with the nroms of the Dropdown component. Also ignore the prop where this state setter is passed.

    return (
        <div>
            <h1 className='page-header'>Translate</h1>
            <div className='ui segment'>
                <Dropdown options={options} selectedop={selectedop} onSelectedopChange={setSelectedop} onColorboxtopChange={setBugfixingstate} />
            </div>
        </div>
    )
}

export default Translate