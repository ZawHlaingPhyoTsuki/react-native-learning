import { StyleSheet } from 'react-native'

import ThemedView from '../components/ThemedView'
import ThemedCard from '../components/ThemedCard'
import ThemedLogo from '../components/ThemedLogo'
import ThemedText from '../components/ThemedText'
import ThemedLink from '../components/ThemedLink'
import Spacer from "../components/Spacer"

const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedLogo />
            <Spacer />

            {/* { color: 'purple' } take priority over styles.title if another color in title */}
            <ThemedText style={styles.title} title>
                Home
            </ThemedText>
            <ThemedText style={{ marginTop: 10, marginBottom: 30 }}>
                Some Descrition
            </ThemedText>

            <ThemedCard>
                <ThemedText>Hello, this is a card</ThemedText>
            </ThemedCard>

            <ThemedLink href="/about" style={{ marginTop: 20 }}>
                <ThemedText>About Page</ThemedText>
            </ThemedLink>

            <ThemedLink href="/contact" style={{ marginTop: 20 }}>
                <ThemedText>Contact Page</ThemedText>
            </ThemedLink>
        </ThemedView>
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
    },
    linkBtn: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#000',
        color: '#fff'
    }
})