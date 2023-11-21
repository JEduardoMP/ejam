import styled from '@emotion/styled';

export const StyledHeader = styled.header`
  background-color: var(--secundary);
  padding: 10px 0;
  width: 100vw;
  @media screen {
    padding: 15px 0;
  }
  .container-inner-values {
    display: none;
    @media (min-width: 768px) {
      display: flex;
      justify-content: space-between;
      gap: 1rem;
      padding: 0 10%;
      .inner-values {
        gap: 10px;
        width: 100%;
        max-width: max-content;
        margin: 0;
      }
    }
  }
  .carousel {
    @media (min-width: 768px) {
      display: none;
    }
  }
  .inner-values {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    width: 80%;
    margin: 0 auto;
    color: var(--primary);
    font-size: 12px;
  }
  button {
    background-color: transparent;
  }
`;
