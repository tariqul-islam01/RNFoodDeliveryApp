import React from 'react';
import {View, Text, StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import SignInScreen from './src/screens/authScreens/SignInScreen';
import {colors} from './src/global/styles';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={colors.statusbar}
        />
        <SignInScreen />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
