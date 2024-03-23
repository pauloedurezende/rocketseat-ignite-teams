import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { teams } from '@storage/teams';

import { ApplicationError } from '@utils/application-error';
import { Container, Content, Icon } from './styles';

export default function CreateTeam() {
  const [teamName, setTeamName] = useState('');

  const { navigate } = useNavigation();

  async function handleOnButtonPress() {
    try {
      const trimmedTeamName = teamName.trim();
      const hasTeamName = trimmedTeamName.length > 0;

      if (!hasTeamName) {
        return Alert.alert('Oops!', 'Please enter a valid team name');
      }

      await teams.create(trimmedTeamName);

      navigate('teams');
    } catch (error) {
      if (error instanceof ApplicationError) {
        return Alert.alert('Oops!', error?.message);
      }

      Alert.alert('Oops!', 'Something went wrong, try again later');
      console.error(error);
    }
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="New Team"
          subtitle="Create a new team to add people"
        />

        <Input
          placeholder="Team Name"
          onChangeText={(text) => setTeamName(text)}
        />

        <Button style={{ marginTop: 20 }} onPress={handleOnButtonPress}>
          Create
        </Button>
      </Content>
    </Container>
  );
}
