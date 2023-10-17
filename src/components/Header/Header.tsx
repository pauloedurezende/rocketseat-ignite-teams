import LogotypeImage from '@assets/logo.png';

import { Container, Logo } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo source={LogotypeImage} />
    </Container>
  );
}
