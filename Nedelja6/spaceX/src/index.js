
import { LaunchList }  from "./components/LaunchList"
import { getAllLaunches, getLunchesByYear } from "./service"
const app = document.querySelector('#app')

getAllLaunches()
.then(res => {
   app.appendChild(LaunchList(res.data))
})

// umesto svih lansiranja, prikazati samo ona iz 2019 godine
// jedan nacin:
// getAllLaunches()
// .then(res => {
//    app.appendChild(LaunchList(res.data.filter(launch => launch.launch_year == 2019)))
// })
 
// drugi nacin:
getLunchesByYear(2019)
.then(res => {
   console.log(res.data.launch_year)
   app.appendChild(LaunchList(res.data))
})   

