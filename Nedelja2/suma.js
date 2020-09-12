//izračunati zbir prvih N prirodnih brojeva
let n = 15
let suma = 0
for (let i = 1; i <= n; i++) {
    suma += i
}
console.log(suma)
//izračunati proizvod prvih N prirodnih brojeva
/*
let N = 5;
let proizvod = 1;
for(let i = 1; i <= N; i++){
    proizvod *= i;
}
console.log(proizvod);
*/
/*
let x = 123;
let j = x % 10; izvlačenje jedinica
console.log(x % 10);
let d = Math.floor(x / 10) % 10; izvlačenje desetica
console.log(d);
let s = Math.floor(x / (10 * 10)) % 10; izvlačenje stotina
console.log(d);  u zavisnosti koju cifru hocemo da dobijemo po redu
*/ 
//odrediti da li je zadat trocifren broj Amstrongov
// ako je jednak zbiru kubova njegovih cifara
//153 = 1^3 + 5^3 + 3^3
let x = 153;
let j = x % 10;
let d = Math.floor(x / 10) % 10;
let s = Math.floor(x / (10 * 10)) % 10;
    if(x === Math.pow(s, 3) + Math.pow(d, 3) + Math.pow(j, 3)){
console.log(`Broj ${x} je Amstrongov`);
} else{
    console.log(`Broj ${x} nije Amstrongov`);
}
//let zbir = j ** 3 + d ** 3 + s ** 3;
/* if (zbir === x){
    console.log('jeste')
}else{
    console.log('nije')
}*/
// petlja način
let y = 456;
let tmp = x;
let zbir1 = 0;
while(x !== 0){
    let c = y % 10;
    x = Math.floor(y / 10);
    zbir1 += c ** 3;
    console.log(c);
}
console.log(zbir1);
if(tmp === zbir) {
    console.log('jeste')
} else {
    console.log('nije')
}

