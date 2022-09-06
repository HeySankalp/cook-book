import { createContext, useState } from "react";

export const FavoriteContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { }
});



function FavContextProvider({ children }) {

    const [favMeal, setFavMeal] = useState([]);

    function addFavorite(id) {
        setFavMeal((currentFavMealId) => [...currentFavMealId, id]);
    }

    function removeFavorite(id) {
        setFavMeal((currentFavMealId) => {
            return currentFavMealId.filter((mealIds) => mealIds !== id)
        })
    }

    const value = {
        ids: favMeal,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }

    return (
        <FavoriteContext.Provider value={value}>{children}</FavoriteContext.Provider>
    )
}

export default FavContextProvider