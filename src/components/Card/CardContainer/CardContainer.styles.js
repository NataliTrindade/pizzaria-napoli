import styled from "styled-components";

export const StyledCardContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  padding: 20px;
  gap: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
