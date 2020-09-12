// nizovi su kompleksni tipovi podataka, koji u sebi sadrze vise drugih tipova podataka 
// nije ogranicen br elemenata, mogu da se mesaju stignovi, brojevi, obejkat, obejkat u objektu, moze i niz. Ali ce naj;esce biti podaci istog tipa
// nizovi su specijalna vrsta objekta
// let niz = [4, 5, 6, 'heloo', true, [1, 2, 3]] / deklarisemo ga uglastim zagradama 

// kako pristupamo elementima niza?

// niz[2] - ime niza, uglasta zagrada i index broja. indexi idu od 0
// prvom elementu pristupamo niz[0], poslednjem arr[arr.length - 1], predposlednjem arr[arr.length - 2]... 
// ako imamo niz u nizu onda cemo pristupiti unutarnjem nizu: niz[5][0] (pristupili smo nultom elementu petog elementa unutar ) 

// null i undefined (nismo dodelili neku vrednost promenljivoj) - specijalni tipovi podataka
// zbir br u nizu

// kako iteriramo (prolazimo) kroz niz?
// duzinu niza dobijamo: ime niza, pa ., pa length [console.log(niz.length)]
// for(let i = 0; i < niz.length; i++) {
//     console.log(niz[i]) [mozemo da ispisemo i da vidimo koja je iteracija: console.log(i, niz[i])]
// }

// gotove funkcije za nizove reduce, filter, map

// Izracunati zbir brojeva u nizu 
let niz = [1, 34, 23, 78, 31, 67, 'a', 2, 6, 23, -234];
let suma = 0;
for(let i = 0; i < niz.length; i++) {
    if(typeof niz[i] === 'number') {
        suma += niz[i]; 
    }
}    
console.log(suma);

//postoji dodavanje na kraj i dodavanje na pocetak
// nizDeljivih.push(nizBrojeva[1])- push dodaje element na kraj niza i vraca duzinu novodobijenog niza
// nizDeljivih.push(nizBrojeva[3])
// nizDeljivih.push(nizBrojeva[4])
// nizDeljivih.unshift(nizBrojeva[6]) dodaje lement na pocetak niza

// iz niza izvuci (u drugi niz) brojeve koji su deljivi sa 2
let nizBrojeva = [1, 2, 3, 4, 24, 24, 654, 123, 566, 78, 23]
let nizDeljivih = []
for(let i = 0; i < nizBrojeva.length; i++) {
    if(nizBrojeva[i] % 2 === 0) { //da smo hteli svaki drugi bilo bi samo i % 2
        nizDeljivih.push(nizBrojeva[i])  
    }
}
console.log(nizDeljivih)

//napraviti funkciju push
function push(arr, el) {
    if(Array.isArray(arr)) { //proveravamo da li je nesto niz, ako jeste tek onda radimo ostalo, 
        arr[arr.length] = el //ako nije niz, ispisacemo -1 (to je neka konvencija) da bi smo znali da je greska
        return arr.length    // jer duzina od bilo cega ne moze biti -1
    }
    return -1 
}
let niz = [1,2,3,4]
console.log(push(niz,88)) // ovde ce da ispise 5, jer pus vraca novu vrednost niza
console.log(niz)