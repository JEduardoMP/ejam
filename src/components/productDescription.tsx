import { FC } from 'react';
import productMini from '../assets/productMini.png';
import { Brightness1, Star } from '@mui/icons-material';
import { StyledProductDescription } from '../styles/productDescription.styles';
const ProductDescription: FC = () => {
  return (
    <StyledProductDescription>
      <div className='image-container'>
        <img src={productMini} alt='mini product' />
      </div>
      <div className='description-container'>
        <div className='title-container'>
          <h4>Clarifion Air Ionizer</h4>
          <p>
            <small>$180</small>
            <span>$84</span>
          </p>
        </div>
        <div className='stars-container'>
          {Array.from({ length: 5 }).map(() => (
            <Star sx={{ fill: 'rgba(255, 192, 0, 1)' }} />
          ))}
        </div>
        <div className='stock-container'>
          <Brightness1 />
          <p>12 left in stock</p>
        </div>
        <p className='product-description-md'>
          Simply plug a Clarifion into any standard outlet and replace bulky,
          expensive air purifiers with a simple.
        </p>
      </div>
    </StyledProductDescription>
  );
};

export default ProductDescription;
