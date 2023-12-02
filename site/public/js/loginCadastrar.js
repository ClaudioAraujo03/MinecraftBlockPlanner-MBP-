var nomeInput = document.getElementById('nome_input')
var emailInput = document.getElementById('email_input')
var senhaInput = document.getElementById('senha_input')
var nickInput = document.getElementById('nick_input')
var dtNascInput = document.getElementById('dtNasc_input') 

const btnCadastrar = document.getElementById('btn_cadastro').addEventListener('click', () => {
    var nomeVar = nomeInput.value;
    var emailVar = emailInput.value;
    var senhaVar = senhaInput.value;
    var nickVar = nickInput.value;
    var dtNascVar = dtNascInput.value;

    var spanValidData = document.getElementById('valid_span');
    
    nomeInput.placeholder = '';
    emailInput.placeholder = '';
    senhaInput.placeholder = '';
    nickInput.placeholder = '';
    spanValidData.innerText = '';


    const regexNum = /[0-9]/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const regexLow = /[a-z]/;
    const regexUp = /[A-Z]/;

    var erros = 0

    if(nomeVar == '' || regexNum.test(nomeVar)){
        nomeInput.value = '';
        nomeInput.placeholder = 'Nome inválido';
        erros++;
    }
    if(emailVar == '' || !regexEmail.test(emailVar)){
        emailInput.value = '';
        emailInput.placeholder = 'Email inválido';
        erros++;
    }
    if(senhaVar == ''){
        senhaInput.value = '';
        senhaInput.placeholder = 'Senha inválida';
        erros++;  
        resetaValidacao()    
    } else if(!regexNum.test(senhaVar) || !regexLow.test(senhaVar) || !regexUp.test(senhaVar) || senhaVar.length < 8){
        senhaInput.value = '';
        senhaInput.placeholder = 'Senha deve ter a-z, A-Z, 0-9 e tamanho 8 ';
        erros++;
        resetaValidacao()
    }
    if(nickVar == '' || nickVar.length < 5){
        nickInput.value = '';
        nickInput.placeholder = 'Nick não pode estar vazio e deve ter no min 5 caractéres';
        erros++;
    }
    if(dtNascVar == ''){
        spanValidData.innerText = 'Data inválida';
        erros++;
    }

    if(erros == 0){
        fetch("/login/cadastrar", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            nickServer: nickVar,
            dtNascServer: dtNascVar
          }),
        })
          .then(function (resposta) {
            console.log("resposta: ", resposta);
    
            if (resposta.ok) {
              var card = document.getElementById('card');
              card.innerHTML = `
              <div class="content-card">
                <img src="../assets/happy.gif" alt="">
                <h6 id="text_content">
                  Isso é muito bom! <br> Seu cadastro foi realizado com sucesso.
                </h6>
              </div>
              `;
              card.style.display = 'flex';
              setTimeout(() => {
                window.location = "loginSignup.html";
              }, "3000");
    
            } else {
              var card = document.getElementById('card');
              card.innerHTML = `
              <div class="content-card">
                <h6 id="text_content">
                  Já existe uma conta com este email.
                </h6>
              </div>
              `;
              setTimeout(() => {
                card.style.display = 'none'
              }, "3000");
              card.style.display = 'flex';
              throw "Houve um erro ao tentar realizar o cadastro!, erro no HTML";
            }
          })
          .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
          });
    
        return false;
    }
})

function resetaValidacao(){
  
  var verificaNum = document.getElementById('ver_num');
  var verificaNumIcon = document.getElementById('icon_num');

  var verificaMai = document.getElementById('ver_mai');
  var verificaMaiIcon = document.getElementById('icon_mai');

  var verificaMin = document.getElementById('ver_min');
  var verificaMinIcon = document.getElementById('icon_min');

  var verificaLen = document.getElementById('ver_len');
  var verificaLenIcon = document.getElementById('icon_len');
  
  verificaNum.style.color = 'red';
  verificaNumIcon.classList.remove('fa-circle-check')
  verificaNumIcon.classList.add('fa-xmark')
  verificaMai.style.color = 'red';
  verificaMaiIcon.classList.remove('fa-circle-check')
  verificaMaiIcon.classList.add('fa-xmark')
  verificaMin.style.color = 'red';
  verificaMinIcon.classList.remove('fa-circle-check')
  verificaMinIcon.classList.add('fa-xmark')
  verificaLen.style.color = 'red';
  verificaLenIcon.classList.remove('fa-circle-check')
  verificaLenIcon.classList.add('fa-xmark')
}