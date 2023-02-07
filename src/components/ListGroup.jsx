import React from 'react'
import ListItem from './ListItem'
import { useSelector } from 'react-redux'

function ListGroup() {
    const {todo} = useSelector(state => state.todos)

    return (
        <>
            <ul class="list-group mt-4">

            {
                todo.map(todo=>  <ListItem key={todo._id} todo={todo}/>)
              }

            </ul>
        </>
    )
}

export default ListGroup