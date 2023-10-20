import { ForwardedRef, forwardRef } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import { useTheme } from 'styled-components/native';
import { Container } from './styles';

function Input(props: TextInputProps, ref: ForwardedRef<TextInput>) {
  const { colors } = useTheme();

  return <Container ref={ref} placeholderTextColor={colors.white} {...props} />;
}

export default forwardRef(Input);
