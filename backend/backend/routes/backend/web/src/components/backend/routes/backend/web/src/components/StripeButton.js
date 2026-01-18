import React from 'react';

export default function StripeButton({ priceId }) {
  const handleClick = async () => {
    const res = await fetch('http://localhost:3000/stripe/create-checkout-session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId })
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return <button onClick={handleClick}>Kup pakiet</button>;
}
