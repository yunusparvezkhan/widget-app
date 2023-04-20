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
    const [language, setLanguage] = useState(options[0]);
    const [bugfixingstate, setBugfixingstate] = useState('0px'); // Ignore this state, this one is made to keep up with the nroms of the Dropdown component. Also ignore the prop where this state setter is passed.

    return (
        <div>
            <div className='ui segment'>
                <Dropdown selectionlabel={'Select a language'} options={options} selectedop={language} onSelectedopChange={setLanguage} onColorboxtopChange={setBugfixingstate} />
            </div>
        </div>
    )
}

export default Translate