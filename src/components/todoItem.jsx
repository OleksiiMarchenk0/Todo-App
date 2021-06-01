import React from 'react';
const toDoItem = props =>{
    return (
    <div className= {`card ${props.element.isCompleted?'completed':''}`} key={props.element.id}>
      <h2>{props.element.title}</h2>
     <button onClick={()=>{
         props.markElement(props.element.id)
     }}>Finished</button>
    </div>
    )
}
export default toDoItem;