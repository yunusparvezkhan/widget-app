import React, { useState } from 'react';

const Dropdown = ({ options, selectedop, onSelectedopChange }) => {
    const [menustate, setMenustate] = useState('');
    // const [selectedop, setSelectedop] = useState('Select');

    const optionmapping = options.map((option) => {
        return (
            <div className='ui list item' key={option.value} onClick={() => { onSelectedopChange(option.label); setMenustate('') }} >
                <div >{option.label}</div>
            </div >
        )
    })

    return (
        <div>
            <div className='ui segment' style={{ maxWidth: '80%' }} >
                <h1>Dropdown</h1>
                <div className='ui form'>
                    <div className='field'>
                        <label className='label'>Select an option</label>
                        <div className='ui selection dropdown visible' onClick={() => { menustate == '' ? setMenustate('visible') : setMenustate('') }} >
                            <i className='dropdown icon' />
                            <div className='text'>{selectedop}</div>
                            <div className={`menu ${menustate} transition`}>
                                {optionmapping}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown