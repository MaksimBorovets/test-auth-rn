import styled from 'styled-components/native';

import { fontScale, verticalScale } from '../../../helpers/metrics';

export const Container = styled.TouchableOpacity<{ backgroundColor?: string }>`
  background-color: ${props =>
    props.backgroundColor ?? props.theme.colors.primaryBtnBackground};
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
`;

export const ButtonText = styled.Text<{
  color?: string;
  fontFamily?: string;
  padding?: number;
}>`
  color: ${props => props.color ?? props.theme.colors.white};
  font-size: ${fontScale(12)};
  font-family: ${props =>
    props.fontFamily ?? props.theme.fonts.montserrat[700]};
  padding: ${verticalScale(16)}px;
`;
