import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'

const Register = () => {
    return (
        <ThemedView style={styles.container}>

            <Spacer />

            <ThemedText title style={styles.title} >
                Register for an Account
            </ThemedText>

            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: '#f2f2f2' }}>Register</Text>
            </ThemedButton>

            <Spacer height={100} />

            <Link href="/login" replace>
                <ThemedText style={styles.registerText}>
                    Login instead
                </ThemedText>
            </Link>
        </ThemedView>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        textAlign: "center",
        fontSize: 18,
        marginBottom: 30
    },
    registerText: {
        textAlign: "center",
    }
})