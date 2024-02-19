var main = document.getElementById("main");
function createElem() {
    var div = document.createElement('DIV');
    div.setAttribute('class', 'listContainer')
    main.appendChild(div);
    
    var input = document.getElementById('input');
    var para = document.createElement('P');
    para.setAttribute('class', 'para');
    var paraTxt = document.createTextNode(input.value);
    para.appendChild(paraTxt);
    div.appendChild(para);
    
    var button = document.createElement('BUTTON')
    button.setAttribute('onclick', 'del(this)')
    button.setAttribute('class', 'btn');
    var buttonTxt = document.createTextNode('Delete');
    button.appendChild(buttonTxt);
    div.appendChild(button);
}

function del(elem) {
    var deleteVar = elem.parentNode;
    deleteVar.remove()
}

function deleteAll() {
    main.innerHTML = '';
    document.getElementById('input').value = '';
}