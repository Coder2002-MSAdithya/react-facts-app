import React from 'react'

function NavBar()
{
    return(
        <nav>
            <div className="nav-brand">
                <img src="./images/react-icon-small.png" width="31" alt="React logo"/>
                <h2>ReactFacts</h2>
            </div>
            <div className="nav-options">
                <h3>React Course - Project 1</h3>
            </div>
        </nav>
    )
}

export default NavBar