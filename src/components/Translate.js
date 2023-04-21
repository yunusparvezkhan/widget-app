// AIzaSyCHUCmpr7ct_yDFHC98CZJy2LTms-IwDlM
// Google translate API Private key
import React, { useState } from 'react'
import Dropdown from './Dropdown'
import Convert from './Convert'
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
    const [language, setLanguage] = useState(options[2]);
    const [bugfixingstate, setBugfixingstate] = useState('0px'); // Ignore this state, this one is made to keep up with the norms of the Dropdown component. Also ignore the prop where this state setter is passed.
    const [text, setText] = useState('');

    return (
        <div className='translate-root'>
            <div className='ui segment '>
                <div className='ui form'>
                    <div className='field'>
                        <label className='label'>Enter Text</label>
                        <input value={text} onChange={(e) => { setText(e.target.value) }} placeholder={`Type your text here`} />
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
                <div className='translation-result-box'>
                    <Convert language={language} text={text} />
                </div>

            </div>

        </div>
    )
}

export default Translate