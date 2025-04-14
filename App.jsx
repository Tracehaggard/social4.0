
import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [url, setUrl] = useState('');
  const [tone, setTone] = useState('professional');
  const [niche, setNiche] = useState('fitness');
  const [calendar, setCalendar] = useState([]);

  const submit = async () => {
    try {
      const res = await axios.post(
        'https://the-social-network-backend-y8zx.onrender.com/analyze',
        { url, tone, niche },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setCalendar(res.data.content_calendar);
    } catch (err) {
      console.error('Error fetching calendar:', err);
    }
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>The Social Network</h1>
      <input style={{ marginBottom: '1rem', width: '100%' }} value={url} onChange={e => setUrl(e.target.value)} placeholder="Website or social link" />
      <input style={{ marginBottom: '1rem', width: '100%' }} value={tone} onChange={e => setTone(e.target.value)} placeholder="Tone (fun, luxury, etc)" />
      <input style={{ marginBottom: '1rem', width: '100%' }} value={niche} onChange={
