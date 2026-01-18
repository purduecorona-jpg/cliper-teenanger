import React from 'react';
import { Button, Alert } from 'react-native';

export default function StripeButton({ userEmail, priceId }) {
  const handlePress = () => {
    Alert.alert('Tu otworzyłby się Stripe Checkout w WebView');
  };

  return <Button title="Kup pakiet" onPress={handlePress} />;
}
