var main = document.getElementById('main');

function clicked() {
    var para = document.createElement('P');

    para.innerHTML = 'Subaiyal Rehan'

    main.appendChild(para);

    console.log(para);
}