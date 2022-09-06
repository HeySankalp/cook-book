import { View, FlatList, StyleSheet } from "react-native"

function MapMealItem({data, renderItem}) {
  return (
    <View style={styles.mealsCon}>
      <FlatList
        data={data}
        renderItem={renderItem}
      // keyExtractor={item=>item.id}
      />
    </View>
  )
}

export default MapMealItem

const styles = StyleSheet.create({
    mealsCon: {
      flex: 1,
      padding: 10
    }
  })