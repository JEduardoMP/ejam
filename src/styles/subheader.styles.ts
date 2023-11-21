import styled from '@emotion/styled';

export const StyledSubheader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 5%;
  width: 100vw;
  @media (min-width: 768px) {
    padding: 1.25rem 10%;
  }
  img {
    height: 20px;
    width: auto;
    @media (min-width: 768px) {
      height: 36px;
    }
  }
`;