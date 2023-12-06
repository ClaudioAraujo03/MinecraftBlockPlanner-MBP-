fetch(`/dashboard/perfil/${sessionStorage.getItem('ID_PERFIL')}`)
    .then(resposta => {
        if (resposta.status === 200) {
            resposta.json().then(resposta => {
                console.log(`O projeto do usuário foi encontrado:\n${JSON.stringify(resposta)}`);
                geraInfos(resposta);
                if(resposta.length > 0){
                    mostraProjetos(resposta);
                } else{
                    mostraNada();
                }
            });
        } else {
            console.log('Não foi encontrado nenhum projeto.');
        }
    })
    .catch(erro => {
        console.error('Ocorreu um erro na requisição:', erro);
    });

var sectionProjetos = document.getElementById('all_projects');

function mostraNada(){
    sectionProjetos.innerHTML = `
        <img class='steve' src='../assets/nf.gif' alt='Não foi encontrado nenhum projeto'>
        <h2 class='nt-txt'>Não foi encontrado nenhum projeto! <br>
        Que tal fazer outra pesquisa?</h2>
    `;
}

function geraInfos(resultado){
    var userImg = document.getElementById('user_img')
    var userNome = document.getElementById('nome_user')
    var userNick = document.getElementById('nick_perfil_user')
    var userEmail = document.getElementById('email_perfil_user')
    var userQtd = document.getElementById('qtd_projs')
    var userDt = document.getElementById('dt_user')

    var data = new Date(resultado[0].dtCriacao);

    var ano = data.getFullYear();
    var mes = data.getMonth() + 1;
    var dia = data.getDate();
    if(mes < 10) mes = "0" + mes;
    if(dia < 10) dia = "0" + dia; 

    
    userImg.src = resultado[0].imagemPerfil;
    userNome.innerHTML += resultado[0].nome
    userNick.innerHTML += resultado[0].nick
    userEmail.innerHTML += resultado[0].email
    userDt.innerHTML += dia + '/' + mes + '/' + ano

    if(resultado[0].totalProjetos == undefined) userQtd.innerHTML += 'Nenhum projeto'
    else userQtd.innerHTML += resultado[0].totalProjetos

}

function mostraProjetos(resposta){
    sectionProjetos.innerHTML = '';
    
    for(var i = 0; i < resposta.length; i++){
        if(resposta[i].nomeProjeto == null || resposta[i].nomeProjeto == undefined){
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
            var perimetro = parseInt(2 * Math.PI * (raioCir));

            var area = Math.PI * (raioBlocos ** 2);

            var qtdBlocosPeri = (AlturaBlocos - 2) + perimetro;
            var qtdBlocosBase = 2 * area
            var qtdBlocos = parseInt(qtdBlocosPeri + qtdBlocosBase)
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
    fetch(`/dashboard/perfil/pesquisa/${sessionStorage.getItem("ID_PERFIL")}`, {
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
                console.log(`Os projetos forma encontrados com sucesso:${JSON.stringify(resposta)}`)
                if(resposta.length > 0){
                    mostraProjetos(resposta);
                } else{
                    mostraNada(resposta);
                }
            })
        } else{
            console.log('Não foi encontrado nenhum projeto.')
        }       
    })
}

function abrirProjeto(idProjeto) {
    sessionStorage.ID_PROJ = idProjeto;
    window.location = `./projectPage.html`;
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
    fetch(`/dashboard/perfil/filtra/${sessionStorage.getItem('ID_PERFIL')}`, ({
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
                    mostraProjetos(resposta);
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

fetch(`/dashboard/perfil/top/${sessionStorage.getItem('ID_PERFIL')}`)
    .then(resposta => {
        if (resposta.status === 200) {
            resposta.json().then(resposta => {
                console.log(`O top blocos do usuário foi encontrado:\n${JSON.stringify(resposta)}`);
                geraGraficoTop(resposta);
            });
        } else {
            console.log('Não foi encontrado nenhum projeto.');
        }
    })
    .catch(erro => {
        console.error('Ocorreu um erro na requisição:', erro);
    });

function geraGraficoTop(resposta){
    var listaNomeBlocos = []
    var divTopBlocos = document.getElementById('top_blocos')
    var listaQtdBlocos = []
    for(var i = 0; i < resposta.length; i++){
        var nomeBloco = resposta[i].nomeBloco;
        var qtdBloco = resposta[i].quantidadeProjetos;
        listaNomeBlocos.push(nomeBloco)
        listaQtdBlocos.push(qtdBloco)
        divTopBlocos.innerHTML += `<h6>${i + 1}° ${nomeBloco} (Número de projetos ${qtdBloco})</h6>`;
    }

    const ctx = document.getElementById('myChart');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: listaNomeBlocos,
            datasets: [{
                label: 'Quantidade de projetos',
                data: listaQtdBlocos,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: {
                    display: false,
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    
}