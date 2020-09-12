//napisati program koji za uneto N ispisuje kvadrat
/*
*****
*****
*****
*****
*****
*/
{
let N = 5
let red = ''
for(let i = 0; i < N, i++;){
    red +='*'
}
for(let i = 0; i < N; i++){
    console.log(red)
}
}
//pravougaonik
{
let N = 6 // br redova
let M = 5 // br kolona
let red = ''
for(let i = 0; i < N; i++) {
    red += '#'
   
}
for(let i = 0; i < M; i++) {
    console.log(red)
}
}
/*
*****
*   *
*   *
*   *
*****
 */
{
    let N = 10
    let M = 5
    let poklopac = ''
    let red = '' 
    for(let i = 0; i < N ; i++){
        pokolpac += '*'
    }
    red += '*' 
    for(let i = 0; i < N - 2; i++) {
        red += ''
    }
    red += '*'
    console.log(poklopac)
    for(let i = 0; i < M - 2; i++) {
       console.log(red)
    }   
    console.log(poklopac)
} 
//sa repeat
{
    let N = 10
    let M = 5

    let poklopac = '*'.repeat(N)
    let red = '*' + ' '.repeat(N - 2) + '*'
    
    console.log(poklopac)
   
    for(let i = 0; i < M -2; i++) {
        console.log(red)
    }
    
    console.log(poklopac)
}

//skolski nacin za isrtavanje kvadrata
{
    let N = 10
    let M = 5
    for(let i = 0; i < M; i++) {
        red = ''
        for(let j = 0; j < N; j++)
            red += '*'
    }
    console.log(red)
}
//za skidanje po jedne zvezdice na dole
{
    let N = 10
    let M = 5
    for(let i = 0; i < M; i++) {
        red = ''
        for(let j = i; j < N; j++)
            red += '*'
    }
    console.log(red)
}
