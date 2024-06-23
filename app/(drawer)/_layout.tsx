import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Drawer } from 'expo-router/drawer';
import { Pressable, StyleSheet, View, Text } from 'react-native';

import { useAuth } from '~/context/AuthProvider';

const DrawerLayout = () => {
  const { setToken } = useAuth();
  const handleLogout = () => {
    setToken(null);
  };

  return (
    <Drawer>
      <Drawer.Screen
        name="(tabs)"
        options={{
          // headerTitle: () => <SodepaLogo height={45} width={100} color="red" />,
          headerTitle: () => <Text>Logo</Text>,
          drawerLabel: 'Tabs',
          // drawerIcon: ({ size, color }) => (
          //   <MaterialIcons name="border-bottom" size={size} color={color} />
          // ),
          headerRight: () => (
            <View className="items-center flex flex-row justify-center">
              <Pressable onPress={handleLogout}>
                {({ pressed }) => (
                  <FontAwesome
                    name="sign-out"
                    size={25}
                    color="gray"
                    style={[styles.headerRight, { opacity: pressed ? 0.5 : 1 }]}
                  />
                )}
              </Pressable>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
        }}
      />
    </Drawer>
  );
};

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
});

export default DrawerLayout;
