import { useState } from 'react';
import { FlatList, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

const mockReservations = [
  { id: 'BKG-001', client: 'Alice', time: '10:00 AM', service: 'Catering', status: 'Confirmed' },
  { id: 'BKG-002', client: 'Bob', time: '12:30 PM', service: 'Decoration', status: 'Pending' },
  { id: 'BKG-003', client: 'Charlie', time: '3:00 PM', service: 'Photography', status: 'Cancelled' },
];

export default function HomeQuickActions() {
  const [online, setOnline] = useState(true);
  const [accepting, setAccepting] = useState(true);
  const [paused, setPaused] = useState(false);

  return (
    <View style={styles.section}>
      <View style={styles.row}>
        <Text style={styles.label}>Online</Text>
        <View style={[styles.statusDot, { backgroundColor: online ? '#4ade80' : '#f87171' }]} />
        <Switch value={online} onValueChange={setOnline} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Accepting bookings</Text>
        <Switch value={accepting} onValueChange={setAccepting} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Today's hours</Text>
        <Text style={styles.value}>09:00 - 18:00</Text>
      </View>
      <TouchableOpacity style={styles.pauseBtn} onPress={() => setPaused(!paused)}>
        <Text style={styles.pauseBtnText}>{paused ? 'Resume Business' : 'Pause Business'}</Text>
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Upcoming Reservations</Text>
      <FlatList
        data={mockReservations}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingVertical: 8 }}
        renderItem={({ item }) => (
          <View style={styles.resCard}>
            <Text style={styles.resClient}>{item.client}</Text>
            <Text style={styles.resId}>{item.id}</Text>
            <Text style={styles.resTime}>{item.time} - {item.service}</Text>
            <Text style={[styles.resStatus, { color: item.status === 'Confirmed' ? '#22c55e' : item.status === 'Pending' ? '#facc15' : '#f87171' }]}>{item.status}</Text>
            <View style={styles.resActions}>
              <TouchableOpacity style={styles.actionBtn}><Text style={styles.actionText}>Accept</Text></TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}><Text style={styles.actionText}>Reject</Text></TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}><Text style={styles.actionText}>Message</Text></TouchableOpacity>
              <TouchableOpacity style={styles.actionBtn}><Text style={styles.actionText}>Details</Text></TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    width: '100%',
    marginTop: 18,
    marginBottom: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
    gap: 8,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#222',
  },
  value: {
    fontSize: 15,
    color: '#555',
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginHorizontal: 6,
  },
  pauseBtn: {
    backgroundColor: '#facc15',
    borderRadius: 8,
    paddingVertical: 8,
    alignItems: 'center',
    marginVertical: 8,
  },
  pauseBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 17,
    marginTop: 18,
    marginBottom: 8,
    color: '#3b5bfd',
  },
  resCard: {
    backgroundColor: '#f3f4f6',
    borderRadius: 14,
    padding: 14,
    marginRight: 12,
    minWidth: 180,
    maxWidth: 220,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },
  resClient: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#222',
  },
  resId: {
    fontSize: 12,
    color: '#888',
    marginBottom: 2,
  },
  resTime: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  resStatus: {
    fontWeight: 'bold',
    marginBottom: 6,
  },
  resActions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  actionBtn: {
    backgroundColor: '#e0e7ff',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  actionText: {
    color: '#3b5bfd',
    fontWeight: 'bold',
    fontSize: 13,
  },
});
