/*let godina = 1972
if (godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0)) {
    console.log ('Godina je prestupna')
} else {
    console.log('Godina nije prestupna')
}*/
/*
let mesec = 1
let godina = 2020
switch(mesec) {
    case 0: case 2: case 4: case 6: case 7: case 9: case 11:
        console.log("31")
        break
    case 1:
        if (godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0)) {
        console.log ('29')
        } else {
        console.log('28')
        }
        break
    case 3: case 5: case 8: case 10: case 12:
        console.log("30")   
        break
    default:
        console.log("Nije validan unos")
        break
}
*/
//ispisati br od M do N deljive sa 3
let m = 3
let n = 123
for (/*m*/; m <= n; m++) {
    if(m % 3 === 0){
    console.log(m)
    }
}  
while(m <= n){
    if(m % 3 === 0){
    console.log(m)
    }
    m++
    }    
  
if(m % 3 === 0){
        console.log(m)
        }
        m++
    while(m <= n)
