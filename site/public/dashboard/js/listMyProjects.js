var meuProjeto;
fetch(`/dashboard/myListProjects/${sessionStorage.getItem('ID_USER')}`)
.then(resposta => {
    if(resposta.status == 200){
        resposta.json().then(resposta => {
            console.log(`Seus projetos forma encontrados com sucesso:${JSON.stringify(resposta)}`)
            meuProjeto = JSON.stringify(resposta);
            if(resposta.length > 0){
                mostrarProjetos(resposta);
            } else{
                mostraNada();
            }
        })
    } else{
        console.log('Não foi encontrado nenhum projeto.')
    }
})
.catch(function (error) {
    console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
});


var sectionProjetos = document.getElementById('all_projects');

function mostraNada(){
    sectionProjetos.innerHTML = `
        <img class='steve' src='../assets/nf.gif' alt='Não foi encontrado nenhum projeto'>
        <h2 class='nt-txt'>Não foi encontrado nenhum projeto! <br>
        Que tal criar um agora?</h2>
        <button class='btn-ir' id='btn_ir'>Ir criar um projeto!</button>
    `;

    const btnIr = document.getElementById('btn_ir').addEventListener('click', () => {
        window.location = './createProject.html'
    })
}

function mostrarProjetos(resposta){
    
    sectionProjetos.innerHTML = '';
    
    for(var i = 0; i < resposta.length; i++){

        var data = new Date(resposta[i].dtCriacaoProjeto);

        var ano = data.getFullYear();
        var mes = data.getMonth() + 1;
        var dia = data.getDate();
        if(mes < 10) mes = "0" + mes;
        if(dia < 10) dia = "0" + dia; 
        

        var dataFormatada = dia + "/" + mes + "/" + ano;

        var hora = data.getHours()
        if(hora < 10) hora = '0' + hora;
        var minuto = data.getMinutes()
        if(minuto < 10) minuto = '0' + minuto

        var horaCompleta = hora + ':' + minuto

        var larguraBlocos = resposta[i].largura
        var AlturaBlocos = resposta[i].altura
        var ComprimentoBlocos = resposta[i].comprimento
        var raioBlocos = resposta[i].raio

        var qtdBlocos = 0;

        if(resposta[i].formato == 'paralelepipedo'){
            var qtdBlocos = 2 * (larguraBlocos * AlturaBlocos + (ComprimentoBlocos - 2) * AlturaBlocos + (larguraBlocos * ComprimentoBlocos) - (larguraBlocos * 2 + (ComprimentoBlocos - 2) * 2))
        } else if(resposta[i].formato == 'circular'){

            var area = 0;
            var raioCir = raioBlocos
            var perimetro = parseInt(2 * Math.PI * (raioCir - 0.5));

            for (var k = -raioCir; k <= raioCir; k++) {
                for (var j = -raioCir; j <= raioCir; j++) {
                    var distance = Math.sqrt(Math.pow(k, 2) + Math.pow(j, 2));
                    if (distance < raioCir) {
                        area++;
                    }
                }
            }

            var qtdBlocosPeri = (AlturaBlocos - 2) + perimetro;
            var qtdBlocosBase = 2 * area
            var qtdBlocos = qtdBlocosPeri + qtdBlocosBase
        }

        sectionProjetos.innerHTML += `
            <div class="project">
                <div class="head-project">
                    <span>Projeto: ${resposta[i].nomeProjeto}</span>
                    <span>Quantidade de blocos: ${qtdBlocos}</span>
                    <span>Data de criação: ${dataFormatada} | ${horaCompleta}</span>
                    <span>Privacidade: ${resposta[i].privacidade}</span>
                </div>
                <div class="description">
                    <h6 class="text-description">
                        ${resposta[i].descricao}
                    </h6>
                </div>
                <button class="btn-abrir" onclick="abrirProjeto(${resposta[i].idProjeto})">
                    <span>
                        Abrir Projeto
                    </span>
                </button>
            </div>    
        `;
    }
};
function abrirProjeto(idProjeto) {
    sessionStorage.ID_PROJ = idProjeto;
    window.location = `./projectPage.html`;
}

var btnSearch = document.getElementById('search_btn');
var search = document.getElementById('search_project');

btnSearch.addEventListener('click', () => {
    var pesquisa = search.value;
    pesquisar(pesquisa);  
})

