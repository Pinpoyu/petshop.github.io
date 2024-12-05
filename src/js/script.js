// Função para filtrar os pets conforme o texto de pesquisa
function filterPets() {
    // Obtém o valor de busca de nome e raça
    const searchName = document.getElementById('searchName').value.toLowerCase();
    const searchBreed = document.getElementById('searchBreed').value.toLowerCase();

    // Obtém todos os cartões de pets
    const petCards = document.querySelectorAll('.pet-card');

    // Percorre cada cartão e esconde ou mostra com base na pesquisa
    petCards.forEach(card => {
        const petName = card.getAttribute('data-name').toLowerCase();
        const petBreed = card.getAttribute('data-breed').toLowerCase();

        // Exibe ou esconde o cartão com base na comparação dos valores
        if (
            petName.includes(searchName) &&
            petBreed.includes(searchBreed)
        ) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Função para exibir o modal de interesse
function showInterestForm(petName) {
    // Exibe o modal de interesse
    const modal = document.getElementById('interest-modal');
    modal.style.display = 'block';

    // Preenche o campo do formulário com o nome do pet
    document.getElementById('pet').value = petName;

    // Lida com o fechamento do modal
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };

    // Fecha o modal se o usuário clicar fora dele
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Função para enviar o formulário de interesse
document.getElementById('interest-form').onsubmit = function(event) {
    event.preventDefault(); // Impede o envio real do formulário

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pet = document.getElementById('pet').value;
    
    // Aqui você pode adicionar a lógica para enviar esses dados a um servidor ou armazená-los
    alert(`Seu interesse foi registrado!\nPet: ${pet}\nNome: ${name}\nE-mail: ${email}`);

    // Fecha o modal
    document.getElementById('interest-modal').style.display = 'none';

    // Limpa o formulário
    document.getElementById('interest-form').reset();
};
