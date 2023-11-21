import { FC } from 'react';
import ProductDescription from './productDescription';
import {
  ArrowForward,
  Check,
  LockOutlined,
  Percent,
} from '@mui/icons-material';
import { Button, Container, Divider } from '@mui/material';
import payments from '../assets/payments.png';
import { CHECK_VALUES } from '../constants/checksValues';
import guarantee from '../assets/guarantee.png';
import { StyledProduct } from '../styles/product.styles';
import ProductReview from './productReview';

const Product: FC = () => {
  return (
    <StyledProduct>
      <ProductReview />
      <div className='main-container'>
        <h2>
          <span>ONE TIME ONLY</span> special price for 6 extra Clarifion for
          only <span>$14 each</span> ($84.00 total!)
        </h2>
        <img src='' alt='' />
        <ProductDescription />
        <p className='product-description'>
          Simply plug a Clarifion into any standard outlet and replace bulky,
          expensive air purifiers with a simple.
        </p>
        <div className='checks-container'>
          {CHECK_VALUES.map((el) => (
            <div className='checks'>
              <Check />
              {el}
            </div>
          ))}
        </div>
        <Container className='percent-container'>
          <div className='percent'>
            <Percent />
          </div>
          <p>
            Save <span>53%</span> and get <span>6 extra Clarifision</span> for
            only <span>$14 Each.</span>
          </p>
        </Container>
        <Button variant='contained' color='success'>
          YES - CLAIM MY DISCOUNT <ArrowForward />
        </Button>
        <div className='payment-methods-container'>
          <div className='secure'>
            <p>Free shipping</p>
            <Divider
              orientation='vertical'
              variant='middle'
              flexItem
              style={{ height: '1rem' }}
            />
            <p className='lock'>
              <LockOutlined /> Secure 256-bit SSL encryption
            </p>
          </div>
          <Divider
            className='vertical-divider'
            orientation='vertical'
            variant='middle'
            flexItem
            style={{ height: '1rem' }}
          />
          <Divider className='horizontal-divider' />
          <img src={payments} alt='payment methods' />
        </div>
        <a href='/'>NO THANKS, I DON'T WANT THIS.</a>
        <div className='guarantee'>
          <img src={guarantee} alt='guarantee' />
          <p>
            If you are not completely thrilled with your Clarifion - We have a{' '}
            <strong>30 day satisfaction guarantee.</strong> Please refer to our
            return policy at the bottom of the page for more details. Happy
            Shopping!
          </p>
        </div>
      </div>
    </StyledProduct>
  );
};

export default Product;
