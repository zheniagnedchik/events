import React from 'react'


function Detali(props){

    let detali = props.eventsDetali
    
    
    return(
    <div>
        <h1>{detali.title}</h1>
    <div>{detali.data}</div>
    <div>
    <button onClick={()=>props.RateP1(detali)}>{detali.p1}</button>
    <button>{detali.x}</button>
    <button>{detali.p2}</button>
    </div>
    
    </div>
    )
}

export default Detali
