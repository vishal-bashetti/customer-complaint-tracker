import { Stack } from 'expo-router';
import React from 'react';

const CustomerLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Customer',
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default CustomerLayout;
