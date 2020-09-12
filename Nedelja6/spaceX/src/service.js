// axios
import axios from 'axios'

export const getAllLaunches = () => {
    return axios.get('https://api.spacexdata.com/v3/launches') 
}
export const getLunchesByYear = (year) => {
    return axios.get(`https://api.spacexdata.com/v3/launches?launch_year=${year}`)
}