import styled from 'styled-components/native';

import { TAlignItems, TJustifyContent } from '../../../types/styles';

interface IFlexStyleProps {
  justifyContent?: TJustifyContent;
  alignItems?: TAlignItems;
  gap?: number;
}

export const Row = styled.View<IFlexStyleProps>`
  flex-direction: row;
  justify-content: ${props => props.justifyContent ?? 'flex-start'};
  align-items: ${props => props.alignItems ?? 'center'};
  gap: ${props => props.gap + 'px'};
`;

export const Column = styled.View<IFlexStyleProps>`
  flex-direction: column;
  justify-content: ${props => props.justifyContent ?? 'flex-start'};
  align-items: ${props => props.alignItems ?? 'flex-start'};
  gap: ${props => props.gap + 'px'};
  width: 100%;
  height: 100%;
`;
