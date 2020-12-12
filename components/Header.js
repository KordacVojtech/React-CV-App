import React, { Component } from 'react'


function Header() {

    function showInp() {
        return(
            document.getElementById('inpName').style.display = 'flex',
            document.getElementById('btnName').style.display = 'flex',
            document.getElementById('inpTel').style.display = 'flex',
            document.getElementById('btnTel').style.display = 'flex'
            // document.getElementById('changeHeaderBtn').style.display = 'none'
        )
    }



    function add() {
        return(
            document.getElementById('inpName').style.display = 'none',
            document.getElementById('btnName').style.display = 'none',
            document.getElementById('name').textContent = document.getElementById('inpName').value

        )
    }

    function addTel() {
        return(
            document.getElementById('inpTel').style.display = 'none',
            document.getElementById('btnTel').style.display = 'none',
            document.getElementById('phone').textContent = document.getElementById('inpTel').value
        )
    }


    return(
    <div id='header'>
        <div id='nameDiv'>
            <h1 id='name'>Name:</h1>
            
            <div id='changeLocDiv'>
                <input id='inpName'></input>
                <butt id='btnName' onClick={add}>+</butt>
            </div>
            <button id='changeHeaderBtn' onClick={showInp}>🖋</button>
        </div>
        <div id='telDiv'>
            <h3 id='phone'>Telephone:</h3>
            <div id='changeLocDiv'>
                <input id='inpTel'></input>
                <butt id='btnTel' onClick={addTel}>+</butt>
            </div>
        </div>
    </div>
    )
}

export default Header