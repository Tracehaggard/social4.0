
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [tone, setTone] = useState('professional');
  const [niche, setNiche] = useState('fitness');
  const [calendar, setCalendar] = useState([]);

  const submit = async () => {
    const res = await axios.post('https://the-social-network-backend-y8zx.onrender.com/analyze', {

      url,
      tone,
      niche
    });
    setCalendar(res.data.content_calendar);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>The Social Network</h1>
      <input style={{ marginBottom: '1rem', width: '100%' }} value={url} onChange={e => setUrl(e.target.value)} placeholder="Website or social link" />
      <input style={{ marginBottom: '1rem', width: '100%' }} value={tone} onChange={e => setTone(e.target.value)} placeholder="Tone (fun, luxury, etc)" />
      <input style={{ marginBottom: '1rem', width: '100%' }} value={niche} onChange={e => setNiche(e.target.value)} placeholder="Niche (fitness, beauty, etc)" />
      <button onClick={submit} style={{ backgroundColor: '#1d4ed8', color: 'white', padding: '0.5rem 1rem' }}>Generate Calendar</button>
      <ul>
        {calendar.map((item, i) => (
          <li key={i}>Day {item.day}: {item.post}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
