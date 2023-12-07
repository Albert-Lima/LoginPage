var bttcheckBox = document.querySelector('#checkbox')
var imgCheck = document.querySelector('#imagemConfirm')


//mostra o keep looged in confirmado
function ShowConfirm(){
    imgCheck.classList.toggle('imagemConfirm1')
    imgCheck.classList.toggle('imagemConfirm2')
}
bttcheckBox.addEventListener('click', ShowConfirm)

