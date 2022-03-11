function createRecipeList( recipes ){

    const listOfRecipes = document.getElementById('list-of-recipes');

    recipes.map(( recipe ) => {

        const listItem = document.createElement('li');
        listItem.setAttribute('id', 'list-item');

        listItem.textContent = recipe.title;

        listOfRecipes.appendChild(listItem);

    })

}

export default createRecipeList;