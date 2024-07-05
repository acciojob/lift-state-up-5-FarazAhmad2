import React, { useState } from 'react';
import Child from './Child';

function Parent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child isLoggedIn={isLoggedIn} onLogin={handleLogin} />
    </div>
  );
}

export default Parent;
