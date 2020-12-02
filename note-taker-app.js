//all the variables that needed at the start
let submit = document.getElementById('submit');
let noteField = document.getElementById('noteField');
let outPut = document.getElementById('outPut');
let noteCounter = 0;
let modalBody = document.getElementById('modal-body');

let addNote = () => {

  //creating all the variables and elements that needed and setting up the styles
  let h5 = document.createElement('h5');
  let div = document.createElement('div');
  div.setAttribute('id', 'noteDiv');
  div.setAttribute('class', 'card');
  div.style.width = 400 + 'px';
  div.style.height = 150 + 'px';
  div.style.margin = '25px';
  let divCardBody = document.createElement('div');
  divCardBody.setAttribute('class', 'card-body');
  let p = document.createElement('p');
  p.setAttribute('class', 'card-text');
  let btnModal = document.createElement('input');
  btnModal.setAttribute('class', 'btn btn-outline-success');
  btnModal.setAttribute('value', 'see more');
  btnModal.setAttribute('data-target', '#Modal');
  btnModal.setAttribute('data-toggle', 'modal');
  btnModal.style.width = '100px';
  btnDelete = document.createElement('input');
  btnDelete.setAttribute('class', 'btn btn-outline-danger');
  btnDelete.setAttribute('value', 'delete');
  btnDelete.setAttribute('onclick', 'removeNote(this)');
  btnDelete.style.width = '100px';
  btnDelete.style.margin = '5px';
  h5.style.textAlign = 'center';
  h5.innerHTML = `Note`;
  //appending all of the elements (children)
  outPut.appendChild(div);
  div.appendChild(h5);
  div.appendChild(divCardBody);
  divCardBody.appendChild(p);
  divCardBody.appendChild(btnModal);
  divCardBody.appendChild(btnDelete);
  let letterCount = noteField.value.split(/\W/).join('').length;
  //counts how many letters there are in the value
  if (letterCount <= 20) {
    p.innerHTML = noteField.value;
    btnModal.style.display = 'none';
  } else {
    //checks if there is more then 20 letters and if there is the only 20 of the letters will appear
    p.innerHTML = `${noteField.value.slice(0, 20)}...`;
    modalBody.innerHTML = noteField.value;
  }
}
//removes the note
let removeNote = (btn) => {
  let note = document.getElementById('noteDiv');
  note.remove(btn.parentNode.parentNode);
}