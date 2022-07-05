import React from 'react'

function Footer()
{
    const year = new Date().getFullYear()
    
    return(
        <footer>
            <p>&copy; All rights reserved {year}</p>
        </footer>
    )    
}

export default Footer