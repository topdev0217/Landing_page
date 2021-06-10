import React, { useState } from 'react';
import {
  Link,
  useHistory
} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import dollarImg from '../../assets/icons/dollar.svg';
import boxingImg from '../../assets/icons/boxing.svg';
import './style.scss';

const Header = () => {
  const history = useHistory();
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  /**
   * Go to url by a click
   * @param {String} url
   */
  const linkTo = (url) => {
    setIsMobileMenu(false);
    history.push(url);
  }

  return (
    <div className='header'>
      <Container className='container'>
        <Typography
          component='div'
          className='mobile-menu-icon'
          onClick={() => setIsMobileMenu(true)}
        >
          <MenuIcon />
        </Typography>
        <Typography component='div' className='logo-section'>
          <Typography component='div' className='logo-icon-list' onClick={() => linkTo('/')}>
            <img src={dollarImg} aria-hidden alt='dollar image' />
            <img src={boxingImg} aria-hidden alt='boxing image' />
          </Typography>
          <Typography component='div' className='divider' />
        </Typography>
        <Typography component='div' className='menu-list'>
          <Link to='/' className={window.location.pathname === '/' ? 'active' : 'item'}>Marketplace</Link>
          <Link to='/about' className={window.location.pathname === '/about' ? 'active' : 'item'}>About</Link>
          <Button variant='contained'>Sign up for the waiting list</Button>
        </Typography>
        <Typography
          component='div'
          className='mobile-menu'
          style={{ width: isMobileMenu && '75%' }}
        >
          <Typography component='div'>
            <Typography component='div' className='logo-icon-list' onClick={() => linkTo('/')}>
              <img src={dollarImg} aria-hidden alt='dollar image' />
              <img src={boxingImg} aria-hidden alt='boxing image' />
            </Typography>
            <Typography component='div' className='mobile-menu-list'>
              <Typography component='div' onClick={() =>linkTo('marketplace')}>Marketplace</Typography>
              <Typography component='div' onClick={() =>linkTo('about')}>About</Typography>
            </Typography>
          </Typography>
          
        </Typography>
        {
          isMobileMenu &&
          <Typography
            component='div'
            className='overlay'
            onClick={() => setIsMobileMenu(false)}
          />
        }
      </Container>
    </div>
  )
}

const MenuIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="white" className="bi bi-list" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
    </svg>
  )
}

export default Header;