import { Container, Message } from './styles';

type ListEmptyItemProps = {
  message: string;
};

export default function ListEmptyItem({ message }: ListEmptyItemProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
