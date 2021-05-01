import React from 'react'
import HelloWorld from '../Components/HelloWorld.js'

function Home(){

    return(

        <div>
           <h1 className = "font-bold text 2xl p-3"> This is the home page</h1>
            <HelloWorld name= "Welcome Home Ashley"/>
        </div>
    )
}

export default Home 
 