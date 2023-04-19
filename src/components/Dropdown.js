import React, { useState } from 'react';

const Dropdown = ({ options }) => {
    const [menustate, setMenustate] = useState('');

    const optionmapping = options.map((option) => {
        return (
            <div className='ui list item' key={option.value}>
                <h4>{option.label}</h4>
            </div>
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
                            <div className='text'>Select</div>
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