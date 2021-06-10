import React from 'react';
import { useHistory, Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import dollarImg from '../../assets/icons/dollar.svg';
import boxingImg from '../../assets/icons/boxing.svg';
import IconButton from '@material-ui/core/IconButton';
import ArrowRightAltRoundedIcon from '@material-ui/icons/ArrowRightAltRounded';
import InputBase from '@material-ui/core/InputBase';
import './style.scss';

const Footer = () => {
  const history = useHistory();

  /**
   * Go to url by a click
   * @param {String} url
  */
  const linkTo = (url) => {
    history.push(url)
  }

  return (
    <div className='footer'>
      <Container className='container'>
        <Grid container>

          {/* LOGO SECTION */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className='logo-section'
          >
            <Typography component='div' className='logo-icon-list' onClick={() => linkTo('/')}>
              <img src={dollarImg} aria-hidden alt='dollar image' />
              <img src={boxingImg} aria-hidden alt='boxing image' />
            </Typography>
            <Typography component='div' className='description'>
              Marketplace, wallet, and payment gateway: makes NFTs accessible, instant and sexy.
            </Typography>
          </Grid>
          {/* LOGO SECTION END */}

          {/* MARKET SECTION */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className='menu-section'
          >
            <Typography component='div'>
              <Typography
                component="span"
                className='title'
              >
                Market
              </Typography>
              <Typography component='div' className='menu-list'>
                <Link to='/about' className={window.location.pathname === '/' ? 'active' : 'item'}>About</Link>
                <Link to='/log-in' className={window.location.pathname === '/' ? 'active' : 'item'}>Log-in</Link>
                <Link to='/register' className={window.location.pathname === '/' ? 'active' : 'item'}>Register</Link>
              </Typography>
            </Typography>
          </Grid>
          {/* MARKET SECTION END */}

          {/* INFO SECTION */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className='menu-section'
          >
            <Typography component='div'>
              <Typography
                component="span"
                className='title'
              >
                Info
              </Typography>
              <Typography component='div' className='menu-list'>
                <Link to='/marketplace' className={window.location.pathname === '/' ? 'active' : 'item'}>Marketplace</Link>
                <Link to='/wallet' className={window.location.pathname === '/' ? 'active' : 'item'}>Wallet</Link>
                <Link to='/discover' className={window.location.pathname === '/' ? 'active' : 'item'}>Discover</Link>
              </Typography>
            </Typography>

          </Grid>
          {/* INFO SECTION END */}

          {/* STAY CONNECTED SECTION */}
          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            className='stay-connected-section'
          >
            <Typography
              component="span"
              className='title'
            >
              Stay Connected
            </Typography>
            <Typography component='div' className='email-input-section'>
              <Typography
                component="span"
                className='description'
              >
                Subscribe to the marketing newsletter for daily updates.
              </Typography>
              <Typography component='div' className='email-input-box'>
                <InputBase
                  className='email-input'
                  placeholder="Enter your email"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
                <IconButton aria-label="delete" size="small">
                  <ArrowRightAltRoundedIcon fontSize="inherit" />
                </IconButton>
              </Typography>
            </Typography>
          </Grid>
          {/* STAY CONNECTED SECTION END */}

        </Grid>
      </Container>
    </div>
  )
}

export default Footer;