// CustomerCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface CustomerCardProps {
  firstName: string;
  lastName: string;
  mobileNumber: string;
  aadharNumber: string;
  homeAddress: string;
}

const CustomerCard: React.FC<CustomerCardProps> = ({ firstName, lastName, mobileNumber, aadharNumber, homeAddress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
      <Text style={styles.detail}>Mobile: {mobileNumber}</Text>
      <Text style={styles.detail}>Aadhar: {aadharNumber}</Text>
      <Text style={styles.detail}>Address: {homeAddress}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
});

export default CustomerCard;
