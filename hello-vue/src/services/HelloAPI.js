import axios from 'axios'
//import { response } from 'express'

let base = 'api'

export default { // provides a function with getHelloMessage
    getHelloMessage() {
        return axios.get(base).then(response => { // axios call, making a get request to /api
            console.log(response)
            return response.data // response will automatically be decoded into json
        })
    }
}