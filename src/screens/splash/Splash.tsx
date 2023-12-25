import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import theme from '../../styles/theme/theme';
import LogoIcon from '../../assets/icons/logo.svg';
import { ASYNC_STORAGE_KEYS } from '../../common/types';
import { useLazyGetUserQuery } from '../../store/api/user/user';
import { Container, ContentBox, LogoBox } from './Splash.styled';
import MainLayout from '../../common/components/layouts/main/MainLayout';
import { Column } from '../../common/components/styled/flex/Flex.styled';
import MainButton from '../../common/components/buttons/button/MainButton';
import { horizontalScale, verticalScale } from '../../common/helpers/metrics';
import { NAVIGATION_KEYS, TRootStackParamList } from '../../navigation/types';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [hasToken, setHasToken] = useState(false);
  const { navigate } =
    useNavigation<NativeStackNavigationProp<TRootStackParamList>>();
  const [getUser] = useLazyGetUserQuery();

  const handleLoginPress = () => {
    navigate(NAVIGATION_KEYS.LOGIN);
  };
  const handleRegisterPress = () => {
    navigate(NAVIGATION_KEYS.REGISTER);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const fakeToken = await AsyncStorage.getItem(ASYNC_STORAGE_KEYS.TOKEN);
        if (fakeToken) {
          setHasToken(true);
          const user = await getUser('1');
          user && navigate(NAVIGATION_KEYS.HOME);
        } else {
          setHasToken(false);
        }
      } catch (error) {
        console.log('🚀 ~ file: Splash.tsx:41 ~ useEffect ~ error:', error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <MainLayout>
      <Container>
        <Column alignItems="center" justifyContent="space-between">
          <ContentBox>
            <LogoBox isLoading={isLoading}>
              <LogoIcon
                width={horizontalScale(isLoading ? 194 : 104)}
                height={verticalScale(isLoading ? 201 : 111)}
              />
              {isLoading && <ActivityIndicator />}
            </LogoBox>
          </ContentBox>
          <ContentBox>
            {!isLoading && !hasToken && (
              <Column justifyContent="flex-end" gap={verticalScale(15)}>
                <MainButton btnText="Login" onPress={handleLoginPress} />
                <MainButton
                  btnText="Register"
                  btnBackgroundColor={theme.colors.gray}
                  onPress={handleRegisterPress}
                />
              </Column>
            )}
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
