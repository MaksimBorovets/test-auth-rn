import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import {
  Column,
  Row,
} from '../../../../common/components/styled/flex/Flex.styled';
import {
  Container,
  SubTitle,
  SwitchText,
  TextBtnBox,
  Title,
} from './AuthForm.styled';
import { verticalScale } from '../../../../common/helpers/metrics';
import TextInputField from '../../../../common/components/inputs/text-input/TextInput';
import { authSchema } from '../../../../common/schemas/auth.schema';
import EmailIcon from '../../../../assets/icons/email.svg';
import LockIcon from '../../../../assets/icons/lock.svg';
import EyeIcon from '../../../../assets/icons/eye.svg';
import MainButton from '../../../../common/components/buttons/button/MainButton';
import TextButton from '../../../../common/components/buttons/text-button/TextButton';

interface IProps {
  title: string;
  subtitle: string;
  switcherText: string;
  switcherBtnText: string;
  forgotPassword?: boolean;
  onSubmit: () => void;
  onSwitchAuthPress: () => void;
}

interface FormValues {
  email: string;
  password: string;
}

export default function AuthForm({
  onSubmit,
  onSwitchAuthPress,
  switcherText,
  switcherBtnText,
  forgotPassword,
  subtitle,
  title,
}: IProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(authSchema),
  });

  const handleSubmitPress = (data: { email: string; password: string }) => {
    if (!data) return;
    onSubmit();
  };

  return (
    <Container>
      <Column alignItems="center" gap={verticalScale(8)}>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
        <Column
          alignItems="center"
          justifyContent="flex-start"
          gap={verticalScale(16)}>
          <TextInputField
            control={control}
            inputNameField="email"
            LeftIcon={EmailIcon}
            placeholder="Email address"
            error={errors.email?.message}
          />
          <TextInputField
            control={control}
            inputNameField="password"
            LeftIcon={LockIcon}
            placeholder="Password"
            secureTextEntry
            RightIcon={EyeIcon}
          />
          {forgotPassword && (
            <TextBtnBox>
              <TextButton text="Forgot password" onPress={() => {}} />
            </TextBtnBox>
          )}
          <MainButton
            btnText="Login"
            onPress={handleSubmit(handleSubmitPress)}
          />
        </Column>
      </Column>
      <Row gap={8}>
        <SwitchText>{switcherText}</SwitchText>
        <TextButton onPress={onSwitchAuthPress} text={switcherBtnText} />
      </Row>
    </Container>
  );
}
