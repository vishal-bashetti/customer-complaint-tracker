// CustomerComplaintsChart.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BarChart, LineChart } from 'react-native-gifted-charts';

interface ChartData {
  label: string;
  value: number;
}

interface CustomerComplaintsChartProps {
  customerData: ChartData[];
  complaintData: ChartData[];
}

const CustomerComplaintsChart: React.FC<CustomerComplaintsChartProps> = ({ customerData, complaintData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Customer Data</Text>
      <BarChart
        data={customerData}
        width={320}
        height={250}
        barWidth={22}
        noOfSections={4}
        barBorderRadius={4}
        frontColor="lightblue"
        yAxisThickness={2}
        xAxisThickness={2}
        xAxisLabelTextStyle={styles.axisLabelTextStyle}
        yAxisTextStyle={styles.axisTextStyle}
        hideRules
      />
      <Text style={styles.title}>Complaint Data</Text>
      <LineChart
        data={complaintData}
        width={320}
        height={250}
        thickness={2}
        yAxisColor="gray"
        xAxisColor="gray"
        yAxisThickness={2}
        xAxisThickness={2}
        xAxisLabelTextStyle={styles.axisLabelTextStyle}
        yAxisTextStyle={styles.axisTextStyle}
        color="lightblue"
        hideDataPoints
        initialSpacing={10}
        hideRules
        yAxisLabelWidth={40}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  axisLabelTextStyle: {
    color: 'gray',
    fontSize: 12,
    marginHorizontal: 5,
  },
  axisTextStyle: {
    color: 'gray',
    fontSize: 10,
  },
});

export default CustomerComplaintsChart;
