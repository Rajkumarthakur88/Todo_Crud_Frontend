import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../store/TodoSlice'
import { Link } from 'react-router-dom'

function ListItem({ todo }) {

    const dispatch = useDispatch()

    const deleteTodo = async (id) => {
        const res = await fetch('/todo/delete/' + id, {
            method: "DELETE"
        })
        dispatch(createTodo())
    }



    return (
        <>
            <li class="list-group-item">{todo.title} <span className='float-end'> <Link to={'/edit/' + todo._id} ><button className="btn btn-success btn-sm">Edit</button></Link> <button className="btn btn-sm btn-danger" onClick={() => deleteTodo(todo._id)} > d</button></span> </li>
        </>
    )
}

export default ListItem