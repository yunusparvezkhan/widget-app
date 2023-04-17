import React from 'react'

const Search = () => {
    return (
        <div className='ui segment' style={{ maxWidth: '80%' }}>
            <h1>Search</h1>
            <div className='ui form'>
                <div className='field'>
                    <label>Type your query</label>
                    <input className='input' placeholder='Search...' />
                </div>
            </div>
        </div >
    )
}

export default Search