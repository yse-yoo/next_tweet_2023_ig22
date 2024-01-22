"use client"

import React, { useState } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p className="p-5">You clicked {count} times</p>
      <button className="border p-3 bg-black text-white" onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}