// 1. Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Note: keep the original order of the names in the output.

// let names = ["Ryan", "Kieran", "Jason", "Yous"]

// let friends = names.filter(names => names.length === 4)
// console.log(friends)

// function findFrends (x) {
//     let friends = [];
//     for(let i = 0; i < x.length; i++) {
//         if(x[i].length === 4) {
//             friends.push(x[i])
//         }
//     }  
//     return friends
// }
// console.log(findFrends(names));

// 2. You are given an odd-length array of integers, in which all of them are the same, except for one single number.
// Complete the method which accepts such an array, and returns that single different number.
// The input array will always be valid! (odd-length >= 3)

// function stray(numbers) {
//     if(numbers.length % 2 === 0 || numbers.length < 3) {
//         return 'Input must be an odd-length arrayand bigger than 3'; 
//     }
//     for(let i = 0; i < numbers.length; i++) {
//         for(let k = i + 1; k < numbers.length; k++) {
//             if(numbers[i] !== numbers[k]) 
//             return numbers[i];  
//         }
//     }
// } 
// let oddLengthArray = [ 1, 1, 3,  1, 1, ]
// console.log(stray(oddLengthArray));

function stray(numbers) {
    let prvi = numbers[0]
    for(let i = 1; i < numbers.length; i++) {
       if(prvi == numbers[i]) {
           continue
        } else {
           if(i == 1 && numbers[1] == numbers[2]) {
               return prvi
        }
            return numbers[i]
       }
    }
} 
console.log(stray([]))

function stray(numbers) {
    let sortiraniNiz = numbers.sort((a,b) => a - b)
    let min = sortiraniNiz[0]
    let max = sortiraniNiz[sortiraniNiz.length - 1]
    return min == sortiraniNiz[1] ? max : min
} 

//

// 3. Given two integers a and b, which can be positive or negative, 
// find the sum of all the numbers between including them too and return it. 
// If the two numbers are equal return a or b.
// Note: a and b are not ordered!

// function getSum(a, b) {
    // let sum = 0;
    // if(a === b) {
    //     return a
    // }
    // if(a > b) {
    //     let t = a;
    //     a = b;
    //     b = t;
    // }
    // for(a, b; a <= b; a++) {
    //     sum += a
    // }
    // return sum
// }
// console.log(getSum(1, 0))

// 4. The function takes cents value (int) and needs to return the minimum number of coins combination of the same value.
// The function should return an array where
// coins[0] = pennies ==> $00.01
// coins[1] = nickles ==> $00.05
// coins[2] = dimes ==> $00.10
// coins[3] = quarters ==> $00.25
// So for example:
// coinCombo(6) --> [1, 1, 0, 0]

var coinCombo = function(cents) {
    let res = [0, 0, 0, 0];
    while (cents > 0) {
        if (cents >= 25) {
        cents = cents % 25
        res[3] = Math.floor(cents / 25)
        } else if(cents >= 10) { 
            cents = cents % 10
            res[2] = Math.floor(cents / 10)
        } else if(cents >= 5) { 
            cents = cents % 5
            res[1] = Math.floor(cents / 5)
        } else {
            res[0] = cents
            cents = 0
        }
    }
    return res;
}

// 5. Write a function that combines two arrays by alternatingly taking elements from each array in turn.
// Examples:
// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]
// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

// let niz1 = ['a','b','c','d','e','f']
// let niz2 = [1,2,3]
// function mergeArrays(a, b) {
//     let merged = []
//     if (a.length > b.length) {
//         b.length = a.length
//     }
//     for(let i = 0, j = 0; i < a.length, j < b.length; i++, j++ ) {
//         merged.push(a[i])
//         merged.push(b[j])
//     }
//     return merged.filter(el => el !== undefined)
// }
// console.log(mergeArrays(niz1, niz2))

//6. Create a function named divisors that takes an integer n > 1 
//and returns an array with all of the integer's divisors
//(except for 1 and the number itself), from smallest to largest. 
//If the number is prime return the string '(integer) is prime'

// function divisors(integer) {
//     let divisor = [];
//     for(let i = 1; i <= integer; i++) {
//         if(integer % i === 0) {
//          divisor.push(i); 
//         }
//     }
//     if(divisor.length === 2 && divisor[0] === 1 && divisor[1] === integer) {
//         return `${x} is prime`
//     } else {
//        divisor.pop()
//        divisor.shift()
//        return divisor
//     }

// }
// console.log(divisors(15)); 

//7 Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. 
//No floats or non-positive integers will be passed.
//For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7

let numbers1 = [19, 5, 42, 2, 77]
let numbers2 = [-3, 2, 5, - 6, 8]
let numbers3 = [2, 1.5, -3, 5, 2]
let numbers4 = [2, 1.5, -3]
let numbers5 = [-2, 1.5, -3]
function sumTwoSmallestNumbers(numbers) {
    let sorted = numbers.sort(function(a, b) {return a - b})
    let positive = sorted.filter(num => num > 0)
    let integer = positive.filter(num => Number.isInteger(num))
    if (integer[0] === undefined || integer[1] === undefined) {
        return 'There is no two positive integers in this arrray'
    } else {return integer[0] + integer[1]}    
}
console.log(sumTwoSmallestNumbers(numbers4))

//8 You're given two integers – n and k. n is always positive, while k >= 0. Write a function that returns first k odd digits in a number n.
//The output should also be an integer.
//In the following cases a function should return 0:
//*there are no odd digits in a number n;
//*k is bigger than a number of digits in n;
//*k = 0;
//*k is bigger than a number of odd digits in n.

//9 Write a function cubeSum(n, m) that will calculate a sum of cubes of numbers in a given range, 
//starting from the smaller (but not including it) to the larger (including). The first argument is not necessarily the larger number.
//If both numbers are the same, then the range is empty and the result should be 0.

//10 Check to see if a string has the same amount of 'x's and 'o's. 
//The method must return a boolean and be case insensitive. The string can contain any char.


