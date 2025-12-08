import { StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors';
import { useColorScheme } from 'react-native';

import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';
import ThemedLink from '../components/ThemedLink';

const About = () => {
    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <ThemedView style={[styles.container, { backgroundColor: theme.background }]}>
            <ThemedText style={[styles.title, { color: theme.text }]}>About Page</ThemedText>

            <ThemedLink href='/' style={{ marginTop: 20 }}>
                <ThemedText>Home</ThemedText>
            </ThemedLink>
        </ThemedView>
    )
}

export default About

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