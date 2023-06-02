import React, { useEffect, useState } from 'react';
import axios from 'axios';
import img from './img11.png';

const App = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://quadb-assignment-server.onrender.com/getData', {
          withCredentials: true,
        });
        // console.log(response.data);
        setApiData(response.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', overflowX: 'hidden' }}>
      <div>
        <img src={img} alt="header" style={{ width: '100vw', maxWidth: '100%', height: 'auto' }} />
        <table style={{ fontSize: '2rem' }} className="table table-dark table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last</th>
              <th>Buy</th>
              <th>Sell</th>
              <th>Volume</th>
              <th>Base Unit</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((item) => (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.last}</td>
                <td>{item.buy}</td>
                <td>{item.sell}</td>
                <td>{item.volume}</td>
                <td>{item.base_unit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer
        style={{
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          color: '#ffffff',
          textAlign: 'center',
          padding: '10px',
        }}
      >
        <button
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'blue';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
        }}
          style={{
            backgroundColor: 'transparent',
            color: 'lightblue',
            border: 'blue solid 1px',
            cursor: 'pointer',
            fontSize: '24px',
          }}
        >
          Add to Home Screen
        </button>
      </footer>
    </div>
  );
};

export default App;
