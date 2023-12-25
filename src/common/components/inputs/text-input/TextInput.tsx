import { FC, useState } from 'react';
import { SvgProps } from 'react-native-svg';
import { KeyboardTypeOptions } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import IconButton from '../../buttons/icon-button/IconButton';
import theme from '../../../../styles/theme/theme';
import {
  ErrorText,
  IconBox,
  InputContainer,
  InputField,
} from './TextInput.styled';

interface IProps {
  control: Control<any>;
  inputNameField: string;
  placeholder?: string;
  placeholderTextColor?: string;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  LeftIcon?: FC<SvgProps>;
  RightIcon?: FC<SvgProps>;
  error?: string;
  secureTextEntry?: boolean;
}

export default function TextInputField({
  inputNameField,
  placeholder,
  placeholderTextColor = theme.colors.lightGray,
  keyboardType,
  autoCapitalize,
  LeftIcon,
  RightIcon,
  control,
  error,
  secureTextEntry,
}: IProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(secureTextEntry);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleShowHidePassword = () => setIsSecureTextEntry(p => !p);

  return (
    <>
      <InputContainer>
        <IconBox left={10}>
          {LeftIcon && (
            <LeftIcon
              fill={isFocused ? theme.colors.primary : theme.colors.lightGray}
            />
          )}
        </IconBox>
        <Controller
          control={control}
          render={({ field: { onChange, value, onBlur } }) => (
            <InputField
              onChangeText={onChange}
              value={value}
              placeholder={placeholder}
              placeholderTextColor={placeholderTextColor}
              keyboardType={keyboardType}
              autoCapitalize={autoCapitalize}
              onFocus={handleFocus}
              isActive={isFocused}
              secureTextEntry={isSecureTextEntry}
              onBlur={() => {
                handleBlur();
                onBlur();
              }}
            />
          )}
          name={inputNameField}
        />
        {RightIcon && (
          <IconBox right={10}>
            <IconButton
              Icon={RightIcon}
              fill={isFocused ? theme.colors.primary : theme.colors.lightGray}
              onPress={handleShowHidePassword}
            />
          </IconBox>
        )}
      </InputContainer>
      {error && <ErrorText>{error}</ErrorText>}
    </>
  );
}
