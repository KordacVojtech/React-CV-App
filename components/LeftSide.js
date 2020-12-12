import React, { Component } from 'react'
import Contact from './components/Contact'
import Education from './components/Education'
import Skills from './components/Skills'

function LeftSide() {
    return(
        <div id='leftNav'>
            <Contact />
            <Education />
            <Skills />
        </div>
    )
}

export default LeftSide