export const parseDate = (date) => {
    if (date !== null) {
        const parsedDate = date.split(' ')[0].split('-');
        return parsedDate[2] + '-' + parsedDate[1] + '-' + parsedDate[0];
    }
}

export const ingredientsMerger = (drinkList) => {
    drinkList.map(drink => {
        const ingridents = [];
        if(drink.strIngredient1 !== null) { ingridents.push(drink.strIngredient1) };
        if(drink.strIngredient2 !== null) { ingridents.push(drink.strIngredient2) };
        if(drink.strIngredient3 !== null) { ingridents.push(drink.strIngredient3) };
        if(drink.strIngredient4 !== null) { ingridents.push(drink.strIngredient4) };
        if(drink.strIngredient5 !== null) { ingridents.push(drink.strIngredient5) };
        if(drink.strIngredient6 !== null) { ingridents.push(drink.strIngredient6) };
        if(drink.strIngredient7 !== null) { ingridents.push(drink.strIngredient7) };
        if(drink.strIngredient8 !== null) { ingridents.push(drink.strIngredient8) };
        if(drink.strIngredient9 !== null) { ingridents.push(drink.strIngredient9) };
        if(drink.strIngredient10 !== null) { ingridents.push(drink.strIngredient10) };
        if(drink.strIngredient11 !== null) { ingridents.push(drink.strIngredient11) };
        if(drink.strIngredient12 !== null) { ingridents.push(drink.strIngredient12) };
        if(drink.strIngredient13 !== null) { ingridents.push(drink.strIngredient13) };
        if(drink.strIngredient14 !== null) { ingridents.push(drink.strIngredient14) };
        if(drink.strIngredient15 !== null) { ingridents.push(drink.strIngredient15) };

        drink.strIngredients = ingridents.join();
    })
    return drinkList;
}