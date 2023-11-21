import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  background-color: var(--secundary);
  color: var(--primary);
  padding: 20px 0;
  font-size: 0.8rem;
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 1rem;
    padding: 1.5rem 0;
  }
  .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  .lock {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    @media (min-width: 768px) {
      margin-top: 0;
    }
    svg {
      font-size: 0.8rem;
    }
  }
`;
