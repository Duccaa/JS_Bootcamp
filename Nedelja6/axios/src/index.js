// Postoje dva pristupa kada posaljemo zahtev serveru 
// 1. Da cekamo da nam vrati pa da izvrsavamo kod dalje ili
// 2. Da nastavimo da izvrsavamo kod, a u nekom trenutu ce server da nam vrati nesto
// i onda nastavljamo sa tim  nesto dalje

//axios instaliramo sa npm install axios
// AXIOS je alat koji koristimo i on nam omogucava da komuniciramo sa serverom, da posaljemo neki zahtev serveru
// biblioteka koja nam olaksava slanje zahteva i posle regulisanje odgovora (to je biblioteka za http requestove)
// funkcija koja je poslala zahtev get serveru, vraca Promise - obecanje da ce kasnije nesto vratiti
// kad ce to da se vrati ne zna (to je sad ono da li cemo da cekamo, ili cemo da radimo nesto dr dok ne dobijemo odgovor)
// kada se vrati odgovor obecenje je ispunjeno
// ali mogu da se dese razne stvari, ako server ne vrati odgovor obecanje nije ispunjeno
// moze da se desi da vrati los odgovor, ako nesto nije nasao on ce da vrati da ne postoji, u ovom slucaju to je ipak razreseno
// Pending - dok cekamo odgovor sa servera
// Resolved - razreseno, bilo da je vratio pravu info, bilo da je vratio gresku

// U zavisnosti od toga kako cemo da komuniciramo sa serverom dolazimo tu do reci API (to je neciji server, odnosno dokumentacija tog servera)
//API - Application programing interface: skup funkcija ili pravila (interface) kako se komunicira sa nekim programom
// ima pravila ima obradjene zahteve, ne mozemo bilo kom bekendu da kazemo dohvati mi to do lisu, her ne zna svaki bekend sta to znaci
// postoji tacno odredjeni skup funkcija koje rade i taj skup se ustvari API tog servera
// kako tacno znamo sta je unutar nekog apija

// Sa sasjta API : request - to je kako mi saljemo zahtev, a request odgovor koji dobijamo (objekat koji sadrzi neke info) i status
// status 404 kada nesto nije pronadjeno 
// stausi 500, 501, 502 to je sve neka greska
// status 200, 201 kada je sve ok

// HTTP Zahtevi
// GET - za dohvatanje podataka sa servera
// axios.get(link)  
// POST -slanje podataka serveru, npr saljemo novi objekat
// axios.post(link, data)
// PUT - slanje podataka serveru, kada se menjaju stari podaci, promenio stari objekat u potpunosti
// axios.put(link, data)
// PATCH - slanje podataka serveru, kada se menja samo deo podataka u starom objektu
// DELETE - brisanje nekih podataka (da li ce da brise na osnovu id, na osnovu necega sto posaljemo da se trazi preko toga, npr user name
// moze da obrise iz baze, ili da smo sakrije 
// axios.delete(link)

// function dohvatiPodatke () {
//     ...
// }                                - funkcija ovde nista ne radi
// let objekat = dohvatiPodatke()   - ovde pozivamo funkciju, ona odradi dohvatanje i onda smesti rezultat u promenljivu

// import axios from 'axios' - ovako uvozimo axios biblioteku 
// console.log(axios)

import { getAllUsers, getUser, postUser, postUser2, registerUser } from './service';
// import Axios from 'axios';

const app = document.querySelector('#app')

// console.log(    // ako smo konzollogovali zahtev (get), funkcija nam vraca promise, i ispisace se pending
//     axios.get('https://reqres.in/api/users/10')
//         .then(res => {  // kada se dobije odgovor (to nam je ovo res, kao response)
//             let p = document.createElement('p')
//             p.textContent = res.data.data.email
//             app.appendChild(p)
//             console.log(res.data.data)
//  ----- ako je ovo ispod odvojena funkcija, ne znamo koji ce odgovor prvi da stigne, 
//  ----- nema izmedju puno linija koda, i zahtevi su poslati gotovo istovremeno
//  ----- nekad ce da ispise prvo ovog jednog usera, nekad prvo sve, pa tog jednog
//  ----- ako necemo to koristimo then
//             getAllUsers()
//                 .then(res => {
//                     res.data.data.forEach(el => {
//                         let p = document.createElement('p')
//                         p.textContent = el.email
//                         app.appendChild(p)
//                     })
//                 console.log(res.data.data)
//             })
//         })
// )

