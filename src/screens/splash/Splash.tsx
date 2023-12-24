import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MainLayout from '../../common/components/layouts/main/MainLayout';

export default function SplashScreen() {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={{ color: 'white' }}>Splash</Text>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
