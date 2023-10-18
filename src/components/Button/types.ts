import { TouchableOpacityProps } from 'react-native';

export type ButtonType = 'primary' | 'secondary';

export type ButtonProps = TouchableOpacityProps & {
  type?: ButtonType;
};
