var cardPaz = document.getElementById('card_paz');
var cardCriatividade = document.getElementById('card_criatividade');
var cardEquilibrio = document.getElementById('card_equilibrio');
var cardElegancia = document.getElementById('card_elegancia');

var textPaz = document.getElementById('text_card_paz');
var textCria = document.getElementById('text_card_criatividade');
var textEq = document.getElementById('text_card_equilibrio');
var textEl = document.getElementById('text_card_elegancia');

var btnClosePaz = document.getElementById('btn_close_paz')
var btnCloseCriatividade = document.getElementById('btn_close_criatividade')
var btnCloseEquilibrio = document.getElementById('btn_close_equilibrio')
var btnCloseElegancia = document.getElementById('btn_close_elegancia')

var namePaz = document.getElementById('name_valuesP')
var nameCriatividade = document.getElementById('name_valuesC')
var nameEquilibrio = document.getElementById('name_valuesEq')
var nameElegancia = document.getElementById('name_valuesEl')

const imgPaz = cardPaz.style.backgroundImage
const imgCria = cardCriatividade.style.backgroundImage
const imgEq = cardEquilibrio.style.backgroundImage
const imgEl = cardEquilibrio.style.backgroundImage

var listCard = [cardPaz, cardCriatividade, cardElegancia, cardEquilibrio]
var textCards = [textPaz, textCria, textEl, textEq]
var listBtn = [btnClosePaz, btnCloseCriatividade, btnCloseElegancia, btnCloseEquilibrio]
var listNames = [namePaz, nameCriatividade, nameElegancia, nameEquilibrio]
var listImg = [imgPaz, imgCria, imgEl, imgEq]

function abreCard(card){
    
    for(var i = 0; i < listCard.length; i++){
        var texto = textCards[i];
        var btn = listBtn[i];
        var name = listNames[i];
        var img = listImg[i];
        
        btn.style.zIndex = '4'

        var cards = listCard[i];
        var texto = textCards[i];

        cards.style.width = '15%';
        texto.classList.remove('text-card-show')
        btn.classList.remove('btn-close-show')
        name.style.width = '100%'

        cards.style.backgroundImage = img

        if(listCard[i] == card){
            card.style.width = '60%';
            texto.classList.add('text-card-show')
            btn.classList.add('btn-close-show')
            name.style.width = '20%'
            card.style.backgroundImage = 'none'
        } else{
            var cardNoSelected = listCard[i];
            cardNoSelected.style.width = '6%';
            texto.classList.remove('text-card-show')
            btn.classList.remove('btn-close-show')
            name.style.width = '100%'
            cards.style.backgroundImage = img
        }
        btn.addEventListener('click', () => {
            for(var i = 0; i <= listCard.length; i++){
                var cards = listCard[i];
                var texto = textCards[i];
                var btns = listBtn[i];
                
                cards.style.width = '15%';
                texto.classList.remove('text-card-show')
                btns.classList.remove('btn-close-show')
                name.style.width = '100%'
                cards.style.backgroundImage = img
            }
        })
    }
}

namePaz.addEventListener('click', () => {
    abreCard(cardPaz)
})
nameCriatividade.addEventListener('click', () => {
    abreCard(cardCriatividade)
})
nameElegancia.addEventListener('click', () => {
    abreCard(cardElegancia)
})
nameEquilibrio.addEventListener('click', () => {
    abreCard(cardEquilibrio)
})

var primeiroButton = document.getElementById('primeiro_button')
var segundoButton = document.getElementById('segundo_button')
var terceiroButton = document.getElementById('terceiro_button')
var quartoButton = document.getElementById('quarto_button')


var divCardsAbout = document.getElementById('third_section')
var distancia = 0

primeiroButton.addEventListener('click', () => {
    primeiroButton.style.backgroundColor = 'green'

    segundoButton.style.backgroundColor = 'transparent'
    terceiroButton.style.backgroundColor = 'transparent'
    quartoButton.style.backgroundColor = 'transparent'

    

    distancia = 0
    divCardsAbout.style.marginLeft = distancia + 'px';
})

segundoButton.addEventListener('click', () => {
    segundoButton.style.backgroundColor = 'green'

    primeiroButton.style.backgroundColor = 'transparent'
    terceiroButton.style.backgroundColor = 'transparent'
    quartoButton.style.backgroundColor = 'transparent'

    

    distancia = -916
    divCardsAbout.style.marginLeft = distancia + 'px';
})

terceiroButton.addEventListener('click', () => {
    terceiroButton.style.backgroundColor = 'green'

    segundoButton.style.backgroundColor = 'transparent'
    primeiroButton.style.backgroundColor = 'transparent'
    quartoButton.style.backgroundColor = 'transparent'
    

    distancia = -1848
    divCardsAbout.style.marginLeft = distancia + 'px';
})

quartoButton.addEventListener('click', () => {
    quartoButton.style.backgroundColor = 'green'

    segundoButton.style.backgroundColor = 'transparent'
    terceiroButton.style.backgroundColor = 'transparent'
    primeiroButton.style.backgroundColor = 'transparent'
    

    distancia = -2750
    divCardsAbout.style.marginLeft = distancia + 'px';
})

