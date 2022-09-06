// import { useContext } from "react";
// import { FavoriteContext } from "../store/context/favorite";
import MapMealItem from "../components/mapMealItem";
import { MEALS } from "../data/dummy-data";
import Mealitem from "../components/mealitem";
import {useSelector} from 'react-redux'

import { StyleSheet, Text, View } from "react-native";

function Favorites() {

    function Favmeals(itemData) {
        return <Mealitem itemData={itemData.item} />
    }

    //--------------- for context--------------------
    // const favMealCxt = useContext(FavoriteContext);

    
    //---------------- for redux---------------------
    const favMealIds = useSelector((state)=>state.FavMealIds.ids)
    
    // get the list of favorite marked Meals
    const favMealList = MEALS.filter((mealItem) => favMealIds.includes(mealItem.id))


    if (favMealList.length == 0) {
        return <View style={styles.blankView}>
            <Text style={styles.blankText}>You have no favorite meals yet.</Text>
        </View>
    }

    return (
        <MapMealItem data={favMealList} renderItem={Favmeals} />
    )
}

export default Favorites

const styles = StyleSheet.create({
    blankView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blankText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    }
})