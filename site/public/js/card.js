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
            for(let i = 0; i <= listCard.length; i++){
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