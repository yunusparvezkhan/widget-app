import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const getresult = async () => {
            const result = await axios.get(`https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&origin=*&srsearch=${searchTerm}`)
            const filteredsearchresult = result.data.query.search ? result.data.query.search : '';
            setSearchResult(filteredsearchresult);
        };

        const timerid = setTimeout(() => {
            if (searchTerm) {
                getresult();
            }
        }, 300)

        return () => {
            clearTimeout(timerid)
        }

    }, [searchTerm])


    const results = searchResult.map((r) => {
        return (
            <div className='ui list item' key={r.pageid} >
                <div className='right floated content'>
                    <a target='_blank' className='ui button' href={`https://en.wikipedia.org/?curid=${r.pageid}`} >Open Page</a>
                </div>
                <div className='content'>
                    <h5 className='header'>{r.title}</h5>
                    <span dangerouslySetInnerHTML={{ __html: r.snippet }}></span>
                </div>
            </div >
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