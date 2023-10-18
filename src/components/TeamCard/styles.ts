import styled, { css } from 'styled-components/native';
import { UsersThree } from 'phosphor-react-native';

export const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray_500};
  border-radius: 6px;
  flex-direction: row;
  height: 90px;
  margin-bottom: 12px;
  padding: 24px;
  width: 100%;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.colors.green_700,
  size: 32,
  weight: 'fill',
}))`
  margin-right: 20px;
`;

export const Name = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray_200};
    font-family: ${theme.font_family.regular};
    font-size: ${theme.font_size.md}px;
  `}
`;
