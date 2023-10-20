import styled, { css } from 'styled-components/native';
import { FilterProps } from './types';

export const Container = styled.TouchableOpacity<Omit<FilterProps, 'title'>>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.colors.green_700};
    `}

  align-items: center;
  border-radius: 4px;
  height: 38px;
  justify-content: center;
  margin-right: 12px;
  width: 70px;
`;

export const Title = styled.Text`
  text-transform: uppercase;

  ${({ theme }) => css`
    font-family: ${theme.font_family.bold};
    font-size: ${theme.font_size.sm}px;
    color: ${theme.colors.white};
  `}
`;
