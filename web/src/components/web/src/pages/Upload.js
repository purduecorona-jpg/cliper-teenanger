import React, { useState, useEffect } from 'react';

export default function Upload({ userEmail }) {
  const [file, setFile] = useState(null);
  const [subscription, setSubscription] = useState('inactive');

  useEffect(() => {
    fetch(`http://localhost:3000/users/status/${userEmail}`)
      .then(res => res.json())
      .then(data => setSubscription(data.subscription));
  }, [userEmail]);

  const handleUpload = () => {
    if(subscription !== 'active') return alert('Musisz mieć pakiet Premium!');
    if(file) alert('Upload działa tylko z backend!');
  }

  return (
    <div>
      <h2>Upload wideo - Web</h2>
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
