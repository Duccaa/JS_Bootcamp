let ljudi = ['Pera', 'Ana', 'Zika', 'Lana']

//koristeci petlju ispisati sve ljude (for / forEach)
//    ljudi.forEach(el => {
//        console.log(el)
//    })
ljudi.forEach(covek => { 
    console.log(covek)  
})
//nakon forEach stoji neka funkcija koja prima jedan parametar
// mozemo da napravimo i skroz odovjenu funkciju koju cemo koristiti

function ispisiJednog(covek) {
    console.log(covek)
}
ljudi.forEach(ispisiJednog) //pisemo samo ime funkcije bez poziva, 
                            //forEach ce za svaki elem niza da zove ovu funkciju


//Ukloniti 'Pera' iz niza
ljudi.splice(0, 1) // prvi parametar kaze pocevsi od tog ulelementa ukloni odredjn br elem, a koliko tacno pisemo na mestu drugog parametra
// ili ljudi.shift(); shift uklanja prvi elem iz niza i vraca ga
// sa splice mozemo i da zamenimo elem ljudi.splice(0, 3, 'Jana', 'Ana', 'Lola')
console.log(ljudi)

//Ukloniti 'Lana' iz niza
ljudi.pop(); //pop uklanja poslednji eleme iz niza i vraca ga
// ili ljudi.splice(3, 1) 
console.log(ljudi)

//Dodati 'Mika' na pocetak niza
ljudi.unshift('Mika')

//Dodati 'Mika' na kraj niza
ljudi.push('Mika')

//Ispisati sve ljude, ali izaci iz petlje kada se stigne do 'Ana'
for(let i = 0; i < ljudi.length; i++) {
    if (ljudi[i] === 'Ana') 
        break
    console.log(ljudi[i])
}

//Ispisati sve ljude, ali preskociti 'Ana'
for(let i = 0; i < ljudi.length; i++) {
    if (i === 'Ana') 
        continue
    console.log(ljudi[i])
}

//Naci poziciju 'Zika' u nizu
ljudi.indexOf('Zika')
console.log(ljudi.indexOf('Zika'))

//ako hocemo da npr izbrisemo taj elem
//onda napravimo neku promenljivu gde cemo da stavimo taj index 
let index = ljudi.indexOf('Zika') //indexOf vraca -1 kada ne nadje elem
ljudi.splice(index, 1) 

// drugi nacin da ovo uradimo je sa petljom
let index = -1 // treba nam opet index koji je u startu -1 
for(let i = 0; i < ljudi.length; i++) {
    if(ljudi[i] === 'Zika') {
        index = i
        break 
    }
}
ljudi.splice(index, 1)
console.log(ljudi)