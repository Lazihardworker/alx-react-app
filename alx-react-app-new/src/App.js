import React from 'react';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>User Profiles</h1>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Sulaiman" age="30" bio="Tech-savvy analyst passionate about sustainable innovation" />
    </div>
  );
}

export default App;
