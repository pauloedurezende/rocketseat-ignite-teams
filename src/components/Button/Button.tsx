import { ButtonProps } from './types';
import { Container, Text } from './styles';

export default function Button(props: ButtonProps) {
  const { type = 'primary', children, ...rest } = props;

  return (
    <Container type={type} {...rest}>
      <Text>{children}</Text>
    </Container>
  );
}
