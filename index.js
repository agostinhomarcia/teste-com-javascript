const buttons = document.getElementById('btn')

const changeColor = (event) => {
    changeColor[event.target.id]();


}

function verde(){
    document.getElementById('exemplo').classList.remove('azul')
    document.getElementById('exemplo').classList.remove('vermelho')
    document.getElementById('exemplo').classList.remove('laranja')
    document.getElementById('exemplo').classList.remove('roxo')
    document.getElementById('exemplo').classList.remove('rosa')
    document.getElementById('exemplo').classList.remove('marrom')
    document.getElementById('exemplo').classList.remove('amarelo')
    document.getElementById('exemplo').classList.add('verde')

}

function vermelho() {
    document.getElementById('exemplo').classList.remove('azul')
    document.getElementById('exemplo').classList.remove('verde')
    document.getElementById('exemplo').classList.remove('laranja')
    document.getElementById('exemplo').classList.remove('roxo')
    document.getElementById('exemplo').classList.remove('rosa')
    document.getElementById('exemplo').classList.remove('marrom')
    document.getElementById('exemplo').classList.remove('amarelo')
    document.getElementById('exemplo').classList.add('vermelho')

}
function azul() {
    document.getElementById('exemplo').classList.remove('verde')
    document.getElementById('exemplo').classList.remove('vermelho')
    document.getElementById('exemplo').classList.remove('laranja')
    document.getElementById('exemplo').classList.remove('roxo')
    document.getElementById('exemplo').classList.remove('rosa')
    document.getElementById('exemplo').classList.remove('marrom')
    document.getElementById('exemplo').classList.remove('amarelo')
    document.getElementById('exemplo').classList.add('azul')
   

}
function laranja() {
    document.getElementById('exemplo').classList.remove('verde')
    document.getElementById('exemplo').classList.remove('vermelho')
    document.getElementById('exemplo').classList.remove('azul')
    document.getElementById('exemplo').classList.remove('roxo')
    document.getElementById('exemplo').classList.remove('rosa')
    document.getElementById('exemplo').classList.remove('marrom')
    document.getElementById('exemplo').classList.remove('amarelo')
    document.getElementById('exemplo').classList.add('laranja')

}
function roxo() {
    document.getElementById('exemplo').classList.remove('verde')
    document.getElementById('exemplo').classList.remove('vermelho')
    document.getElementById('exemplo').classList.remove('laranja')
    document.getElementById('exemplo').classList.remove('azul')
    document.getElementById('exemplo').classList.remove('rosa')
    document.getElementById('exemplo').classList.remove('marrom')
    document.getElementById('exemplo').classList.remove('amarelo')
    document.getElementById('exemplo').classList.add('roxo')


}

function rosa() {
    document.getElementById('exemplo').classList.remove('verde')
    document.getElementById('exemplo').classList.remove('vermelho')
    document.getElementById('exemplo').classList.remove('laranja')
    document.getElementById('exemplo').classList.remove('roxo')
    document.getElementById('exemplo').classList.remove('azul')
    document.getElementById('exemplo').classList.remove('marrom')
    document.getElementById('exemplo').classList.remove('amarelo')
    document.getElementById('exemplo').classList.add('rosa')

}

function marrom() {
    document.getElementById('exemplo').classList.remove('verde')
    document.getElementById('exemplo').classList.remove('vermelho')
    document.getElementById('exemplo').classList.remove('laranja')
    document.getElementById('exemplo').classList.remove('roxo')
    document.getElementById('exemplo').classList.remove('azul')
    document.getElementById('exemplo').classList.remove('rosa')
    document.getElementById('exemplo').classList.remove('amarelo')
    document.getElementById('exemplo').classList.add('marrom')
}

function amarelo (){
    document.getElementById('exemplo').classList.remove('verde')
    document.getElementById('exemplo').classList.remove('vermelho')
    document.getElementById('exemplo').classList.remove('laranja')
    document.getElementById('exemplo').classList.remove('roxo')
    document.getElementById('exemplo').classList.remove('azul')
    document.getElementById('exemplo').classList.remove('rosa')
    document.getElementById('exemplo').classList.remove('marrom')
    document.getElementById('exemplo').classList.add('amarelo')
}

buttons.addEventListener('click', changeColor )