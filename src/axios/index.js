import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3000'
})

// instance({
//     url:"/api"
// })

export default instance