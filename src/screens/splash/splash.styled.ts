import styled from 'styled-components/native';

import { horizontalScale, verticalScale } from '../../common/helpers/metrics';

export const Container = styled.View`
  flex: 1;
  padding: ${verticalScale(35)}px ${horizontalScale(35)}px;
`;

export const ContentBox = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const LogoBox = styled.View`
  padding-bottom: ${verticalScale(60)}px;
`;
