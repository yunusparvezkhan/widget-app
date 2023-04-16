import React, { useState } from 'react';


const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (i) => {
        console.log('No. ', i, ' Title clicked');
        activeIndex !== i ? setActiveIndex(i) : setActiveIndex(null);
    }

    const render = items.map((item, i) => {
        const activecls = i === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={item.title}>
                <div className={`title ${activecls}`} onClick={() => onTitleClick(i)} >
                    <i className='dropdown icon' />
                    {item.title}
                </div>
                <div className={`content ${activecls}`} >
                    <p> {item.content} </p>
                </div>
            </React.Fragment>
        )
    })


    return (
        <div>
            <div className='ui styled accordion'>
                {render}
            </div>
            <center>
                <h1>
                    {activeIndex}
                </h1>
            </center>
        </div>
    )
}

export default Accordion