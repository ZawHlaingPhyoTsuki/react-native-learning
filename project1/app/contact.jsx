import { StyleSheet } from 'react-native'

import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedLink from '../components/ThemedLink'

const Contact = () => {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.title}>Contact Page</ThemedText>

            <ThemedLink href='/' style={{ marginTop: 20 }}>
                <ThemedText>Home</ThemedText>
            </ThemedLink>
        </ThemedView>
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