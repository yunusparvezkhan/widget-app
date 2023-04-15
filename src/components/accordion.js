import React from 'react'
import "semantic-ui-css/semantic.min.css";

const Accordion = ({ items }) => {

    const render = items.map(item => {
        return (
            <div>
                <div className='title active' >
                    <i className='dropdown icon' />
                    {item.question}
                </div>
                <div className='content active' >
                    <p> {item.answer} </p>
                </div>
            </div>
        )
    })


    return (
        <div>
            {render}
        </div>
    )
}

export default Accordion