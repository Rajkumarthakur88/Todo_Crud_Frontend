import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createTodo } from '../store/TodoSlice'
function Form() {

    const [inputValue, setInputValue] = useState({ title: "" })

    const dispatch = useDispatch()
    // const { todo, isLoading } = useSelector(state => state.todos)

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value
        })
    }

    const { title } = inputValue

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            title
        }
        const res = await fetch('/todo/create', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title })
        })


        dispatch(createTodo())

        setInputValue({ title: "" })
    }

    useEffect(() => {
        dispatch(createTodo())
    })

  

    return (
        <>
            <form method='POST' className='mt-5' onSubmit={(e) => handleSubmit(e)}>

                <div class="mb-3">
                    <input type="text" class="form-control" id="exampleInputPassword1" name='title' value={title} onChange={(e) => handleChange(e)} />
                </div>

                <button type="submit" class="btn btn-primary w-100">Submit</button>
            </form>
        </>
    )
}

export default Form