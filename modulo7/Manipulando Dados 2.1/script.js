document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const resultsContainer = document.getElementById('results');

  // Função para buscar usuários na API do GitHub
  const searchUsers = async (query) => {
    resultsContainer.innerHTML = '';
    
    if (!query) {
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        displayUsers(data.items);
      } else {
        displayNoResults();
      }
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
      displayError();
    }
  };

  // Função para exibir os usuários encontrados
  const displayUsers = (users) => {
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');

      userCard.innerHTML = `
        <img src="${user.avatar_url}" alt="${user.login}">
        <div class="user-info">
          <a href="${user.html_url}" target="_blank">${user.login}</a>
        </div>
      `;

      resultsContainer.appendChild(userCard);
    });
  };

  const displayNoResults = () => {
    resultsContainer.innerHTML = '<p class="error-message">Não foram encontrados usuários para esta pesquisa.</p>';
  };

  // mensagem de erro na API
  const displayError = () => {
    resultsContainer.innerHTML = '<p class="error-message">Ocorreu um erro ao buscar. Tente novamente mais tarde.</p>';
  };

  // Adiciona evento 
  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    searchUsers(query);
  });

  // Permite a busca ao pressionar o enter
  searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      const query = searchInput.value.trim();
      searchUsers(query);
    }
  });
});