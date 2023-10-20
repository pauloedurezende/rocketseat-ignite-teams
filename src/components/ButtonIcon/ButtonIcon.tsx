import { ButtonIconProps } from './types';
import { Container, Icon } from './styles';

export default function ButtonIcon(props: ButtonIconProps) {
  const { type = 'primary', icon, ...rest } = props;

  return (
    <Container {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
}
