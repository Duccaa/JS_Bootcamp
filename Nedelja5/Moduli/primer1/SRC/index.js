//moduli su vazni jer mozemo da podelimo kod u vise fajlova, kada su veliki projekti
//razlicite funkcionalnosti koje nemaju direktnu vezu, zato ih delimo u vise fajlova
//to nam olaksava fajlovi su manji
//lakse mozemo da nadjemo gresku, 
//ako znamo da je u nekom fajlu, on ima manje linija koda laskse nadjemo gresku
//lakse je napisati jednu funkciju u jednom fajlu i proveriti da li radi 
//pre nego sto pustimo u rad prvo je testiramo !
// kad se modul napravi na jednom mestu mozemo da ga korisitmo na vise sajtova
// lakse se pise i testira deo po deo, lakse je da se koristi, kod je pregledniji

// index.js je glavni fajl svi ostali su sporedni
// u indexsu treba sve da se izvrsava, sve sto se vidi u html, u consoli, 
//a u modulima treba samo da stoje funkcije, ili neki sitni konzollogovi

import {test, saberi} from './modul1.js' // ovako importujemo iz drugog fajla
// kljucna rec je import, pa viticiste, unutar njih sta zelimo da importujemo
// pa klucna rec from pa iz kog fajla

test() 
saberi(4, 5)
///////////////////////////////////////////////////////////////////////////////////

import { /*obimKvadrata, povrsinaKvadrata, obimPr, povrsinaPr,*/ povrsina, obim, sum, mul, avg } from './matematika.js'
// console.log(obimKvadrata(6))
//ako importujemo i zelimo da nam se to sto importujemo zove drugacije u ovom fajlu pisemo:
//import {obimKvadrata as obim} from './matematika.js'
// console.log(obim(6))

// console.log(povrsinaKvadrata(6)) 
// console.log(obimPr(6, 5))
// console.log(povrsinaPr(6, 5))

console.log(obim(6)) // moze ovako prosdelili smo samo vrednost za kvadrat, a b je preuzelo defoltnu vrdnost da je jednako sa a
console.log(obim(6, 3))
console.log(povrsina(6))
console.log(sum(1, 5))
console.log(mul(1, 3))
console.log(avg(1, 4))

// ako konsollogujemo samo naziv funkcije bez parametara
//ispisace se telo funkcije
// console.log(obim)
// to je dobro jer tacno mozemo da znamo sta je to sto smo importovali

///////////////////////////////////////////////////////////////////////////////////////////////
//importovanje sa default radi se bez viticastih zagrada
import NESTO from './matematika.js'
//naziv mozemo staviti bilo koji, bez obzira sto nam se npr default funkcija u modulu matematika zove mnozenje
console.log(NESTO)


///////////////////////////////////////////////////////////////////////////////////////////////
// Math.pow()
// Math.min()
// Math.max()
// Math.sqrt()

// import {obim, povrsina, avg}  from './matematika.js'
// sada nam je importovan objekat, a ne funkcije ponaosob
import M from './matematika.js'
console.log(M)
console.log(M.avg(3,10)) // ovo M znaci da su sve ove funkcije napisane u istom modulu
console.log(M.obim(3,10)) // sto opet znaci da su napisane na isti nacin i da mogu zajedno da se koriste
console.log(M.povrsina(3,10))
console.log(M.niz) //console.log(M.brojevi)
M.x = 10 // mozemo da promenimo vrednost, ali nije dobro to da se radi
//promenjena vrednost ce uticati samo na ovaj fajl, a ne i na fajl u kome je naprvaljena
//ako zapravo hocemo da promenimo vrednost onda to radimo u modulu gde je naprvaljen, pomocu funkcije ***m
console.log(M.x)
//M.promeniX(548)

