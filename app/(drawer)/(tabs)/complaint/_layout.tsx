import { Stack } from 'expo-router';
import React from 'react';

const ComplaintLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: 'Complaint',
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default ComplaintLayout;
