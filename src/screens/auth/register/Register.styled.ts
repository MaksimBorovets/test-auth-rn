import styled from 'styled-components/native';

import {
  horizontalScale,
  verticalScale,
} from '../../../common/helpers/metrics';

export const Container = styled.View`
  flex: 1;
  padding: ${verticalScale(35)}px ${horizontalScale(35)}px;
`;

export const TopContentBox = styled.View`
  flex: 0.45;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const BottomContentBox = styled.View`
  flex: 0.55;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const IconBox = styled.View<{
  alignSelf?: string;
  marginRight?: number;
  marginBottom?: number;
}>`
  align-self: ${props => props.alignSelf ?? 'flex-start'};
  margin-right: ${props => props.alignSelf};
  margin-bottom: ${props => props.marginBottom}px;
`;
