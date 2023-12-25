import styled from 'styled-components/native';
import { horizontalScale, verticalScale } from '../../common/helpers/metrics';

export const Container = styled.View`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: ${verticalScale(370)}px;
  padding-right: ${horizontalScale(14)}px;
  margin-top: ${verticalScale(40)}px;
  align-items: center;
  justify-content: flex-end;
`;

export const BottomContent = styled.View`
  flex: 1;
  justify-content: center;
  width: 100%;
  padding: 0 ${horizontalScale(35)}px;
`;

export const Text = styled.Text<{
  fontFamily?: string;
  color: string;
  fontSize: number;
  textTransform?: string;
  mrTop?: number;
  top?: number;
}>`
  font-family: ${p => p.fontFamily};
  color: ${p => p.color};
  font-size: ${p => p.fontSize + 'px'};
  text-transform: ${p => p.textTransform ?? 'none'};
  position: relative;
  margin-top: ${p => p.mrTop + 'px'};
  top: ${p => p.top + 'px'};
`;
