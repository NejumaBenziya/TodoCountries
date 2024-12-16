import React,{useEffect, useState} from "react";
import TodoList from "./TodoList";
import FtnNavbar from "./FtnNavbar";
import FtnFooter from "./FtnFooter";
function Todo()
{ const [todoinp,setTodoInp]=useState('')
    const [todoListArray,setTodoListArray]=useState([])
    const handleInput=(event)=>{

setTodoInp(event.target.value)
    }
    const handleadd=()=>{
        setTodoListArray([...todoListArray,{label:todoinp,done:false}])
        setTodoInp('')
    }
    const makeItDone=(index)=>{
const temp=[...todoListArray]
temp[index].done=true
setTodoListArray(temp)
    }
    const deleteItem=(index)=>{
        const temp=[...todoListArray]
        temp.splice(index,1)
        setTodoListArray(temp)
    }
    return(
        <div >
            <FtnNavbar/>
<input type="text" onChange={handleInput} value={todoinp}/>
<button onClick={handleadd}>add</button>
{
    todoListArray.map((ele,index)=><TodoList item={ele} index={index} key={index} makeItDone={makeItDone} deleteItem={deleteItem}/>)
}
<FtnFooter/>
        </div>
    )
}
export default Todo