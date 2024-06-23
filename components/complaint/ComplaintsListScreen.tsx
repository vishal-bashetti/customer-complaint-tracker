// ComplaintsListScreen.tsx
import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import ComplaintCard from './ComplaintCard';

interface Complaint {
  id: string;
  title: string;
  description: string;
  status: string;
  date: string;
}

const complaints: Complaint[] = [
  { id: '1', title: 'Late Delivery', description: 'The delivery was late by 3 days.', status: 'Resolved', date: '2023-06-20' },
  { id: '2', title: 'Damaged Product', description: 'Received a damaged product.', status: 'Pending', date: '2023-06-18' },
  { id: '3', title: 'Wrong Item', description: 'Received a different item than ordered.', status: 'In Progress', date: '2023-06-15' },
  // Add more complaints as needed
];

const ComplaintsListScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Customer Complaints</Text>
      <FlatList
        data={complaints}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ComplaintCard
            title={item.title}
            description={item.description}
            status={item.status}
            date={item.date}
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

export default ComplaintsListScreen;
