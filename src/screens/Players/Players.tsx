import { useEffect, useRef, useState } from 'react';
import { Alert, FlatList, TextInput } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';

import { Player, RootStackParamList, TeamSide } from '@types';
import { teams } from '@storage/teams';
import { player } from '@storage/player';
import { ApplicationError } from '@utils/application-error';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { ButtonIcon } from '@components/ButtonIcon';
import { Filter } from '@components/Filter';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmptyItem } from '@components/ListEmptyItem';
import { Button } from '@components/Button';
import { LoadingIndicator } from '@components/LoadingIndicator';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';

type PlayersScreenRouteProps = RouteProp<RootStackParamList, 'players'>;

export default function Players() {
  const playerNameInputRef = useRef<TextInput>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [players, setPlayers] = useState<Player[]>([]);
  const [selectedTeamSide, setSelectedTeamSide] = useState(TeamSide.Home);

  const {
    params: { team },
  } = useRoute<PlayersScreenRouteProps>();
  const { navigate } = useNavigation();

  async function fetchAllPlayersBasedOnSide() {
    try {
      setIsLoading(true);

      const players = await player.getPlayersBySideAndTeam(
        selectedTeamSide,
        team?.id,
      );

      setPlayers(players);
    } catch (error) {
      Alert.alert('Error', 'An error occurred while fetching the players');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleNewPlayer() {
    const trimmedPlayerName = playerName.trim();
    const hasPlayerName = trimmedPlayerName.length > 0;

    if (!hasPlayerName) {
      return Alert.alert('Oops!', 'You must enter a valid player name');
    }

    try {
      const data = {
        name: trimmedPlayerName,
        side: selectedTeamSide,
      };

      await player.create(data, team?.id);

      playerNameInputRef.current?.blur();

      setPlayerName('');
      fetchAllPlayersBasedOnSide();
    } catch (error) {
      if (error instanceof ApplicationError) {
        return Alert.alert('Oops!', error.message);
      }

      Alert.alert('Error', 'An error occurred while creating the player');
      console.error(error);
    }
  }

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

  useEffect(() => {
    fetchAllPlayersBasedOnSide();
  }, [selectedTeamSide]);

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
          onChangeText={setPlayerName}
          onSubmitEditing={handleNewPlayer}
          placeholder="Player Name"
          ref={playerNameInputRef}
          returnKeyType="done"
          value={playerName}
        />
        <ButtonIcon icon="add" onPress={handleNewPlayer} />
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

      {isLoading ? (
        <LoadingIndicator />
      ) : (
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
      )}

      <Button type="secondary" onPress={handleRemoveTeam}>
        Remove Team
      </Button>
    </Container>
  );
}
