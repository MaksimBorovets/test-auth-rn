import { StyleProp, ViewStyle } from 'react-native';
import { type SvgProps } from 'react-native-svg';
import styled from 'styled-components/native';

import { horizontalScale, verticalScale } from '../../../helpers/metrics';
import theme from '../../../../styles/theme/theme';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

interface IIconButtonProps {
  Icon: React.FC<SvgProps>;
  onPress: () => void;
  iconWidth?: number;
  iconHeight?: number;
  disabled?: boolean;
  fill?: string;
  btnContainerStyle?: StyleProp<ViewStyle>;
}

export default function IconButton({
  Icon,
  onPress,
  iconHeight = verticalScale(24),
  iconWidth = horizontalScale(24),
  disabled = false,
  fill = theme.colors.primary,
  btnContainerStyle,
}: IIconButtonProps) {
  return (
    <Container style={btnContainerStyle} onPress={onPress} disabled={disabled}>
      <Icon fill={fill} width={iconWidth} height={iconHeight} />
    </Container>
  );
}
