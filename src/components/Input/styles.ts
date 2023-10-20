import { TextInput } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled(TextInput)`
  border-radius: 6px;
  flex: 1;
  max-height: 56px;
  min-height: 56px;
  padding: 16px;

  ${({ theme }) => css`
    background-color: ${theme.colors.gray_700};
    color: ${theme.colors.white};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
  `}
`;
