import { CATEGORIES } from '../data/dummy-data'
import { FlatList } from 'react-native'
import Categorytile from '../components/categorytile'






function Categories({navigation}) {

    let categoryItem = (itemData)=>{
        function pressHandler() {
            navigation.navigate('Categorymeals',{
                categoryId:itemData.item.id
            });
        }

        return <Categorytile 
        title={itemData.item.title} 
        color={itemData.item.color} 
        onPress={pressHandler} />
    }

    return (
            <FlatList data={CATEGORIES}
                renderItem={categoryItem}
                keyExtractor={item => item.id}
                numColumns='2'
            />  
    )
}

export default Categories
