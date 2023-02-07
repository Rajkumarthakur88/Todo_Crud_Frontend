import axios from 'axios'

const API_URL = "http://localhost:8000"

const newTodo = async (todo) => {
    let response = await axios.post(API_URL + "/todo/create", todo)
    console.log(response);
    if (response.data) {
        console.log(response.data)
    }

    return response.data

}




const TodoService = {
    newTodo
}

export default TodoService