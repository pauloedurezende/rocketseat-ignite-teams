import { useState, useCallback } from 'react';
import { FlatList, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Team } from '@types';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmptyItem } from '@components/ListEmptyItem';
import { TeamCard } from '@components/TeamCard';
import { Button } from '@components/Button';

import { teams } from '@storage/teams';

import { Container } from './styles';

export default function Teams() {
  const [availableTeams, setAvailableTeams] = useState<Team[]>([]);

  const { navigate } = useNavigation();

  async function handleGetAllAvailableTeams() {
    try {
      const registeredTeams = await teams.getAllAvailableTeams();

      setAvailableTeams(registeredTeams);
    } catch (error) {
      Alert.alert('Oops!', 'Something went wrong, try again later');
      console.error(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      handleGetAllAvailableTeams();
    }, []),
  );

  return (
    <Container>
      <Header />

      <Highlight title="Teams" subtitle="play with your team" />

      <FlatList
        data={availableTeams}
        keyExtractor={(data) => data.id}
        contentContainerStyle={availableTeams.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <TeamCard key={item.id} name={item.name} />}
        ListEmptyComponent={() => (
          <ListEmptyItem message="How about registering the first team?" />
        )}
      />

      <Button onPress={() => navigate('create')}>Create New Team</Button>
    </Container>
  );
}
