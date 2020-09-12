function test() {
    console.log('FUNKCIJA TEST')
}

function saberi(a, b) {
    console.log(a + b)
}
export {test, saberi} 
//ovako omogucavamao dr fajlovima da koriste ove funkcije, bi dr 
// kljucna rec je export, pa viticaste zagrade, 
//unutar zagrada je sta zelimo da se podeli sa dr fajlovima
// da bi dr fajlovi mogli da koriste ove funkcije u njima pisemo import