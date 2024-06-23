// CustomersListScreen.tsx
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomerCard from './CustomerCard'

interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  aadharNumber: string;
  homeAddress: string;
}

const customers: Customer[] = [
  { id: '1', firstName: 'John', lastName: 'Doe', mobileNumber: '1234567890', aadharNumber: '1111-2222-3333', homeAddress: '123 Main St, City A' },
  { id: '2', firstName: 'Jane', lastName: 'Smith', mobileNumber: '0987654321', aadharNumber: '4444-5555-6666', homeAddress: '456 Elm St, City B' },
  { id: '3', firstName: 'Alice', lastName: 'Johnson', mobileNumber: '5678901234', aadharNumber: '7777-8888-9999', homeAddress: '789 Pine St, City C' },
  // Add more customers as needed
];

const CustomersListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Customer List</Text>
      <FlatList
        data={customers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CustomerCard
            firstName={item.firstName}
            lastName={item.lastName}
            mobileNumber={item.mobileNumber}
            aadharNumber={item.aadharNumber}
            homeAddress={item.homeAddress}
          />
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
});

export default CustomersListScreen;
