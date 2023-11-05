var detailsArea = document.getElementById('info_project');

var numberArea = 1;

var btnCreateProj = document.getElementById('btn_add_area');

var checkCir = document.getElementById('check_cir');
var checkPar = document.getElementById('check_par');

var textAreaCount = document.getElementById("text_desc");

checkCir.addEventListener('change', () => {
    if(checkCir.checked){
        checkPar.checked = false;
    } else{
        checkPar.checked = true;
    };
});

checkPar.addEventListener('change', () => {
    if(checkPar.checked){
        checkCir.checked = false;
    } else{
        checkCir.checked = true;
    };
});

btnCreateProj.addEventListener('click', () => {
    var numDetails = `dtl${numberArea}`;
    var newDetails = document.createElement('details');
    newDetails.className = 'dtl-area';
    newDetails.id = numDetails;

    if(checkPar.checked){
        newDetails.innerHTML = `
        <summary class="area-title" id="name_area">Área ${numberArea}</summary> 
        <input class="input-name-area" type="text" id="input_name_area" placeholder="Insira o nome da área">
        <div class="area-largura">
            <span>Largura:</span>
            <input class="input-num" type="number" name="" id="">
        </div>
        <div class="area-comprimento">
            <span>Comprimento:</span>
            <input class="input-num" type="number" name="" id="">
        </div>
        <div class="area-altura">
            <span>Altura:</span>
            <input class="input-num" type="number" name="" id="">
        </div>
       <div class="area-material">
            <span>Material:</span>
            <input class="input-material" type="text" placeholder="Material">
            <i class="fa-solid fa-cube"></i>
        </div> 
        <button class="del-area" id="btn_del_area">Deletar área</button>         
        `;
    }
    if(checkCir.checked){
        newDetails.innerHTML = `
        <summary class="area-title" id="name_area">Área ${numberArea}</summary> 
        <input class="input-name-area" type="text" id="input_name_area" placeholder="Insira o nome da área">
        <div class="area-largura">
             <span>Raio:</span>
             <input class="input-num" type="number" name="" id="">
        </div>
        <div class="area-altura">
             <span>Altura:</span>
             <input class="input-num" type="number" name="" id="">
        </div>
        <div class="area-material">
             <span>Material:</span>
             <input class="input-material" type="text" placeholder="Material">
             <i class="fa-solid fa-cube"></i>
        </div> 
        <button class="del-area" id="btn_del_area">Deletar área</button>                 
        `;
    }

    newDetails.querySelector('#input_name_area').addEventListener('keyup', () => {
        var name = newDetails.querySelector('#input_name_area').value;
        newDetails.querySelector('#name_area').innerText = name;
        if(name == '') newDetails.querySelector('#name_area').innerText = `Área ${numberArea}`;
    })
    
    newDetails.querySelector('#btn_del_area').addEventListener('click', () => {
        detailsArea.removeChild(newDetails);
    });

    detailsArea.appendChild(newDetails);
    numberArea++;
});

textAreaCount.addEventListener('keyup', (e) => {
    var contador = document.getElementById('count');
    var tamanhoTextArea = textAreaCount.value;
    contador.innerText = `${tamanhoTextArea.length}/2000`;
    textAreaCount.value = textAreaCount.value.slice(0, 2000);

    if(tamanhoTextArea.length >= 2000){
        contador.style.color = 'red';
    } else{
        contador.style.color = 'green'
    };
});