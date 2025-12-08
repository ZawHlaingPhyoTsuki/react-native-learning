import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const Contact = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Page</Text>

            <Link href='/' style={styles.linkBtn}>Home</Link>
        </View>
    )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    linkBtn: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#000',
        color: '#fff'
    }
})