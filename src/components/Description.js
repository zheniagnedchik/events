import React from 'react'
import "./Events.css"
import { Link } from 'react-router-dom'
import classnames from 'classnames'
import clock from './clock.png'


function Descriptions(props){

    let descriptions = props.descriptions
    let coefficient = descriptions.coefficient
    console.log(props.rate)
   
    return(
    <div className="dceriptionContainer">

        <h1 className="descriptionTitle">{descriptions.title}</h1>
    <div className="clockContainer">
        <div style={{ backgroundImage:`url(${clock})`,backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}} className="clockImg"></div>
        <div className="clockTitle">{descriptions.data}</div>
    </div>
    <ul 
    className="btnRateContainer">
        {coefficient.map((coeff,i)=>(
        <li key={i} onClick={()=>props.Rate(coeff)}><button className={classnames("btnRate",{"btnRateActive":coeff.click})} disabled={props.rate.click? true:false}>{coeff.title} </button></li>
        
    ))}</ul>
    <div className="make"><Link to={'/'} ><button className="makeRate"onClick={props.makeRate} disabled={props.make_rate.make_rate? false:true}>Сделать ставку </button></Link></div>
    </div>
    )
}

export default Descriptions
