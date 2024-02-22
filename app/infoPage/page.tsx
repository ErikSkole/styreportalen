'use client'

import { useEffect, useState } from 'react';

const infoPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/table');
      const data = await response.json();
      console.log(data)
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Events</h1>
      <p>{users}</p>
    </div>
  );
};

export default infoPage;
