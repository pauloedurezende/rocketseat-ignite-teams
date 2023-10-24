import { useState } from 'react';
import { FlatList } from 'react-native';
import { useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';

import { Player, RootStackParamList, TeamSide } from '@types';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmptyItem } from '@components/ListEmptyItem';
import { Button } from '@components/Button';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

type PlayersScreenRouteProps = RouteProp<RootStackParamList, 'players'>;

export default function Players() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedTeamSide, setSelectedTeamSide] = useState(TeamSide.Home);

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

      <HeaderList>
        <FlatList
          horizontal
          data={[TeamSide.Home, TeamSide.Away]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={selectedTeamSide === item}
              onPress={() => setSelectedTeamSide(item)}
            />
          )}
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={() => {}} />
        )}
        ListEmptyComponent={() => (
          <ListEmptyItem message="This team has no registered players" />
        )}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button type="secondary" onPress={() => {}}>
        Remove Team
      </Button>
    </Container>
  );
}
