import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavigationMenu from './NavigationMenu'

  

function Navigation(){
    const [showMenu, setShowMenu] = useState(false)

    let menu 

    if (showMenu) {
        menu = 
        <div 
        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
        onClick = {() => setShowMenu(false)}
            >
        <NavigationMenu 
            closeMenu = {()=> setShowMenu(false)} />      
        </div>
    }


    return (
        <nav>
                <span className="text-xl">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            
           {menu}
        </nav>
    )
}

export default Navigation