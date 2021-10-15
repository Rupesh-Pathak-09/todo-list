import React from 'react'
import TodoItem from './TodoItem';


const Todos = (props) =>{
    return(
        <>
        <h2>Add todo</h2>
        {props.todos.length===0? "No Todos to display":  
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                )
            })
              } 

        </>
    )
}
export default Todos;