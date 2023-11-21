import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { FC } from 'react';
import Carousel from 'react-material-ui-carousel';
import { StyledHeader } from '../styles/header.styles';
import { CAROUSEL_CONTENT } from '../constants/carousel';

const Header: FC = () => {
  return (
    <StyledHeader>
      <div className='container-inner-values'>
        {CAROUSEL_CONTENT.map((el) => (
          <div className='inner-values'>
            {el.icon}
            <p>{el.text}</p>
          </div>
        ))}
      </div>
      <Carousel
        swipe
        className='carousel'
        indicators={false}
        navButtonsAlwaysVisible
        NextIcon={<ArrowForwardIos />}
        PrevIcon={<ArrowBackIosNew />}
      >
        {CAROUSEL_CONTENT.map((el) => (
          <div className='inner-values'>
            {el.icon}
            <p>{el.text}</p>
          </div>
        ))}
      </Carousel>
    </StyledHeader>
  );
};

export default Header;
