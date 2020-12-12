import React, { Component } from 'react'

function Contact() {

    function showInp() {
        return(
            document.getElementById('inpMe').style.display = 'flex',
            document.getElementById('btnMe').style.display = 'flex' 
        )
    }



    function add() {
        return(
            document.getElementById('inpMe').style.display = 'none',
            document.getElementById('btnMe').style.display = 'none',
            document.getElementById('pMe').textContent = document.getElementById('inpMe').value
        )
    }

    function showInpCont() {
        return(
            document.getElementById('gitInp').style.display = 'block',
            document.getElementById('emailInp').style.display = 'block',
            document.getElementById('gitBtn').style.display = 'flex', 
            document.getElementById('emailBtn').style.display = 'flex',
            document.getElementById('gitDef').style.display = 'none',
            document.getElementById('emailDef').style.display = 'none'
        )
    }

    function addGit() {
        return(
            document.getElementById('gitText').textContent = document.getElementById('gitInp').value,
            document.getElementById('gitInp').style.display = 'none',
            document.getElementById('gitBtn').style.display = 'none',
            document.getElementById('gitText').style.display = 'flex',
            document.getElementById('gitDef').style.display = 'flex'
        )
    }

    function addEmail() {
        return(
            document.getElementById('emailText').textContent = document.getElementById('emailInp').value,
            document.getElementById('emailInp').style.display = 'none',
            document.getElementById('emailBtn').style.display = 'none',
            document.getElementById('emailText').style.display = 'flex',
            document.getElementById('emailDef').style.display = 'flex'
        )
    }



    return(
        <div id='contactDiv'>
            <div id='indivCont'>
                <button id='changeContact' onClick={showInpCont}>🖋</button>
                <div id='git'>
                <input id='gitInp'></input>
                <button id='gitBtn' onClick={addGit}>+</button>
                <h3 id='gitDef'>Github:</h3>
                <h3 id='gitText'></h3>
                </div>
                <div id='email'>
                <input id='emailInp'></input>
                <button id='emailBtn' onClick={addEmail}>+</button>
                <h3 id='emailDef'>Email:</h3>
                <h3 id='emailText'></h3>
                </div>
            </div>
            <div id='content'>
                <div id='aboutMeDiv'>
                <h1>About me</h1>
                <button id='changeAbout' onClick={showInp}>🖋</button>
                </div>
                <div id='showUpDivMe'>
                <input id='inpMe'></input>
                <butt id='btnMe' onClick={add}>+</butt>
                </div>
                <p id='pMe'>Short summary of who you are</p>
            </div>
        </div>
    )
}

export default Contact