import { Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';

import { RootStackParamList } from '@types';

import { Header } from '@components/Header';

import { Container } from './styles';

type PlayersScreenRouteProps = RouteProp<RootStackParamList, 'players'>;

export default function Players() {
  const {
    params: { team },
  } = useRoute<PlayersScreenRouteProps>();

  return (
    <Container>
      <Header showBackButton />
    </Container>
  );
}
