
import './global.css';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { GezitRNProvider } from '@gezit-native/ui/provider';
import { ActionsheetBasic } from './demo/actionsheet/actionsheet-basic';

export default function App() {
  return (
    <GezitRNProvider>
      <View style={styles.container}>
        <ActionsheetBasic />
        <StatusBar style="auto" />
      </View>
    </GezitRNProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
