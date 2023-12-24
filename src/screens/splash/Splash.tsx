import { StyleSheet, Text, View } from 'react-native';

import MainLayout from '../../common/components/layouts/main/MainLayout';
import { Column } from '../../common/components/styled/flex/flex.styled';
import { StyledText } from './splash.styled';

export default function SplashScreen() {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Column >
          <StyledText>Splash</StyledText>
          <Text style={{ color: 'white' }}>Splash</Text>
        </Column>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
