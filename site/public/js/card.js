var cardPaz = document.getElementById('card_paz');
var cardCriatividade = document.getElementById('card_criatividade');
var cardEquilibrio = document.getElementById('card_equilibrio');
var cardElegancia = document.getElementById('card_elegancia');
const IndexCardPaz = cardPaz.innerHTML;
const IndexCardCriatividade = cardCriatividade.innerHTML;
const IndexCardEquilibrio = cardEquilibrio.innerHTML;
const IndexCardElegancia = cardElegancia.innerHTML;

cardPaz.addEventListener('click', () => {
    if (cardPaz.classList.contains('card')) {
        cardPaz.classList.remove('card');
        cardPaz.classList.add('growup');
        cardPaz.style.backgroundColor = '#758749'
        document.body.style.overflow = 'hidden';
        cardPaz.innerHTML = `
        <div class='letters-card'>
            <span>P</span>
            <span>A</span>
            <span>Z</span>
        </div>
        `;
    }
    document.addEventListener('keydown', function(event) {
        if(event.key === 'Escape'){

            cardPaz.classList.remove('growup');
            cardPaz.classList.add('card');
            document.body.style.overflow = 'auto';
            cardPaz.innerHTML = IndexCardPaz;
        }
    })
});

cardCriatividade.addEventListener('click', () => {
    if (cardCriatividade.classList.contains('card')) {
        cardCriatividade.classList.remove('card');
        cardCriatividade.classList.add('growup');
        cardCriatividade.style.backgroundColor = '#D68B53'
        document.body.style.overflow = 'hidden';
        cardCriatividade.innerHTML = `
        <div class='letters-card'>
            <span>C</span>
            <span>R</span>
            <span>I</span>
            <span>A</span>
            <span>T</span>
            <span>I</span>
            <span>V</span>
            <span>I</span>
            <span>D</span>
            <span>A</span>
            <span>D</span>
            <span>E</span>
        </div>       
        `;
    } 
    document.addEventListener('keydown', function(event) {
        if(event.key === 'Escape'){

            cardCriatividade.classList.remove('growup');
            cardCriatividade.classList.add('card');
            document.body.style.overflow = 'auto';
            cardCriatividade.innerHTML = IndexCardCriatividade;
        }
    })
});

cardEquilibrio.addEventListener('click', () => {
    if (cardEquilibrio.classList.contains('card')) {
        cardEquilibrio.classList.remove('card');
        cardEquilibrio.classList.add('growup');
        cardEquilibrio.style.backgroundColor = '#8E9593'
        document.body.style.overflow = 'hidden';
        cardEquilibrio.innerHTML = `
        <div class='letters-card'>
            <span>E</span>
            <span>Q</span>
            <span>U</span>
            <span>I</span>
            <span>L</span>
            <span>Í</span>
            <span>B</span>
            <span>R</span>
            <span>I</span>    
            <span>O</span>           
        </div>        
        `;
    } 
    document.addEventListener('keydown', function(event) {
        if(event.key === 'Escape'){

            cardEquilibrio.classList.remove('growup');
            cardEquilibrio.classList.add('card');
            document.body.style.overflow = 'auto';
            cardEquilibrio.innerHTML = IndexCardEquilibrio;
        }
    })
});

cardElegancia.addEventListener('click', () => {
    if (cardElegancia.classList.contains('card')) {
        cardElegancia.classList.remove('card');
        cardElegancia.classList.add('growup');
        cardElegancia.style.backgroundColor = '#563C85'
        document.body.style.overflow = 'hidden';
        cardElegancia.innerHTML = `
        <div class='letters-card'>
            <span>E</span>
            <span>L</span>
            <span>E</span>
            <span>G</span>
            <span>Â</span>
            <span>N</span>
            <span>C</span>
            <span>I</span>
            <span>A</span>
        </div>
        `;
    } 
    document.addEventListener('keydown', function(event) {
        if(event.key === 'Escape'){

            cardElegancia.classList.remove('growup');
            cardElegancia.classList.add('card');
            document.body.style.overflow = 'auto';
            cardElegancia.innerHTML = IndexCardElegancia;
        }
    })
});