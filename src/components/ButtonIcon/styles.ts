import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import { ButtonIconProps } from './types';

export const Container = styled.TouchableOpacity`
  align-items: center;
  height: 56px;
  justify-content: center;
  margin-left: 12px;
  width: 56px;
`;

export const Icon = styled(MaterialIcons).attrs<Omit<ButtonIconProps, 'icon'>>(
  ({ theme, type }) => ({
    color: {
      primary: theme.colors.green_700,
      secondary: theme.colors.red,
    }[type || 'primary'],
    size: 24,
  }),
)``;
