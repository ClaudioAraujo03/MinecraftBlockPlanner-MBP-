const inputNameBlock = document.getElementById('name_block')
const chose = document.getElementById('chose_block')
const inputAltura = document.getElementById('input_altura')
const inputLargura = document.getElementById('input_largura')
const inputComprimento = document.getElementById('input_comprimento')
const btnCalc = document.getElementById('btn_calc')

btnCalc.addEventListener('click', () => {
    var bloco = chose.value;
    inputNameBlock.value = bloco;
    var altura = inputAltura.value;
    var largura = inputLargura.value;
    var comprimento = inputComprimento.value;

    var erros = 0;

    const regex = /[a-zA-Z]/;
    if(altura <= 0 || altura == '' || regex.test(altura)) {
        inputAltura.value = ''
        inputAltura.placeholder = 'Insira um valor correto'
        erros++
    }
    if(largura <= 0 || largura == '' || regex.test(largura)) {
        inputLargura.value = ''
        inputLargura.placeholder = 'Insira um valor correto'
        erros++
    }
    if(comprimento <= 0 || comprimento == '' || regex.test(comprimento)) {
        inputComprimento.value = ''
        inputComprimento.placeholder = 'Insira um valor correto'
        erros++
    }

})