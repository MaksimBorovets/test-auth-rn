import styled from 'styled-components/native';
import { fontScale } from '../../common/helpers/metrics';

export const StyledText = styled.Text`
  font-family: ${props => props.theme.fonts.montserrat[900]};
  color: ${props => props.theme.colors.primaryBtnBackground};
  font-size: ${fontScale(20)};
`;
