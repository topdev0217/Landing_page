import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import creditCardImg from '../../assets/icons/credit-card.svg';
import transactionImg from '../../assets/icons/transaction.svg';
import shoppingBagImg from '../../assets/icons/shopping-bag.svg';
import './style.scss';

const CashPayment = () => {
  const cashMethodList = [
    { id: 0, title: 'Transactions', icon: transactionImg, description: 'Pay for NFTs instantly with the payment method of your choice, or connect a browser wallet extension to buy with crypto' },
    { id: 1, title: 'Instant Delivery', icon: shoppingBagImg, description: 'Access and showcase purchased NFTs in your Market wallet immediately after purchase.' },
    { id: 2, title: 'Anti-Chargeback Technology', icon: creditCardImg, description: 'Market smart contracts protect artists from chargebacks, and assure instant NFT delivery and instant purchases are equally protected.' },
  ]
  return (
    <Typography component='div' className='cash-payment-section'>
      <Typography component='span' className='notification'>This is marketplace</Typography>
      <Typography variant='h1' component='h2' className='title'>
        Exclusive NFT Marketplace, Accessible Through One-click Cash Payments
      </Typography>
      <Typography component='span' className='description'>
        Let us handle all the technical and operational complexity needed to instantly buy NFTs. Welcome to the Payment marketplace
      </Typography>
      <Grid container spacing={3} className='cash-method-list'>
        {
          cashMethodList.length > 0 && cashMethodList.map((item, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <Typography component='div' className='cash-method'>
                <Typography component='div'>
                  <img src={item.icon} alt='credit-card' />
                  <Typography variant='h1' component='h2' className='cash-method-title'>{item.title}</Typography>
                  <Typography component='p' className='cash-method-description'>{item.description}</Typography>
                </Typography>
                <Typography component='div' className='learn-more'>Learn more</Typography>
              </Typography>
            </Grid>
          ))
        }

      </Grid>
    </Typography>
  )
}

export default CashPayment;