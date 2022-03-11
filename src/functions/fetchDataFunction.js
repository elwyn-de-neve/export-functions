import axios from "axios";
import createRecipeList from "./createRecipeList";

async function fetchData( searchQuery ){
    try {

        const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
            params: {
                apiKey: '8df2810123984ed5b72c7e98490fc529',
                ingredients: searchQuery,
                number: 3
            },
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log( response.data );
        createRecipeList( response.data )


    } catch ( e ) {
        console.error( e );
    }

}

export default fetchData;
