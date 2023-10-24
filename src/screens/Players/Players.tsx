import { useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';

import { Player, RootStackParamList, TeamSide } from '@types';
import { teams } from '@storage/teams';

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
  const { navigate } = useNavigation();

  async function removeCurrentTeamAndNavigate() {
    try {
      await teams.remove(team.id);

      navigate('teams');
    } catch (error) {
      Alert.alert('Error', 'An error occurred while removing the team');
      console.error(error);
    }
  }

  function handleRemoveTeam() {
    Alert.alert('Atention', 'Are you sure you want to remove this team?', [
      { text: 'No', style: 'cancel' },
      { text: 'Yes', onPress: removeCurrentTeamAndNavigate },
    ]);
  }

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

      <Button type="secondary" onPress={handleRemoveTeam}>
        Remove Team
      </Button>
    </Container>
  );
}
