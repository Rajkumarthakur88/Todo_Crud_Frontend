import { computeHeadingLevel } from '@testing-library/dom';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
function Form() {

    const navigate = useNavigate();
    const { id } = useParams();

    const [update, setUpdate] = useState('')

    useEffect(() => {

        editData()

    }, [])

    const editData = async () => {
        const res = await editTodo(id)
        const data = await res.json()
        console.log(data)
        return data
    }

    const editTodo = async (id) => {
        const res = await fetch('/todo/' + id, {
            method: "GET"
        })
        const data = await res.json()
        setUpdate(data.title)
    }
    const handleChange = (e) => {
        setUpdate(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            title: update
        }
        const { title } = data
        const res = await fetch('/todo/update/' + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title })
        })
        setUpdate('')
        navigate('/')
    }
    return (
        <div className='container'>
            <form  method= "PUT" className='mt-5' onSubmit={(e) => handleSubmit(e)} >

                <div class="mb-3">
                    <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => handleChange(e)} name='title' value={update} />
                </div>

                <button type="submit" class="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    )
}

export default Form