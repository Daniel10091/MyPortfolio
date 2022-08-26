import { StatusBar } from 'expo-status-bar'
import { 
  SafeAreaView, 
  StyleSheet, 
} from 'react-native'
import Navigator from './src/components/Navigator'
import COLORS from './src/constants/Theme'

export default function App() {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar style="light" />
      <Navigator/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: COLORS.BlueViolet,
  },
})