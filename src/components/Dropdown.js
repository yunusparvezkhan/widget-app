import React, { useEffect, useState, useRef } from 'react';
import '../styles/Dropdown.css';

const Dropdown = ({ options, selectedop, onSelectedopChange, onColorboxtopChange, selectionlabel }) => {
    const [menustate, setMenustate] = useState('');
    // const [colorboxtop, setColorboxtop] = useState('0px');
    const formref = useRef();

    useEffect(() => {

        const onBodyClick = (e) => {
            if (formref.current.contains(e.target)) {
                return;
            } else {
                setMenustate('');
            }
        }

        document.body.addEventListener('click', onBodyClick)

        return () => {
            document.body.removeEventListener('click', onBodyClick)
        }
    }, [])


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
        <div ref={formref} className='ui form'>
            <div className='field'>
                <label className='label'>{selectionlabel}</label>

                <div className={`ui selection dropdown ${menustate}`} onClick={() => {
                    menustate == '' ? setMenustate('visible transition active') : setMenustate('');
                    menustate == '' ? onColorboxtopChange('250px') : onColorboxtopChange('0px');
                }} >

                    <i className='dropdown icon' />
                    <div className='text'>{selectedop.label}</div>
                    <div className={`menu ${menustate}`}>
                        {optionmapping}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown