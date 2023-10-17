import { Container } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';

export default function Teams() {
  return (
    <Container>
      <Header />

      <Highlight title="Teams" subtitle="play with your team" />
    </Container>
  );
}
