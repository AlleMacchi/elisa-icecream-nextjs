"use client";
import { useState } from 'react';

const SEASONS = ['Spring', 'Summer', 'Autumn', 'Winter'];
const DEFAULT_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [days, setDays] = useState(DEFAULT_DAYS.map(d => ({ day: d, hours: '', closed: false })));
  const [saving, setSaving] = useState(false);
  const [saveMsg, setSaveMsg] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError('');
    setLoggingIn(true);
    try {
      const res = await fetch('/api/hours/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        const data = await fetch('/api/hours').then(r => r.json());
        setTitle(data.title || 'Autumn Opening Hours');
        setNote(data.note || '');
        setDays(data.days || DEFAULT_DAYS.map(d => ({ day: d, hours: '', closed: false })));
        setAuthenticated(true);
      } else {
        setAuthError('Incorrect password. Please try again.');
      }
    } catch {
      setAuthError('Connection error. Please try again.');
    }
    setLoggingIn(false);
  };

  const updateDay = (index, field, value) => {
    setDays(prev => prev.map((d, i) => (i === index ? { ...d, [field]: value } : d)));
  };

  const handleSave = async () => {
    setSaving(true);
    setSaveMsg('');
    try {
      const res = await fetch('/api/hours', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, title, note, days }),
      });
      if (res.ok) {
        setSaveMsg('success');
        setTimeout(() => setSaveMsg(''), 4000);
      } else if (res.status === 401) {
        setSaveMsg('auth-error');
        setAuthenticated(false);
      } else {
        setSaveMsg('error');
      }
    } catch {
      setSaveMsg('error');
    }
    setSaving(false);
  };

  const inputStyle = {
    width: '100%',
    padding: '0.6rem 0.9rem',
    border: '1.5px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    boxSizing: 'border-box',
    outline: 'none',
  };

  if (!authenticated) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{
          background: '#fff',
          padding: '2.5rem',
          borderRadius: '8px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
          width: '100%',
          maxWidth: '360px',
          textAlign: 'center',
        }}>
          <h1 style={{ fontSize: '1.3rem', marginBottom: '0.4rem', color: '#BC1C24', fontWeight: 700 }}>
            Admin Panel
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem' }}>
            Opening Hours Management
          </p>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter password"
              required
              style={{ ...inputStyle, marginBottom: '1rem' }}
            />
            {authError && (
              <p style={{ color: '#BC1C24', marginBottom: '0.8rem', fontSize: '0.9rem' }}>
                {authError}
              </p>
            )}
            <button
              type="submit"
              disabled={loggingIn}
              style={{
                width: '100%',
                padding: '0.65rem',
                background: '#BC1C24',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 600,
                cursor: loggingIn ? 'not-allowed' : 'pointer',
                opacity: loggingIn ? 0.7 : 1,
              }}
            >
              {loggingIn ? 'Checking...' : 'Enter'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '620px', margin: '2rem auto', padding: '0 1rem 3rem' }}>
      <h1 style={{ fontSize: '1.5rem', color: '#BC1C24', fontWeight: 700, marginBottom: '0.3rem' }}>
        Edit Opening Hours
      </h1>
      <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '2rem' }}>
        Changes are saved immediately to the website.
      </p>

      {/* Title */}
      <div style={{ marginBottom: '1.8rem' }}>
        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>
          Title
        </label>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={inputStyle}
        />
        <div style={{ marginTop: '0.6rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          <span style={{ fontSize: '0.85rem', color: '#666', alignSelf: 'center', marginRight: '0.2rem' }}>
            Quick set:
          </span>
          {SEASONS.map(s => (
            <button
              key={s}
              onClick={() => setTitle(`${s} Opening Hours`)}
              style={{
                padding: '0.25rem 0.75rem',
                border: '1.5px solid #BC1C24',
                borderRadius: '20px',
                background: title.startsWith(s) ? '#BC1C24' : '#fff',
                color: title.startsWith(s) ? '#fff' : '#BC1C24',
                fontSize: '0.85rem',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Days */}
      <div style={{ marginBottom: '1.8rem' }}>
        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.8rem' }}>
          Hours per Day
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {days.map((d, i) => (
            <div
              key={d.day}
              style={{
                display: 'grid',
                gridTemplateColumns: '110px 1fr auto',
                alignItems: 'center',
                gap: '0.7rem',
                padding: '0.55rem 0.9rem',
                background: '#f9f9f9',
                borderRadius: '6px',
                border: '1px solid #eaeaea',
              }}
            >
              <strong style={{ fontSize: '0.95rem' }}>{d.day}</strong>
              <input
                type="text"
                value={d.closed ? '' : d.hours}
                disabled={d.closed}
                onChange={e => updateDay(i, 'hours', e.target.value)}
                placeholder="e.g. 5pm - 9pm"
                style={{
                  padding: '0.4rem 0.7rem',
                  border: '1.5px solid #ccc',
                  borderRadius: '4px',
                  fontSize: '0.95rem',
                  background: d.closed ? '#ececec' : '#fff',
                  color: d.closed ? '#aaa' : '#000',
                  outline: 'none',
                }}
              />
              <label style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.9rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                userSelect: 'none',
              }}>
                <input
                  type="checkbox"
                  checked={d.closed}
                  onChange={e => updateDay(i, 'closed', e.target.checked)}
                  style={{ width: '15px', height: '15px', cursor: 'pointer', accentColor: '#BC1C24' }}
                />
                Closed
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Note */}
      <div style={{ marginBottom: '2rem' }}>
        <label style={{ display: 'block', fontWeight: 600, marginBottom: '0.5rem' }}>
          Extra note{' '}
          <span style={{ fontWeight: 400, color: '#888', fontSize: '0.9rem' }}>(optional)</span>
        </label>
        <input
          value={note}
          onChange={e => setNote(e.target.value)}
          placeholder="e.g. (our Café is now closed)"
          style={inputStyle}
        />
        <p style={{ fontSize: '0.8rem', color: '#999', marginTop: '0.3rem' }}>
          Leave empty to hide the note.
        </p>
      </div>

      {/* Save */}
      <button
        onClick={handleSave}
        disabled={saving}
        style={{
          width: '100%',
          padding: '0.8rem',
          background: '#BC1C24',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          fontSize: '1.05rem',
          fontWeight: 700,
          cursor: saving ? 'not-allowed' : 'pointer',
          opacity: saving ? 0.7 : 1,
          letterSpacing: '0.02em',
        }}
      >
        {saving ? 'Saving...' : 'Save Changes'}
      </button>

      {saveMsg === 'success' && (
        <p style={{ marginTop: '1rem', color: '#2a7a3a', fontWeight: 600, textAlign: 'center', fontSize: '0.95rem' }}>
          ✓ Changes saved — the website is now updated.
        </p>
      )}
      {saveMsg === 'error' && (
        <p style={{ marginTop: '1rem', color: '#BC1C24', fontWeight: 600, textAlign: 'center', fontSize: '0.95rem' }}>
          Something went wrong. Please try again.
        </p>
      )}
      {saveMsg === 'auth-error' && (
        <p style={{ marginTop: '1rem', color: '#BC1C24', fontWeight: 600, textAlign: 'center', fontSize: '0.95rem' }}>
          Session expired — please refresh and log in again.
        </p>
      )}
    </div>
  );
}
