'use client'

import { useEffect, useState } from 'react';

const infoPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/table.ts');
      const data = await response.json();
      console.log(data)
      setUsers(data.id);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      {users}
    </div>
  );
};

export default infoPage;
