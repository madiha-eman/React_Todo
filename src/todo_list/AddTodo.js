import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import Todos from './Todos';

function AddTodo() {
    const [todos, settodos] = useState([])
    const [task, settask] = useState({title: '', id: ''})
    const handleChange =(e)=>{
        console.log()
        settask({title:e.target.value, id:uuidv4()})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
           console.log('i am in handle submit')
           settodos([...todos, task])
           e.target.firstChild.value='';
   
       }
        return (
        <div>
            <form onSubmit={}>
                 <input type='text' onChange={handleChange}></input>
                <button type='submit'>Add</button>
            </form>
        </div>
    )
}

export default AddTodo


