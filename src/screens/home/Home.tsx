import MainLayout from '../../common/components/layouts/main/MainLayout';
import { Column } from '../../common/components/styled/flex/Flex.styled';
import { BottomContent, ImageBackground, Text } from './Home.styled';
import MainButton from '../../common/components/buttons/button/MainButton';
import theme from '../../styles/theme/theme';
import { fontScale, verticalScale } from '../../common/helpers/metrics';
import { useGetUserQuery, usersApi } from '../../store/api/user/user';

export default function Home() {
  const { data: user } = useGetUserQuery('1');

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
          <MainButton btnText="Log out" onPress={() => {}} />
        </BottomContent>
      </Column>
    </MainLayout>
  );
}
