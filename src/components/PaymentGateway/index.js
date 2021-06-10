import React from 'react';
import { Typography, Button } from '@material-ui/core';
import paymentGatewayImg from '../../assets/imgs/payment-gateway.png';
import './style.scss';

const PaymentGateway = () => {
  return (
    <Typography component='div' className='payment-gateway-section'>
      <Typography component='div' className='payment-content-box' style={{ backgroundImage: `url(${paymentGatewayImg})` }}>
        <Typography variant='h1' component='h2' className='title'>One Click Crypto Payment Gateway</Typography>
        <Typography component='div' className='description'>
          <Typography component='p'>
            Want to be an early builder with payment gateway technology? Contact us now to begin adding our payment gateway into your app today.
          </Typography>
        </Typography>
        
        <Typography component='div' className='btn-section'>
          <Button variant='contained'>Contact</Button>
        </Typography>

      </Typography>
    </Typography>
  )
}

export default PaymentGateway;