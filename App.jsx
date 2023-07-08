import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
import { RegistretionScreen } from './screens/RegistrationScreen';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  };
  return (
    <RegistretionScreen/>
  );
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     backgroundColor: '#FFFFFF',
    // },
    // image: {
    //     flex: 1,
    //     resizeMode: "cover"
    // },
    // form: {
    //     backgroundColor: '#FFFFFF',
    //     borderRadius: 25
    // }
});

