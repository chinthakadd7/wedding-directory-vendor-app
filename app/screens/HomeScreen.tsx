import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from 'react-native';
import AnalyticsDashboard from '../components/AnalyticsDashboard';
import HomeMiniCalendar from '../components/HomeMiniCalendar';
import HomeQuickActions from '../components/HomeQuickActions';

export default function HomeScreen() {
  return (
    <LinearGradient colors={["#e0e7ff", "#fff"]} style={styles.gradient}>
      <View style={styles.card}>
        <Text style={styles.title}>Welcome, Vendor!</Text>
        <Text style={styles.subtitle}>
          Manage your profile, reservations, and client messages here.
        </Text>
        <AnalyticsDashboard />
        <HomeQuickActions />
        <HomeMiniCalendar />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 28,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    alignItems: 'center',
    width: '90%',
    maxWidth: 400,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3b5bfd',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 18,
  },
});