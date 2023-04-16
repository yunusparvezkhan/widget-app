import React, { useState } from 'react';


const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (i) => {
        console.log("No. ", i, " Title clicked");
        setActiveIndex(i + 1)
    }

    const render = items.map((item, i) => {
        return (
            <React.Fragment key={item.title}>
                <div className='title active' onClick={() => onTitleClick(i)} >
                    <i className='dropdown icon' />
                    {item.title}
                </div>
                <div className='content active' >
                    <p> {item.content} </p>
                </div>
            </React.Fragment>
        )
    })


    return (
        <div className='ui styled accordion'>
            {render}
            {activeIndex}
        </div>
    )
}

export default Accordion