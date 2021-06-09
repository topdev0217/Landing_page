import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './style.scss';

const Header = () => {
  return (
    <div className='header'>
      <Container style={{ height: '70px' }}>
        <Typography component="div" style={{color: 'white'}}>
          Header Content
        </Typography>
      </Container>
    </div>
  )
}

export default Header;