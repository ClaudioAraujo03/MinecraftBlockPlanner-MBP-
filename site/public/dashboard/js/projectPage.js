fetch(`/dashboard/project/${sessionStorage.getItem('ID_PROJ')}`)
.then(resposta => {
    if(resposta.status == 200){
        resposta.json().then(resposta => {
            console.log(`Seus projeto foi aberto com sucesso:${JSON.stringify(resposta)}`)
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
    var larguraBlocos = resposta[0].largura;
    var AlturaBlocos = resposta[0].altura;
    var ComprimentoBlocos = resposta[0].comprimento;
    var raioBlocos = resposta[0].raio;

    if(resposta[0].formato == 'paralelepipedo'){
        var qtdBlocos = 2 * (larguraBlocos * AlturaBlocos + (ComprimentoBlocos - 2) * AlturaBlocos + (larguraBlocos * ComprimentoBlocos) - (larguraBlocos * 2 + (ComprimentoBlocos - 2) * 2))
    }
    
    if(resposta[0].privacidade == 'público'){
        checkPubli.checked = true;
        checkPriv.checked = false;
    } else{
        checkPriv.checked = true;
        checkPubli.checked = false;
    }
    insereTabela(qtdBlocos, resposta)
};

const btnLeft = document.getElementById('btn_left');
const btnRight = document.getElementById('btn_right');

var marginDireita = 0;

btnRight.addEventListener('click', () => {
    var card = document.getElementById('card_first');
    marginDireita += Number(card.style.marginRight) - 260
    
    if(marginDireita >= - 1300){
        console.log(marginDireita)
        card.style.marginLeft = marginDireita + 'px'
    } else{
        marginDireita = 0;
        card.style.marginLeft = 0 + 'px' 
    }
})

btnLeft.addEventListener('click', () => {
    if(marginDireita < 0){
        var card = document.getElementById('card_first');
        marginDireita += Number(card.style.marginRight) + 260
        console.log(marginDireita)
        card.style.marginLeft = marginDireita + 'px'
    } else{
        marginDireita = 0;
        card.style.marginLeft = 0 + 'px'
    }
})

var iconChangeChart = document.getElementById('change_chart');
var iconChangeTable = document.getElementById('change_table');

var resume = document.getElementById('content_resume');
var resumeData = document.getElementById('content_data');

iconChangeTable.addEventListener('click', () => {
    resume.style.display = 'none';
    resumeData.style.display = 'flex'
})
iconChangeChart.addEventListener('click', () => {
    resume.style.display = 'block';
    resumeData.style.display = 'none'
})

function insereTabela( qtdBlocos, resposta){
    var tableWooden1 = document.getElementById('wooden1')
    tableWooden1.innerHTML = Math.ceil(((resposta[0].dureza / 1.3333) - (resposta[0].dureza / 1.3333) * 0.25) * qtdBlocos)
    
    var tableWooden2 = document.getElementById('wooden2')
    tableWooden2.innerHTML = Math.ceil(((resposta[0].dureza / 1.3333) - (resposta[0].dureza / 1.3333) * 0.30) * qtdBlocos)

    var tableWooden3 = document.getElementById('wooden3')
    tableWooden3.innerHTML = Math.ceil(((resposta[0].dureza / 1.3333) - (resposta[0].dureza / 1.3333) * 0.35) * qtdBlocos)

    var tableWooden4 = document.getElementById('wooden4')
    tableWooden4.innerHTML = Math.ceil(((resposta[0].dureza / 1.3333) - (resposta[0].dureza / 1.3333) * 0.40) * qtdBlocos)
    
    var tableWooden5 = document.getElementById('wooden5')
    tableWooden5.innerHTML = Math.ceil(((resposta[0].dureza / 1.3333) - (resposta[0].dureza / 1.3333) * 0.45) * qtdBlocos)

    var tableWoodenInadequada = document.getElementById('wooden6')
    tableWoodenInadequada.innerHTML = Math.ceil((resposta[0].dureza * 2.5) * qtdBlocos)

    var tableWoodenQtd = document.getElementById('wooden7')
    tableWoodenQtd.innerHTML = Math.ceil(qtdBlocos / 60);

    var tableStone1 = document.getElementById('stone1')
    tableStone1.innerHTML = Math.ceil(((resposta[0].dureza / 2.6667) - (resposta[0].dureza / 2.6667) * 0.25) * qtdBlocos)

    var tableStone2 = document.getElementById('stone2')
    tableStone2.innerHTML = Math.ceil(((resposta[0].dureza / 2.6667) - (resposta[0].dureza / 2.6667) * 0.30) * qtdBlocos)

    var tableStone3 = document.getElementById('stone3')
    tableStone3.innerHTML = Math.ceil(((resposta[0].dureza / 2.6667) - (resposta[0].dureza / 2.6667) * 0.35) * qtdBlocos)

    var tableStone4 = document.getElementById('stone4')
    tableStone4.innerHTML = Math.ceil(((resposta[0].dureza / 2.6667) - (resposta[0].dureza / 2.6667) * 0.40) * qtdBlocos)

    var tableStone5 = document.getElementById('stone5')
    tableStone5.innerHTML = Math.ceil(((resposta[0].dureza / 2.6667) - (resposta[0].dureza / 2.6667) * 0.45) * qtdBlocos)

    var tableStoneInadequada = document.getElementById('stone6')
    tableStoneInadequada.innerHTML = Math.ceil((resposta[0].dureza * 1.25) * qtdBlocos)

    var tableStoneQtd = document.getElementById('stone7')
    tableStoneQtd.innerHTML = Math.ceil(qtdBlocos / 132)

    var tableIron1 = document.getElementById('iron1')
    tableIron1.innerHTML = Math.ceil(((resposta[0].dureza / 4) - (resposta[0].dureza / 4) * 0.25) * qtdBlocos)

    var tableIron2 = document.getElementById('iron2')
    tableIron2.innerHTML = Math.ceil(((resposta[0].dureza / 4) - (resposta[0].dureza / 4) * 0.30) * qtdBlocos)

    var tableIron3 = document.getElementById('iron3')
    tableIron3.innerHTML = Math.ceil(((resposta[0].dureza / 4) - (resposta[0].dureza / 4) * 0.35) * qtdBlocos)

    var tableIron4 = document.getElementById('iron4')
    tableIron4.innerHTML = Math.ceil(((resposta[0].dureza / 4) - (resposta[0].dureza / 4) * 0.40) * qtdBlocos)

    var tableIron5 = document.getElementById('iron5')
    tableIron5.innerHTML = Math.ceil(((resposta[0].dureza / 4) - (resposta[0].dureza / 4) * 0.45) * qtdBlocos)

    var tableIronInadequada = document.getElementById('iron6')
    tableIronInadequada.innerHTML = Math.ceil((resposta[0].dureza * 0.834) * qtdBlocos)

    var tableIronQtd = document.getElementById('iron7')
    tableIronQtd.innerHTML = Math.ceil(qtdBlocos / 251)

    var tableGold1 = document.getElementById('gold1')
    tableGold1.innerHTML = Math.ceil(((resposta[0].dureza / 8) - (resposta[0].dureza / 8) * 0.25) * qtdBlocos)

    var tableGold2 = document.getElementById('gold2')
    tableGold2.innerHTML = Math.ceil(((resposta[0].dureza / 8) - (resposta[0].dureza / 8) * 0.30) * qtdBlocos)

    var tableGold3 = document.getElementById('gold3')
    tableGold3.innerHTML = Math.ceil(((resposta[0].dureza / 8) - (resposta[0].dureza / 8) * 0.35) * qtdBlocos)

    var tableGold4 = document.getElementById('gold4')
    tableGold4.innerHTML = Math.ceil(((resposta[0].dureza / 8) - (resposta[0].dureza / 8) * 0.40) * qtdBlocos)

    var tableGold5 = document.getElementById('gold5')
    tableGold5.innerHTML = Math.ceil(((resposta[0].dureza / 8) - (resposta[0].dureza / 8) * 0.45) * qtdBlocos)

    var tableGoldInadequada = document.getElementById('gold6')
    tableGoldInadequada.innerHTML = Math.ceil((resposta[0].dureza * 0.417) * qtdBlocos)

    var tableGoldQtd = document.getElementById('gold7')
    tableGoldQtd.innerHTML = Math.ceil(qtdBlocos / 33)

    var tableDiamond1 = document.getElementById('diamond1')
    tableDiamond1.innerHTML = Math.ceil(((resposta[0].dureza / 5) - (resposta[0].dureza / 5) * 0.25) * qtdBlocos)

    var tableDiamond2 = document.getElementById('diamond2')
    tableDiamond2.innerHTML = Math.ceil(((resposta[0].dureza / 5) - (resposta[0].dureza / 5) * 0.30) * qtdBlocos)

    var tableDiamond3 = document.getElementById('diamond3')
    tableDiamond3.innerHTML = Math.ceil(((resposta[0].dureza / 5) - (resposta[0].dureza / 5) * 0.35) * qtdBlocos)

    var tableDiamond4 = document.getElementById('diamond4')
    tableDiamond4.innerHTML = Math.ceil(((resposta[0].dureza / 5) - (resposta[0].dureza / 5) * 0.40) * qtdBlocos)

    var tableDiamond5 = document.getElementById('diamond5')
    tableDiamond5.innerHTML = Math.ceil(((resposta[0].dureza / 5) - (resposta[0].dureza / 5) * 0.45) * qtdBlocos)

    var tableDiamondInadequada = document.getElementById('diamond6')
    tableDiamondInadequada.innerHTML = '-----'

    var tableDiamondQtd = document.getElementById('diamond7')
    tableDiamondQtd.innerHTML = Math.ceil(qtdBlocos / 1562)

    var tableNetherite1 = document.getElementById('netherite1')
    tableNetherite1.innerHTML = Math.ceil(((resposta[0].dureza / 5.7143) - (resposta[0].dureza / 5.7143) * 0.25) * qtdBlocos)

    var tableNetherite2 = document.getElementById('netherite2')
    tableNetherite2.innerHTML = Math.ceil(((resposta[0].dureza / 5.7143) - (resposta[0].dureza / 5.7143) * 0.30) * qtdBlocos)

    var tableNetherite3 = document.getElementById('netherite3')
    tableNetherite3.innerHTML = Math.ceil(((resposta[0].dureza / 5.7143) - (resposta[0].dureza / 5.7143) * 0.35) * qtdBlocos)

    var tableNetherite4 = document.getElementById('netherite4')
    tableNetherite4.innerHTML = Math.ceil(((resposta[0].dureza / 5.7143) - (resposta[0].dureza / 5.7143) * 0.40) * qtdBlocos)

    var tableNetherite5 = document.getElementById('netherite5')
    tableNetherite5.innerHTML = Math.ceil(((resposta[0].dureza / 5.7143) - (resposta[0].dureza / 5.7143) * 0.45) * qtdBlocos)

    var tableNetheriteInadequada = document.getElementById('netherite6')
    tableNetheriteInadequada.innerHTML = '-----'

    var tableNetheriteQuantidade = document.getElementById('netherite7')
    tableNetheriteQuantidade.innerHTML = Math.ceil(qtdBlocos / 2032)
}