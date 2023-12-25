import styled from 'styled-components/native';

import { fontScale } from '../../../helpers/metrics';

export const Container = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid red;
`;

export const ButtonText = styled.Text<{
  color?: string;
  fontFamily?: string;
  padding?: number;
}>`
  color: ${props => props.color ?? props.theme.colors.primary};
  font-size: ${fontScale(12)}px;
  font-family: ${props =>
    props.fontFamily ?? props.theme.fonts.montserrat[500]};
  text-decoration-line: underline;
  text-decoration-color: ${props => props.color ?? props.theme.colors.primary};
  text-decoration-style: solid;
`;
