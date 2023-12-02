fetch('/dashboard/feed/projetos')
.then(resposta => {
    if(resposta.status == 200){
        resposta.json().then(resposta => {
            console.log(`O projeto de todos os usuários foram encontrados:\n${JSON.stringify(resposta)}`)
            meuProjeto = JSON.stringify(resposta);
            if(resposta.length > 0){
                mostrarTodosProjetos(resposta);
            } else{
                // mostraNada();
            }
        })
    } else{
        console.log('Não foi encontrado nenhum projeto.')
    }
})

fetch('/dashboard/feed/dados')
.then(resposta => {
    if(resposta.status == 200){
        resposta.json().then(resposta => {
            console.log(`O projeto de todos os usuários foram encontrados:\n${JSON.stringify(resposta)}`)
            exibeDados(resposta)
        })
    } else{
        console.log('Não foi encontrado nenhum projeto.')
    }
})
function exibeDados(resposta){
    var totalProjetos = document.getElementById('total_proj')
    var totalCircular = document.getElementById('total_cir')
    var totalParalelepipedo = document.getElementById('total_para')

    totalProjetos.innerText = resposta[0].totalProjetos;
    totalCircular.innerText= resposta[0].totalCircular;
    totalParalelepipedo.innerText= resposta[0].totalParalelepipedo;
}

var divProjetos = document.getElementById('cards_div');

function mostrarTodosProjetos(resposta){
    
    divProjetos.innerHTML = '';
    
    for(var i = 0; i < resposta.length; i++){
        if(resposta[i].nomeProjeto == null) {
            mostraNada() 
            break
        }

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

        divProjetos.innerHTML += `
            <div class="card-user">
                <div class="head-card">
                    <h5>${resposta[i].nomeProjeto}</h5>
                    <h5>Data de criação: ${dataFormatada} | ${horaCompleta}</h5>
                    <button class="open-project" onclick="abrirProjeto(${resposta[i].idProjeto})">Abrir</button>
                    </div>
                <div class="content-card">
                    <div class="left-content-card">
                        <img onclick="abrirPerfil(${resposta[i].idUsuario})" src="${resposta[i].imagemPerfil}" alt="">
                        <h5 onclick="abrirPerfil(${resposta[i].idUsuario})">${resposta[i].nick}</h5>
                    </div>
                    <div class="center-content-card">
                        <h5>Nome área: ${resposta[i].nomeArea}</h5>
                        <h5>Formato: ${resposta[i].formato}</h5>
                        <h5>Quantidade de blocos:${qtdBlocos}</h5>
                    </div>
                    <div class="right-content-card">
                        <h5 class="descricao">
                            ${resposta[i].descricao}
                        </h5>
                    </div>
                </div>
            </div>
        `;
    }
};

function abrirPerfil(idUser){
    sessionStorage.ID_PERFIL = idUser
    window.location = `./userPage.html`
}

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
    fetch(`/dashboard/feed/pesquisa`, {
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
                    mostrarTodosProjetos(resposta);
                } else{
                    mostraNada(resposta);
                }
            })
        } else{
            console.log('Não foi encontrado nenhum projeto.')
        }       
    })
}

function mostraNada(){
    divProjetos.innerHTML = `
        <img class='steve' src='../assets/nf.gif' alt='Não foi encontrado nenhum projeto'>
        <h2 class='nt-txt'>Não foi encontrado nenhum projeto! <br>
        Que tal fazer outra pesquisa?</h2>
    `;
}

var filtro = document.getElementById('filtro');
const btnAbreFiltro = document.getElementById('btn_filter').addEventListener('click', () => {
    filtro.style.display = 'flex';
});

const btnClose = document.getElementById('close_filter').addEventListener('click', () => {
    filtro.style.display = 'none';
});

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
    fetch(`/dashboard/feed/filtra`, ({
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            areaServer: area,
            ordemServer: ordem
        }),
    }))
    .then(resposta => {
        if(resposta.status == 200){
            resposta.json().then(resposta => {
                console.log(`Sua filtragem foi feita com sucesso:${JSON.stringify(resposta)}`)
                if(resposta.length > 0){
                    mostrarTodosProjetos(resposta);
                    filtro.style.display = 'none';

                } else{
                    // mostraNada(resposta);
                    filtro.style.display = 'none';
                }
            })
        } else{
            console.log('Não foi encontrado nenhum projeto.')
        }       
    })
})
