import { TouchableOpacityProps } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { ButtonProps } from '@components/Button/types';

export type ButtonIconType = ButtonProps['type'];

export type ButtonIconProps = TouchableOpacityProps & {
  type?: ButtonIconType;
  icon: keyof typeof MaterialIcons.glyphMap;
};
