import styled from '@emotion/styled'

export const StyledApp = styled.div`
  .container {
    padding: 3.1rem 5%;
    h1 {
      font-size: 32px;
      @media (min-width: 768px) {
        font-size: 48px;
      }
    }
    .lorem {
      margin: 1.5rem 0;
      @media screen {
        font-size: 24px;
      }
    }
    @media (min-width: 768px) {
      padding: 3.1rem 10%;
    }
  }
`;