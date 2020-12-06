import React,{useEffect,useState} from 'react'
import "./Events.css"
import Description  from "./Description"
import axios from 'axios'

import { Route,Switch} from 'react-router-dom'
import Home from './Home'




function MainEvents() {

    const [appState,setAppState]=useState({events:[]});
    const [descriptions, setDescriptions]=useState({descriptions:false})
    const [rate, setRate]= useState({rate:false})
    const [current_rate,setCurrent]=useState({current:false})
    const [click,setClick]=useState({click:[]})
    const [make_rate,setMakeRate]=useState(false)
  
    console.log(click)


useEffect(()=>{
  const apiUrl =`https://react-evver.firebaseio.com/event.json`
  axios.get(apiUrl).then((resp)=>{
    const even =resp.data;
    setAppState({events:even})
    
  })
  
},[setAppState])

function addDescription(event){
  setDescriptions({descriptions:event})
  setCurrent({current:current_rate.current=false})
  
  

}
function Rate(coeff){
    setRate({rate:coeff})
    setMakeRate({make_rate:true})
    setClick({click:coeff.click=true})
}
function makeRate(){
  rate.rate.click=false
  setMakeRate({make_rate:false})
  setCurrent({current:current_rate.current=true})
  setTimeout(()=>{
    setCurrent({current:current_rate.current=false})
  },3000)
 
}
console.log("rate",rate)






  return (
    <div >
      
      <div>

      
      </div>
      <Switch>
      <Route exact path="/" render={()=><Home events={appState.events} addDescription={addDescription} rate={rate.rate}  descriptions={descriptions.descriptions} current={current_rate.current} />}/>
      <Route path="/descriptions" render={()=><Description descriptions={descriptions.descriptions} Rate={Rate} current={current_rate.current} rate={rate.rate} makeRate={makeRate} make_rate={make_rate}/>}/>
      </Switch>
    </div>
  );
}

export default  MainEvents