import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Hello World</div>
      <button onClick={() => setCount((prev) => prev + 1)} />
      <p>{ count }</p>
    </>
  );
}

export default App;
