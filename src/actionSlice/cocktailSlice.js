import {createSlice} from '@reduxjs/toolkit'
import {ingredientsMerger} from "../Utils/helper";

export const cocktailSlice = createSlice({
    name: 'cocktail',
    initialState: {
        cocktails: [],
        filteredCocktails: [],
        searchHistory: [],
        currentCocktail: {}
    },
    reducers: {
        addCocktails: (state,
                       action) => {
            state.cocktails = ingredientsMerger(action.payload);
            state.filteredCocktails = ingredientsMerger(action.payload);
        },
        addSearchHistory: (state, action) => {
            if (!state.searchHistory.includes(action.payload)) {
                state.searchHistory.push(action.payload)
            }
        },
        setCurrentCocktail: (state, action) => {
            state.currentCocktail = ingredientsMerger(action.payload)
        },
        setFilteredCocktails: (state, action) => {
            if (action.payload.type === 'FILTER') {
                switch (action.payload.filterBy) {
                    case 'Ingredient':
                        state.filteredCocktails = state.cocktails.filter(cocktail => {
                            return cocktail.strIngredients.toLowerCase().includes(action.payload.filterCriteria.toLowerCase())
                        })
                        break;
                    case 'Glass':
                        state.filteredCocktails = state.cocktails.filter(cocktail => {
                            return cocktail.strGlass.toLowerCase().includes(action.payload.filterCriteria.toLowerCase())
                        })
                        break;
                    case 'Alcoholic':
                        state.filteredCocktails = state.cocktails.filter(cocktail => {
                            return cocktail.strAlcoholic.toLowerCase().includes(action.payload.filterCriteria.toLowerCase())
                        })
                        break;
                }
            } else if (action.payload.type === 'SORT') {
                state.filteredCocktails = state.cocktails.sort((a, b) => {
                    if (action.payload.sortBy == 'Date') {
                        return a.dateModified > b.dateModified ? 1 : -1;
                    } else if (action.payload.sortBy == 'Name') {
                        if (a.strDrink < b.strDrink) {
                            return -1;
                        }
                        if (a.strDrink > b.strDrink) {
                            return 1;
                        }
                        return 0;
                    }
                })
            }
        }

    },
})

export const {addCocktails, addSearchHistory, setCurrentCocktail, setFilteredCocktails} = cocktailSlice.actions

export default cocktailSlice.reducer