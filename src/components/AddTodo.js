import React, { useState } from 'react'

const AddTodo = ({addTodo}) =>{
    const [title , setTitle] = useState('');
    const [desc , setDesc] = useState('');

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('No title and description to display')
        }
        else{
            addTodo(title,desc);
            setDesc('');
            setTitle('');
        }
    }

    return(
        <>
        <div className="container">
            <form onSubmit = {submit}>
            <h3>Add a TODO</h3>
            <div className="title">
                <label htmlFor="title">ADD A TITLE</label>
                <input type="text" value= {title} onChange={e=>setTitle(e.target.value)}/>
            </div>
            <div className="desc">
                <label htmlFor="desc">ADD A DESC</label>
                <input type="text" value= {desc} onChange={e=>setDesc(e.target.value)}/>
            </div>
            <button value='submit'>Submit Todo</button>
            </form>
        </div>
        </>
    )
}

export default AddTodo;