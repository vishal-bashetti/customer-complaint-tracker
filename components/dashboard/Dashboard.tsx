import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CustomerComplaintsChart from './CustomerComplaintsChart';

const Dashboard = () => {
    const customerData = [
        { label: 'Jan', value: 10 },
        { label: 'Feb', value: 20 },
        { label: 'Mar', value: 30 },
        { label: 'Apr', value: 40 },
        { label: 'May', value: 50 },
    ];

    const complaintData = [
        { label: 'Jan', value: 5 },
        { label: 'Feb', value: 15 },
        { label: 'Mar', value: 25 },
        { label: 'Apr', value: 35 },
        { label: 'May', value: 45 },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <CustomerComplaintsChart customerData={customerData} complaintData={complaintData} />
        </SafeAreaView>
    );
};

export default Dashboard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});