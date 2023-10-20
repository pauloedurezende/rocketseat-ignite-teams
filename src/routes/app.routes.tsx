import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Teams } from '@screens/Teams';
import { CreateTeam } from '@screens/CreateTeam';
import { Players } from '@screens/Players';
import { RootStackParamList } from '@types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="teams" component={Teams} />
      <Stack.Screen name="create" component={CreateTeam} />
      <Stack.Screen name="players" component={Players} />
    </Stack.Navigator>
  );
}
