import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '@types';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';

import { Container, Form } from './styles';

type PlayersScreenRouteProps = RouteProp<RootStackParamList, 'players'>;

export default function Players() {
  const {
    params: { team },
  } = useRoute<PlayersScreenRouteProps>();

  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title={team?.name}
        subtitle="Add your friends and separate between teams"
      />

      <Form>
        <Input
          autoCorrect={false}
          placeholder="Player Name"
          returnKeyType="done"
        />
        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}
