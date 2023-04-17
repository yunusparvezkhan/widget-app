import React, { useState } from 'react';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    console.log(searchTerm);
    return (
        <div className='ui segment' style={{ maxWidth: '80%' }}>
            <h1>Search</h1>
            <div className='ui form'>
                <div className='field'>
                    <label>Type your query</label>
                    <input className='input' onChange={(st) => { setSearchTerm(st.target.value) }} value={searchTerm} placeholder='Search...' />
                </div>
            </div>
        </div >
    )
}

export default Search