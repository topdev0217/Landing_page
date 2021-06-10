import React from 'react';
import GetStarted from '../components/GetStarted';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './style.scss';

const Home = () => {
  return (
    <Typography component='div' className='home-page'>
      <Container className='container'>
        <GetStarted />
      </Container>
    </Typography>
  )
}

export default Home;