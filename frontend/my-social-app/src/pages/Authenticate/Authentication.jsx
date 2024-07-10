
import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Register from './Register';
import Login from './Login';

const Authentication = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Grid container style={{ height: '100vh' }}>
        <Grid item xs={7} style={{ overflow: 'hidden' }}>
          <img
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            src="https://cdn.pixabay.com/photo/2022/03/08/14/07/network-7055821_1280.jpg"
            alt=""
          />
        </Grid>
        <Grid item xs={5}>
          <div style={{ padding: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <Card style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '1.25rem 0' }}>
                <h1 style={{ textAlign: 'center' }}>I-Book</h1>
                <p style={{ textAlign: 'center', fontSize: '0.875rem', width: '70%' }}>Connect, share, travel, enjoy</p>
              </div>
              <Register />
            </Card>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Authentication;


