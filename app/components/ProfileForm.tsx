import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ProfileForm() {
  // Identity
  const [name, setName] = useState('Vendor Name');
  const [vendorId] = useState('VEND-123456');
  const [category, setCategory] = useState('Catering');
  const [location, setLocation] = useState('New York, NY');
  const [profileImage, setProfileImage] = useState(null as string | null);

  // Status
  const [online, setOnline] = useState(true);
  const [accepting, setAccepting] = useState(true);
  const [vacation, setVacation] = useState(false);

  // Business hours/holidays
  const [businessHours, setBusinessHours] = useState('09:00 - 18:00');
  const [closedDays, setClosedDays] = useState('Sunday');

  // Notifications
  const [alerts, setAlerts] = useState({
    newReservation: true,
    reservationChange: true,
    newMessage: true,
    payment: true,
  });
  const [push, setPush] = useState(true);
  const [email, setEmail] = useState('vendor@email.com');
  const [inApp, setInApp] = useState(true);

  // Security
  const [password, setPassword] = useState('');
  const [showLoginActivity, setShowLoginActivity] = useState(false);
  const [showDeviceMgmt, setShowDeviceMgmt] = useState(false);
  const [twoFactor, setTwoFactor] = useState(false);

  // Placeholder for save handler
  const handleSave = () => {
    alert('Profile saved!');
  };

  // Placeholder for image picker
  const handleImagePick = () => {
    alert('Image picker not implemented.');
  };

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={{ paddingBottom: 32 }}>
      <View style={styles.avatarSection}>
        <TouchableOpacity style={styles.avatarWrapper} onPress={handleImagePick}>
          {profileImage ? (
            <Image source={{ uri: profileImage }} style={styles.avatar} />
          ) : (
            <Image source={{ uri: 'https://randomuser.me/api/portraits/men/32.jpg' }} style={styles.avatar} />
          )}
        </TouchableOpacity>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.joined}>Joined 1 year ago</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Business Info</Text>
        <View style={styles.cardRow}><Text style={styles.label}>Vendor ID</Text><Text style={styles.readonly}>{vendorId}</Text></View>
        <View style={styles.cardRow}><Text style={styles.label}>Category</Text><TextInput style={styles.input} value={category} onChangeText={setCategory} /></View>
        <View style={styles.cardRow}><Text style={styles.label}>Location</Text><TextInput style={styles.input} value={location} onChangeText={setLocation} /></View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Status</Text>
        <View style={styles.switchRow}><Text>Online</Text><Switch value={online} onValueChange={setOnline} /></View>
        <View style={styles.switchRow}><Text>Accepting Reservations</Text><Switch value={accepting} onValueChange={setAccepting} /></View>
        <View style={styles.switchRow}><Text>Vacation Mode</Text><Switch value={vacation} onValueChange={setVacation} /></View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Notifications</Text>
        <View style={styles.switchRow}><Text>New Reservation</Text><Switch value={alerts.newReservation} onValueChange={v => setAlerts(a => ({ ...a, newReservation: v }))} /></View>
        <View style={styles.switchRow}><Text>Reservation Changes</Text><Switch value={alerts.reservationChange} onValueChange={v => setAlerts(a => ({ ...a, reservationChange: v }))} /></View>
        <View style={styles.switchRow}><Text>New Messages</Text><Switch value={alerts.newMessage} onValueChange={v => setAlerts(a => ({ ...a, newMessage: v }))} /></View>
        <View style={styles.switchRow}><Text>Payment Alerts</Text><Switch value={alerts.payment} onValueChange={v => setAlerts(a => ({ ...a, payment: v }))} /></View>
        <View style={styles.switchRow}><Text>Push</Text><Switch value={push} onValueChange={setPush} /></View>
        <View style={styles.switchRow}><Text>Email</Text><Switch value={!!email} onValueChange={v => setEmail(v ? 'vendor@email.com' : '')} /></View>
        <View style={styles.switchRow}><Text>In-app</Text><Switch value={inApp} onValueChange={setInApp} /></View>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Security</Text>
        <View style={styles.cardRow}><Text style={styles.label}>Change Password</Text><TextInput style={styles.input} value={password} onChangeText={setPassword} placeholder="New Password" secureTextEntry /></View>
        <TouchableOpacity onPress={() => setShowLoginActivity(v => !v)}><Text style={styles.link}>Login Activity</Text></TouchableOpacity>
        {showLoginActivity && <Text style={styles.info}>Recent logins: (mocked)</Text>}
        <TouchableOpacity onPress={() => setShowDeviceMgmt(v => !v)}><Text style={styles.link}>Device Management</Text></TouchableOpacity>
        {showDeviceMgmt && <Text style={styles.info}>Devices: (mocked)</Text>}
        <View style={styles.switchRow}><Text>Two-factor Authentication</Text><Switch value={twoFactor} onValueChange={setTwoFactor} /></View>
        <TouchableOpacity onPress={() => alert('Logged out from all devices!')}><Text style={[styles.link, { color: 'red' }]}>Logout from all devices</Text></TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveBtnText}>Save Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    width: '100%',
  },
  avatarSection: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 16,
  },
  avatarWrapper: {
    borderWidth: 3,
    borderColor: '#e3e3e3',
    borderRadius: 60,
    padding: 4,
    marginBottom: 8,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#eee',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#222',
    marginTop: 4,
  },
  joined: {
    color: '#888',
    fontSize: 14,
    marginTop: 2,
    marginBottom: 8,
  },
  card: {
    backgroundColor: '#fafbfc',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 1,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    color: '#222',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  label: {
    fontWeight: 'bold',
    minWidth: 90,
    color: '#444',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    padding: 7,
    flex: 1,
    backgroundColor: '#fff',
  },
  readonly: {
    backgroundColor: '#f3f3f3',
    borderRadius: 4,
    padding: 8,
    color: '#888',
    flex: 1,
  },
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 4,
    paddingHorizontal: 2,
  },
  link: {
    color: '#007bff',
    marginTop: 12,
    textDecorationLine: 'underline',
  },
  info: {
    color: '#555',
    fontSize: 13,
    marginBottom: 4,
    marginTop: 2,
  },
  saveBtn: {
    marginTop: 10,
    marginHorizontal: 32,
    backgroundColor: '#3b5bfd',
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 32,
  },
  saveBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});