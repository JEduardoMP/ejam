import { LockOutlined } from '@mui/icons-material';
import { Divider } from '@mui/material';
import { FC } from 'react';
import { StyledFooter } from '../styles/footer.styles';

const Footer: FC = () => {
  return (
    <StyledFooter>
      <div className='copyright'>
        <p>Copyright (c) 2023</p>
        <Divider
          variant='fullWidth'
          flexItem
          orientation='vertical'
          style={{ height: '1rem', backgroundColor: 'white'  }}
        />
        <p>Clarifionsupport@clarifion.com</p>
      </div>
      <p className='lock'>
        <LockOutlined />
        Secure 256-bit SSL encryption.
      </p>
    </StyledFooter>
  );
};

export default Footer;
