import { useState } from 'react';
import { FlatList, Text } from 'react-native';

import { Team } from '@types';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { ListEmptyItem } from '@components/ListEmptyItem';
import { TeamCard } from '@components/TeamCard';
import { Button } from '@components/Button';

import { Container } from './styles';

export default function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);

  return (
    <Container>
      <Header />

      <Highlight title="Teams" subtitle="play with your team" />

      <FlatList
        data={teams}
        keyExtractor={(data) => data.id}
        contentContainerStyle={teams.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <TeamCard key={item.id} name={item.name} />}
        ListEmptyComponent={() => (
          <ListEmptyItem message="How about registering the first team?" />
        )}
      />

      <Button>Create New Team</Button>
    </Container>
  );
}
