import React, { Component } from 'react'

function Footer() {

    function showInp() {
        return(
            document.getElementById('inpLoc').style.display = 'flex',
            document.getElementById('btnLoc').style.display = 'flex' 
        )
    }



    function add() {
        return(
            document.getElementById('inpLoc').style.display = 'none',
            document.getElementById('btnLoc').style.display = 'none',
            document.getElementById('locText').textContent = document.getElementById('inpLoc').value
        )
    }

    function submitAll() {
        return(
            document.getElementById('submitAll').style.display = 'none',
            document.getElementById('changeHeaderBtn').style.display = 'none',
            document.getElementById('changeContact').style.display = 'none',
            document.getElementById('changeAbout').style.display = 'none',
            document.getElementById('changeSchool').style.display = 'none',
            document.getElementById('changeWorkBtn').style.display = 'none',
            document.getElementById('changeSkills').style.display = 'none',
            document.getElementById('changeProjBtn').style.display = 'none',
            document.getElementById('changeLocationBtn').style.display = 'none'
        )
    }


    return(
        <div id='location'>
            <h2 id='locText'>Czech Republic, Zlin</h2>
            <button id='changeLocationBtn' onClick={showInp}>🖋</button>
            <div id='changeLocDiv'>
                <input id='inpLoc'></input>
                <butt id='btnLoc' onClick={add}>+</butt>
            </div>
            <button id='submitAll' onClick={submitAll}>✅</button>
        </div>
    )
}

export default Footer