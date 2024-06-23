// ComplaintCard.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ComplaintCardProps {
  title: string;
  description: string;
  status: string;
  date: string;
}

const ComplaintCard: React.FC<ComplaintCardProps> = ({ title, description, status, date }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.footer}>
        <Text style={styles.status}>{status}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  date: {
    fontSize: 12,
    color: '#888',
  },
});

export default ComplaintCard;
