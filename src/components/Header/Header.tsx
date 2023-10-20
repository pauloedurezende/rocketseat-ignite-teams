import { useNavigation } from '@react-navigation/native';

import LogotypeImage from '@assets/logo.png';

import { Container, Logo, Button, Icon } from './styles';

type HeaderProps = {
  showBackButton?: boolean;
};

export default function Header({ showBackButton }: HeaderProps) {
  const { navigate } = useNavigation();

  return (
    <Container>
      {showBackButton && (
        <Button onPress={() => navigate('teams')}>
          <Icon />
        </Button>
      )}

      <Logo source={LogotypeImage} />
    </Container>
  );
}
