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

    return (
        <div>
            <Dropdown options={options} selectedop={selectedop} onSelectedopChange={setSelectedop} />
        </div>
    )
}

export default Translate