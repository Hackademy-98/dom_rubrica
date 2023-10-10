let cardWrapper = document.querySelector('#cardsWrapper');
let showContactsBtn = document.querySelector('#showContactsBtn')



let rubrica ={ 
contacts : [
    {nome: 'Mariela' , number: 3351257577},
    {nome: 'Elena' , number: 3358857577},
    {nome: 'Letizia' , number: 3351256577},
   ],
   showContacts : function () {
    this.contacts.forEach((contact)=>{
        let div = document.createElement('div');
        div.classList.add('col-12', 'col-md-8', 'mb-3');
        div.innerHTML = `
        <div class="card-custom">
        <p class="lead m-0">${contact.nome}</p>
        <p class="lead m-0">${contact.number}</p>
        <p class="lead m-0"><i class="fa-solid fa-trash-can fa-2x icon"></i></p>

      </div>
        `
cardsWrapper.appendChild(div);
    })
    
   }
}
showContactsBtn.addEventListener('click',()=>{


rubrica.showContacts();
})