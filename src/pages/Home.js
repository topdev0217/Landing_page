import React from 'react';
import {
  Typography,
  Container
} from '@material-ui/core'

import GetStarted from '../components/GetStarted';
import CashPayment from '../components/CashPayment';
import PaymentGateway from '../components/PaymentGateway';
import DownloadApp from '../components/DownloadApp';
import './style.scss';

const Home = () => {
  return (
    <Typography component='div' className='home-page'>
      <Container className='container'>
        <GetStarted />
        <CashPayment />
        <PaymentGateway />
        <DownloadApp />
      </Container>
    </Typography>
  )
}

export default Home;