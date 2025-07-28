// App.js or wherever needed
import React, { useEffect } from 'react';
import api from './axiosLogger';

function App() {
  useEffect(() => {
    api.get('/users')
      .then(res => console.log('Users:', res.data))
      .catch(err => console.error('API error:', err));
  }, []);

  return <div>Hello from Frontend Logging Middleware!</div>;
}

export default App;
