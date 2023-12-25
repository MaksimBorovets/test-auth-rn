import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import MainLayout from '../../../common/components/layouts/main/MainLayout';
import {
  BottomContentBox,
  Container,
  IconBox,
  TopContentBox,
} from './Register.styled';
import theme from '../../../styles/theme/theme';
import {
  NAVIGATION_KEYS,
  TRootStackParamList,
} from '../../../navigation/types';
import BackIcon from '../../../assets/icons/back.svg';
import UserIcon from '../../../assets/icons/user.svg';
import IconButton from '../../../common/components/buttons/icon-button/IconButton';
import {
  horizontalScale,
  verticalScale,
} from '../../../common/helpers/metrics';
import AuthForm from '../components/auth-form/AuthForm';

export default function RegisterScreen() {
  const { goBack, navigate } =
    useNavigation<NativeStackNavigationProp<TRootStackParamList>>();

  const handleOnSwitchAuthPress = () => {
    navigate(NAVIGATION_KEYS.LOGIN);
  };

  const handleSubmit = () => {
    navigate(NAVIGATION_KEYS.HOME);
  };

  return (
    <MainLayout>
      <Container>
        <TopContentBox>
          <IconBox>
            <IconButton
              onPress={goBack}
              fill={theme.colors.lightGray}
              Icon={BackIcon}
            />
          </IconBox>
          <IconBox
            alignSelf="flex-end"
            marginRight={horizontalScale(30)}
            marginBottom={verticalScale(70)}>
            <UserIcon />
          </IconBox>
        </TopContentBox>
        <BottomContentBox>
          <AuthForm
            onSubmit={handleSubmit}
            subtitle="Create your email and  password for your account"
            title="Register"
            onSwitchAuthPress={handleOnSwitchAuthPress}
            switcherBtnText="Log in"
            switcherText="Already have an account?  "
          />
        </BottomContentBox>
      </Container>
    </MainLayout>
  );
}
