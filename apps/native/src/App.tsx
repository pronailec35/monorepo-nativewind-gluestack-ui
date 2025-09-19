
import './global.css';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { UIProvider } from '@repo/ui/provider';
import { ActionsheetBasic } from './demo/actionsheet/actionsheet-basic';

export default function App() {
  return (
    <UIProvider>
      <View style={styles.container}>
        <ActionsheetBasic />
        <StatusBar style="auto" />
      </View>
    </UIProvider>
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
