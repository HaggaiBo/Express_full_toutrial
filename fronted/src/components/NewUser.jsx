import React, { useState } from 'react';

export default function NewUser() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await fetch("http://localhost:3001/api/v1/auth/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password })
    })
    if (result.ok) {
      console.log("result");
      setUsername("");
      setPassword("");
      setEmail("");
    } else { 
      console.log(result);
    }
    console.log('Submitted:', { username, password, email });

  };
  


  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label>
        Username:
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)}/>
      </label>
      <label>
        Password:
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}


