import { Image, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

import DarkLogo from '../assets/img/logo-dark.png'
import LightLogo from '../assets/img/logo-white.png'

const ThemedLogo = () => {

    const colorScheme = useColorScheme();
    const theme = Colors[colorScheme] ?? Colors.light;

    const logo = colorScheme === 'dark' ? DarkLogo : LightLogo;

    return (
        <Image source={logo}/>
    )
}

export default ThemedLogo
