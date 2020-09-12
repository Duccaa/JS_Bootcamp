// napisati program koji za unete parametre 
// računa i ispiše obim i površinu sledećih figura
// krug, pravougaonik, kvadrat
/*
{
    let r = 12
    if(r >=0) 
    {
    let O, P
    O = 2 * r * Math.PI
    P = r * r * Math.PI
    console.log(O, P);
    }
}
*/
{
let danUNedelji = 7
if (danUNedelji <= 5)  {
  console.log("Radni dan")  
}
else 
{ console.log("Vikend") }
}
{
    let dan = 4
    if(dan >= 1 && dan <= 7){
        if(dan == 6 || dan == 7){
            console.log("Vikend")
        }
        else {
            console.log("Radni dan")
        }
    }
    else {
        console.log("Nije validan dan")
    }

}
let danUNedelji = 7;
switch(danUNedelji) {
    case (danUNedelji = 1): 
    console.log("Radni dan")
    break;
    case (danUNedelji = 2): 
    console.log("Radni dan")
    break;
    case (danUNedelji = 3): 
    console.log("Radni dan")
    break;
    case (danUNedelji = 4): 
    console.log("Radni dan")
    break;
    case (danUNedelji = 5): 
    console.log("Radni dan")
    break;
    case (danUNedelji = 6): 
    console.log("Vikend")
    break;
    case (danUNedelji = 7): 
    console.log("Vikend")
    break;
}

{
    let dan = 6
    switch(dan) {
        case 0:
        case 6:
            console.log("Vikend")
            break
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:   
            console.log("Radni dan")
            break   
        deafault:
            console.log("Nije validan unos") 
            break
    }
}
let godina = 1972
if (godina % 4 == 0 && (godina % 100 != 0 || godina % 400 == 0)) {
    console.log ('Godina je prestupna')
} else {
    console.log('Godina ima 365')
}
{
    let mesec = 1
    let godina = 2020
    switch(mesec) {
        case 0: case 2: case 4: case 6: case 7: case 9: case 11:
            console.log("31")
            break
        case 1:
            console.log("28 ili 29")
            break
        case 3: case 5: case 8: case 10: case 12:
            console.log("30")   
            break
        default:
            console.log("Nije validan unos")
            break
    }
}
