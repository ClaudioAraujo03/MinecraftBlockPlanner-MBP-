var checkCir = document.getElementById('check_cir');
var checkPar = document.getElementById('check_par');

var detailsArea = document.getElementById('info_project');
var areaMedidas = document.getElementById('area_medidas');

var iconInventory = document.getElementById('chose_block');

var btnOpenInventory = document.getElementById('input_icon_material').addEventListener('click', () => {
    var iconCloseInventory = document.getElementById('close_chose_block').addEventListener('click', () => {
        iconInventory.style.display = 'none';
    });
    
    iconInventory.style.display = 'flex';
});

var inputNameArea = document.getElementById('input_name_area').addEventListener('keyup', () => {
    var name = document.getElementById('input_name_area').value;
    var name = document.getElementById('name_area').innerText = name;
    if(name == '') var name = document.getElementById('name_area').innerText = `Área`;
    nomeArea = name
})

var blockSelect = document.querySelectorAll('#block_material');
var inputMaterial = document.getElementById('input_material');

blockSelect.forEach((image, index) => {
    image.addEventListener('click', () => {
        inputMaterial.value = image.getAttribute("value");
        material = image.getAttribute("value");
        iconInventory.style.display = 'none';
    });
});

checkCir.addEventListener('change', () => {
    if(checkCir.checked){
        checkPar.checked = false;
        areaMedidas.innerHTML = '';
        areaMedidas.innerHTML = areaCir
        areaFormato = 'circular'
    } else{
        checkPar.checked = true;
        areaMedidas.innerHTML = '';
        areaMedidas.innerHTML = areaPar
        areaFormato = 'paralelepipedo'
    };
    
});
checkPar.addEventListener('change', () => {
    if(checkPar.checked){
        checkCir.checked = false;
        areaMedidas.innerHTML = '';
        areaMedidas.innerHTML = areaPar
        areaFormato = 'paralelepipedo'
    } else{
        checkCir.checked = true;
        areaMedidas.innerHTML = '';
        areaMedidas.innerHTML = areaCir
        areaFormato = ''
        areaFormato = 'circular'
    };
});


var checkPrivYes = document.getElementById('check_yes');
var checkPrivNo = document.getElementById('check_no');

checkPrivYes.addEventListener('change', () => {
    if(checkPrivYes.checked){
        checkPrivNo.checked = false;
        privacidade = 'público';
    } else{
        checkPrivNo.checked = true;
        privacidade = 'privado';
    };
});

checkPrivNo.addEventListener('change', () => {
    if(checkPrivNo.checked){
        checkPrivYes.checked = false;
        privacidade = 'privado';
    } else{
        checkPrivYes.checked = true;
        privacidade = 'público';
    };
});

var textArea = document.getElementById("text_desc");
textArea.addEventListener('keyup', (e) => {
    var contador = document.getElementById('count');
    var tamanhoTextArea = textArea.value;
    contador.innerText = `${tamanhoTextArea.length}/2000`;
    textArea.value = textArea.value.slice(0, 2000);
    
    if(tamanhoTextArea.length >= 2000){
        contador.style.color = 'red';
    } else{
        contador.style.color = 'green';
    };
});
var areaPar = `
    <div class="area-largura">
        <span>Largura:</span>
        <input class="input-num" type="number" name="" id="input_largura">
    </div>
    <div class="area-comprimento">
        <span>Comprimento:</span>
        <input class="input-num" type="number" name="" id="input_comprimento">
    </div>
    <div class="area-altura">
        <span>Altura:</span>
        <input class="input-num" type="number" name="" id="input_altura">
    </div>
`;
var areaCir = `
    <div class="area-largura">
            <span>Raio:</span>
            <input class="input-num" type="number" name="" id="input_raio">
    </div>
    <div class="area-altura">
        <span>Altura:</span>
        <input class="input-num" type="number" name="" id="input_altura">
    </div>
`;

//Dados que irão para o banco
var nomeProjeto = '';
var nomeArea = '';
var material = '';
var privacidade = 'público';
var areaFormato = 'paralelepipedo';
var largura = null;
var altura = null;
var comprimento = null;
var raio = null;
var descricao = '';

