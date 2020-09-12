export const validForm = (name, phone) => 
name.value.trim() !== ''
&& phone.value.trim() !== ''
&& phone.value.trim().length == 13
&& phone.value.trim()[0] == '+'
&& !Number.isNaN(Number(phone.value.slice(1)));

export const clearForm = (name, phone) => {
name.value = '';
phone.value = '';
}
export const allert = (name, phone, container) => {

    const p = document.createElement('p');
        p.className = 'alert';

        if(name.value.trim() == '' || phone.value.trim() == '') {
            p.innerHTML = 'Sva polja moraju biti popunjena';
        } 
        else if(phone.value.trim()[0] !== '+') {
            p.innerHTML = 'Broj telefona mora biti unet u formatu: +xxxxxxxxxxxx';
        }
        else if (phone.value.trim().length != 13) { 
            p.innerHTML = 'Broj telefona mora imati 12 cifara (ne racunajuci +)';
        } 
        else if (Number.isNaN(Number(phone.value.slice(1)))) {
            p.innerHTML = 'Polje u koje se unosi broj telefona mora sadrzati samo brojeve';
        }

        container.appendChild(p);

        setTimeout(() => {
            p.remove()
        }, 2400);
}

export const isDuplicateName = (arr, name) => {
return arr.some(el => el.name == name.value);
}

export const renderList = (list, arr) => {
    list.innerHTML = '';
    const title = document.createElement('h2');
    title.textContent = 'Imenik';
    list.appendChild(title);
    arr.forEach(el => {
        const korisnikDiv = document.createElement('div');
        const pUser = document.createElement('p');
        pUser.innerHTML =`${el.name} | ${el.phone}` ;
        korisnikDiv.append(pUser);
        list.appendChild(korisnikDiv);
    });   
}
