import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledSection = styled.section`
  padding: 40px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const StyledTitle = styled.h2`
  text-align: center;
  font-size: 1.5625rem;
  text-transform: uppercase;
  color: ${theme.colors.main};

  @media(min-width: 768px) {
    font-size: 1.875rem;
  }
`;

export const StyledParagraph = styled.p`
  text-align: center;

  @media(min-width: 768px) {
    width: 80%;
  }
`;

export const StyledCardParagraph = styled(StyledParagraph)`
  width: 100%;
`;

export const StyledClientName = styled.span`
  color: ${theme.colors.main};
  font-weight: bold;
`;

export const StyledClientImage = styled.img`
  border-radius: 100%;
  border: 5px solid ${theme.colors.main};
`;
