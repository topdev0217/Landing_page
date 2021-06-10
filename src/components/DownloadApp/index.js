import React from 'react';
import { Typography } from '@material-ui/core';
import appleImg from '../../assets/icons/apple.svg';
import appImg from '../../assets/imgs/app-1.png';
import './style.scss';

const DownloadApp = () => {
  return (
    <Typography component='div' className='download-app-section'>
      <Typography component='p' className='notification'>
        Introducing the Wallet - The social standard for sharing and showcasing your NFTs
      </Typography>
      <Typography variant='h1' component='h2' className='title'>Download the iOS App Now</Typography>
      <Typography component='div' className='apple-logo'>
        <Typography component='div' className='apple-logo-content'>
          <img src={appleImg} alt='apple' />
          <Typography component='div' className='apple-text'>
            <Typography component='p' className='apple-description'>DOWNLOAD ON THE</Typography>
            <Typography variant='h1' component='h2' className='apple-logo-title'>Apple Store</Typography>
          </Typography>
        </Typography>
      </Typography>
      <Typography component='div' className='app-image-section'>
        <Typography component='div' className='app-image-content'>
          <img src={appImg} alt='app-1' className='first-img' />
          <img src={appImg} alt='app-2' className='second-img' />
          <img src={appImg} alt='app-3' className='third-img' />
        </Typography>
      </Typography>
    </Typography>
  )
}

export default DownloadApp;