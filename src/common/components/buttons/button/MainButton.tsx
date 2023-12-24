import { StyleSheet } from 'react-native';

import { ButtonText, Container } from './MainButton.styled';

interface IProps {
  btnText: string;
  onPress: () => void;
  textPadding?: number;
  btnBackgroundColor?: string;
}

export default function MainButton({
  btnText,
  onPress,
  textPadding,
  btnBackgroundColor,
}: IProps) {
  return (
    <Container backgroundColor={btnBackgroundColor} onPress={onPress}>
      <ButtonText padding={textPadding}>{btnText}</ButtonText>
    </Container>
  );
}

const styles = StyleSheet.create({});