var btnOpen1 = document.getElementById('open_btn1');
var text1 = document.getElementById('txt_1')
var iconArrow1 = document.getElementById('icon_arrow1')
var clique1 = 0

var btnOpen2 = document.getElementById('open_btn2');
var text2 = document.getElementById('txt_2')
var iconArrow2 = document.getElementById('icon_arrow2')
var clique2 = 0

var btnOpen3 = document.getElementById('open_btn3');
var text3 = document.getElementById('txt_3')
var iconArrow3 = document.getElementById('icon_arrow3')
var clique3 = 0

var btnOpen4 = document.getElementById('open_btn4');
var text4 = document.getElementById('txt_4')
var iconArrow4 = document.getElementById('icon_arrow4')
var clique4 = 0

var btnOpen5 = document.getElementById('open_btn5');
var text5 = document.getElementById('txt_5')
var iconArrow5 = document.getElementById('icon_arrow5')
var clique5 = 0

var btnOpen6 = document.getElementById('open_btn6');
var text6 = document.getElementById('txt_6')
var iconArrow6 = document.getElementById('icon_arrow6')
var clique6 = 0

btnOpen1.addEventListener('click', () => {
    if(clique1 == 0){
        btnOpen1.style.marginTop = '200px'
        setTimeout(() => {
            text1.style.opacity = '1'
        }, 100);
        iconArrow1.classList.remove('fa-caret-up')
        iconArrow1.classList.add('fa-caret-down')
        clique1++
    } else{
        text1.style.opacity = '0'
        setTimeout(() => {            
            btnOpen1.style.marginTop = '500px'
        }, 200);
        iconArrow1.classList.add('fa-caret-up')
        iconArrow1.classList.remove('fa-caret-down')
        clique1 = 0
    }
})


btnOpen2.addEventListener('click', () => {
    if(clique2 == 0){
        btnOpen2.style.marginTop = '200px'
        setTimeout(() => {
            text2.style.opacity = '2'
        }, 100);
        iconArrow2.classList.remove('fa-caret-up')
        iconArrow2.classList.add('fa-caret-down')
        clique2++
    } else{
        text2.style.opacity = '0'
        setTimeout(() => {            
            btnOpen2.style.marginTop = '482px'
        }, 200);
        iconArrow2.classList.add('fa-caret-up')
        iconArrow2.classList.remove('fa-caret-down')
        clique2 = 0
    }
})

btnOpen3.addEventListener('click', () => {
    if(clique3 == 0){
        btnOpen3.style.marginTop = '200px'
        setTimeout(() => {
            text3.style.opacity = '3'
        }, 100);
        iconArrow3.classList.remove('fa-caret-up')
        iconArrow3.classList.add('fa-caret-down')
        clique3++
    } else{
        text3.style.opacity = '0'
        setTimeout(() => {            
            btnOpen3.style.marginTop = '482px'
        }, 200);
        iconArrow3.classList.add('fa-caret-up')
        iconArrow3.classList.remove('fa-caret-down')
        clique3 = 0
    }
})

btnOpen4.addEventListener('click', () => {
    if(clique4 == 0){
        btnOpen4.style.marginTop = '200px'
        setTimeout(() => {
            text4.style.opacity = '4'
        }, 400);
        iconArrow4.classList.remove('fa-caret-up')
        iconArrow4.classList.add('fa-caret-down')
        clique4++
    } else{
        text4.style.opacity = '0'
        setTimeout(() => {            
            btnOpen4.style.marginTop = '500px'
        }, 100);
        iconArrow4.classList.add('fa-caret-up')
        iconArrow4.classList.remove('fa-caret-down')
        clique4 = 0
    }
})

btnOpen5.addEventListener('click', () => {
    if(clique5 == 0){
        btnOpen5.style.marginTop = '200px'
        setTimeout(() => {
            text5.style.opacity = '5'
        }, 100);
        iconArrow5.classList.remove('fa-caret-up')
        iconArrow5.classList.add('fa-caret-down')
        clique5++
    } else{
        text5.style.opacity = '0'
        setTimeout(() => {            
            btnOpen5.style.marginTop = '500px'
        }, 200);
        iconArrow5.classList.add('fa-caret-up')
        iconArrow5.classList.remove('fa-caret-down')
        clique5 = 0
    }
})

btnOpen6.addEventListener('click', () => {
    if(clique6 == 0){
        btnOpen6.style.marginTop = '200px'
        setTimeout(() => {
            text6.style.opacity = '6'
        }, 100);
        iconArrow6.classList.remove('fa-caret-up')
        iconArrow6.classList.add('fa-caret-down')
        clique6++
    } else{
        text6.style.opacity = '0'
        setTimeout(() => {            
            btnOpen6.style.marginTop = '500px'
        }, 200);
        iconArrow6.classList.add('fa-caret-up')
        iconArrow6.classList.remove('fa-caret-down')
        clique6 = 0
    }
})