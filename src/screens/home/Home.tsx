import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { store } from '../../store/store';
import theme from '../../styles/theme/theme';
import { ASYNC_STORAGE_KEYS } from '../../common/types';
import { BottomContent, ImageBackground, Text } from './Home.styled';
import { useGetUserQuery, usersApi } from '../../store/api/user/user';
import { fontScale, verticalScale } from '../../common/helpers/metrics';
import MainLayout from '../../common/components/layouts/main/MainLayout';
import { Column } from '../../common/components/styled/flex/Flex.styled';
import MainButton from '../../common/components/buttons/button/MainButton';
import { NAVIGATION_KEYS, TRootStackParamList } from '../../navigation/types';

export default function Home() {
  const { data: user } = useGetUserQuery('1');
  const { push } =
    useNavigation<NativeStackNavigationProp<TRootStackParamList>>();

  const handleLogOut = async () => {
    try {
      await AsyncStorage.removeItem(ASYNC_STORAGE_KEYS.TOKEN);
      store.dispatch(usersApi.util.resetApiState());
      push(NAVIGATION_KEYS.SPLASH);
    } catch (error) {
      console.log('🚀 ~ file: Home.tsx:19 ~ handleLogOut ~ error:', error);
    }
  };

  return (
    <MainLayout>
      <Column alignItems="center">
        <ImageBackground source={require('../../assets/images/home-bg.png')}>
          <Column justifyContent="flex-end" alignItems="center" gap={10}>
            <Text
              color={theme.colors.lightGray}
              fontSize={fontScale(11)}
              fontFamily={theme.fonts.montserrat[400]}>
              You’re loggen in now
            </Text>
            <Text
              color={theme.colors.white}
              fontSize={fontScale(18)}
              fontFamily={theme.fonts.montserrat[600]}
              textTransform="uppercase">
              {user?.name}
            </Text>
            <Text
              color={theme.colors.white}
              fontSize={fontScale(16)}
              fontFamily={theme.fonts.montserrat[500]}
              mrTop={verticalScale(44)}
              top={verticalScale(10)}>
              Now you can see the app content!
            </Text>
          </Column>
        </ImageBackground>
        <BottomContent>
          <MainButton btnText="Log out" onPress={handleLogOut} />
        </BottomContent>
      </Column>
    </MainLayout>
  );
}
