import styled from 'styled-components/native';

import { fontScale, verticalScale } from '../../../../common/helpers/metrics';
import theme from '../../../../styles/theme/theme';

export const InputContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const IconBox = styled.View<{ left?: number; right?: number }>`
  position: absolute;
  left: ${p => (p.left ? p.left + 'px' : '')};
  right: ${p => (p.right ? p.right + 'px' : '')};
`;

export const InputField = styled.TextInput<{ isActive: boolean }>`
  width: 100%;
  border-radius: 8px;

  border: 0.3px solid
    ${p => (p.isActive ? theme.colors.primary : theme.colors.lightGray)};
  font-size: ${fontScale(14)}px;
  color: ${p => p.theme.colors.white};
  padding: ${verticalScale(16)}px ${verticalScale(40)}px;
  font-family: ${p => p.theme.fonts.montserrat[400]};
`;

export const ErrorText = styled.Text`
  font-size: ${fontScale(14)}px;
  color: ${p => p.theme.colors.primary};
  align-self: flex-start;
  margin-left: 10px;
`;
