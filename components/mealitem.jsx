import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import {useNavigation} from '@react-navigation/native'

function Mealitem({ itemData, onPress }) {

    const navigation = useNavigation();

function onPressHandler() {
    navigation.navigate('Mealcontent',{mealId : itemData.id})
}

    return (
        <View style={styles.mealCon}>
            <Pressable onPress={onPressHandler}  android_ripple={{ color: '#ebebeb' }} style={({ pressed }) => [styles.press, pressed && styles.pressed]}>
                <View style={styles.mealImgCon}>
                    <Image resizeMode="cover" style={styles.img} source={{ uri: itemData.imageUrl }} />
                </View>
                <View style={styles.mealItemTitle}>
                    <Text style={styles.mealTitleText}>{itemData.title}</Text>
                </View>
                <View style={styles.mealItemInfo}>
                    <Text style={styles.mealInfoText}>{itemData.affordability}</Text>
                    <Text style={styles.mealInfoText}>{itemData.complexity}</Text>
                    <Text style={styles.mealInfoText}>{itemData.duration} mins</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Mealitem

const styles = StyleSheet.create({
    mealCon: {
        margin: 10,
        height: 225,
        flex: 1,
        borderRadius: 12,
        elevation: 4,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    press: {
        flex: 1
    },
    pressed: {
        opacity: 0.85
    },
    mealImgCon: {
        flex: 1,
        maxHeight: '100%'

    },
    img: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    mealItemTitle: {
        paddingTop: 5,
        alignItems: 'center'
    },
    mealTitleText: {
        fontWeight: 'bold',
        fontSize: 23
    },
    mealItemInfo: {
        // height:50,
        // borderWidth:1,
        paddingHorizontal: 15,
        paddingVertical: 10,
        alignItems: 'flex-end',
        flexDirection: 'row',
        justifyContent: 'space-evenly'

    },
    mealInfoText: {
        fontSize: 17,
        color: '#575757'
    }
})