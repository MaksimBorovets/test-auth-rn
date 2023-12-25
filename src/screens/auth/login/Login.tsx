import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import MainLayout from '../../../common/components/layouts/main/MainLayout';
import {
  BottomContentBox,
  Container,
  IconBox,
  TopContentBox,
} from './Login.styled';
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
import { useLazyGetUserQuery } from '../../../store/api/user/user';

export default function LoginScreen() {
  const [getUser] = useLazyGetUserQuery();
  const { goBack, navigate } =
    useNavigation<NativeStackNavigationProp<TRootStackParamList>>();

  const handleOnSwitchAuthPress = () => {
    navigate(NAVIGATION_KEYS.REGISTER);
  };

  const handleSubmit = useCallback(async () => {
    try {
      const user = await getUser('1').unwrap();
      if (user) {
        navigate(NAVIGATION_KEYS.HOME);
      }
    } catch (error) {
      console.log('🚀 ~ file: Login.tsx:42 ~ handleSubmit ~ error:', error);
    }
  }, []);

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
            forgotPassword
            subtitle="Enter your login password from your account"
            title="Login"
            onSwitchAuthPress={handleOnSwitchAuthPress}
            switcherBtnText="Sign up"
            switcherText={`Don't have an account?`}
          />
        </BottomContentBox>
      </Container>
    </MainLayout>
  );
}
