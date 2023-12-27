"use client"
import React, { useEffect } from 'react'
import AOS from 'aos'
const App = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <>
        </>
    )
}

export default App