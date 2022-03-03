import React from 'react';
import axios from 'axios';
import { useState } from 'react';   

const Page2 = () => {

    const [target, setTarget] = useState([]);

    const getImage = async() => {
        const { data } = await axios({ method : 'GET', url : 'https://api.thecatapi.com/v1/images/search' });
        setTarget(prev=> [...prev, data[0]]);
    }

    return (
        <div className='page2'>
            <button style={{fontSize : '2rem'}} onClick={getImage}>Page2 :)</button>
            <ul>
                {
                    target &&
                    <>
                        {
                            target.map(t=>
                                <li key={t.id}><img src={t.url} alt={t.id} /></li>    
                            )
                        }
                    </>                    
                }    
            </ul>
        </div>
    );
};
    
export default Page2