fetch(`/dashboard/project/${sessionStorage.getItem('ID_PROJ')}`)
.then(resposta => {
    if(resposta.status == 200){
        resposta.json().then(resposta => {
            console.log(`Seus projeto foi aberto com sucesso:${JSON.stringify(resposta)}`)
            resultado = resposta;
             mostrarProjetos(resposta);
        })
    } else{
        console.log('Não foi possível abir seu  projeto.')
    }
})
.catch(function (error) {
    console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
});

var nameProj = document.getElementById('name_project')
var descProj = document.getElementById('desc_projeto')
var checkPubli = document.getElementById('checkbox_public')
var checkPriv = document.getElementById('checkbox_privated')

checkPubli.addEventListener('change', () => {
    if(checkPubli.checked){
        checkPriv.checked = false;
    } else{
        checkPriv.checked = true;
    };
});
checkPriv.addEventListener('change', () => {
    if(checkPriv.checked){
        checkPubli.checked = false;
    } else{
        checkPubli.checked = true;
    };
});


function mostrarProjetos(resposta){

    nameProj.innerHTML = resposta[0].nomeProjeto;
    descProj.innerHTML = resposta[0].descricao;

    if(resposta[0].privacidade == 'público'){
        checkPubli.checked = true;
        checkPriv.checked = false;
    } else{
        checkPriv.checked = true;
        checkPubli.checked = false;
    }
};

const btnLeft = document.getElementById('btn_left');
const btnRight = document.getElementById('btn_right');

var marginDireita = 0;

btnRight.addEventListener('click', () => {
    var resume = document.getElementById('card_first');
    marginDireita += Number(resume.style.marginRight) - 260

    if(marginDireita >= - 1300){
        console.log(marginDireita)
        resume.style.marginLeft = marginDireita + 'px'
    } else{
        marginDireita = 0;
        resume.style.marginLeft = 0 + 'px' 
    }
})

btnLeft.addEventListener('click', () => {
    if(marginDireita < 0){
        var resume = document.getElementById('card_first');
        marginDireita += Number(resume.style.marginRight) + 260
        console.log(marginDireita)
        resume.style.marginLeft = marginDireita + 'px'
    } else{
        marginDireita = 0;
        resume.style.marginLeft = 0 + 'px'
    }
})