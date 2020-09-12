let niz = [3, 1, 33, 4, 2, 3, 6123, 23, 1, 3, 3, 2, 32, 322]

niz.sort((a,b) => {
    if(a < b) {
        return -1
    }
    if(a == b) 
        return 0
    return 1    
})

niz.sort((a, b) => a - b) // merge sort

let x = ['1', 'dssa', '1', 'sds', '2131231', 'sdfsdsgsfdsd']

x.sort((a, b) => a.length - b.length) //ako hocemo da ih sortiramo po duzini stringa