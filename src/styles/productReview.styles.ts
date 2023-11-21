import styled from '@emotion/styled';

export const StyledProductReview = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 100%;
    img {
      max-width: 100%;
      height: 70%;
    }
    .reviews-container {
      background-color: var(--primary);
      padding: 1.5rem;
      margin-top: 1.5rem;
      border-radius: 0.5rem;
      .profile-container {
        display: flex;
        align-items: center;
        text-align: start;
        gap: 1rem;
        .name-container {
          p {
            display: flex;
            align-items: center;
            span {
              color: #2e7d32;
            }
            svg {
              fill: #2e7d32;
              margin: 0 0.5rem;
              line-height: 0;
            }
          }
        }
        img {
          width: 3rem;
          height: 3rem;
        }
        svg {
          fill: rgba(255, 192, 0, 1);
        }
      }
      .text-content {
        margin-top: 1.1rem;
        text-align: start;
      }
    }
  }
`;
