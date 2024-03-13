'use client'

import { useEffect, useState } from 'react';

const infoPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/table');
      const data = await response.json();
      setUsers(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className='pt-4'>Her kommer info om arrangementet</h1>
    </div>
  );
};

export default infoPage;
