import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Teams } from '@screens/Teams';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="teams" component={Teams} />
    </Stack.Navigator>
  );
}
