import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Name } from './styles';

type TeamCardProps = TouchableOpacityProps & {
  name: string;
};

export default function TeamCard({ name }: TeamCardProps) {
  return (
    <Container>
      <Icon />
      <Name>{name}</Name>
    </Container>
  );
}
