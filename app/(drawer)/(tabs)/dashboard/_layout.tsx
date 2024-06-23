import { Stack } from 'expo-router';
import React from 'react';

const DashboardLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'DashBoard',
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default DashboardLayout;
