import React from 'react';
import { useEffect, useRef } from 'react'

const Page1 = () => {

    const wrapRef = useRef(null);

    useEffect(()=> {

        return () => {

        }
    }, [])

    return (
        <div ref={wrapRef} className='page1'>
            Page1
        </div>
    );
};


export default Page1;