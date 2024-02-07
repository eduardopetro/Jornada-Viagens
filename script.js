

function clickmenu() {
    let itens = document.getElementById('itens');
    let menuButton = document.getElementById('menu-button');




    if (itens.style.display == 'block') {
        itens.style.display = 'none';
        menuButton.innerHTML = '&#9776;';



    } else {
        itens.style.display = 'block';
        itens.style.background = '#242525';
        itens.style.position = 'absolute'
        itens.style.right = '0px';
        itens.style.height = '210px';
        itens.style.padding = '0.5em 0em 0em 2em';
        itens.style.lineHeight = '2.5em';
        itens.style.marginTop = '1em';
        itens.style.width = '330px'
        itens.style.top = '89px'
        menuButton.innerHTML = '&#10005;';

    }
    if (innerWidth == 360) {
        itens.className = 'mobile';

    } else if (innerWidth == 768) {
        itens.className = 'tablet';
        itens.style.width = '739px';
        itens.style.top = '142px';
    }
}




