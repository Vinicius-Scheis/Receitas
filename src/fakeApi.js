const recipes = [
    {
      id: 1,
      titulo: "Bolo de Chocolate",
      ingredientes: "Farinha, açúcar, cacau em pó, ovos, leite...",
      modoPreparo: "Misture os ingredientes, asse no forno...",
      imagem: "https://static.itdg.com.br/images/1200-675/bd14ed0d98530fb34b6f60a295382a7a/348000-original.jpg"
    },
    {
      id: 2,
      titulo: "Pizza Margherita",
      ingredientes: "Massa de pizza, molho de tomate, queijo mozzarella...",
      modoPreparo: "Espalhe o molho, coloque o queijo, asse no forno...",
      imagem: "https://anamariabraga.globo.com/wp-content/uploads/2020/08/pizza-margherita.jpg"
    },
    // Adicione mais receitas aqui...
  ];
  
  export function fetchRecipes() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(recipes);
      }, 1000);
    });
  }
  
  export default fetchRecipes;
  