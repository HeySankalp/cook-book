// import { FavoriteContext } from "../store/context/favorite";
import { useLayoutEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Card from "../components/card";
import Mapview from "../components/mapview";
import { MEALS } from '../data/dummy-data';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";


function Mealcontent({ route, navigation }) {

  const mealId = route.params.mealId
  // const favMealCxt = useContext(FavoriteContext)
  const favMealIds = useSelector((state)=>state.FavMealIds.ids)
  const dispatch = useDispatch();

  const mealDetails = MEALS.find((mealItem) => mealItem.id === mealId)
  const isMealFavorite = favMealIds.includes(mealDetails.id)



  // ---------------------for context------------------------------
  
  function favIconPressHandler() {
    if(isMealFavorite){
      // favMealCxt.removeFavorite(mealDetails.id)
      dispatch(removeFavorite({id: mealDetails.id}))
    }else{
      // favMealCxt.addFavorite(mealDetails.id)
      dispatch(addFavorite({id: mealDetails.id}))
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: mealDetails.title,
      headerRight: () => <AntDesign
        color='white' size={20}
        onPress={favIconPressHandler}
        name={isMealFavorite ? 'star' : 'staro'}
      />
    })
  }, [navigation, mealDetails, favIconPressHandler])



  return (
    <View style={styles.mealDetailCon}>
      <View style={styles.imgCon}>
        <Image style={styles.img} resizeMode='cover' source={{ uri: mealDetails.imageUrl }} />
      </View>
      <ScrollView style={styles.scrollView}>
        <Card style={styles.cardCon}>
          <Text style={styles.cardTitle}>Meal profile</Text>
          <Text style={styles.checklist}>{mealDetails.isVegan ? <AntDesign style={styles.iconY} name="checkcircle" /> : <AntDesign style={styles.iconN} name="closecircle" />} : Vegan</Text>
          <Text style={styles.checklist}>{mealDetails.isVegetarian ? <AntDesign style={styles.iconY} name="checkcircle" /> : <AntDesign style={styles.iconN} name="closecircle" />} : Vegetarian</Text>
          <Text style={styles.checklist}>{mealDetails.isGlutenFree ? <AntDesign style={styles.iconY} name="checkcircle" /> : <AntDesign style={styles.iconN} name="closecircle" />} : Glutan free</Text>
          <Text style={styles.checklist}>{mealDetails.isLactoseFree ? <AntDesign style={styles.iconY} name="checkcircle" /> : <AntDesign style={styles.iconN} name="closecircle" />} : Lactose free</Text>
        </Card>
        <Card style={styles.cardCon}>
          <Text style={styles.cardTitle}>Ingredients</Text>
          <Mapview viewStyle={styles.cardListView} textStyle={styles.cardListText} itemArray={mealDetails.ingredients} />
        </Card>
        <Card>
          <Text style={styles.cardTitle}>Steps</Text>
          <Mapview viewStyle={styles.cardListView} textStyle={styles.cardListText} itemArray={mealDetails.steps} />
        </Card>

      </ScrollView>
    </View>
  )
}

export default Mealcontent


const styles = StyleSheet.create({
  mealDetailCon: {
    flex: 1
  },
  imgCon: {
    flex: 1,
    maxHeight: 250,
    elevation: 8,
    // margin:5
  },
  img: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  scrollView: {
    flex: 1,
    marginBottom: 10
  },
  cardTitle: {
    marginHorizontal: 20,
    marginVertical: 5,
    paddingVertical: 2,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'brown',
    borderBottomWidth: 2,
    borderColor: 'brown'
  },
  cardListView: {
    marginBottom: 10
  },
  cardListText: {
    // borderWidth:1,
    marginVertical: 3,
    fontSize: 20,
    paddingLeft: 20
  },
  checklist: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 7,
    paddingHorizontal: 20
  },
  iconY: {
    color: 'green',
    fontSize: 20
  },
  iconN: {
    color: 'red',
    fontSize: 20
  }
})