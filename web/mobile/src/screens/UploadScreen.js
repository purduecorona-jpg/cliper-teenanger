import React, { useEffect, useState } from 'react';
import { View, Text, Button, Alert, TextInput } from 'react-native';

export default function UploadScreen() {
  const [email, setEmail] = useState('');
  const [subscription, setSubscription] = useState('inactive');

  useEffect(() => {
    if(email) {
      fetch(`http://localhost:3000/users/status/${email}`)
        .then(res => res.json())
        .then(data => setSubscription(data.subscription));
    }
  }, [email]);

  const handleUpload = () => {
    if(subscription !== 'active') return Alert.alert('Musisz mieć pakiet Premium!');
    Alert.alert('Upload działa tylko z backend!');
  }

  return (
    <View>
      {!email && <TextInput placeholder="Podaj email" onChangeText={setEmail} />}
      {email && <Button title="Upload" onPress={handleUpload} />}
    </View>
  );
}
