import React, { useState } from 'react';
import Feed from './pages/Feed';
import Upload from './pages/Upload';
import StripeButton from './components/StripeButton';

function App() {
  const [email, setEmail] = useState('');

  return (
    <div>
      <h1>Clipper Teenager Web</h1>
      {!email && (
        <input placeholder="Podaj email" onChange={e => setEmail(e.target.value)} />
      )}
      {email && (
        <>
          <Feed />
          <Upload userEmail={email} />
          <StripeButton userEmail={email} priceId="price_1SpiAa639JRV7b5v8XuLdpsi" />
        </>
      )}
    </div>
  );
}

export default App;
