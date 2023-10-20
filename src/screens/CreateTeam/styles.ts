import styled from 'styled-components/native';

import { KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { UsersThree } from 'phosphor-react-native';

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.gray_600};
  flex: 1;
  padding: 24px;
`;

export const Content = styled(KeyboardAvoidingView).attrs({
  behavior: Platform.OS === 'ios' ? 'padding' : 'height',
})`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.colors.green_700,
  size: 56,
}))`
  align-self: center;
`;
