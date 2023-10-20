import styled, { css } from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 6px;
  flex-direction: row;
  height: 56px;
  margin-bottom: 16px;
  width: 100%;
`;

export const Name = styled.Text`
  flex: 1;

  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
  `}
`;

export const Icon = styled(MaterialIcons).attrs(({ theme }) => ({
  size: 24,
  color: theme.colors.gray_200,
}))`
  margin: 0 4px 0 16px;
`;
