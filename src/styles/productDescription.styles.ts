import styled from '@emotion/styled';

export const StyledProductDescription = styled.div`
  display: flex;
  gap: 1rem;
  text-align: start;
  .image-container {
    width: max-content;
    height: max-content;
    padding: 0.1rem 0.6;
    border-radius: 1rem;
    background-color: var(--secundaryText);
  }
  h4 {
    font-size: 14px;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  .description-container {
    width: 100%;
    .title-container {
      display: flex;
      justify-content: space-between;
      p {
        color: var(--secundaryText);
        font-weight: bold;
        font-size: 14px;
        small {
          font-size: 10px;
          margin-right: 0.4rem;
          text-decoration: line-through;
          color: rgba(0, 0, 0, 0.4);
        }
        @media (min-width: 768px) {
          font-size: 22px;
          small {
            font-size: 16px;
          }
        }
      }
    }
    .stars-container {
      text-align: start;
      margin: 10px 0;
    }
    .stock-container {
      display: flex;
      text-align: start;
      align-items: center;
      gap: 1rem;
      svg {
        stroke-width: 5;
        stroke: var(--secundaryLight);
        fill: var(--secundaryText);
      }
      p {
        font-size: 14px;
        font-weight: 300;
      }
    }
    .product-description-md {
      display: none;
      @media (min-width: 768px) {
        display: block;
        text-align: start;
        font-size: 16px;
        margin-top: 15px;
      }
    }
  }
`;
