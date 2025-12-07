import { Image, StyleSheet, Text, View } from 'react-native'
import LogoWhite from '../assets/img/logo-white.png'

const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={LogoWhite} style={styles.img} />

            {/* { color: 'purple' } take priority over styles.title if another color in title */}
            <Text style={[styles.title, { color: 'purple' }]}>Home</Text>
            <Text style={{ marginTop: 10, marginBottom: 30 }}>Some Descrition</Text>

            <View style={styles.card}>
                <Text>Hello, this is a card</Text>
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        marginVertical: 20
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,0.1)'
    }
})