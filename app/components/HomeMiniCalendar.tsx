import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const today = new Date();
const busyDays = [2, 5, 8, 12, 18, 22]; // Example busy days

export default function HomeMiniCalendar() {
  const [expanded, setExpanded] = useState(false);
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calendar Overview</Text>
      <View style={styles.calendarRow}>
        {daysOfWeek.map((d, i) => (
          <Text key={i} style={styles.dayOfWeek}>{d}</Text>
        ))}
      </View>
      <View style={styles.calendarGrid}>
        {days.map((d) => {
          const isToday = d === today.getDate();
          const isBusy = busyDays.includes(d);
          return (
            <TouchableOpacity
              key={d}
              style={[
                styles.day,
                isToday && styles.today,
                isBusy && styles.busy,
              ]}
              onPress={() => setExpanded(true)}
            >
              <Text style={styles.dayText}>{d}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {expanded && (
        <View style={styles.expanded}>
          <Text style={styles.expandedText}>Full calendar view coming soon...</Text>
          <TouchableOpacity onPress={() => setExpanded(false)}>
            <Text style={styles.collapseBtn}>Collapse</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    marginTop: 18,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#3b5bfd',
    marginBottom: 8,
  },
  calendarRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 2,
  },
  dayOfWeek: {
    width: 24,
    textAlign: 'center',
    color: '#888',
    fontWeight: 'bold',
  },
  calendarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 7 * 24,
    marginBottom: 4,
  },
  day: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
    backgroundColor: '#f3f4f6',
  },
  today: {
    backgroundColor: '#3b5bfd',
  },
  busy: {
    borderWidth: 2,
    borderColor: '#facc15',
  },
  dayText: {
    color: '#222',
    fontWeight: 'bold',
  },
  expanded: {
    marginTop: 10,
    alignItems: 'center',
  },
  expandedText: {
    color: '#555',
    marginBottom: 6,
  },
  collapseBtn: {
    color: '#3b5bfd',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
