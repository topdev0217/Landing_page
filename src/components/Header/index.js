import React from 'react';
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

  /**
   * Go to url by a click
   * @param {String} url
   */
  const linkTo = (url) => {
    history.push(url)
  }

  return (
    <div className='header'>
      <Container className='container'>
        <Typography component='div' className='logo-section'>
          <Typography component='div' className='icon-list' onClick={() => linkTo('/')}>
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
      </Container>
    </div>
  )
}

export default Header;