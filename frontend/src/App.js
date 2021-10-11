import React, { useState, useEffect } from 'react';
import './App.css';
import MapContainer from './components/StoresMapContainer';
import { fetchStores } from './services/index';

function App() {
  const [allStores, setAllStores] = useState([]);

  useEffect(() => {
    let isMounted = true;
    // Fetch all stores from the API
    const fetchData = async () => {
      const resp = await fetchStores();
      if (isMounted) {
        setAllStores(resp);
      }
    };
    fetchData();
    return () => {
      isMounted = false
    }
  }, [])
  return (
    <div className="App">
      <div>
        <MapContainer
          stores={allStores}
        />
      </div>
    </div>
  );
}

export default App;
