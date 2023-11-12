fetch(`/dashboard/myListProjects/${sessionStorage.getItem('ID_USER')}`)
.then(resposta => {
    if(resposta.status == 200){
        resposta.json().then(resposta => {
            console.log(`Seus projetos forma encontrados com sucesso:${JSON.stringify(resposta)}`)
            resultado = resposta;
            mostrarProjetos(resposta);
        })
    } else{
        console.log('Não foi encontrado nenhum projeto.')
    }
})
.catch(function (error) {
    console.error(`Erro na obtenção dos dados do aquario p/ gráfico: ${error.message}`);
});

var sectionProjetos = document.getElementById('all_projects');

function mostrarProjetos(resposta){
    
    sectionProjetos.innerHTML = '';
    
    for(var i = 0; i < resposta.length; i++){

        var data = new Date(resposta[i].dtCriacaoProjeto);

        var ano = data.getFullYear();
        var mes = ("0" + (data.getMonth() + 1)).slice(-2);  
        var dia = ("0" + data.getDate()).slice(-2);

        var dataFormatada = ano + "/" + mes + "/" + dia;

        var larguraBlocos = resposta[i].largura
        var AlturaBlocos = resposta[i].altura
        var ComprimentoBlocos = resposta[i].comprimento
        var raioBlocos = resposta[i].raio

        var qtdBlocos = 0;

        if(resposta[i].formato == 'paralelepipedo'){
            var qtdBlocos = 2 * (larguraBlocos * AlturaBlocos + (ComprimentoBlocos - 2) * AlturaBlocos + (larguraBlocos * ComprimentoBlocos) - (larguraBlocos * 2 + (ComprimentoBlocos - 2) * 2))
        }

        sectionProjetos.innerHTML += `
            <div class="project">
                <div class="head-project">
                    <span>Projeto: ${resposta[i].nomeProjeto}</span>
                    <span>Quantidade de blocos: ${qtdBlocos}</span>
                    <span>Data de criação: ${dataFormatada}</span>
                </div>
                <div class="description">
                    <h6 class="text-description">
                        ${resposta[i].descricao}
                    </h6>
                </div>
                <button class="btn-abrir">
                    <span>
                        Abrir Projeto
                    </span>
                </button>
            </div>    
        `;
    }
};
