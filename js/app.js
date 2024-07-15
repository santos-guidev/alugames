document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.dashboard__item__button');

    function alterarStatus(id) {
        const gameItem = document.getElementById(`game-${id}`);
        const button = gameItem.querySelector('.dashboard__item__button');
        const imgContainer = gameItem.querySelector('.dashboard__item__img');

        if (button.classList.contains('dashboard__item__button--return')) {
            if (!confirm('Você realmente quer devolver este jogo?')) {
                return;
            }
            button.textContent = 'Alugar';
            button.classList.remove('dashboard__item__button--return');
            imgContainer.classList.remove('dashboard__item__img--rented');
        } else {
            button.textContent = 'Devolver';
            button.classList.add('dashboard__item__button--return');
            imgContainer.classList.add('dashboard__item__img--rented');
        }

        imprimirJogosAlugados();
    }

    function imprimirJogosAlugados() {
        const rentedGames = document.querySelectorAll('.dashboard__item__img--rented').length;
        console.log(`Jogos alugados: ${rentedGames}`);
    }

    buttons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const id = this.closest('.dashboard__items__item').id.split('-')[1];
            alterarStatus(id);
        });
    });

    imprimirJogosAlugados();
});
