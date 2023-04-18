import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        console.log("useeffect console log");
        const search = async () => {
            const searchresult = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${searchTerm}`)
            console.log(searchresult);
        };
        search();
    }, [searchTerm])

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