const btnSaveProj = document.getElementById("btn_save").addEventListener('click', () => {
    descricao = textArea.value;
    nomeProjeto = document.getElementById('name_project').value;
    var idBloco = 0;
    
    const nomesDosBlocos = [
        'Andesito',
        'Andesito polido',
        'Areia',
        'Basalto',
        'Basalto liso',
        'Cascalho',
        'Ardósia profunda',
        'Bloco de grama',
        'Bloco de minério de cobre',
        'Bloco de minério de cobre profundo',
        'Bloco de cobre',
        'Bloco de minério de diamante',
        'Musgo',
        'Bloco de minério ancestral',
        'Bloco de minério de ouro',
        'Bloco de minério de ouro profundo',
        'Bloco de netherite',
        'Prismarinho',
        'Bloco de minério de quartzo',
        'Bloco de quartzo',
        'Pó de concreto',
        'Bloco de minério de ferro',
        'Bloco de minério de ferro profundo',
        'Bloco de ferro',
        'Bloco de ouro puro',
        'Cogumelo brilhante',
        'Diorito',
        'Diorito polido',
        'Bloco de estalactite',
        'Gelo',
        'Gelo compactado',
        'Gelo azul',
        'Granito',
        'Granito polido',
        'Lama',
        'Lama compacta',
        'Netherrack',
        'Obsidiana chorona',
        'Obsidian',
        'Pedra',
        'Pedra lisa',
        'Bloco de concreto',
        'Pedra negra',
        'Arenito',
        'Arenito liso',
        'Tronco de madeira',
        'Tábua de madeira',
        'Terracota',
        'Tijolos de lama',
        'Tijolos de pedra',
        'Tijolos do nether',
        'Argila',
        'Tijolos',
        'Vidro',
        'Areia vermelha',
        'Bloco de ametista',
        'Tijolos de prismarinho',
        'Minério de carvão da deepslate',
        'Minério de carvão',
        'Bloco de carvão',
        'Bloco de cobre puro',
        'Bloco de diamante',
        'Minério de esmeralda da deepslate',
        'Minério de esmeralda',
        'Bloco de esmeralda',
        'Minério de lapis lazuli',
        'Minério de lapis lazuli da deepslate',
        'Bloco de lapis lazuli',
        'Bloco de ouro',
        'Minério de redstone',
        'Minério de redstone da deepslate',
        'Bloco de redstone',
        'Cut cooper',
        'Gilded blackstone',
        'Minério de ouro do nether',
        'Pedra do end',
        'Pedra negra polida',
        'Prismarinho escuro',
        'Red sandstone',
        'Minério de diamante da deepslate'
    ];
    var idBloco = nomesDosBlocos.indexOf(material);
    var idSqlBlock = Number(idBloco) + 1
    console.log(idBloco + 1);
    var erros = 0;
    var mensagemErro = ``
    altura = document.getElementById('input_altura').value
    if(nomeProjeto == '' || nomeProjeto.length < 3){
        erros++;
        mensagemErro += 'Nome do projeto inválido, vazio ou menos de 4 caracteres.<br>'
    }
    if(nomeArea == '' || nomeArea.length < 3){
        erros++;
        mensagemErro += 'Nome da área inválido, vazio ou menos de 4 caracteres.<br>'
    }
    if(material == ''){
        erros++
        mensagemErro += 'Você não selecionou nenhum material<br>'
    }
    if(areaFormato == 'paralelepipedo'){
        largura = document.getElementById('input_largura').value;
        comprimento = document.getElementById('input_comprimento').value;
        if(largura == null || largura == '' || altura == null || altura == "" || comprimento == null || comprimento == ''){
            erros++
            mensagemErro += 'Você deixou alguma medida de sua área vazia!<br>'
        }
    } else{
        raio = document.getElementById('input_raio').value;
        if(raio == null || raio == '' || altura == null || altura == ""){
            erros++
            mensagemErro += 'Você deixou alguma medida de sua área vazia!<br>'
        }  
    }
    if(erros == 0){
        var dataInteira = new Date();
        var ano = dataInteira.getFullYear();
        var mes = zeroEsquerda(dataInteira.getMonth() + 1, 2);
        var dia = zeroEsquerda(dataInteira.getDate(), 2);
        var hora = zeroEsquerda(dataInteira.getHours(), 2);
        var minuto = zeroEsquerda(dataInteira.getMinutes(), 2);
        var segundos = zeroEsquerda(dataInteira.getSeconds(), 2);
        
        var dataCriacao = `${ano}-${mes}-${dia} ${hora}:${minuto}:${segundos}`;
        
        function zeroEsquerda(value, length) {
            return (value.toString().length < length) ? '0' + value : value;
        }
        
        fetch(`/dashboard/criarProjeto/${sessionStorage.getItem("ID_USER")}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nomeProjetoServer: nomeProjeto,
                privacidadeProjetoServer: privacidade,
                dtCriacaoServer: dataCriacao,
                descricaoServer: descricao,
                nomeAreaServer: nomeArea,
                materialServer: idSqlBlock,
                formatoAreaServer: areaFormato,
                larguraAreaServer: largura,
                alturaAreaServer: altura,
                comprimentoAreaServer: comprimento,
                raioAreaServer: raio,
                dtCriacaoKeyServer: dataCriacao
            }),
        }).then(function(resultado){
            console.log("resposta", resultado);

            if(resultado.ok){
                const popUpSucess = document.getElementById('sucess_create');
                popUpSucess.style.display = 'block';
                setTimeout(() => {
                    window.location = `/dashboard/myListProjects`
                }, 1000);
            } else{
                throw "Erro HTML"
            }
        }).catch((resposta) => {
            console.log(`#ERRO: ${resposta}`);
        });
        return false
    } else{
        var alerta = document.getElementById('alert');
        alerta.innerHTML = mensagemErro;
        popup.style.display = 'flex'
    }
})
const popup = document.getElementById('overlayer');

const closePopUp = document.getElementById('close-popup').addEventListener('click', () => {
    popup.style.display = 'none';
});

