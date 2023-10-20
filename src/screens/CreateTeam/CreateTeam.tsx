import { Highlight } from '@components/Highlight';
import { Header } from '@components/Header';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { Container, Content, Icon } from './styles';

export default function CreateTeam() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="New Team"
          subtitle="Create a new team to add people"
        />

        <Input placeholder="Team Name" onChangeText={() => {}} />

        <Button style={{ marginTop: 20 }}>Create</Button>
      </Content>
    </Container>
  );
}
