// Enviando dados do JS para o DOM
//-------------------------------------------
// CARDS NO DOM
async function loadUsers() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await res.json();

        const container = document.getElementById('cards');
        users.forEach(u => { // For integrado ao array, simples e facil
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `<strong>${u.name}</strong><br>${u.email}`;
            container.appendChild(card);
        }); // Gera automáticamente no DOM quando pega um novo usuario
    } catch (err) {
        console.error("Erro ao carregar usuario:", err);
    }
}
loadUsers();