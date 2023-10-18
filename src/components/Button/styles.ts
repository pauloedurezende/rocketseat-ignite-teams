import styled, { css } from 'styled-components/native';

import { ButtonProps } from './types';

export const Container = styled.TouchableOpacity<ButtonProps>`
  align-items: center;
  border-radius: 6px;
  background-color: ${({ theme, type }) => {
    return {
      primary: theme.colors.green_700,
      secondary: theme.colors.red_dark,
    }[type || 'primary'];
  }};
  flex: 1;
  justify-content: center;
  max-height: 56px;
  min-height: 56px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.md}px;
  `}
`;
