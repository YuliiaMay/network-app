import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';
// import { RegistretionScreen } from './screens/RegistrationScreen';
import { LoginScreen } from './screens/LoginScreen';



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
    // <RegistretionScreen />
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
// 
});

