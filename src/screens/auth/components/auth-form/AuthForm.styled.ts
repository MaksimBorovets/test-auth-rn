import styled from 'styled-components/native';
import {
  fontScale,
  horizontalScale,
  verticalScale,
} from '../../../../common/helpers/metrics';

export const Container = styled.View`
  gap: ${verticalScale(24)}px;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100%;
  padding-bottom: ${verticalScale(20)}px;
`;

export const Title = styled.Text`
  font-size: ${fontScale(18)}px;
  font-family: ${p => p.theme.fonts.montserrat[600]};
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
  text-align: center;
`;

export const SubTitle = styled.Text`
  font-size: ${fontScale(10)}px;
  font-family: ${p => p.theme.fonts.montserrat[400]};
  text-transform: uppercase;
  color: ${p => p.theme.colors.lightGray};
  text-align: center;
  margin-bottom: ${verticalScale(24)}px;
`;

export const SwitchText = styled.Text`
  font-size: ${fontScale(11)}px;
  font-family: ${p => p.theme.fonts.montserrat[400]};
  color: ${p => p.theme.colors.white};
  text-align: center;
`;

export const InputField = styled.TextInput`
  width: 100%;
  border-radius: 8px;
  border: 1px solid red;
  font-size: ${fontScale(14)}px;
  color: ${p => p.theme.colors.white};
  padding: ${verticalScale(12)}px ${verticalScale(10)}px;
  margin-bottom: ${verticalScale(12)}px;
  background-color: rgba(255, 255, 255, 0.2);
  font-family: ${p => p.theme.fonts.montserrat[400]};
`;

export const AuthButton = styled.TouchableOpacity`
  width: 85%;
  background-color: ${p => p.theme.colors.primary};
  padding: ${verticalScale(14)}px 0;
  border-radius: ${verticalScale(8)}px;
  align-items: center;
  margin-top: ${verticalScale(20)}px;
`;

export const ButtonText = styled.Text`
  font-size: ${fontScale(16)}px;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fonts.montserrat[600]};
`;

export const TextBtnBox = styled.View`
  align-self: flex-end;
  margin-right: ${horizontalScale(5)}px;
`;
