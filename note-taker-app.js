let submit = document.getElementById('submit');
let noteField = document.getElementById('noteField');
let outPut = document.getElementById('outPut');
let noteCounter = 0;
let modalBody = document.getElementById('modal-body');

let addNote = () => {
  let h5 = document.createElement('h5');
  let div = document.createElement('div');
  div.setAttribute('id', 'noteDiv');
  div.setAttribute('class', 'card');
  div.style.width = 400 + 'px';
  div.style.height = 150 + 'px';
  div.appendChild(h5);
  let divCardBody = document.createElement('div');
  divCardBody.setAttribute('class', 'card-body');
  let p = document.createElement('p');
  p.setAttribute('class', 'card-text');
  let btnModal = document.createElement('input');
  btnModal.setAttribute('class', 'btn btn-outline-success');
  btnModal.setAttribute('value', 'see more');
  btnModal.setAttribute('data-target', '#Modal');
  btnModal.setAttribute('data-toggle', 'modal');
  btnModal.style.width = 100 + 'px';
  btnDelete = document.createElement('input');
  btnDelete.setAttribute('class', 'btn btn-outline-danger');
  btnDelete.setAttribute('value', 'delete');
  btnDelete.setAttribute('onclick', 'removeNote(this)');
  btnDelete.style.width = 100 + 'px';
  h5.innerHTML = `Note`;
  outPut.appendChild(div);
  div.appendChild(divCardBody);
  divCardBody.appendChild(p);
  divCardBody.appendChild(btnModal);
  divCardBody.appendChild(btnDelete);
  let letterCount = noteField.value.split(/\W/).join('').length;
  if (letterCount <= 20) {
    p.innerHTML = noteField.value;
    btnModal.style.display = 'none';
  } else {
    p.innerHTML = 'click to see the whole note';
    modalBody.innerHTML = noteField.value;
  }
}
let removeNote = (btn) => {
  let note = document.getElementById('noteDiv');
  note.remove(btn.parentNode.parentNode);
}