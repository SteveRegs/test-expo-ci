import React from 'react';
import { SafeAreaView } from 'react-native';
import InvoiceScreen from './screens/InvoiceScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <InvoiceScreen />
    </SafeAreaView>
  );
}
