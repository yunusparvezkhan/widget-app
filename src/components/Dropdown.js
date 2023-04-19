import React, { useState } from 'react';

const Dropdown = ({ options, selectedop, onSelectedopChange }) => {
    const [menustate, setMenustate] = useState('');

    const optionmapping = options.map((option) => {

        // Uncomment the code below to remove the selected option from the rendered list
        // if (option.value === selectedop.value) {
        //     return null;
        // }

        return (
            <div className='ui list item' key={option.value} onClick={() => { onSelectedopChange(option); setMenustate('') }} >
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
                        <div className={`ui selection dropdown ${menustate}`} onClick={() => { menustate == '' ? setMenustate('visible transition active') : setMenustate('') }} >
                            <i className='dropdown icon' />
                            <div className='text'>{selectedop.label}</div>
                            <div className={`menu ${menustate}`}>
                                {optionmapping}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dropdown