// console.log(
//         axios.get('https://regres.in/api/users')
//             .then(res => {
//                 res.data.data.forEach(el => {
    //                 let p = document.createElement('p')
    //                 p.textContent = el.email
    //                 app.appendChild(p)
//                 })
//             console.log(res.data.data) 
//         })
// )

getUser(10)
        .then(res => {
            let p = document.createElement('p')
            p.textContent = res.data.data.email
            app.appendChild(p)
            console.log(res.data.data)

            getAllUsers()
                .then(res => {
                    res.data.data.forEach(el => {
                        let p = document.createElement('p')
                        p.textContent = el.email
                        app.appendChild(p)
                    })
                console.log(res.data.data)
            })
        })    

postUser('pera', 'perac')                   // kada posaljemo podatke, mozemo da ne cekamo odgovor, mozemo da sacekamo 
        .then(res => console.log(res))      // da vidimo status da li se uspesno poslalo, u zavisnosti da li nam je bitno da dobijemo odgovor ili ne
        .catch(error => console.log(error)) // ako se desi greska, sa catch hvatamo gresku

postUser2({name: 'pera', job: 'cxcxxc'})
        .then(res => {
           console.log(res) 
        })

registerUser('eve.holt@reqres.in') // sada ce biti error jer nismo poslali password
        .then(res => console.log(res.data.token))
        .catch(error => {
            //console.log(error.response) // sa responsom ako je u responsu greska, error je greska a error respons je odgovor ns gresku
            let p = document.createElement('p')
                        p.textContent = error.response.data.error
                        app.appendChild(p)
        })   


//////////////////////////////////////////////////////////       

//fetch kada ovo koristimo odgovor ce biti string ne objekat
// JSON - JavaScript Object Notation to je string format pisanja objekata
// nemamo klasican objekat
// {
//    name: 'name'
// }
//"{"name" : "Pera"}" ovo se posmatra kao string, pa taj string pretvaramo u js
// Ideja koja stoji iza JSON-a je da objekte iz nekog drugog programsog jezika pretvaramo u js objekte i obrnuto
// na bekendu ce najcesce biti beki dr programski jezik php, java, pyton
// svi iz ovog stringa mogu da pretvore u svoj objekat, i iz svog objekta u taj string
// axios ovo radi za nas, a kad se koristi fetch to se ne radi automatski nego dobijamo taj JSON format i mi moramo sami da prebacimo u objekat

//JSON.stringify({name, job}) pretvorice objekat u string
// JSON.stringify({name: 'pera', age: 25}) rezultat je 
// '{"name":"pera","age":25}'

//////////////////////////////////////////////////////////////////////////////////////
// destrukcija objekata
// let user = {
//     name: 'pera',
//     job: 'perac',
//     age: '34',
//     salary: '80000',
//     country: 'rs'
// }
// postUser2({user}) // ovde smo poslali ceo objekat
//         .then(res => {
//            console.log(res) 
//         })
// // ako nam treba da posaljemo samo name i job, a ne ceo objekat: 
// const postUser2 = (user) => { // funkcijas iz service
//     let name = user.name // ovo je jedan  nacin, a drugi laksi nacin je destrukcija
//     let job = user.job
//     // ili let {name, job} = user // izvuci name i job iz usera 
//     return axios.post('https://reqres.in/api/users', {name, job})
// }
// const postUser2 = ({name, job}) => { // destrukcija, uzme se objekat koji god da je prosledjen funkciji i iz njega izdvoji (izvuce) name i job i smesti ih u promenljive
//     return axios.post('https://reqres.in/api/users', {name, job})
// }
 
// // let {name, job} = user
// // console.log (name, job);
// // mozemo da menjamo i imena parametara ovako
// //let {name: ime, age} // let ime = user.name let age = user.age
// //console.log(ime, age);
 
// destrukcija nizova
// let niz = [
//     'pera',
//     5,
//     567
// ]
// let [naziv, godine ] = niz
// console.log(naziv, godine);
// let [, godine, d] = niz // sa zarezom preskacemo 0ti elem
// console.log(d, godine);