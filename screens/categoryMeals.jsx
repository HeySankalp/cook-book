import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from '../data/dummy-data';
import Mealitem from '../components/mealitem';
import MapMealItem from '../components/mapMealItem';


function Categorymeals({ navigation, route }) {

  const categoryId = route.params.categoryId;
  //--------------------------Setting dynamic title---------------------------\
  useLayoutEffect(() => {//                                                    \
    const catItem = CATEGORIES.find((category) => category.id === categoryId)// \
    navigation.setOptions({ title: catItem.title })//                            \
  }, [categoryId, navigation])//                                                  \                      
  //-------------------------------------------------------------------------------\


  //---------------function returning the functional component-----------\                                                                         //-|
  function mealItem(itemData) {//                                         \
    return <Mealitem itemData={itemData.item} />//                         \
  }//                                                                       \
  //-------------------------------------------------------------------------\


  //------------------Getting meals list according to category----------\ 
  const displayMeals = MEALS.filter((mealArrayItem) => {//                    \
    return mealArrayItem.categoryIds.indexOf(categoryId) >= 0;//               \   
  })//                                                                     \ 
  //------------------------------------------------------------------------\


  return (
    <MapMealItem data={displayMeals} renderItem={mealItem} />
  )
}
export default Categorymeals

