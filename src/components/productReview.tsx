import { Star, Verified } from '@mui/icons-material';
import { FC } from 'react';
import product from '../assets/productLg.png';
import profile from '../assets/profile.png';
import { StyledProductReview } from '../styles/productReview.styles';

const ProductReview: FC = () => {
  return (
    <StyledProductReview>
      <img src={product} alt='Product' />
      <div className='reviews-container'>
        <div className='profile-container'>
          <img src={profile} alt='Profile' />
          <div className='name-container'>
            {Array.from({ length: 5 }).map(() => (
              <Star />
            ))}
            <p>
              <strong>Ken T.</strong> <Verified /> <span>Verified Customer</span>
            </p>
          </div>
        </div>
        <p className='text-content'>
          “As soon as the Clarifions arrived I put one in my bedroom. This was
          late in the afternoon. When I went to the bedroom in the evening it
          smelled clean. When I went to bed I felt I could breathe better.
          Wonderful.”
        </p>
      </div>
    </StyledProductReview>
  );
};

export default ProductReview;
