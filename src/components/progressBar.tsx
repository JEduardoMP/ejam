import { CheckCircle } from '@mui/icons-material';
import { Box } from '@mui/material';
import { FC } from 'react';
import { StyledProgressBar } from '../styles/progressBar.styles';

const ProgressBar: FC = () => {
  return (
    <StyledProgressBar direction='row' justifyContent='space-evenly'>
      <Box>
        <CheckCircle color='success' />
        <p>Cart Review</p>
      </Box>
      <Box>
        <CheckCircle color='success' />
        <p>Checkout</p>
      </Box>
      <Box className='container-3'>
        <p className='number'>3</p>
        <p>
          <strong>Special Offer</strong>
        </p>
      </Box>
      <Box className='container-4'>
        <p className='number'>4</p>
        <p>Confirmation</p>
      </Box>
    </StyledProgressBar>
  );
};

export default ProgressBar;
