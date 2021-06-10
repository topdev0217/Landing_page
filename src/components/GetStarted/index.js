import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Grid,
  Typography,
  IconButton,
  Button
} from '@material-ui/core';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import firstEthImage from '../../assets/imgs/ETH-1.png';
import secondEthImage from '../../assets/imgs/ETH-2.png';
import thirdEthImage from '../../assets/imgs/ETH-3.png';
import './style.scss';

const GetStarted = () => {
  return (
    <Grid container spacing={3} className='get-started-section'>
      <Grid item xs={12} md={6}>
        <Typography component='div' className='image-section'>
          <img src={firstEthImage} aria-hidden className='firstImg' alt='eth image-1' />
          <img src={secondEthImage} aria-hidden className='secondImg' alt='eth image-2' />
          <img src={thirdEthImage} aria-hidden className='thirdImg' alt='eth image-3' />
        </Typography>
      </Grid>
      <Grid item xs={12} md={6} className='action'>
        <Typography variant='h1' component='h2' className='title'>
          <Typography component='span' className='highlight'>NFT</Typography> marketplace, wallet, and one click payment gateway
        </Typography>
        <Typography component='span' className='simple-description'>
          Market is the easiest way to buy, sell, manage, and share NFTs
        </Typography>
        <Typography component='div' className='btn-section'>
          <Button variant='contained' className='get-started-btn'>Get Started</Button>
          <Button color="primary" component={RouterLink} to="/" className='learn-more'>
            Or learn more
            <IconButton aria-label='delete' size='small'>
              <ChevronRightRoundedIcon fontSize='inherit' />
            </IconButton>
          </Button>
          {/* <Typography component='div' className='learn-more'>
            </Typography> */}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default GetStarted;