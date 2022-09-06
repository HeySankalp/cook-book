import { StyleSheet, View } from "react-native"

function Card({ children, style }) {
    return (
        <View style={[styles.cardCon, style ]}>
            {children}
        </View>
    )
}

export default Card


const styles = StyleSheet.create({
    cardCon: {
        marginHorizontal: 5,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    }
})