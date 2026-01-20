import { StyleSheet, Text, View } from 'react-native';

export default function ReservationItem({ reservation }: { reservation: any }) {
  return (
    <View style={styles.card}>
      <Text style={styles.client}>{reservation.client}</Text>
      <Text style={styles.time}>{reservation.time}</Text>
      <Text style={styles.status}>{reservation.status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  client: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  time: {
    color: '#666',
    marginTop: 4,
  },
  status: {
    marginTop: 8,
    color: '#007bff',
    fontWeight: '600',
  },
});