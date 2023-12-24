import { StyleSheet } from 'react-native';

import MainLayout from '../../common/components/layouts/main/MainLayout';
import { Column } from '../../common/components/styled/flex/Flex.styled';

import LogoIcon from '../../assets/icons/logo.svg';
import { horizontalScale, verticalScale } from '../../common/helpers/metrics';
import { Container, ContentBox, LogoBox } from './splash.styled';
import MainButton from '../../common/components/buttons/button/MainButton';
import theme from '../../styles/theme/theme';

export default function SplashScreen() {
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
              <MainButton btnText="Login" onPress={() => {}} />
              <MainButton
                btnText="Register"
                btnBackgroundColor={theme.colors.gray}
                onPress={() => {}}
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
