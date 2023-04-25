import React from 'react'
import Link from './Link'

const Header = () => {
    return (
        <div className="ui secondary header pointing menu">
            <div className='middlemover'>
                <Link href='/search'><button className='header-btn' >Search</button></Link>
                <Link href='/sb-slokas'><button className='header-btn'>ŚB Slokas</button></Link>
                <Link href='/dropdown'><button className='header-btn'>Dropdown</button></Link>
                <Link href='/translate'><button className='header-btn'>Translate</button></Link>
            </div>
        </div >
    )
}

export default Header