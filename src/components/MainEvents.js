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
    const [click,setClick]=useState({click:[]}) // setClick плохое название, оно слишком общее, нажать можно куда угодно - надо более специфичное - типа setCurrentRate
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
      // чем Rate отличается от rate?
      // а make_rate от makeRate?
      // 1. Следует избегать таких похожих названий переменных и функций - новый человек в них долго будет разбираться
      // 2. и нужно ли здесь все эти пропсы вообще, может можно обойтись меньшим числом пропсов?
      <Route path="/descriptions" render={()=><Description descriptions={descriptions.descriptions} Rate={Rate} current={current_rate.current} rate={rate.rate} makeRate={makeRate} make_rate={make_rate}/>}/>
      </Switch>
    </div>
  );
}

export default  MainEvents
