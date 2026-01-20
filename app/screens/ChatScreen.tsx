import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ChatItem from '../components/ChatItem';

const mockChats = [
  { id: '1', client: 'Alice', lastMessage: 'See you soon!', time: '09:00' },
  { id: '2', client: 'Bob', lastMessage: 'Thanks!', time: 'Yesterday' },
];

export default function ChatScreen() {
  return (
    <LinearGradient colors={["#e0e7ff", "#fff"]} style={styles.gradient}>
      <View style={styles.card}>
        <Text style={styles.header}>Chats</Text>
        <FlatList
          data={mockChats}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ChatItem chat={item} />}
          contentContainerStyle={{ paddingVertical: 8 }}
        />
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
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    width: '94%',
    maxWidth: 420,
    marginTop: 32,
    marginBottom: 32,
    alignSelf: 'center',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3b5bfd',
    marginBottom: 10,
    textAlign: 'center',
  },
});