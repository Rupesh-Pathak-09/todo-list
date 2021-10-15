import React from 'react'

const TodoItem = ({todo,onDelete}) =>{
return(
    <>
    <h2>{todo.title}</h2>
    <p>{todo.desc}</p>
    <button onClick={()=>{onDelete(todo)}}>Delete todo</button>
        </>
)
}

export default TodoItem;