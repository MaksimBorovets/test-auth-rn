import { ReactNode } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface IProps {
  children: ReactNode;
}

export default function MainLayout({ children }: IProps) {
  return (
    <ImageBackground
      source={require('../../../../assets/images/bg.png')}
      style={styles.imgBg}>
      <SafeAreaView style={styles.safe}>{children}</SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: 'transparent',
    flex: 1,
  },
  imgBg: {
    flex: 1,
  },
});
