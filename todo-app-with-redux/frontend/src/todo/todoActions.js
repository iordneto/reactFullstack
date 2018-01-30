import Axios from 'axios'

const URL = 'http://localhost:3003/api/todos'

export const changeDescription = event => ({
    type: "DESCRIPTION_CHANGED",
    payload: event.target.value
})

export const search = event => {
    const request =  Axios.get(`${URL}?sort=-createdAt${search}`)
    return {
        type: "TODO_SEARCHED",
        payload: request
    }
}