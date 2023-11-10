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
    if(name == '') var name = document.getElementById('name_area').innerText = `Área ${numberArea}`;
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
    <h4 class="area-title" id="name_area">Área</h4> 
    <input class="input-name-area" type="text" id="input_name_area" placeholder="Insira o nome da área">
    <div class="area-largura">
        <span>Largura:</span>
        <input class="input-num" type="number" name="" id="input_largura">
    </div>
    <div class="area-comprimento">
        <span>Comprimento:</span>
        <input class="input-num" type="number" name="" id="input_largra">
    </div>
    <div class="area-altura">
        <span>Altura:</span>
        <input class="input-num" type="number" name="" id="input_altura">
    </div>
`;
var areaCir = `
    <h4 class="area-title" id="name_area">Área</h4> 
    <input class="input-name-area" type="text" id="input_name_area" placeholder="Insira o nome da área">
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
        'Diorito',
        'Diorito polido',
        'Lama',
        'Lana compacta',
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
        'Red sandstone'
    ];
    var idBloco = nomesDosBlocos.indexOf(material);
    console.log(idBloco + 1);
})

const btnClearProj = document.getElementById("clear_btn")

