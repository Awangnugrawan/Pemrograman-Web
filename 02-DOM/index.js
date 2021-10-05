const inputItem= document.querySelector('#txt');
inputItem.placeholder = 'Masukkan Item'
const button = document.querySelector('.btn-list');
const list = document.querySelector('.container ul');
button.addEventListener('click', (e)=> {

    if (inputItem.value === ''){
        alert('Item tidak boleh kosong')
        inputItem.focus()
        inputItem.placeholder = 'Masukkan Item'
    } else{
        e.preventDefault();
        //menambahkan list
        const myLi= document.createElement('li');
        myLi.innerHTML= inputItem.value;
        list.appendChild(myLi);
        // menambahkan simbol X (span)
        const mySpan = document.createElement('span');
        mySpan.innerHTML= 'X';
        myLi.appendChild(mySpan);

    }
    // menghapus list
    const dlete= document.querySelectorAll('span')
    for (let i = 0; i < dlete.length; i++) {
    dlete[i].addEventListener('click', ()=>{
    dlete[i].parentElement.style.display="none";
})
}
    inputItem.value="";
});