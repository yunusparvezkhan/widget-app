import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {

    const [translatedtext, setTranslatedtext] = useState('');

    useEffect(() => {

        const func = async () => {
            const res = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
                params: {
                    q: text,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                }
            })
            setTranslatedtext(res.data.data.translations[0].translatedText);
        }

        func();

    }, [language, text])



    // const converttext = async () => {
    //     const res = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
    //         params: {
    //             q: text,
    //             target: language.value,
    //             key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
    //         }
    //     })
    //     setTranslatedtext(res.data.data.translations[0].translatedText);
    // }

    return (

        // This is not a form, put this classname for styling purposes only
        <div className='ui form'>
            <div className='field'>
                <label className='label'>Output</label>
                {/* <button> Convert Text into {language.label} </button> */}
                <h2>{translatedtext}</h2>
            </div>
        </div>
    )
}

export default Convert