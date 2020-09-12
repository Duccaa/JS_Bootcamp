// Sta su objekti?
//neka struktura podataka koja sadrzi druge strukture podataka
/* ovo hocemo da izbegnemo
let name1 = 'Pera'
let age1 = 13
let email1 = 'sashajksh'

let name2 = 'Zika'
let age2 = 18
let email2 = 'sashafgfh'
*/
//objekat se pise sa viticastim zagradama
let person1 = { 
    name:'Pera',         //kljuc : vrednost ,
    age: 13,
    email: 'sashajksh'   //na kraju ne ide zarez
}
let person2 = {
    name: 'Zika',
    age: 18, 
    email: 'sashafgfh' 
}

// vrednost klujca(propertija) moze da bude bilo sta, moze opet da bude objekat, niz...

// pristupanje elem objekta sa tackom i onda properthy: ime objekta . kljuc
// console.log(person2.name) 

// if(person2.age >= 18) {
//     console.log(person2)
// }


let acc1 = {
    username: 'pera',
    age: 17
}
let acc2 = {
    username: 'zika',
    age: 32
}
let acc3 = {
    username: 'ana',
    age: 24
}
let acc4 = {
    username: 'lana',
    age: 37
}
// let accounts = [acc1, acc2, acc3, acc4]
//umesto da pisemo novi objekat, acc5, mozemo u promenljivoj accounts da dodamo objekat:
let accounts = [acc1, acc2, acc3, acc4, {username: 'test', age: 16}]
//ali tom objektu mozemo da pristupimo samo iz niza
//pristupanje vrednostima objekta unutar niza:
accounts[0].age, accounts[2].username //...

//ako hocemo da pristupamo svim objektima unutar niza moramo preko petlje ili forEach
accounts.forEach(acc => { //za svaki account uzmi taj jedan account i radi nesto 
    if(acc.age >= 18) {
        console.log(acc, 'je punoletan')
    }
})

for (let i = 0; i <= accounts.length; i++) {
    if(accounts[i].age >= 18) {
        console.log(accounts[i], 'je punoletan')
    }
}

//filtriranje niza; filter vraca novi niz, proverava niz i vraca true ili false
//filter kao i forEach prolazi kroz ceo niz i proverava neki uslov tako sto vraca true ili false
//vraca one elemenete koji su ispunili zadate uslove
//Napraviti novi niz u kome ce biti samo punoletne osobe iz prvobitnog niza
function punoletan(acc) {
    return acc.age >= 18
}
let punoletni = accounts.filter(punoletan) 
console.log(punoletni)

let maloletni = accounts.filter(acc => acc.age < 18) //isto to bez pravljenja dodatne funkcije
console.log(punoletni)

//ako hocemo da napravimo novi niz koji sadrzi samo odredjene propertije prvobitnog niza koristimo map
//map je nesto sto transformise niz, vraca transformisan niz
//hocemo sad niz od usermane
let usernames = accounts.map(acc => acc.username)
console.log(usernames)
//ili
let usernames = []
accounts.forEasch(el => {
    usernames.push(el.username)
})
console.log (usernames)


// filter npr kod prodavnica, imamo neki objekat po je proizvod koji sadrzi ime, cenu, dostupnost
// a mi hocemo npr da ga filtriramo po ceni 
// price vece od necega i manje od necega