search.addEventListener('keypress', (e) => {
    if(e.key == 'Enter'){
        var pesquisa = search.value;
        pesquisar(pesquisa);
    }
});

function pesquisar(pesquisa){
    fetch(`/dashboard/myListProjects/pesquisa/${sessionStorage.getItem('ID_USER')}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            pesquisaServer: pesquisa
        }),
    })
    .then(resposta => {
        if(resposta.status == 200){
            resposta.json().then(resposta => {
                console.log(`Seus projetos forma encontrados com sucesso:${JSON.stringify(resposta)}`)
                if(resposta.length > 0){
                    mostrarProjetos(resposta);
                } else{
                    mostraNada(resposta);
                }
            })
        } else{
            console.log('Não foi encontrado nenhum projeto.')
        }       
    })
}

var filtro = document.getElementById('filtro');
const btnAbreFiltro = document.getElementById('btn_filter').addEventListener('click', () => {
    filtro.style.display = 'flex';
});

const btnClose = document.getElementById('close_filter').addEventListener('click', () => {
    filtro.style.display = 'none';
});

var privacidade = 'todos';

var checkTodos = document.getElementById('chk_todos')
var checkPubli = document.getElementById('chk_publi')
var checkPriv = document.getElementById('chk_priv')

checkTodos.addEventListener('change', () => {
    if(checkTodos.checked){
        checkPubli.checked = false
        checkPriv.checked = false
        privacidade = 'todos'
    } else{
        checkPubli.checked = true
        privacidade = 'público'
    }
})

checkPubli.addEventListener('change', () => {
    if(checkPubli.checked){
        checkTodos.checked = false
        checkPriv.checked = false
        privacidade = 'público'
    } else{
        checkTodos.checked = true
        privacidade = 'todos'
    }
})

checkPriv.addEventListener('change', () => {
    if(checkPriv.checked){
        checkPubli.checked = false
        checkTodos.checked = false 
        privacidade = 'privado'
    } else{
        checkTodos.checked = true
        privacidade = 'todos'
    }
})
var checkTodasAreas = document.getElementById('chk_todos_area')
var checkPara = document.getElementById('chk_para')
var checkCir = document.getElementById('chk_cir')

var area = 'todas'

checkTodasAreas.addEventListener('change', () => {
    if(checkTodasAreas.checked){
        checkPara.checked = false
        checkCir.checked = false 
        area = 'todas'
    } else{
        checkPara.checked = true
        area = 'paralelepipedo'

    }
})

checkPara.addEventListener('change', () => {
    if(checkPara.checked){
        checkTodasAreas.checked = false
        checkCir.checked = false 
        area = 'paralelepipedo'
    } else{
        checkTodasAreas.checked = true
        area = 'todas'

    }
})

checkCir.addEventListener('change', () => {
    if(checkCir.checked){
        checkPara.checked = false
        checkTodasAreas.checked = false
        area = 'circular'
    } else{
        checkTodasAreas.checked = true
        area = 'todas'
    }
})


var chkDescData = document.getElementById('chk_ord_desc_data')
var chkAscData = document.getElementById('chk_ord_asc_data')

var ordem = 'dataDesc'

chkDescData.addEventListener('change', () => {
    if(chkDescData.checked){
        chkAscData.checked = false
        ordem = 'dataDesc'

    } else{
        chkDescData.checked = true
        ordem = 'dataDesc'

    }
})

chkAscData.addEventListener('change', () => {
    if(chkAscData.checked){
        chkDescData.checked = false 
        ordem = 'dataAsc'
    } else{
        chkAscData.checked = true
        ordem = 'dataAsc'
    }
})

const btnFilter = document.getElementById('filter_button').addEventListener('click', () => {
        fetch(`/dashboard/myListProjects/filtra/${sessionStorage.getItem('ID_USER')}`, ({
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                privacidadeServer: privacidade,
                areaServer: area,
                ordemServer: ordem
            }),
        }))
        .then(resposta => {
            if(resposta.status == 200){
                resposta.json().then(resposta => {
                    console.log(`Sua filtragem foi feita com sucesso:${JSON.stringify(resposta)}`)
                    if(resposta.length > 0){
                        mostrarProjetos(resposta);
                        filtro.style.display = 'none';

                    } else{
                        mostraNada(resposta);
                        filtro.style.display = 'none';
                    }
                })
            } else{
                console.log('Não foi encontrado nenhum projeto.')
            }       
        })
})



