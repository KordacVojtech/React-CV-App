import React, { Component } from 'react'

function Skills() {

    function showInp() {
        return(
            document.getElementById('inpProj').style.display = 'flex',
            document.getElementById('btnProj').style.display = 'flex' 
        )
    }



    function add() {
        return(
            document.getElementById('inpProj').style.display = 'none',
            document.getElementById('btnProj').style.display = 'none',
            document.getElementById('projectsP').textContent = document.getElementById('inpProj').value
        )
    }

    function showInpSkills() {
        return(
            document.getElementById('skill1Inp').style.display = 'flex',
            document.getElementById('skill2Inp').style.display = 'flex',
            document.getElementById('skill1Btn').style.display = 'flex', 
            document.getElementById('skill2Btn').style.display = 'flex',
            document.getElementById('li1').style.display = 'none',
            document.getElementById('li2').style.display = 'none'
        )
    }

    function addSkill1() {
        return(
            document.getElementById('li1').textContent = document.getElementById('skill1Inp').value,
            document.getElementById('skill1Inp').style.display = 'none',
            document.getElementById('skill1Btn').style.display = 'none',
            document.getElementById('li1').style.display = 'flex'
        )
    }

    function addSkill2() {
        return(
            document.getElementById('li2').textContent = document.getElementById('skill2Inp').value,
            document.getElementById('skill2Inp').style.display = 'none',
            document.getElementById('skill2Btn').style.display = 'none',
            document.getElementById('li2').style.display = 'flex'
        )
    }

    return(
        <div id='skillsDiv'>
            <div id='indivSkills'>
                <button id='changeSkills' onClick={showInpSkills}>🖋</button>
                <h3>Skills:</h3>
                <ul id='skillsList'>
                    <div id='skill1'>
                    <input id='skill1Inp'></input>
                    <button id='skill1Btn' onClick={addSkill1}>+</button>
                    <li id='li1'>Skill1</li>
                    </div>
                    <div id='skill2'>
                    <input id='skill2Inp'></input>
                    <button id='skill2Btn' onClick={addSkill2}>+</button>
                    <li id='li2'>Skill2</li>
                    </div>
                </ul>
            </div>
            <div id='content3'>
                <div id='projectsDiv'>
                <h1>Projects</h1>
                <button id='changeProjBtn' onClick={showInp}>🖋</button>
                </div>
                <div id='showUpDiv'>
                <input id='inpProj'></input>
                <butt id='btnProj' onClick={add}>+</butt>
                </div>
                <p id='projectsP'>Your code projects and what language you wrote them in and what skills were used</p>
            </div>
        </div>
    )


}

export default Skills