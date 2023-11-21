import styled from '@emotion/styled';

export const StyledProduct = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 2.5rem;
    background-color: rgba(250, 250, 250, 1);
    padding: 2rem;
    border-radius: 1rem;
  }
  .main-container {
    width: 100%;
  }
  h2 {
    font-size: 24px;
    @media (min-width: 768px) {
      font-size: 32px;
    }
    span {
      color: var(--secundaryText);
    }
  }
  button {
    border-radius: 2rem;
    width: 100%;
    font-size: 14px;
    padding: 1rem 0;
    font-weight: bold;
    @media (min-width: 768px) {
      font-size: 20px;
    }
  }
  a {
    color: rgba(248, 44, 44, 1);
    text-decoration: underline;
    font-size: 0.8rem;
    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }
  .product-description {
    font-size: 0.8rem 0 1.5rem;
    margin-top: 1rem;
    @media (min-width: 768px) {
      display: none;
    }
  }
  .checks-container {
    display: flex;
    flex-direction: column;
    gap: 1.1rem;
    margin: 1.5rem 0;
    font-size: 0.8rem;
    @media screen {
      font-size: 1rem;
    }
    .checks {
      display: flex;
      gap: 1rem;
      align-items: flex-start;
      text-align: start;
      svg {
        color: var(--secundaryText);
      }
    }
  }
  .percent-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--secundaryLight);
    padding: 1rem;
    border-radius: 1rem;
    font-size: 14px;
    text-align: start;
    margin: 0 0 1.5rem;
    @media (min-width: 768px) {
      font-size: 16px;
      margin: 0.5rem 0 2rem;
    }
    span {
      color: var(--secundaryText);
    }
    .percent {
      background-color: var(--secundaryText);
      line-height: 0;
      color: var(--primary);
      padding: 0.5rem;
      border-radius: 50%;
      svg {
        font-size: 1.2rem;
      }
    }
  }
  .payment-methods-container {
    font-size: 0.8rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 1rem;
    border-radius: 0.4rem;
    margin: 0.8rem 0;
    .vertical-divider {
      display: none;
    }
    @media (min-width: 768px) {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .vertical-divider {
        display: block;
      }
      .horizontal-divider {
        display: none;
      }
      /* margin: 0.8rem 0; */
    }
    .secure {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;
      @media (min-width: 768px) {
        width: 50%;
      }
      .lock {
        display: flex;
        align-items: center;
        svg {
          font-size: 0.8rem;
        }
      }
    }
    img {
      margin-top: 0.8rem;
      @media (min-width: 768px) {
        margin: 0.8rem 0;
      }
    }
  }
  .guarantee {
    display: flex;
    text-align: start;
    gap: 1rem;
    margin-top: 1.5rem;
    @media (min-width: 768px) {
      margin-top: 2rem;
    }
    p {
      font-size: 0.8rem;
      @media (min-width: 768px) {
        font-size: 1rem;
      }
    }
    img {
      width: 3rem;
      height: 3rem;
      @media (min-width: 768px) {
        width: 5.5rem;
        height: 5.5rem;
      }
    }
  }
`;
