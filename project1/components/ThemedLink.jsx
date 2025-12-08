import { StyleSheet, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'
import { Link } from 'expo-router';

const ThemedLink = ({ style, ...props }) => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    return (
        <Link
            style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
            {...props}
        />
    )
}

export default ThemedLink

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 5,
    }
})
    