import {getRequest} from "./httpRequest";

export const getCocktailByName = (cocktail) => getRequest("http://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail)