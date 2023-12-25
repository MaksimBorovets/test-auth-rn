import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import MainLayout from '../../common/components/layouts/main/MainLayout';
import { Column } from '../../common/components/styled/flex/Flex.styled';
import LogoIcon from '../../assets/icons/logo.svg';
import { horizontalScale, verticalScale } from '../../common/helpers/metrics';
import { Container, ContentBox, LogoBox } from './Splash.styled';
import MainButton from '../../common/components/buttons/button/MainButton';
import theme from '../../styles/theme/theme';
import { NAVIGATION_KEYS, TRootStackParamList } from '../../navigation/types';

export default function SplashScreen() {
  const { navigate } =
    useNavigation<NativeStackNavigationProp<TRootStackParamList>>();

  const handleLoginPress = () => {
    navigate(NAVIGATION_KEYS.LOGIN);
  };
  const handleRegisterPress = () => {
    navigate(NAVIGATION_KEYS.REGISTER);
  };

  return (
    <MainLayout>
      <Container>
        <Column alignItems="center" justifyContent="space-between">
          <ContentBox>
            <LogoBox>
              <LogoIcon
                width={horizontalScale(104)}
                height={verticalScale(111)}
              />
            </LogoBox>
          </ContentBox>
          <ContentBox>
            <Column justifyContent="flex-end" gap={verticalScale(15)}>
              <MainButton btnText="Login" onPress={handleLoginPress} />
              <MainButton
                btnText="Register"
                btnBackgroundColor={theme.colors.gray}
                onPress={handleRegisterPress}
              />
            </Column>
          </ContentBox>
        </Column>
      </Container>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
