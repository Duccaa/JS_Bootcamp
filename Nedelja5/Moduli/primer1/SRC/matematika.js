// export function obimKvadrata(a) {
//     return 4 * a
// }
// //export {obimKvadrata} ali je bolje da se stavi export odmah gore kod funkcije
// export function povrsinaKvadrata(a) {
//     return a * a
// }
// export function obimPr(a, b) {
//     return 2 * (a + b)
// }
// export function povrsinaPr(a, b) {
//     return a * b
// }
//ili sve odjednom export {obimKvadrata, povrsinaKvadrata, obimPr, povrsinaPr}

export function obim(a, b = a) { //ovako stavljamo default vrednost, moze biti sta god, konkretan br...
    return 2 * (a + b)              // sada ovu funkciju mozemo da koristimo i za kvadrat i za pravougaonik
}                                   //ako u funkciji nije prosledjena vrednost za drugi parametar on ce uzeti svoju defolt vrednost
                                    //ako jeste uzece vrednost iz parametra  // zovu se UTILITY funkcije?
                                    // ako konzollogujemo funkciju sa zagradama a bez parametara, ona je uzeti default parametre, ako su zadati
                                    //ako nisu bice undefined

export function povrsina(a, b = a) {
    return a * b
}

export function sum(N,M) {
    let suma = 0;
    for(N, M; N <= M; N++) {
        suma += N;
    }
    return suma
}

export function mul(N,M) {
   let proizvod = 1;
    for(N, M; N <= M; N++) {
        proizvod *= N;
    }
    return proizvod
}

export function avg(N,M) {
    let suma = 0;
    let br = 0
     for(N, M; N <= M; N++) {
         suma += N
         br++
     }
     return suma / br
 }
//////////////////////////////////////////////////////////////////////////////////////////////////////
// difoltni ekport nam omogucava da importujemo na laksi nacin, ali ima prednosti i mana
// u jednom modulu moze biti samo jedn default export, ili default objekat, odnosno sta god exportujemo, to moze samo jednom da pise
 export default function mnozenje() {
     console.log(ndsndsnds)
 }
//// i ovde moze export posle napisane funkcije export default mnozenje

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 export default {obim, povrsina, avg} // sada se exportuje objekat a ne funkcije ponaosob
 // a mozemo taj ceo objekat da eksportujemo i kao promenljivu
// ili const M = {
//     avg,
//     obim,
//     povrsina, - kad ima samo jedno isto je kao da pise kljuc i vrednost povrisna : povrsina
//     niz
// }  *
// export default M

// u objekat sa funkcijama mozemo da dodamo i niz npr
let niz = [1, 2, 3]
let x = 5
// ne mozemo da eksportujemo npr samo br ili niz ili objekat ako nisu sacuvani u nekoj promenljivoj
//  export [1, 2, 3] export {a:5, b: 6}
//ali ako je export default onda moze

// *const M = {
//     avg: avg
//     obim: obim
//     povrisna : povrsina
//     brojevi: niz
//     x : x 
//     ***m  x: promeniX
// }  *

// ***m
// function promeniX(nova) {
//      M.x = nova
// }