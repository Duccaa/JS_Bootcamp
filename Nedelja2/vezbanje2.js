//Napisati program koji će za učitanu vrijednost k 
//izračunati vrijednost izraza i ispisati:
// S = 12 + 32 + 52 + ... +k2

let k = 6
let suma = 0
for(let i = 1; i <= k; i+= 2) {
    suma += (i*i) // i ** 2
}
console.log(suma)
