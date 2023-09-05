import { h } from 'preact';
import { useState } from 'preact/hooks';

export default function Greeting({messages}) {
  
  const [greeting, setGreeting] = useState(messages[0]);

  const randomMessage = () => {
    let g = messages[(Math.floor(Math.random() * messages.length))]
    if (g == greeting) g = randomMessage()
    return g
  };


  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        New Greeting
      </button>
    </div>
  );
}