import React, { useState, useEffect } from 'react'

const Convert = ({ language, text }) => {
    useEffect(() => {
        console.log('props in Convert.js has changed')
    }, [language, text])
    return (

        // This is not a form, put this classname for styling purposes only
        <div className='ui form'>
            <div className='field'>
                <label className='label'>Output</label>
            </div>
        </div>
    )
}

export default Convert