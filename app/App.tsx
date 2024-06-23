import { Stack } from 'expo-router';

const App = () => {
  return (
    <Stack>
      <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default App;
