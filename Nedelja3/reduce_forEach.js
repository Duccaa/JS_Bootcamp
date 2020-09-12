let niz  = [5, 234, 6, 2, -23, 34]
niz.reduce((total, curr) => total + curr, 0)

// reduce ima dva parametra
// jedan parametar je funkcija, drugi parametar je pocetna vrednost
// pocetna vrednost moze a i ne mora da postoji, ali najcesce je pisemo
// zove funkciju za svaki elem u nizu,
// povratna vrednost te funkcije je akumuliran rezultat 
// i daje se kao argument sledecem pozivu te funkcije

// total je rezultat koji se akumulisao
// curr je current, to je trenutni element niza (on ide redom elem po element u nizu)
// za gornji niz u prvom koraku imamo 0 (totla je nula) i 5 (to je prvi elem)
// pocetna vrednost totala moze biti i bilo koji dr br, ne mora da se krene od 0
// reduce na kraju vrati kranju i konacnu vrednost total-a

// ako zelimo da sabiramo samo parne brojeve
niz.reduce((total, curr) => curr % 2 === 0 ? total + curr : total, 0 )


// forEach funkcija 
niz.forEach(el => { // za svaki element uradi nesto, sta mu kazemo u telu funkcije, zapravo je svaki elelement niza parametar funkcije
    console.log(el)
})
// ovo je isto kao da imamo dugacku petlju
for(let i = 0; i < niz.length; i++) {
    console.log(niz[i])
}
// ako npr hocemo da saberemo sve elem
let zbir = 0
niz.forEach(x => {
    zbir += x 
}) 
console.log(zbir)

// primer primene za reduce
// Npr imamo 1000, a u nizu su cene artikala 
// Onda smanjujemo total, da nam na kraju kaze koliko nam je ostalo para
niz.reduce((total, curr) => total - curr, 1000)
// ali to isto mozemo da uradimo i sa forEach
let budzet = 1000
niz.forEach(x => {
    budzet -= x 
}) 
console.log(budzet)

// reduce se ugl koristi za jednostavnije stvari, a za slozenije smanjuje citljivost koda pa ga treba izbegavagti