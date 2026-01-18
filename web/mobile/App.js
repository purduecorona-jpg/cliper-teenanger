import React from 'react';
import { View } from 'react-native';
import FeedScreen from './src/screens/FeedScreen';
import UploadScreen from './src/screens/UploadScreen';
import StripeButton from './src/components/StripeButton';

export default function App() {
  return (
    <View>
      <FeedScreen />
      <UploadScreen />
      <StripeButton userEmail="test@example.com" priceId="price_1SpiAa639JRV7b5v8XuLdpsi" />
    </View>
  );
}
