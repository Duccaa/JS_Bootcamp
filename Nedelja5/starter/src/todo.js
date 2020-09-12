// napraviti niz objekata koji opisuju TODO zadatke 
// omoguciti: 
// dodavanje na kraj, add(novi)
// brisanje sa ID-ijem, delete(id)
// menjanje na poziciji kojima ima odredjeni ID change(id, novi)

// let o1 = {
//     id: 123,
//     desc: 'dskfsdf',
//     done: true
// }

export const niz = [
    {
        id: 0,
        desc: 'sdfkjgdg',
        done: true
    },
    {
        id: 42342,
        desc: '1231',
        done: true
    },
    {
        id: 120,
        desc: '12312',
        done: false
    },
    {
        id: 230,
        desc: 'sdf2123',
        done: true
    },
    {
        id: 43430,
        desc: 'sdfkdsfsfdsjgdg',
        done: true
    },
    {
        id: 34340,
        desc: 'sdfsfsdfsdfsdfkjgdg',
        done: true
    }
]

const add = (item, arr = niz) => {
    arr.push(item)    
}

const deleteById = (id, arr = niz) => {
    let index = arr.findIndex(el => el.id === id)
    if(index == -1) return
    arr.splice(index, 1)
}

const changeById = (id, item, arr = niz) => {
    let index = arr.findIndex(el => el.id === id)
    if(index == -1) return
    arr.splice(index, 1, item)
}

export {
    niz,
    add,
    deleteById,
    changeById
}