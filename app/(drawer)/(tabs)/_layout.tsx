import { Tabs } from 'expo-router';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: 'Dashboard',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <AntDesign name="dashboard" size={24}  color={color} />
        }}
      />
      <Tabs.Screen
        name="complaint"
        options={{
          title: 'Complaint',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <MaterialIcons name="report-gmailerrorred" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="customer"
        options={{
          title: 'Customer',
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color }) => <Feather name="users" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
