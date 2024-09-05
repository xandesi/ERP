const form = document.getElementById('form-contact');
const phone = document.getElementById('phone');

let rows = '';

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    addRows();
    updateTable();
    mask(phone);
});

function addRows(){
    const containerName = document.getElementById('name');
    const containerPhone = document.getElementById('phone');

    let row = `<div class="row">`;
    row += `<div class="col-row">${containerName.value}</div>`;
    row += `<div class="col-row">${containerPhone.value}</div>`;
    row += `</div>`
    row += `<hr>`
    rows += row;

    containerName.value = '';
    containerPhone.value = '';
}
function updateTable(){
    const bodyTable = document.querySelector('#new-row');
    bodyTable.innerHTML = rows;
}
function mask(phone){
    if(phone.value.length == 0)
        phone.value = '(' + phone.value;
    if(phone.value.length == 3)
        phone.value = phone.value + ')';
    if(phone.value.length == 9)
        phone.value = phone.value + '-';
}