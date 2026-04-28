"use client";
import { useState, useEffect } from 'react';

export default function OpeningHours() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/api/hours')
      .then(r => r.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data) return null;

  return (
    <>
      <p style={{ fontSize: "1.2em", marginBottom: "0.5em" }}>
        <strong>{data.title}</strong>
      </p>
      {data.days.map(({ day, hours, closed }) => (
        <div key={day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <strong>{day}</strong>
          <span style={{ textAlign: "right" }}>{closed ? 'Closed' : hours}</span>
        </div>
      ))}
      {data.note && (
        <p style={{ fontSize: "0.95em", marginTop: "0.8em", fontWeight: "bold", color: "#000", textAlign: "center" }}>
          {data.note}
        </p>
      )}
    </>
  );
}
