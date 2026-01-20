import { StyleSheet, Text, View } from 'react-native';

export default function ChatItem({ chat }: { chat: any }) {
  return (
    <View style={styles.card}>
      <Text style={styles.client}>{chat.client}</Text>
      <Text style={styles.message}>{chat.lastMessage}</Text>
      <Text style={styles.time}>{chat.time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f1f1f1',
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
  message: {
    color: '#333',
    marginTop: 4,
  },
  time: {
    marginTop: 8,
    color: '#999',
    fontSize: 12,
  },
});