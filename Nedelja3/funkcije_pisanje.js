// nacini da se napisu funkcije, sintaksa

// kljucna rec, ime, parametri u obicnim zagradama, a telo funkcije u viticastim
function saberi (a, b) {
    return a + b
}
// - ova funkcija moze da se pozove i pre nego sto je napravljena
// - ako napisemo novu funkciju sa istim imenom poslednja ce da pregazi prvu

// anonimna, arrow funkcija, dodajemo je nekoj promenljivoj
const saberi = (a, b) => {
    return a + b
}
// - ova funkcija ne moze da se pozove pre nego sto je napravljena 
// -  ponovo napisemo funkciju sa istim imenom izbaci ce nam se greska da je funkcija ve' deklarisana
// kraca verzija
const saberi = (a, b) => a + b

console.log(saberi(3,6))




// * ternanrni sa if, else if, else
const maxOdTri = (x, y, z) => (x >= y && x >= z) ? x : (y >= z) ? y : z