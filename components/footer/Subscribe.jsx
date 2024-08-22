
'use client'
import React, { useState } from 'react';
import { notify, notifyerror } from '../globalcomponent/Toast';

const Subscribe = ({ styles }) => {
  const [email, setEmail] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault()
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/subscribes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        data: {
          EmailId: email
        }
      })
    });

    if (response.ok) {
      notify('Subscribed successfully');
      setEmail("")
    } else {
      notifyerror('Email already exists');
    }
  };

  return (
    <form onSubmit={(e)=>handleSubscribe(e)}>
    <div style={styles.container}>
      <input
        type="email"
        placeholder="Your Email Address"
        style={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button style={styles.button} type='submit' className='gradient_red' >
        Subscribe
      </button>
    </div>
    </form>
  );
};

export default Subscribe;
