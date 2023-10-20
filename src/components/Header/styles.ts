import { CaretLeft } from 'phosphor-react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
`;

export const Icon = styled(CaretLeft).attrs(({ theme }) => ({
  size: 32,
  color: theme.colors.white,
}))``;
