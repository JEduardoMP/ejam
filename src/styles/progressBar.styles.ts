import styled from '@emotion/styled';
import { Stack } from '@mui/material';

export const StyledProgressBar = styled(Stack)`
  font-size: 12px;
  margin-bottom: 1.5rem;
  @media (min-width: 768px) {
    margin: 2rem 0;
    font-size: 20px;
  }
  .container-3,
  .container-4 {
    .number {
      height: 2.2rem;
      width: 2.2rem;
      padding: 1rem;
      line-height: 0;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media (min-width: 768px) {
        height: 2.5rem;
        width: 2.5rem;
      }
    }
  }
  .container-3 {
    .number {
      background-color: var(--secundaryText);
      color: var(--primary);
    }
  }
  .container-4 {
    .number {
      border: 2px solid var(--secundaryText);
      color: var(--secundaryText);
    }
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: row;
      gap: 1.2rem;
    }
  }
  svg {
    font-size: 2.2rem;
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
`;
