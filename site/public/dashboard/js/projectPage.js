var resume = document.getElementById('content_resume');
var resumeData = document.getElementById('content_data');
var anotherFk2resume = document.getElementById('another_charts2');
var anotherResume = document.getElementById('another_charts');
var chartLine = document.getElementById('chart_line');
var chartLineFk1 = document.getElementById('chart_lineFk1');
var chartLineFk2 = document.getElementById('chart_lineFk2');
var infosArea = document.getElementById('infos_area');

fetch(`/dashboard/project/${sessionStorage.getItem('ID_PROJ')}`)
.then(resposta => {
    if(resposta.status == 200){
        resposta.json().then(resposta => {
            console.log(`Seus projeto foi aberto com sucesso:${JSON.stringify(resposta)}`)
            mostrarProjetos(resposta);
            sessionStorage.ID_AREA = resposta[0].idArea;
            idAreaProj = resposta[0].idArea;
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

var qtdBlocos = 0

function mostrarProjetos(resposta){
    var titleMaterial = document.getElementById('nome_material1');
    titleMaterial.innerText += ' ' + resposta[0].nomeBloco;
    
    nameProj.innerHTML = resposta[0].nomeProjeto;
    descProj.innerHTML = resposta[0].descricao;
    var larguraBlocos = resposta[0].largura;
    var AlturaBlocos = resposta[0].altura;
    var ComprimentoBlocos = resposta[0].comprimento;
    var raioBlocos = resposta[0].raio;
    var idBlocoPrincipal = resposta[0].fkBloco - 1;

    var medidaAltura= document.getElementById('info_altura')
    var medidaFormato = document.getElementById('info_formato')
    var medidaQtdBlocos = document.getElementById('info_qtd_blocos')

    medidaAltura.innerHTML += AlturaBlocos + ' blocos' 
    medidaFormato.innerHTML += resposta[0].formato 
    
    if(resposta[0].formato == 'paralelepipedo'){
        var qtdBlocos = 2 * (larguraBlocos * AlturaBlocos + (ComprimentoBlocos - 2) * AlturaBlocos + (larguraBlocos * ComprimentoBlocos) - (larguraBlocos * 2 + (ComprimentoBlocos - 2) * 2))
        var medidaLargura = document.getElementById('info_largura')
        var medidaComprimento = document.getElementById('info_comprimento') 
        
        medidaQtdBlocos.innerHTML += qtdBlocos + ' blocos'  
        medidaLargura.innerHTML += larguraBlocos + ' blocos'  
        medidaComprimento.innerHTML += ComprimentoBlocos + ' blocos'  
    } else{
        var medidaRaio = document.getElementById('info_raio')
        medidaQtdBlocos.innerHTML += qtdBlocos + ' blocos'   
        medidaRaio.innerHTML += raioBlocos + ' blocos'    
    }
    
    if(resposta[0].privacidade == 'público'){
        checkPubli.checked = true;
        checkPriv.checked = false;
    } else{
        checkPriv.checked = true;
        checkPubli.checked = false;
    }

    var woodMultiplier = resposta[0].dureza / 1.3333;
    var tableWooden1Result = Math.ceil((woodMultiplier - woodMultiplier * 0.25) * qtdBlocos);
    var tableWooden2Result = Math.ceil((woodMultiplier - woodMultiplier * 0.30) * qtdBlocos);
    var tableWooden3Result = Math.ceil((woodMultiplier - woodMultiplier * 0.35) * qtdBlocos);
    var tableWooden4Result = Math.ceil((woodMultiplier - woodMultiplier * 0.40) * qtdBlocos);
    var tableWooden5Result = Math.ceil((woodMultiplier - woodMultiplier * 0.45) * qtdBlocos);
    var tableWoodenInadequadaResult = Math.ceil((resposta[0].dureza * 2.5) * qtdBlocos);
    var tableWoodenQtdResult = Math.ceil(qtdBlocos / 60);

    var stoneMultiplier = resposta[0].dureza / 2.6667;
    var tableStone1Result = Math.ceil((stoneMultiplier - stoneMultiplier * 0.25) * qtdBlocos);
    var tableStone2Result = Math.ceil((stoneMultiplier - stoneMultiplier * 0.30) * qtdBlocos);
    var tableStone3Result = Math.ceil((stoneMultiplier - stoneMultiplier * 0.35) * qtdBlocos);
    var tableStone4Result = Math.ceil((stoneMultiplier - stoneMultiplier * 0.40) * qtdBlocos);
    var tableStone5Result = Math.ceil((stoneMultiplier - stoneMultiplier * 0.45) * qtdBlocos);
    var tableStoneInadequadaResult = Math.ceil((resposta[0].dureza * 1.25) * qtdBlocos);
    var tableStoneQtdResult = Math.ceil(qtdBlocos / 132);

    var ironMultiplier = resposta[0].dureza / 4;
    var tableIron1Result = Math.ceil((ironMultiplier - ironMultiplier * 0.25) * qtdBlocos);
    var tableIron2Result = Math.ceil((ironMultiplier - ironMultiplier * 0.30) * qtdBlocos);
    var tableIron3Result = Math.ceil((ironMultiplier - ironMultiplier * 0.35) * qtdBlocos);
    var tableIron4Result = Math.ceil((ironMultiplier - ironMultiplier * 0.40) * qtdBlocos);
    var tableIron5Result = Math.ceil((ironMultiplier - ironMultiplier * 0.45) * qtdBlocos);
    var tableIronInadequadaResult = Math.ceil((resposta[0].dureza * 0.834) * qtdBlocos);
    var tableIronQtdResult = Math.ceil(qtdBlocos / 251);

    var goldMultiplier = resposta[0].dureza / 8;
    var tableGold1Result = Math.ceil((goldMultiplier - goldMultiplier * 0.25) * qtdBlocos);
    var tableGold2Result = Math.ceil((goldMultiplier - goldMultiplier * 0.30) * qtdBlocos);
    var tableGold3Result = Math.ceil((goldMultiplier - goldMultiplier * 0.35) * qtdBlocos);
    var tableGold4Result = Math.ceil((goldMultiplier - goldMultiplier * 0.40) * qtdBlocos);
    var tableGold5Result = Math.ceil((goldMultiplier - goldMultiplier * 0.45) * qtdBlocos);
    var tableGoldInadequadaResult = Math.ceil((resposta[0].dureza * 0.417) * qtdBlocos);
    var tableGoldQtdResult = Math.ceil(qtdBlocos / 33);

    var diamondMultiplier = resposta[0].dureza / 5;
    var tableDiamond1Result = Math.ceil((diamondMultiplier - diamondMultiplier * 0.25) * qtdBlocos);
    var tableDiamond2Result = Math.ceil((diamondMultiplier - diamondMultiplier * 0.30) * qtdBlocos);
    var tableDiamond3Result = Math.ceil((diamondMultiplier - diamondMultiplier * 0.35) * qtdBlocos);
    var tableDiamond4Result = Math.ceil((diamondMultiplier - diamondMultiplier * 0.40) * qtdBlocos);
    var tableDiamond5Result = Math.ceil((diamondMultiplier - diamondMultiplier * 0.45) * qtdBlocos);
    var tableDiamondQtdResult = Math.ceil(qtdBlocos / 1562);

    var netheriteMultiplier = resposta[0].dureza / 5.7143;
    var tableNetherite1Result = Math.ceil((netheriteMultiplier - netheriteMultiplier * 0.25) * qtdBlocos);
    var tableNetherite2Result = Math.ceil((netheriteMultiplier - netheriteMultiplier * 0.30) * qtdBlocos);
    var tableNetherite3Result = Math.ceil((netheriteMultiplier - netheriteMultiplier * 0.35) * qtdBlocos);
    var tableNetherite4Result = Math.ceil((netheriteMultiplier - netheriteMultiplier * 0.40) * qtdBlocos);
    var tableNetherite5Result = Math.ceil((netheriteMultiplier - netheriteMultiplier * 0.45) * qtdBlocos);
    var tableNetheriteQuantidadeResult = Math.ceil(qtdBlocos / 2032);

    resume.innerHTML = `
        <div class="materia">
            <button class="btn-left" id="btn_left"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="resume-infos" id="resume_infos_materia_principal">
                <div class="card-infos" id="card_first">
                    <h6 style='text-align: center;'>Eficiência 1(Segundos)<br>${resposta[0].nomeBloco}</h6>
                    <div class="chart">
                        <canvas id="donnut_madeira"></canvas>
                        <div class='legend'>
                            <h5 style="color: blue">Madeira: ${tableWooden1Result}</h5><br>
                            <h5 style="color: #c253d6">Pedra: ${tableStone1Result}</h5><br>
                            <h5 style="color: #a2561c">Ferro: ${tableIron1Result}</h5><br>
                            <h5 style="color: yellow">Ouro: ${tableGold1Result}</h5><br>
                            <h5 style="color: #093432">Diamante: ${tableDiamond1Result}</h5><br>
                            <h5 style="color: purple">Netherite: ${tableNetherite1Result}</h5><br>
                        </div>
                    </div>
                </div>
                <div class="card-infos">
                    <h6 style='text-align: center;'>Eficiência 2(Segundos)<br>${resposta[0].nomeBloco}</h6>
                    <div class="chart">
                        <canvas id="donnut_pedra"></canvas>
                        <div class='legend'>
                            <h5 style="color: blue">Madeira: ${tableWooden2Result}</h5><br>
                            <h5 style="color: #c253d6">Pedra: ${tableStone2Result}</h5><br>
                            <h5 style="color: #a2561c">Ferro: ${tableIron2Result}</h5><br>
                            <h5 style="color: yellow">Ouro: ${tableGold2Result}</h5><br>
                            <h5 style="color: #093432">Diamante: ${tableDiamond2Result}</h5><br>
                            <h5 style="color: purple">Netherite: ${tableNetherite2Result}</h5><br>
                        </div>
                    </div>
                </div>
                <div class="card-infos">
                    <h6 style='text-align: center;'>Eficiência 3(Segundos)<br>${resposta[0].nomeBloco}</h6>
                    <div class="chart">
                        <canvas id="donnut_ferro"></canvas>
                        <div class='legend'>
                            <h5 style="color: blue">Madeira: ${tableWooden3Result}</h5><br>
                            <h5 style="color: #c253d6">Pedra: ${tableStone3Result}</h5><br>
                            <h5 style="color: #a2561c">Ferro: ${tableIron3Result}</h5><br>
                            <h5 style="color: yellow">Ouro: ${tableGold3Result}</h5><br>
                            <h5 style="color: #093432">Diamante: ${tableDiamond3Result}</h5><br>
                            <h5 style="color: purple">Netherite: ${tableNetherite3Result}</h5><br>
                        </div>
                    </div>
                </div>
                <div class="card-infos">
                    <h6 style='text-align: center;'>Eficiência 4(Segundos)<br>${resposta[0].nomeBloco}</h6>
                    <div class="chart">
                        <canvas id="donnut_ouro"></canvas>
                        <div class='legend'>
                            <h5 style="color: blue">Madeira: ${tableWooden4Result}</h5><br>
                            <h5 style="color: #c253d6">Pedra: ${tableStone4Result}</h5><br>
                            <h5 style="color: #a2561c">Ferro: ${tableIron4Result}</h5><br>
                            <h5 style="color: yellow">Ouro: ${tableGold4Result}</h5><br>
                            <h5 style="color: #093432">Diamante: ${tableDiamond4Result}</h5><br>
                            <h5 style="color: purple">Netherite: ${tableNetherite4Result}</h5><br>
                        </div>
                    </div>
                </div>
                <div class="card-infos">
                    <h6 style='text-align: center;'>Eficiência 5(Segundos)<br>${resposta[0].nomeBloco}</h6>
                    <div class="chart">
                        <canvas id="donnut_diamante"></canvas>
                        <div class='legend'>
                            <h5 style="color: blue">Madeira: ${tableWooden5Result}</h5><br>
                            <h5 style="color: #c253d6">Pedra: ${tableStone5Result}</h5><br>
                            <h5 style="color: #a2561c">Ferro: ${tableIron5Result}</h5><br>
                            <h5 style="color: yellow">Ouro: ${tableGold5Result}</h5><br>
                            <h5 style="color: #093432">Diamante: ${tableDiamond5Result}</h5><br>
                            <h5 style="color: purple">Netherite: ${tableNetherite5Result}</h5><br>
                        </div>
                    </div>
                </div>
            </div>
            <button id="btn_right"><i class="fa-solid fa-chevron-right"></i></button>
        </div> 
    `;
    var graficoMadeira = document.getElementById('donnut_madeira');
    var graficoPedra = document.getElementById('donnut_pedra');
    var graficoFerro = document.getElementById('donnut_ferro');
    var graficoOuro = document.getElementById('donnut_ouro');
    var graficoDiamante = document.getElementById('donnut_diamante');

    geraGrafico(
        graficoMadeira, 
        tableWooden1Result,
        tableStone1Result,
        tableIron1Result,
        tableGold1Result,
        tableDiamond1Result,
        tableNetherite1Result,
    );
    geraGrafico(
        graficoPedra,
        tableWooden2Result,
        tableStone2Result,
        tableIron2Result,
        tableGold2Result,
        tableDiamond2Result,
        tableNetherite2Result,
    );
    geraGrafico(
        graficoFerro,
        tableWooden3Result,
        tableStone3Result,
        tableIron3Result,
        tableDiamond3Result,
        tableGold3Result,
        tableNetherite3Result,
    );
    geraGrafico(
        graficoOuro,
        tableWooden4Result,
        tableStone4Result,
        tableIron4Result,
        tableGold4Result,
        tableDiamond4Result,
        tableNetherite4Result,
    );
    geraGrafico(
        graficoDiamante,
        tableWooden5Result,
        tableStone5Result,
        tableIron5Result,
        tableGold5Result,
        tableDiamond5Result,
        tableNetherite5Result
    );
    
    insereTabela1(
        tableWooden1Result,
        tableWooden2Result,
        tableWooden3Result,
        tableWooden4Result,
        tableWooden5Result,
        tableWoodenInadequadaResult,
        tableWoodenQtdResult,
        tableStone1Result,
        tableStone2Result,
        tableStone3Result,
        tableStone4Result,
        tableStone5Result,
        tableStoneInadequadaResult,
        tableStoneQtdResult,
        tableIron1Result,
        tableIron2Result,
        tableIron3Result,
        tableIron4Result,
        tableIron5Result,
        tableIronInadequadaResult,
        tableIronQtdResult,
        tableGold1Result,
        tableGold2Result,
        tableGold3Result,
        tableGold4Result,
        tableGold5Result,
        tableGoldInadequadaResult,
        tableGoldQtdResult,
        tableDiamond1Result,
        tableDiamond2Result,
        tableDiamond3Result,
        tableDiamond4Result,
        tableDiamond5Result,
        tableDiamondQtdResult,
        tableNetherite1Result,
        tableNetherite2Result,
        tableNetherite3Result,
        tableNetherite4Result,
        tableNetherite5Result,
        tableNetheriteQuantidadeResult
    )

    var titleMat = document.getElementById('title_mat')
    titleMat.innerHTML += resposta[0].nomeBloco

    const btnLeft = document.getElementById('btn_left');
    const btnRight = document.getElementById('btn_right');

    var marginDireita = 0;

    btnRight.addEventListener('click', () => {
        var card = document.getElementById('card_first');
        marginDireita += Number(card.style.marginRight) - 260
        
        if(marginDireita >= - 780){
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

    iconChangeTable.addEventListener('click', () => {
        resume.style.display = 'none';
        resumeData.style.display = 'flex'
        anotherResume.style.display = 'none'
        anotherFk2resume.style.display = 'none'
    })
    iconChangeChart.addEventListener('click', () => {
        resume.style.display = 'block';
        resumeData.style.display = 'none'
        anotherResume.style.display = 'block'
        anotherFk2resume.style.display = 'block'
    })

    if(resposta[0].fkMateriaPrima1 !== null){
        var fk1 = resposta[0].fkMateriaPrima1;
        var fk2 = null
        if(resposta[0].fkMateriaPrima12 !== null){
            fk2 = resposta[0].fkMateriaPrima2;
        }
        buscaMateriaPrima(fk1, fk2, qtdBlocos, idBlocoPrincipal);
    }
    var txtDiv = document.getElementById('txt_pad')

    geraInline(chartLine, parseInt(woodMultiplier * qtdBlocos), parseInt(stoneMultiplier * qtdBlocos), parseInt(ironMultiplier * qtdBlocos), parseInt(goldMultiplier * qtdBlocos), parseInt(diamondMultiplier * qtdBlocos), parseInt(netheriteMultiplier * qtdBlocos), resposta[0].nomeBloco, txtDiv)
};


function insereTabela1(
        tableWooden1Result,
        tableWooden2Result,
        tableWooden3Result,
        tableWooden4Result,
        tableWooden5Result,
        tableWoodenInadequadaResult,
        tableWoodenQtdResult,
        tableStone1Result,
        tableStone2Result,
        tableStone3Result,
        tableStone4Result,
        tableStone5Result,
        tableStoneInadequadaResult,
        tableStoneQtdResult,
        tableIron1Result,
        tableIron2Result,
        tableIron3Result,
        tableIron4Result,
        tableIron5Result,
        tableIronInadequadaResult,
        tableIronQtdResult,
        tableGold1Result,
        tableGold2Result,
        tableGold3Result,
        tableGold4Result,
        tableGold5Result,
        tableGoldInadequadaResult,
        tableGoldQtdResult,
        tableDiamond1Result,
        tableDiamond2Result,
        tableDiamond3Result,
        tableDiamond4Result,
        tableDiamond5Result,
        tableDiamondQtdResult,
        tableNetherite1Result,
        tableNetherite2Result,
        tableNetherite3Result,
        tableNetherite4Result,
        tableNetherite5Result,
        tableNetheriteQuantidadeResult
    ){
    var tableWooden1 = document.getElementById('wooden1')
    tableWooden1.innerHTML = tableWooden1Result
    
    var tableWooden2 = document.getElementById('wooden2')
    tableWooden2.innerHTML = tableWooden2Result
    var tableWooden3 = document.getElementById('wooden3')
    tableWooden3.innerHTML = tableWooden3Result

    var tableWooden4 = document.getElementById('wooden4')
    tableWooden4.innerHTML = tableWooden4Result
    
    var tableWooden5 = document.getElementById('wooden5')
    tableWooden5.innerHTML = tableWooden5Result

    var tableWoodenInadequada = document.getElementById('wooden6')
    tableWoodenInadequada.innerHTML = tableWoodenInadequadaResult

    var tableWoodenQtd = document.getElementById('wooden7')
    tableWoodenQtd.innerHTML = tableWoodenQtdResult

    var tableStone1 = document.getElementById('stone1')
    tableStone1.innerHTML = tableStone1Result

    var tableStone2 = document.getElementById('stone2')
    tableStone2.innerHTML = tableStone2Result

    var tableStone3 = document.getElementById('stone3')
    tableStone3.innerHTML = tableStone3Result

    var tableStone4 = document.getElementById('stone4')
    tableStone4.innerHTML = tableStone4Result

    var tableStone5 = document.getElementById('stone5')
    tableStone5.innerHTML = tableStone5Result

    var tableStoneInadequada = document.getElementById('stone6')
    tableStoneInadequada.innerHTML = tableStoneInadequadaResult

    var tableStoneQtd = document.getElementById('stone7')
    tableStoneQtd.innerHTML = tableStoneQtdResult

    var tableIron1 = document.getElementById('iron1')
    tableIron1.innerHTML = tableIron1Result

    var tableIron2 = document.getElementById('iron2')
    tableIron2.innerHTML = tableIron2Result

    var tableIron3 = document.getElementById('iron3')
    tableIron3.innerHTML = tableIron3Result

    var tableIron4 = document.getElementById('iron4')
    tableIron4.innerHTML = tableIron4Result

    var tableIron5 = document.getElementById('iron5')
    tableIron5.innerHTML = tableIron5Result

    var tableIronInadequada = document.getElementById('iron6')
    tableIronInadequada.innerHTML = tableIronInadequadaResult

    var tableIronQtd = document.getElementById('iron7')
    tableIronQtd.innerHTML = tableIronQtdResult

    var tableGold1 = document.getElementById('gold1')
    tableGold1.innerHTML = tableGold1Result

    var tableGold2 = document.getElementById('gold2')
    tableGold2.innerHTML = tableGold2Result

    var tableGold3 = document.getElementById('gold3')
    tableGold3.innerHTML = tableGold3Result

    var tableGold4 = document.getElementById('gold4')
    tableGold4.innerHTML = tableGold4Result

    var tableGold5 = document.getElementById('gold5')
    tableGold5.innerHTML = tableGold5Result

    var tableGoldInadequada = document.getElementById('gold6')
    tableGoldInadequada.innerHTML = tableGoldInadequadaResult

    var tableGoldQtd = document.getElementById('gold7')
    tableGoldQtd.innerHTML = tableGoldQtdResult

    var tableDiamond1 = document.getElementById('diamond1')
    tableDiamond1.innerHTML = tableDiamond1Result

    var tableDiamond2 = document.getElementById('diamond2')
    tableDiamond2.innerHTML = tableDiamond2Result

    var tableDiamond3 = document.getElementById('diamond3')
    tableDiamond3.innerHTML = tableDiamond3Result

    var tableDiamond4 = document.getElementById('diamond4')
    tableDiamond4.innerHTML = tableDiamond4Result

    var tableDiamond5 = document.getElementById('diamond5')
    tableDiamond5.innerHTML = tableDiamond5Result

    var tableDiamondInadequada = document.getElementById('diamond6')
    tableDiamondInadequada.innerHTML = '-----'

    var tableDiamondQtd = document.getElementById('diamond7')
    tableDiamondQtd.innerHTML = tableDiamondQtdResult

    var tableNetherite1 = document.getElementById('netherite1')
    tableNetherite1.innerHTML = tableNetherite1Result

    var tableNetherite2 = document.getElementById('netherite2')
    tableNetherite2.innerHTML = tableNetherite2Result

    var tableNetherite3 = document.getElementById('netherite3')
    tableNetherite3.innerHTML = tableNetherite3Result

    var tableNetherite4 = document.getElementById('netherite4')
    tableNetherite4.innerHTML = tableNetherite4Result

    var tableNetherite5 = document.getElementById('netherite5')
    tableNetherite5.innerHTML = tableNetherite5Result

    var tableNetheriteInadequada = document.getElementById('netherite6')
    tableNetheriteInadequada.innerHTML = '-----'

    var tableNetheriteQuantidade = document.getElementById('netherite7')
    tableNetheriteQuantidade.innerHTML = tableNetheriteQuantidadeResult
}

function buscaMateriaPrima(fk1, fk2, qtdBlocos, idBlocoPrincipal){
    fetch(`/dashboard/project/${sessionStorage.getItem('ID_PROJ')}/blocos`)
    .then(resposta => {
        if(resposta.status == 200){
            resposta.json().then(resposta => {
                console.log(`Os blocos foram achados com sucesso:${JSON.stringify(resposta)}`)
                materiaPrimaDados(resposta);
            })
        } else{
            console.log('Não foi possível achar todos os blocos.')
        }
    })
    function materiaPrimaDados(resposta){
        var idFk1 = fk1 - 1;
        var fk1Nome = resposta[idFk1].nomeBloco;
        console.log(fk1Nome)
        var fk1Drop = resposta[idFk1].dropItens

        infosArea.innerHTML += `<h5>Matéria prima 1: ${fk1Nome}</h5>`
        infosArea.innerHTML += `<h5>Total matéria prima 1: ${qtdBlocos * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop} blocos</h5>`

        var titleFk1Table = document.getElementById('title_fk1');
        var tableFk1 = document.getElementById('table_fk1');

        titleFk1Table.style.display = 'block'
        tableFk1.style.display = 'block'

        titleFk1Table.innerHTML += resposta[idFk1].nomeBloco;
        titleFk1Table.style.display = 'block'

        var woodMultiplierFk1 = resposta[idFk1].dureza / 1.3333;
        var tableFk1Wooden1Result = Math.ceil((woodMultiplierFk1 - woodMultiplierFk1 * 0.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Wooden2Result = Math.ceil((woodMultiplierFk1 - woodMultiplierFk1 * 0.30) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Wooden3Result = Math.ceil((woodMultiplierFk1 - woodMultiplierFk1 * 0.35) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Wooden4Result = Math.ceil((woodMultiplierFk1 - woodMultiplierFk1 * 0.40) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Wooden5Result = Math.ceil((woodMultiplierFk1 - woodMultiplierFk1 * 0.45) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1WoodenInadequadaResult = Math.ceil((resposta[idFk1].dureza * 2.5) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1WoodenQtdResult = Math.ceil(qtdBlocos / 60)* resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;

        var stoneMultiplierFk1 = resposta[idFk1].dureza / 2.6667;
        var tableFk1Stone1Result = Math.ceil((stoneMultiplierFk1 - stoneMultiplierFk1 * 0.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Stone2Result = Math.ceil((stoneMultiplierFk1 - stoneMultiplierFk1 * 0.30) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Stone3Result = Math.ceil((stoneMultiplierFk1 - stoneMultiplierFk1 * 0.35) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Stone4Result = Math.ceil((stoneMultiplierFk1 - stoneMultiplierFk1 * 0.40) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Stone5Result = Math.ceil((stoneMultiplierFk1 - stoneMultiplierFk1 * 0.45) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1StoneInadequadaResult = Math.ceil((resposta[idFk1].dureza * 1.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1StoneQtdResult = Math.ceil(qtdBlocos / 132)* resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;

        var ironMultiplierFk1 = resposta[idFk1].dureza / 4;
        var tableFk1Iron1Result = Math.ceil((ironMultiplierFk1 - ironMultiplierFk1 * 0.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Iron2Result = Math.ceil((ironMultiplierFk1 - ironMultiplierFk1 * 0.30) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Iron3Result = Math.ceil((ironMultiplierFk1 - ironMultiplierFk1 * 0.35) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Iron4Result = Math.ceil((ironMultiplierFk1 - ironMultiplierFk1 * 0.40) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Iron5Result = Math.ceil((ironMultiplierFk1 - ironMultiplierFk1 * 0.45) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1IronInadequadaResult = Math.ceil((resposta[idFk1].dureza * 0.834) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1IronQtdResult = Math.ceil(qtdBlocos / 251)* resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;

        var goldMultiplierFk1 = resposta[idFk1].dureza / 8;
        var tableFk1Gold1Result = Math.ceil((goldMultiplierFk1 - goldMultiplierFk1 * 0.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Gold2Result = Math.ceil((goldMultiplierFk1 - goldMultiplierFk1 * 0.30) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Gold3Result = Math.ceil((goldMultiplierFk1 - goldMultiplierFk1 * 0.35) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Gold4Result = Math.ceil((goldMultiplierFk1 - goldMultiplierFk1 * 0.40) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Gold5Result = Math.ceil((goldMultiplierFk1 - goldMultiplierFk1 * 0.45) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1GoldInadequadaResult = Math.ceil((resposta[idFk1].dureza * 0.417) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1GoldQtdResult = Math.ceil(qtdBlocos / 33)* resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;

        var diamondMultiplierFk1 = resposta[idFk1].dureza / 5;
        var tableFk1Diamond1Result = Math.ceil((diamondMultiplierFk1 - diamondMultiplierFk1 * 0.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Diamond2Result = Math.ceil((diamondMultiplierFk1 - diamondMultiplierFk1 * 0.30) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Diamond3Result = Math.ceil((diamondMultiplierFk1 - diamondMultiplierFk1 * 0.35) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Diamond4Result = Math.ceil((diamondMultiplierFk1 - diamondMultiplierFk1 * 0.40) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Diamond5Result = Math.ceil((diamondMultiplierFk1 - diamondMultiplierFk1 * 0.45) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1DiamondQtdResult = Math.ceil(qtdBlocos / 1562)* resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;

        var netheriteMultiplierFk1 = resposta[idFk1].dureza / 5.7143;
        var tableFk1Netherite1Result = Math.ceil((netheriteMultiplierFk1 - netheriteMultiplierFk1 * 0.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Netherite2Result = Math.ceil((netheriteMultiplierFk1 - netheriteMultiplierFk1 * 0.30) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Netherite3Result = Math.ceil((netheriteMultiplierFk1 - netheriteMultiplierFk1 * 0.35) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Netherite4Result = Math.ceil((netheriteMultiplierFk1 - netheriteMultiplierFk1 * 0.40) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1Netherite5Result = Math.ceil((netheriteMultiplierFk1 - netheriteMultiplierFk1 * 0.45) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;
        var tableFk1NetheriteQuantidadeResult = Math.ceil(qtdBlocos / 2032)* resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop;

        var tableFk1Wooden1 = document.getElementById('wooden1Fk1')
        tableFk1Wooden1.innerHTML = tableFk1Wooden1Result

        var tableFk1Wooden2 = document.getElementById('wooden2Fk1')
        tableFk1Wooden2.innerHTML = tableFk1Wooden2Result
        
        var tableFk1Wooden3 = document.getElementById('wooden3Fk1')
        tableFk1Wooden3.innerHTML = tableFk1Wooden3Result

        var tableFk1Wooden4 = document.getElementById('wooden4Fk1')
        tableFk1Wooden4.innerHTML = tableFk1Wooden4Result

        var tableFk1Wooden5 = document.getElementById('wooden5Fk1')
        tableFk1Wooden5.innerHTML = tableFk1Wooden5Result

        var tableFk1WoodenInadequada = document.getElementById('wooden6Fk1')
        tableFk1WoodenInadequada.innerHTML = tableFk1WoodenInadequadaResult

        var tableFk1WoodenQtd = document.getElementById('wooden7Fk1')
        tableFk1WoodenQtd.innerHTML = tableFk1WoodenQtdResult

        var tableFk1Stone1 = document.getElementById('stone1Fk1')
        tableFk1Stone1.innerHTML = tableFk1Stone1Result

        var tableFk1Stone2 = document.getElementById('stone2Fk1')
        tableFk1Stone2.innerHTML = tableFk1Stone2Result

        var tableFk1Stone3 = document.getElementById('stone3Fk1')
        tableFk1Stone3.innerHTML = tableFk1Stone3Result

        var tableFk1Stone4 = document.getElementById('stone4Fk1')
        tableFk1Stone4.innerHTML = tableFk1Stone4Result

        var tableFk1Stone5 = document.getElementById('stone5Fk1')
        tableFk1Stone5.innerHTML = tableFk1Stone5Result

        var tableFk1StoneInadequada = document.getElementById('stone6Fk1')
        tableFk1StoneInadequada.innerHTML = tableFk1StoneInadequadaResult

        var tableFk1StoneQtd = document.getElementById('stone7Fk1')
        tableFk1StoneQtd.innerHTML = tableFk1StoneQtdResult

        var tableFk1Iron1 = document.getElementById('iron1Fk1')
        tableFk1Iron1.innerHTML = tableFk1Iron1Result

        var tableFk1Iron2 = document.getElementById('iron2Fk1')
        tableFk1Iron2.innerHTML = tableFk1Iron2Result

        var tableFk1Iron3 = document.getElementById('iron3Fk1')
        tableFk1Iron3.innerHTML = tableFk1Iron3Result

        var tableFk1Iron4 = document.getElementById('iron4Fk1')
        tableFk1Iron4.innerHTML = tableFk1Iron4Result

        var tableFk1Iron5 = document.getElementById('iron5Fk1')
        tableFk1Iron5.innerHTML = tableFk1Iron5Result

        var tableFk1IronInadequada = document.getElementById('iron6Fk1')
        tableFk1IronInadequada.innerHTML = tableFk1IronInadequadaResult

        var tableFk1IronQtd = document.getElementById('iron7Fk1')
        tableFk1IronQtd.innerHTML = tableFk1IronQtdResult

        var tableFk1Gold1 = document.getElementById('gold1Fk1')
        tableFk1Gold1.innerHTML = tableFk1Gold1Result

        var tableFk1Gold2 = document.getElementById('gold2Fk1')
        tableFk1Gold2.innerHTML = tableFk1Gold2Result

        var tableFk1Gold3 = document.getElementById('gold3Fk1')
        tableFk1Gold3.innerHTML = tableFk1Gold3Result

        var tableFk1Gold4 = document.getElementById('gold4Fk1')
        tableFk1Gold4.innerHTML = tableFk1Gold4Result

        var tableFk1Gold5 = document.getElementById('gold5Fk1')
        tableFk1Gold5.innerHTML = tableFk1Gold5Result

        var tableFk1GoldInadequada = document.getElementById('gold6Fk1')
        tableFk1GoldInadequada.innerHTML = tableFk1GoldInadequadaResult

        var tableFk1GoldQtd = document.getElementById('gold7Fk1')
        tableFk1GoldQtd.innerHTML = tableFk1GoldQtdResult

        var tableFk1Diamond1 = document.getElementById('diamond1Fk1')
        tableFk1Diamond1.innerHTML = tableFk1Diamond1Result

        var tableFk1Diamond2 = document.getElementById('diamond2Fk1')
        tableFk1Diamond2.innerHTML = tableFk1Diamond2Result

        var tableFk1Diamond3 = document.getElementById('diamond3Fk1')
        tableFk1Diamond3.innerHTML = tableFk1Diamond3Result

        var tableFk1Diamond4 = document.getElementById('diamond4Fk1')
        tableFk1Diamond4.innerHTML = tableFk1Diamond4Result

        var tableFk1Diamond5 = document.getElementById('diamond5Fk1')
        tableFk1Diamond5.innerHTML = tableFk1Diamond5Result

        var tableFk1DiamondInadequada = document.getElementById('diamond6Fk1')
        tableFk1DiamondInadequada.innerHTML = '-----'

        var tableFk1DiamondQtd = document.getElementById('diamond7Fk1')
        tableFk1DiamondQtd.innerHTML = tableFk1DiamondQtdResult

        var tableFk1Netherite1 = document.getElementById('netherite1Fk1')
        tableFk1Netherite1.innerHTML = tableFk1Netherite1Result

        var tableFk1Netherite2 = document.getElementById('netherite2Fk1')
        tableFk1Netherite2.innerHTML = tableFk1Netherite2Result

        var tableFk1Netherite3 = document.getElementById('netherite3Fk1')
        tableFk1Netherite3.innerHTML = tableFk1Netherite3Result

        var tableFk1Netherite4 = document.getElementById('netherite4Fk1')
        tableFk1Netherite4.innerHTML = tableFk1Netherite4Result

        var tableFk1Netherite5 = document.getElementById('netherite5Fk1')
        tableFk1Netherite5.innerHTML = tableFk1Netherite5Result

        var tableFk1NetheriteInadequada = document.getElementById('netherite6Fk1')
        tableFk1NetheriteInadequada.innerHTML = '-----'

        var tableFk1NetheriteQuantidade = document.getElementById('netherite7Fk1')
        tableFk1NetheriteQuantidade.innerHTML = tableFk1NetheriteQuantidadeResult


        anotherResume.innerHTML += `
        <div class="materia">
            <button class="btn-left" id="btn_left_fk1"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="resume-infos" id="resume_infos_materia_principal_fk1">
                <div class="card-infos" id="card_first_fk1">
                    <h6 style='text-align: center;'>Eficiência 1(Segundos)<br>${resposta[idFk1].nomeBloco}</h6>
                    <div class="chart">
                        <canvas id="fk1donnut_madeira"></canvas>
                        <div class='legend'>
                            <h5 style="color: blue">Madeira: ${tableFk1Wooden1Result}</h5><br>
                            <h5 style="color: #c253d6">Pedra: ${tableFk1Stone1Result}</h5><br>
                            <h5 style="color: #a2561c">Ferro: ${tableFk1Iron1Result}</h5><br>
                            <h5 style="color: yellow">Ouro: ${tableFk1Gold1Result}</h5><br>
                            <h5 style="color: #093432">Diamante: ${tableFk1Diamond1Result}</h5><br>
                            <h5 style="color: purple">Netherite: ${tableFk1Netherite1Result}</h5><br>
                        </div>
                    </div>
                </div>
                <div class="card-infos">
                    <h6 style='text-align: center;'>Eficiência 2(Segundos)<br>${resposta[idFk1].nomeBloco}</h6>
                    <div class="chart">
                        <canvas id="fk1donnut_pedra"></canvas>
                        <div class='legend'>
                            <h5 style="color: blue">Madeira: ${tableFk1Wooden2Result}</h5><br>
                            <h5 style="color: #c253d6">Pedra: ${tableFk1Stone2Result}</h5><br>
                            <h5 style="color: #a2561c">Ferro: ${tableFk1Iron2Result}</h5><br>
                            <h5 style="color: yellow">Ouro: ${tableFk1Gold2Result}</h5><br>
                            <h5 style="color: #093432">Diamante: ${tableFk1Diamond2Result}</h5><br>
                            <h5 style="color: purple">Netherite: ${tableFk1Netherite2Result}</h5><br>
                        </div>
                    </div>
                </div>
                <div class="card-infos">
                    <h6 style='text-align: center;'>Eficiência 3(Segundos)<br>${resposta[idFk1].nomeBloco}</h6>
                    <div class="chart">
                        <canvas id="fk1donnut_ferro"></canvas>
                        <div class='legend'>
                            <h5 style="color: blue">Madeira: ${tableFk1Wooden3Result}</h5><br>
                            <h5 style="color: #c253d6">Pedra: ${tableFk1Stone3Result}</h5><br>
                            <h5 style="color: #a2561c">Ferro: ${tableFk1Iron3Result}</h5><br>
                            <h5 style="color: yellow">Ouro: ${tableFk1Gold3Result}</h5><br>
                            <h5 style="color: #093432">Diamante: ${tableFk1Diamond3Result}</h5><br>
                            <h5 style="color: purple">Netherite: ${tableFk1Netherite3Result}</h5><br>
                        </div>
                    </div>
                </div>
                <div class="card-infos">
                    <h6 style='text-align: center;'>Eficiência 4(Segundos)<br>${resposta[idFk1].nomeBloco}</h6>
                    <div class="chart">
                        <canvas id="fk1donnut_ouro"></canvas>
                        <div class='legend'>
                            <h5 style="color: blue">Madeira: ${tableFk1Wooden4Result}</h5><br>
                            <h5 style="color: #c253d6">Pedra: ${tableFk1Stone4Result}</h5><br>
                            <h5 style="color: #a2561c">Ferro: ${tableFk1Iron4Result}</h5><br>
                            <h5 style="color: yellow">Ouro: ${tableFk1Gold4Result}</h5><br>
                            <h5 style="color: #093432">Diamante: ${tableFk1Diamond4Result}</h5><br>
                            <h5 style="color: purple">Netherite: ${tableFk1Netherite4Result}</h5><br>
                        </div>
                    </div>
                </div>
                <div class="card-infos">
                    <h6 style='text-align: center;'>Eficiência 5(Segundos)<br>${resposta[idFk1].nomeBloco}</h6>
                    <div class="chart">
                        <canvas id="fk1donnut_diamante"></canvas>
                        <div class='legend'>
                            <h5 style="color: blue">Madeira: ${tableFk1Wooden5Result}</h5><br>
                            <h5 style="color: #c253d6">Pedra: ${tableFk1Stone5Result}</h5><br>
                            <h5 style="color: #a2561c">Ferro: ${tableFk1Iron5Result}</h5><br>
                            <h5 style="color: yellow">Ouro: ${tableFk1Gold5Result}</h5><br>
                            <h5 style="color: #093432">Diamante: ${tableFk1Diamond5Result}</h5><br>
                            <h5 style="color: purple">Netherite: ${tableFk1Netherite5Result}</h5><br>
                        </div>
                    </div>
                </div>
            </div>
            <button id="btn_right_fk1"><i class="fa-solid fa-chevron-right"></i></button>
        </div> 
        `;

        var marginDireita = 0;
        var btnRightFk1 = document.getElementById('btn_right_fk1');
        var btnLeftFk1 = document.getElementById('btn_left_fk1');

        btnRightFk1.addEventListener('click', () => {
            var cardFk1 = document.getElementById('card_first_fk1');
            marginDireita += Number(cardFk1.style.marginRight) - 260
            
            if(marginDireita >= - 780){
                console.log(marginDireita)
                cardFk1.style.marginLeft = marginDireita + 'px'
            } else{
                marginDireita = 0;
                cardFk1.style.marginLeft = 0 + 'px' 
            }
        })
    
        btnLeftFk1.addEventListener('click', () => {
            if(marginDireita < 0){
                var cardFk1 = document.getElementById('card_first_fk1');
                marginDireita += Number(cardFk1.style.marginRight) + 260
                console.log(marginDireita)
                cardFk1.style.marginLeft = marginDireita + 'px'
            } else{
                marginDireita = 0;
                cardFk1.style.marginLeft = 0 + 'px'
            }
        })
        var fk1graficoMadeira = document.getElementById('fk1donnut_madeira');
        var fk1graficoPedra = document.getElementById('fk1donnut_pedra');
        var fk1graficoFerro = document.getElementById('fk1donnut_ferro');
        var fk1graficoOuro = document.getElementById('fk1donnut_ouro');
        var fk1graficoDiamante = document.getElementById('fk1donnut_diamante');

        geraGrafico(
            fk1graficoMadeira, 
            tableFk1Wooden1Result,
            tableFk1Stone1Result,
            tableFk1Iron1Result,
            tableFk1Gold1Result,
            tableFk1Diamond1Result,
            tableFk1Netherite1Result,
        );
        geraGrafico(
            fk1graficoPedra,
            tableFk1Wooden2Result,
            tableFk1Stone2Result,
            tableFk1Iron2Result,
            tableFk1Gold2Result,
            tableFk1Diamond2Result,
            tableFk1Netherite2Result,
        );
        geraGrafico(
            fk1graficoFerro,
            tableFk1Wooden3Result,
            tableFk1Stone3Result,
            tableFk1Iron3Result,
            tableFk1Gold3Result,
            tableFk1Diamond3Result,
            tableFk1Netherite3Result,
        );
        geraGrafico(
            fk1graficoOuro,
            tableFk1Wooden4Result,
            tableFk1Stone4Result,
            tableFk1Iron4Result,
            tableFk1Gold4Result,
            tableFk1Diamond4Result,
            tableFk1Netherite4Result,
        );
        geraGrafico(
            fk1graficoDiamante,
            tableFk1Wooden5Result,
            tableFk1Stone5Result,
            tableFk1Iron5Result,
            tableFk1Gold5Result,
            tableFk1Diamond5Result,
            tableFk1Netherite5Result
        );

        var txtDivFk1 = document.getElementById('txt_padFk1')

        chartLineFk1.style.display = 'block';

        geraInline(
            chartLineFk1, 
            parseInt((woodMultiplierFk1 * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop),
            parseInt((stoneMultiplierFk1 * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop), 
            parseInt((ironMultiplierFk1 * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop), 
            parseInt((goldMultiplierFk1 * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop), 
            parseInt((diamondMultiplierFk1 * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop), 
            parseInt((netheriteMultiplierFk1 * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk1Drop), resposta[idFk1].nomeBloco, txtDivFk1)

        
        if(fk2 !== null){
            var idFk2 = fk2 - 1;
            var fk2Nome = resposta[idFk2].nomeBloco;
            var fk2Drop = resposta[idFk2].dropItens

            infosArea.innerHTML += `<h5>Matéria prima 2: ${fk2Nome}</h5>`
            infosArea.innerHTML += `<h5>Total matéria prima 2: ${qtdBlocos * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop} blocos</h5>`
    
            var titleFk2Table = document.getElementById('title_fk2');
            var tableFk2 = document.getElementById('table_fk2');
    
            titleFk2Table.style.display = 'block'
            tableFk2.style.display = 'block'
    
            titleFk2Table.innerHTML += resposta[idFk2].nomeBloco;
            titleFk2Table.style.display = 'block'
    
            var woodMultiplierFk2 = resposta[idFk2].dureza / 1.3333;
            var tableFk2Wooden1Result = Math.ceil((woodMultiplierFk2 - woodMultiplierFk2 * 0.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Wooden2Result = Math.ceil((woodMultiplierFk2 - woodMultiplierFk2 * 0.30) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Wooden3Result = Math.ceil((woodMultiplierFk2 - woodMultiplierFk2 * 0.35) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Wooden4Result = Math.ceil((woodMultiplierFk2 - woodMultiplierFk2 * 0.40) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Wooden5Result = Math.ceil((woodMultiplierFk2 - woodMultiplierFk2 * 0.45) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2WoodenInadequadaResult = Math.ceil((resposta[idFk2].dureza * 2.5) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2WoodenQtdResult = Math.ceil(qtdBlocos / 60)* resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
    
            var stoneMultiplierFk2 = resposta[idFk2].dureza / 2.6667;
            var tableFk2Stone1Result = Math.ceil((stoneMultiplierFk2 - stoneMultiplierFk2 * 0.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Stone2Result = Math.ceil((stoneMultiplierFk2 - stoneMultiplierFk2 * 0.30) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Stone3Result = Math.ceil((stoneMultiplierFk2 - stoneMultiplierFk2 * 0.35) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Stone4Result = Math.ceil((stoneMultiplierFk2 - stoneMultiplierFk2 * 0.40) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Stone5Result = Math.ceil((stoneMultiplierFk2 - stoneMultiplierFk2 * 0.45) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2StoneInadequadaResult = Math.ceil((resposta[idFk2].dureza * 1.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2StoneQtdResult = Math.ceil(qtdBlocos / 132)* resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
    
            var ironMultiplierFk2 = resposta[idFk2].dureza / 4;
            var tableFk2Iron1Result = Math.ceil((ironMultiplierFk2 - ironMultiplierFk2 * 0.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Iron2Result = Math.ceil((ironMultiplierFk2 - ironMultiplierFk2 * 0.30) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Iron3Result = Math.ceil((ironMultiplierFk2 - ironMultiplierFk2 * 0.35) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Iron4Result = Math.ceil((ironMultiplierFk2 - ironMultiplierFk2 * 0.40) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Iron5Result = Math.ceil((ironMultiplierFk2 - ironMultiplierFk2 * 0.45) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2IronInadequadaResult = Math.ceil((resposta[idFk2].dureza * 0.834) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2IronQtdResult = Math.ceil(qtdBlocos / 251)* resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
    
            var goldMultiplierFk2 = resposta[idFk2].dureza / 8;
            var tableFk2Gold1Result = Math.ceil((goldMultiplierFk2 - goldMultiplierFk2 * 0.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Gold2Result = Math.ceil((goldMultiplierFk2 - goldMultiplierFk2 * 0.30) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Gold3Result = Math.ceil((goldMultiplierFk2 - goldMultiplierFk2 * 0.35) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Gold4Result = Math.ceil((goldMultiplierFk2 - goldMultiplierFk2 * 0.40) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Gold5Result = Math.ceil((goldMultiplierFk2 - goldMultiplierFk2 * 0.45) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2GoldInadequadaResult = Math.ceil((resposta[idFk2].dureza * 0.417) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2GoldQtdResult = Math.ceil(qtdBlocos / 33)* resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
    
            var diamondMultiplierFk2 = resposta[idFk2].dureza / 5;
            var tableFk2Diamond1Result = Math.ceil((diamondMultiplierFk2 - diamondMultiplierFk2 * 0.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Diamond2Result = Math.ceil((diamondMultiplierFk2 - diamondMultiplierFk2 * 0.30) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Diamond3Result = Math.ceil((diamondMultiplierFk2 - diamondMultiplierFk2 * 0.35) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Diamond4Result = Math.ceil((diamondMultiplierFk2 - diamondMultiplierFk2 * 0.40) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Diamond5Result = Math.ceil((diamondMultiplierFk2 - diamondMultiplierFk2 * 0.45) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2DiamondQtdResult = Math.ceil(qtdBlocos / 1562)* resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
    
            var netheriteMultiplierFk2 = resposta[idFk2].dureza / 5.7143;
            var tableFk2Netherite1Result = Math.ceil((netheriteMultiplierFk2 - netheriteMultiplierFk2 * 0.25) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Netherite2Result = Math.ceil((netheriteMultiplierFk2 - netheriteMultiplierFk2 * 0.30) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Netherite3Result = Math.ceil((netheriteMultiplierFk2 - netheriteMultiplierFk2 * 0.35) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Netherite4Result = Math.ceil((netheriteMultiplierFk2 - netheriteMultiplierFk2 * 0.40) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2Netherite5Result = Math.ceil((netheriteMultiplierFk2 - netheriteMultiplierFk2 * 0.45) * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
            var tableFk2NetheriteQuantidadeResult = Math.ceil(qtdBlocos / 2032)* resposta[idBlocoPrincipal].materiaPrima2Quantidade / fk2Drop;
    
            var tableFk2Wooden1 = document.getElementById('wooden1Fk2')
            tableFk2Wooden1.innerHTML = tableFk2Wooden1Result
    
            var tableFk2Wooden2 = document.getElementById('wooden2Fk2')
            tableFk2Wooden2.innerHTML = tableFk2Wooden2Result
            
            var tableFk2Wooden3 = document.getElementById('wooden3Fk2')
            tableFk2Wooden3.innerHTML = tableFk2Wooden3Result
    
            var tableFk2Wooden4 = document.getElementById('wooden4Fk2')
            tableFk2Wooden4.innerHTML = tableFk2Wooden4Result
    
            var tableFk2Wooden5 = document.getElementById('wooden5Fk2')
            tableFk2Wooden5.innerHTML = tableFk2Wooden5Result
    
            var tableFk2WoodenInadequada = document.getElementById('wooden6Fk2')
            tableFk2WoodenInadequada.innerHTML = tableFk2WoodenInadequadaResult
    
            var tableFk2WoodenQtd = document.getElementById('wooden7Fk2')
            tableFk2WoodenQtd.innerHTML = tableFk2WoodenQtdResult
    
            var tableFk2Stone1 = document.getElementById('stone1Fk2')
            tableFk2Stone1.innerHTML = tableFk2Stone1Result
    
            var tableFk2Stone2 = document.getElementById('stone2Fk2')
            tableFk2Stone2.innerHTML = tableFk2Stone2Result
    
            var tableFk2Stone3 = document.getElementById('stone3Fk2')
            tableFk2Stone3.innerHTML = tableFk2Stone3Result
    
            var tableFk2Stone4 = document.getElementById('stone4Fk2')
            tableFk2Stone4.innerHTML = tableFk2Stone4Result
    
            var tableFk2Stone5 = document.getElementById('stone5Fk2')
            tableFk2Stone5.innerHTML = tableFk2Stone5Result
    
            var tableFk2StoneInadequada = document.getElementById('stone6Fk2')
            tableFk2StoneInadequada.innerHTML = tableFk2StoneInadequadaResult
    
            var tableFk2StoneQtd = document.getElementById('stone7Fk2')
            tableFk2StoneQtd.innerHTML = tableFk2StoneQtdResult
    
            var tableFk2Iron1 = document.getElementById('iron1Fk2')
            tableFk2Iron1.innerHTML = tableFk2Iron1Result
    
            var tableFk2Iron2 = document.getElementById('iron2Fk2')
            tableFk2Iron2.innerHTML = tableFk2Iron2Result
    
            var tableFk2Iron3 = document.getElementById('iron3Fk2')
            tableFk2Iron3.innerHTML = tableFk2Iron3Result
    
            var tableFk2Iron4 = document.getElementById('iron4Fk2')
            tableFk2Iron4.innerHTML = tableFk2Iron4Result
    
            var tableFk2Iron5 = document.getElementById('iron5Fk2')
            tableFk2Iron5.innerHTML = tableFk2Iron5Result
    
            var tableFk2IronInadequada = document.getElementById('iron6Fk2')
            tableFk2IronInadequada.innerHTML = tableFk2IronInadequadaResult
    
            var tableFk2IronQtd = document.getElementById('iron7Fk2')
            tableFk2IronQtd.innerHTML = tableFk2IronQtdResult
    
            var tableFk2Gold1 = document.getElementById('gold1Fk2')
            tableFk2Gold1.innerHTML = tableFk2Gold1Result
    
            var tableFk2Gold2 = document.getElementById('gold2Fk2')
            tableFk2Gold2.innerHTML = tableFk2Gold2Result
    
            var tableFk2Gold3 = document.getElementById('gold3Fk2')
            tableFk2Gold3.innerHTML = tableFk2Gold3Result
    
            var tableFk2Gold4 = document.getElementById('gold4Fk2')
            tableFk2Gold4.innerHTML = tableFk2Gold4Result
    
            var tableFk2Gold5 = document.getElementById('gold5Fk2')
            tableFk2Gold5.innerHTML = tableFk2Gold5Result
    
            var tableFk2GoldInadequada = document.getElementById('gold6Fk2')
            tableFk2GoldInadequada.innerHTML = tableFk2GoldInadequadaResult
    
            var tableFk2GoldQtd = document.getElementById('gold7Fk2')
            tableFk2GoldQtd.innerHTML = tableFk2GoldQtdResult
    
            var tableFk2Diamond1 = document.getElementById('diamond1Fk2')
            tableFk2Diamond1.innerHTML = tableFk2Diamond1Result
    
            var tableFk2Diamond2 = document.getElementById('diamond2Fk2')
            tableFk2Diamond2.innerHTML = tableFk2Diamond2Result
    
            var tableFk2Diamond3 = document.getElementById('diamond3Fk2')
            tableFk2Diamond3.innerHTML = tableFk2Diamond3Result
    
            var tableFk2Diamond4 = document.getElementById('diamond4Fk2')
            tableFk2Diamond4.innerHTML = tableFk2Diamond4Result
    
            var tableFk2Diamond5 = document.getElementById('diamond5Fk2')
            tableFk2Diamond5.innerHTML = tableFk2Diamond5Result
    
            var tableFk2DiamondInadequada = document.getElementById('diamond6Fk2')
            tableFk2DiamondInadequada.innerHTML = '-----'
    
            var tableFk2DiamondQtd = document.getElementById('diamond7Fk2')
            tableFk2DiamondQtd.innerHTML = tableFk2DiamondQtdResult
    
            var tableFk2Netherite1 = document.getElementById('netherite1Fk2')
            tableFk2Netherite1.innerHTML = tableFk2Netherite1Result
    
            var tableFk2Netherite2 = document.getElementById('netherite2Fk2')
            tableFk2Netherite2.innerHTML = tableFk2Netherite2Result
    
            var tableFk2Netherite3 = document.getElementById('netherite3Fk2')
            tableFk2Netherite3.innerHTML = tableFk2Netherite3Result
    
            var tableFk2Netherite4 = document.getElementById('netherite4Fk2')
            tableFk2Netherite4.innerHTML = tableFk2Netherite4Result
    
            var tableFk2Netherite5 = document.getElementById('netherite5Fk2')
            tableFk2Netherite5.innerHTML = tableFk2Netherite5Result
    
            var tableFk2NetheriteInadequada = document.getElementById('netherite6Fk2')
            tableFk2NetheriteInadequada.innerHTML = '-----'
    
            var tableFk2NetheriteQuantidade = document.getElementById('netherite7Fk2')
            tableFk2NetheriteQuantidade.innerHTML = tableFk2NetheriteQuantidadeResult

            anotherFk2resume.innerHTML = `
            <div class="materia">
                <button class="btn-left" id="btn_left_fk2"><i class="fa-solid fa-chevron-left"></i></button>
                <div class="resume-infos" id="resume_infos_materia_principal_fk2">
                    <div class="card-infos" id="card_first_fk2">
                        <h6 style='text-align: center;'>Eficiência 1(Segundos)<br>${resposta[idFk2].nomeBloco}</h6>
                        <div class="chart">
                            <canvas id="fk2donnut_madeira"></canvas>
                            <div class='legend'>
                                <h5 style="color: blue">Madeira: ${tableFk2Wooden1Result}</h5><br>
                                <h5 style="color: #c253d6">Pedra: ${tableFk2Stone1Result}</h5><br>
                                <h5 style="color: #a2561c">Ferro: ${tableFk2Iron1Result}</h5><br>
                                <h5 style="color: yellow">Ouro: ${tableFk2Gold1Result}</h5><br>
                                <h5 style="color: #093432">Diamante: ${tableFk2Diamond1Result}</h5><br>
                                <h5 style="color: purple">Netherite: ${tableFk2Netherite1Result}</h5><br>
                            </div>
                        </div>
                    </div>
                    <div class="card-infos">
                        <h6 style='text-align: center;'>Eficiência 2(Segundos)<br>${resposta[idFk2].nomeBloco}</h6>
                        <div class="chart">
                            <canvas id="fk2donnut_pedra"></canvas>
                            <div class='legend'>
                                <h5 style="color: blue">Madeira: ${tableFk2Wooden2Result}</h5><br>
                                <h5 style="color: #c253d6">Pedra: ${tableFk2Stone2Result}</h5><br>
                                <h5 style="color: #a2561c">Ferro: ${tableFk2Iron2Result}</h5><br>
                                <h5 style="color: yellow">Ouro: ${tableFk2Gold2Result}</h5><br>
                                <h5 style="color: #093432">Diamante: ${tableFk2Diamond2Result}</h5><br>
                                <h5 style="color: purple">Netherite: ${tableFk2Netherite2Result}</h5><br>
                            </div>
                        </div>
                    </div>
                    <div class="card-infos">
                        <h6 style='text-align: center;'>Eficiência 3(Segundos)<br>${resposta[idFk2].nomeBloco}</h6>
                        <div class="chart">
                            <canvas id="fk2donnut_ferro"></canvas>
                            <div class='legend'>
                                <h5 style="color: blue">Madeira: ${tableFk2Wooden3Result}</h5><br>
                                <h5 style="color: #c253d6">Pedra: ${tableFk2Stone3Result}</h5><br>
                                <h5 style="color: #a2561c">Ferro: ${tableFk2Iron3Result}</h5><br>
                                <h5 style="color: yellow">Ouro: ${tableFk2Gold3Result}</h5><br>
                                <h5 style="color: #093432">Diamante: ${tableFk2Diamond3Result}</h5><br>
                                <h5 style="color: purple">Netherite: ${tableFk2Netherite3Result}</h5><br>
                            </div>
                        </div>
                    </div>
                    <div class="card-infos">
                        <h6 style='text-align: center;'>Eficiência 4(Segundos)<br>${resposta[idFk2].nomeBloco}</h6>
                        <div class="chart">
                            <canvas id="fk2donnut_ouro"></canvas>
                            <div class='legend'>
                                <h5 style="color: blue">Madeira: ${tableFk2Wooden4Result}</h5><br>
                                <h5 style="color: #c253d6">Pedra: ${tableFk2Stone4Result}</h5><br>
                                <h5 style="color: #a2561c">Ferro: ${tableFk2Iron4Result}</h5><br>
                                <h5 style="color: yellow">Ouro: ${tableFk2Gold4Result}</h5><br>
                                <h5 style="color: #093432">Diamante: ${tableFk2Diamond4Result}</h5><br>
                                <h5 style="color: purple">Netherite: ${tableFk2Netherite4Result}</h5><br>
                            </div>
                        </div>
                    </div>
                    <div class="card-infos">
                        <h6 style='text-align: center;'>Eficiência 5(Segundos)<br>${resposta[idFk2].nomeBloco}</h6>
                        <div class="chart">
                            <canvas id="fk2donnut_diamante"></canvas>
                            <div class='legend'>
                                <h5 style="color: blue">Madeira: ${tableFk2Wooden5Result}</h5><br>
                                <h5 style="color: #c253d6">Pedra: ${tableFk2Stone5Result}</h5><br>
                                <h5 style="color: #a2561c">Ferro: ${tableFk2Iron5Result}</h5><br>
                                <h5 style="color: yellow">Ouro: ${tableFk2Gold5Result}</h5><br>
                                <h5 style="color: #093432">Diamante: ${tableFk2Diamond5Result}</h5><br>
                                <h5 style="color: purple">Netherite: ${tableFk2Netherite5Result}</h5><br>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="btn_right_fk2"><i class="fa-solid fa-chevron-right"></i></button>
            </div> 
            `;

            var marginDireita = 0;
            var btnRightFk2 = document.getElementById('btn_right_fk2');
            var btnLeftFk2 = document.getElementById('btn_left_fk2');
    
            btnRightFk2.addEventListener('click', () => {
                var cardFk2 = document.getElementById('card_first_fk2');
                marginDireita += Number(cardFk2.style.marginRight) - 260
                
                if(marginDireita >= - 780){
                    console.log(marginDireita)
                    cardFk2.style.marginLeft = marginDireita + 'px'
                } else{
                    marginDireita = 0;
                    cardFk2.style.marginLeft = 0 + 'px' 
                }
            })
        
            btnLeftFk2.addEventListener('click', () => {
                if(marginDireita < 0){
                    var cardFk2 = document.getElementById('card_first_fk2');
                    marginDireita += Number(cardFk2.style.marginRight) + 260
                    console.log(marginDireita)
                    cardFk2.style.marginLeft = marginDireita + 'px'
                } else{
                    marginDireita = 0;
                    cardFk2.style.marginLeft = 0 + 'px'
                }
            })

            var fk2graficoMadeira = document.getElementById('fk2donnut_madeira');
            var fk2graficoPedra = document.getElementById('fk2donnut_pedra');
            var fk2graficoFerro = document.getElementById('fk2donnut_ferro');
            var fk2graficoOuro = document.getElementById('fk2donnut_ouro');
            var fk2graficoDiamante = document.getElementById('fk2donnut_diamante');

            var txtDivFk2 = document.getElementById('txt_padFk2')

            chartLineFk2.style.display = 'block'
            geraInline(
                chartLineFk2, 
                parseInt((woodMultiplierFk2 * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk2Drop),
                parseInt((stoneMultiplierFk2 * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk2Drop), 
                parseInt((ironMultiplierFk2 * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk2Drop), 
                parseInt((goldMultiplierFk2 * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk2Drop), 
                parseInt((diamondMultiplierFk2 * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk2Drop), 
                parseInt((netheriteMultiplierFk2 * qtdBlocos) * resposta[idBlocoPrincipal].materiaPrima1Quantidade / fk2Drop), resposta[idFk2].nomeBloco, txtDivFk2
            )
    

            geraGrafico(
                fk2graficoMadeira, 
                tableFk2Wooden1Result,
                tableFk2Stone1Result,
                tableFk2Iron1Result,
                tableFk2Gold1Result,
                tableFk2Diamond1Result,
                tableFk2Netherite1Result,
            );
            geraGrafico(
                fk2graficoPedra,
                tableFk2Wooden2Result,
                tableFk2Stone2Result,
                tableFk2Iron2Result,
                tableFk2Gold2Result,
                tableFk2Diamond2Result,
                tableFk2Netherite2Result,
            );
            geraGrafico(
                fk2graficoFerro,
                tableFk2Wooden3Result,
                tableFk2Stone3Result,
                tableFk2Iron3Result,
                tableFk2Gold3Result,
                tableFk2Diamond3Result,
                tableFk2Netherite3Result,
            );
            geraGrafico(
                fk2graficoOuro,
                tableFk2Wooden4Result,
                tableFk2Stone4Result,
                tableFk2Iron4Result,
                tableFk2Gold4Result,
                tableFk2Diamond4Result,
                tableFk2Netherite4Result,
            );
            geraGrafico(
                fk2graficoDiamante,
                tableFk2Wooden5Result,
                tableFk2Stone5Result,
                tableFk2Iron5Result,
                tableFk2Gold5Result,
                tableFk2Diamond5Result,
                tableFk2Netherite5Result
            );
        }
    }
}

function geraGrafico(grafico, dado1, dado2, dado3, dado4, dado5, dado6){
    new Chart(grafico, {
        type: 'doughnut',
        data: {
            labels: ['Madeira', 'Pedra', 'Ferro', 'Ouro', 'Diamante', 'Netherite'],
            datasets: [{
                label: 'Tempo de coleta',
                data: [dado1, dado2, dado3, dado4, dado5, dado6],
                borderWidth: 0,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    bodyFont: {
                        size: 6 
                    },
                    titleFont: {
                        size: 6
                    },
                    boxWidth: 5
                }
            }
        }
    });
};

function geraInline(grafico, dado1, dado2, dado3, dado4, dado5, dado6, txt, divTxt){
    divTxt.innerHTML += txt;
    new Chart(grafico, {
        type: 'bar',
        data: {
            labels: ['Madeira', 'Pedra', 'Ferro', 'Ouro', 'Diamante', 'Netherite'],
            datasets: [{
                label: 'Tempo de coleta',
                data: [dado1, dado2, dado3, dado4, dado5, dado6],
                borderWidth: 0,
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    bodyFont: {
                        size: 8 
                    },
                    titleFont: {
                        size: 8
                    },
                    boxWidth: 10
                }
            }
        }
    });
}

const deletarProjeto = document.getElementById('del_proj').addEventListener('click', () => {
    fetch(`/dashboard/project/${sessionStorage.getItem('ID_PROJ')}/${sessionStorage.getItem('ID_AREA')}`, {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json",
        },
    }).then(function(resposta){
        if(resposta.ok){
            var popUpDel = document.getElementById('pop_up_del');
            popUpDel.style.display = 'block'
            setTimeout(() => {
                window.location = "/dashboard/myListProjects"
            }, 1500);
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar apagar o seu projeto! Código da resposta: " + resposta.status);
        }
    }).catch(function(resposta){
        console.log(`#ERRO: ${resposta}`);
    })
});