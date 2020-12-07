import React,{useEffect,useState} from 'react'
import Detali from "./Detali"
import axios from 'axios'






function MainEvents() {

    const [appState,setAppState]=useState({events:[]});
    const [detali, setDetali]=useState(
        {
            eventsDetali:[],
            detal:[]
        }
    )

useEffect(()=>{
  const apiUrl =`https://react-evver.firebaseio.com/event.json`
  axios.get(apiUrl).then((resp)=>{
    const even =resp.data;
    setAppState({events:even})
  })
  
},[setAppState])

function Test(event){
    setDetali({eventsDetali:event})

}
function RateP1(detali){
    setDetali({detal:detali.p1})
}


  return (
    <div >
      <ul>
          {appState.events.map((event,i)=>(
              <li key={event.id} onClick={()=>Test(event)}>{event.title}</li>
          ))}
      </ul>
      <Detali eventsDetali={detali.eventsDetali} RateP1={RateP1}/>
    </div>
  );
}

export default  MainEvents