var bttcheckBox = document.querySelector('#checkbox')
var imgCheck = document.querySelector('#imagemConfirm')

var bttMenu = document.querySelector('#bttOpenMenu')
var Menu = document.querySelector('#Menu')
var barra1 = document.querySelector('#barra1')
var barra2 = document.querySelector('#barra2')


//mostra o keep looged in confirmado
function ShowConfirm(){
    imgCheck.classList.toggle('imagemConfirm1')
    imgCheck.classList.toggle('imagemConfirm2')
}
bttcheckBox.addEventListener('click', ShowConfirm)

function OpenMenu(){
    Menu.classList.toggle('Menu1')
    Menu.classList.toggle('Menu2')

    bttMenu.classList.toggle('bttOpenMenu1')
    bttMenu.classList.toggle('bttOpenMenu2')

    barra1.classList.toggle('barra1-1')
    barra1.classList.toggle('barra1-2')
    barra2.classList.toggle('barra2-1')
    barra2.classList.toggle('barra2-2')
}
bttMenu.addEventListener('click', OpenMenu)