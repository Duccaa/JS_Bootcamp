import axios from 'axios'

export const getAllUsers = () => {
    return axios.get('https://reqres.in/api/users') // moramo pisati return, a link je gde zapravo saljemo zahtev
}

export const getUser = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`)
}

export const postUser = (name, job) => {
    return axios.post('https://reqres.in/api/users', {name, job})
}
                                                                        // ove dve funkcije su iste
export const postUser2 = (user) => {
    return axios.post('https://reqres.in/api/users', user)
}

export const registerUser = (email, password) => {
    return axios.post('https://reqres.in/api/register', {email, password})
}

// {name, job} je isto sto i:
// { 
//    name: name
//    job: job 
// }
// napravi se objekat sa properti name i vrednost ce da bude sta god je to name, i properti job i vrednost je sta god je job


