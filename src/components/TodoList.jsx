import React from 'react'
import './TodoList.css'
function TodoList({item,index,makeItDone,deleteItem}) {
  return (
    <div className="list-item">
        <p className={`${item.done? 'done-label':''} label`}>{index+1}.{item.label}</p>
        <button onClick={()=>deleteItem(index)} >delete</button>
        <button onClick={()=>makeItDone(index)}>Done</button>
    </div>
  )
}

export default TodoList