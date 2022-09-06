import { Text, View } from "react-native"


function Mapview({ itemArray, textStyle, viewStyle }) {
    return (
        <View style={viewStyle}>
            {
                itemArray.map((list) => <Text key={list} style={textStyle} ><Text style={{ color: 'brown' }}>▶{" "}</Text>{list}</Text>)
            }
        </View>
    )
}

export default Mapview


