import React, { Component } from 'react'

function Education() {

    function showInp() {
        return(
            document.getElementById('inpWork').style.display = 'flex',
            document.getElementById('btnWork').style.display = 'flex' 
        )
    }



    function add() {
        return(
            document.getElementById('inpWork').style.display = 'none',
            document.getElementById('btnWork').style.display = 'none',
            document.getElementById('pWork').textContent = document.getElementById('inpWork').value
        )
    }

    function showInpSchool() {
        return(
            document.getElementById('highInp').style.display = 'block',
            document.getElementById('collInp').style.display = 'block',
            document.getElementById('highBtn').style.display = 'flex', 
            document.getElementById('collBtn').style.display = 'flex',
            document.getElementById('collDef').style.display = 'none',
            document.getElementById('highDef').style.display = 'none'
        )
    }

    function addHigh() {
        return(
            document.getElementById('highText').textContent = document.getElementById('highInp').value,
            document.getElementById('highInp').style.display = 'none',
            document.getElementById('highBtn').style.display = 'none',
            document.getElementById('highText').style.display = 'flex',
            document.getElementById('highDef').style.display = 'flex'
        )
    }

    function addColl() {
        return(
            document.getElementById('collText').textContent = document.getElementById('collInp').value,
            document.getElementById('collInp').style.display = 'none',
            document.getElementById('collBtn').style.display = 'none',
            document.getElementById('collText').style.display = 'flex',
            document.getElementById('collDef').style.display = 'flex'
        )
    }

    

    return(
        <div id='eduDiv'>
            <div id='schoolsDiv'>
            <button id='changeSchool' onClick={showInpSchool}>🖋</button>
                <div id='high'>
                    <div id='highDiv'>
                    <input id='highInp'></input>
                    <button id='highBtn' onClick={addHigh}>+</button>
                    </div>
                    <h3 id='highDef'>High school:</h3>
                    <h3 id='highText'></h3>
                </div>
                <div id='coll'>
                    <div id='collDiv'>
                    <input id='collInp'></input>
                    <button id='collBtn' onClick={addColl}>+</button>
                    </div>
                    <h3 id='collDef'>University:</h3>
                    <h3 id='collText'></h3>
                </div>
            </div>
            <div id='content2'>
                <div id='changeWork'>
                <h1>Work experience</h1>
                <button id='changeWorkBtn' onClick={showInp}>🖋</button>
                </div>
                <div id='showUpDivWork'>
                <input id='inpWork'></input>
                <butt id='btnWork' onClick={add}>+</butt>
                </div>
                <p id='pWork'>Previous work experience and employer</p>
            </div>
        </div>
    )
}

export default Education