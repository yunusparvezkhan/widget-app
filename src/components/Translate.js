import React, { useState } from 'react'
import Dropdown from './Dropdown'
import '../styles/Translate.css'

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
    const [text, setText] = useState('');

    return (
        <div className='translate-root'>
            <div className='ui segment '>
                <div className='ui form'>
                    <div className='field'>
                        <label className='label'>Enter Text</label>
                        <input value={text} onChange={(e) => { setText(e.target.value) }} placeholder={`Type ${language.label} text here`} />
                    </div>
                </div>
                <div className='translate-dropdown'>
                    <Dropdown
                        selectionlabel={'Select a language'}
                        options={options}
                        selectedop={language}
                        onSelectedopChange={setLanguage}
                        onColorboxtopChange={setBugfixingstate}
                    />
                </div>
            </div>
        </div>
    )
}

export default Translate