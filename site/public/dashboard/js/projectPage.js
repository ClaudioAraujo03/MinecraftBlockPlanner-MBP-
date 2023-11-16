var resume = document.getElementById('content_resume');
var resumeData = document.getElementById('content_data');

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
    var titleMaterial = document.getElementById('nome_material1');
    
    titleMaterial.innerText += ' ' + resposta[0].nomeBloco;
    
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

    resume.innerHTML = `
        <div class="materia">
            <button class="btn-left" id="btn_left"><i class="fa-solid fa-chevron-left"></i></button>
            <div class="resume-infos" id="resume_infos_materia_principal">
                <div class="card-infos" id="card_first">
                    <h6>Eficiência 1(Segundos)</h6>
                    <div class="chart">
                        <canvas id="donnut_madeira"></canvas>
                    </div>
                </div>
                <div class="card-infos">
                    <h6>Eficiência 2(Segundos)</h6>
                    <div class="chart">
                        <canvas id="donnut_pedra"></canvas>
                    </div>
                </div>
                <div class="card-infos">
                    <h6>Eficiência 3(Segundos)</h6>
                    <div class="chart">
                        <canvas id="donnut_ferro"></canvas>
                    </div>
                </div>
                <div class="card-infos">
                    <h6>Eficiência 4(Segundos)</h6>
                    <div class="chart">
                        <canvas id="donnut_ouro"></canvas>
                    </div>
                </div>
                <div class="card-infos">
                    <h6>Eficiência 5(Segundos)</h6>
                    <div class="chart">
                        <canvas id="donnut_diamante"></canvas>
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
    };
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

    geraGrafico(
        graficoMadeira, 
        tableWooden1Result,
        tableStone1Result,
        tableIron1Result,
        tableGold1Result,
        tableNetherite1Result,
        tableDiamond1Result,
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
    })
    iconChangeChart.addEventListener('click', () => {
        resume.style.display = 'block';
        resumeData.style.display = 'none'
    })
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