// 1. uzeti podatke sa servera
// 2. prodjemo kroz niz, pravimo komponente za svaki elem i ubacimo ih u lunch-list
// 3. vracamo launch-list

// import { getAllLaunches } from "../service"
import {Launch} from "./Launch"

export const LaunchList = (arr)=> {
    const divLaunchList = document.createElement('div')
     divLaunchList.className = 'launch-list'
    // getAllLaunches()
    // .then(res => {
    //     // console.log(res)
    //     // console.log(res.data)
    //     res.data.forEach(launch => {
    //          // if(launch.launch_year == 2019)  // za filtriranje samo jedne godine
    //         divLaunchList.appendChild(Launch(launch))
    //      })
    //  })
    // setTimeout(() => {}, 1000) // da bi bilo dovoljno vremena da nam stigne odgovor sa servera
    // return divLaunchList

    arr.forEach(launch => {
        divLaunchList.appendChild(Launch(launch))
    });
    return divLaunchList 
}

