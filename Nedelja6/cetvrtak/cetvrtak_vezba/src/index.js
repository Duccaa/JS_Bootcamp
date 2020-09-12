import {validForm, clearForm, renderList, isDuplicateName, allert } from './functions';
const form = document.getElementById('form');
const formContainer = document.getElementById('form-container');
const listContainer = document.getElementById('list-container');
const inputName = document.getElementById('name');
const inputPhone = document.getElementById('phone');
const search = document.getElementById('search');
let imenik = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(!validForm(inputName, inputPhone)) {
        allert(inputName, inputPhone, formContainer);
        return;
    } 
    
    if(validForm(inputName, inputPhone)) {
            if(isDuplicateName(imenik, inputName)) {
                if(confirm(`Da li zelite da izmenite broj telefona korisnika ${inputName.value}`)) {
                    let index = imenik.findIndex(osoba => osoba.name == inputName.value);
                    imenik.splice(index, 1, {name: inputName.value, phone: inputPhone.value});
                    console.log(imenik);
                    console.log(imenik[imenik.length -1]);     
                }
            }      
            else {
            imenik.push({
                name: inputName.value,
                phone: inputPhone.value          
            });
            console.log(imenik);
            console.log(imenik[imenik.length -1]);      
        }  
        renderList(listContainer, imenik);   
    }      
    clearForm(inputName, inputPhone); 
})

search.addEventListener('input', (e) => {
    e.target.value ? renderList(listContainer, imenik.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase())))
        : renderList(listContainer, imenik);
})