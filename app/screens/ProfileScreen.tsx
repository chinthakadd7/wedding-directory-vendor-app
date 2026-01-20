import { StyleSheet, View } from 'react-native';
import ProfileForm from '../components/ProfileForm';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ProfileForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
});