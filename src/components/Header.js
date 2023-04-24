import React from 'react'

const Header = () => {
    return (
        <div className="ui secondary header pointing menu">
            <div className='middlemover'>
                <a href='/search'><button className='header-btn' >Search</button></a>
                <a href='/sb-slokas'><button className='header-btn'>ŚB Slokas</button></a>
                <a href='/dropdown'><button className='header-btn'>Dropdown</button></a>
                <a href='/translate'><button className='header-btn'>Translate</button></a>
            </div>
        </div >
    )
}

export default Header