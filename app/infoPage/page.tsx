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
      
    </div>
  );
};

export default infoPage;
