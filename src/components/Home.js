import React from 'react'
import "./Events.css"
import classnames from 'classnames'

import { Link} from 'react-router-dom'



function Home(props){
    return(

        <div>
             <div className= {classnames({"currentRate":props.current})}>{ props.current ? ["Ваша стака [", props.rate.title , "] на команду [", props.descriptions.title, "] Принята"] : ''}</div>
            <h1 className="homeTitle">
                Список событий
            </h1>
             <ul className="border">
          {props.events.map((event,i)=>(
          <Link to={'/descriptions'} >  <li key={event.id} onClick={()=>props.addDescription(event)} className="test">{event.title}</li></Link>
              
          ))}
      </ul>
         
        </div>
    )
}

export default Home