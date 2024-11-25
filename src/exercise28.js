function fetchUserData() {
  return new Promise((resolve) => {
      setTimeout(() => {
          const users = [
              { id: 1, nome: "Alice", idade: 25 },
              { id: 2, nome: "Bob", idade: 17 },
              { id: 3, nome: "Charlie", idade: 30 },
              { id: 4, nome: "Diana", idade: 15 },
          ];
          resolve(users);
      }, 2000);
  });
}

function filterByAge(users) {
  return users.filter(user => user.idade > 18);
}

fetchUserData()
  .then(users => {
      console.log("Dados obtidos:", users);
      const filteredUsers = filterByAge(users);
      console.log("Usuários maiores de 18 anos:", filteredUsers);
  })
  .catch(err => console.error("Erro:", err));
