import { ButtonText, Container } from './TextButton.styled';

interface IProps {
  text: string;
  onPress: () => void;
}

export default function TextButton({ onPress, text }: IProps) {
  return (
    <Container onPress={onPress}>
      <ButtonText>{text}</ButtonText>
    </Container>
  );
}
