import React from 'react';
import './Total.css';

export default function Total({ total, onReset }) {
  return (
    <div className="total">
      <h2>Total</h2>
      <div className="numero">{total}</div>
      <button onClick={onReset} className="reset">🔄</button>
    </div>
  );
}