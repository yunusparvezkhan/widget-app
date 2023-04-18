import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        console.log("useeffect console log");
        (async () => {
            const result = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${searchTerm}`)
            setSearchResult(result.data.query.search ? result.data.query.search : '');
            console.log(searchResult);

        })();
    }, [searchTerm])


    const results = searchResult.map((r) => {
        return (
            <div className='ui list item' key={r.pageid} >
                <div className='content'>
                    <h5 className='header'>{r.title}</h5>
                    {r.snippet}
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='ui segment' style={{ maxWidth: '80%' }}>
                <h1>Search</h1>
                <div className='ui form'>
                    <div className='field'>
                        <label>Type your query</label>
                        <input className='input' onChange={(st) => { setSearchTerm(st.target.value) }} value={searchTerm} placeholder='Search...' />
                    </div>
                </div>
            </div >
            <div className='ui celled list' style={{ maxWidth: '80%' }} >
                {results}
            </div>
        </div>
    )
}

export default Search