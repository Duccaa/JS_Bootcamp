// ispisati brojeve od 50 do -49
let i = 50
while(true) {
    console.log(i)
    i--
    if(i == -50) {
       break 
    }
}

for(let i = 0; i < 2; i++) {
    for(let j = 0; j < 5; j++) {
        console.log(i, j);
        if(j == 2) {
            break
        }
    }
}

//ispisati zbir cifara trocifrenih brojeva kojima su prva i poslednja cifra iste

for (let i = 100; i < 1000; i++) {
    if((i % 10) == Math.floor(i / 100)) {
        console.log(i % 10 + (Math.floor(i / 10)) % 10 + Math.floor(1 / 100));
    }
}

for(let i = 0, j = 7; j > 0, i < 7; i++, j--) {
    console.log('j:' + j)
    if (i % 3 != 0) {
        continue
    }
    console.log('i:' +i)
}