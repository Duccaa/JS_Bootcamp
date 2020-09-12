import axios from 'axios'

const btnRandom = document.querySelector('#random')
const ulRandom = document.querySelector('#random-ul')
const search = document.querySelector('#search')
const select = document.querySelector('#search-ul')
const sastojci = document.querySelector('#sastojci')

let url = 'https://www.thecocktaildb.com/api/json/v1/1'

const getRandom = () => {
    return axios.get(url + '/random.php')
}
const getByName = (name) => {
    return axios.get(url + `/search.php?s=${name}`)
}

const getIngDescription = (ingName) => {
    return axios.get(url + `/search.php?i=${ingName}`)
}

btnRandom.addEventListener('click', () => {
    getRandom().then(res => {
        const li = document.createElement('li')
        li.textContent = res.data.drinks[0].strDrink
        ulRandom.append(li)
    })
})

let kokteli = []
search.addEventListener('input', () => {
    select.innerHTML = ''
    getByName(search.value).then(res => {
        kokteli = res.data.drinks
        res.data.drinks.forEach(drink => {
            const option = document.createElement('option')
            option.textContent = drink.strDrink
            option.value = drink.idDrink
            select.append(option)
        });
    })
})

select.addEventListener('change', () => {

    let koktel = kokteli.find(el => el.idDrink == select.value)

    const filtered = Object.keys(koktel)
        .filter(key => key.includes('strIngredient') && koktel[key] != null)
        .map(key => koktel[key])

    const li = document.createElement('li')
    sastojci.innerHTML =''
    let sastojciSaOpisom = []
    filtered.map(nazivSastojka => {
        getIngDescription(nazivSastojka).then(res => {
            sastojciSaOpisom.push(res.data.ingredients[0])
            
            let ispis = sastojciSaOpisom.map(sastojak =>
            `<details><summary><b>${sastojak.strIngredient}<br></summary><b>
              opis: ${sastojak.strDescription ? sastojak.strDescription : '/'} <br></details>`)

            li.innerHTML = ispis
            sastojci.append(li) 
        })
    })
})
    
// let obj = {
    // name1: 'nesto',
    // name2: 'nesto',
    // name3: null
// }
// obj[`name${1}`]
// for(let i = 1; i <= 15; i++) {
// obj[`name${i}`]
// if(obj[`name${i}`] === 'undefined') {
//     return
// }
// }

// const filtered = Object.keys(koktel)
// .filter(key => key.includes('strIngredient') && koktel[key] != null)
// .map(key => {
//     let obj = {}
//     obj[key] = koktel[key]
//     return obj
// })

