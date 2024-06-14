import styled from "styled-components";
import { theme } from "../../styles/theme.js";
import bannerBackground from "./banner-background.webp";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 20px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0)),
    url(${bannerBackground});
  background-size: cover;
  background-position: center center;
  clip-path: polygon(0 0, 100% 0, 100% 97%, 0 100%);
  height: 100vh;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  color: ${theme.colors.lighterColor};
  font-weight: 300;
  font-size: 2.5rem;
  text-shadow: 2px 2px 8px ${theme.colors.secundary};

  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

export const StyledParagraph = styled.p`
  text-align: center;
  font-size: 1.125rem;
  color: ${theme.colors.lighterColor};
  text-shadow: 2px 2px 8px ${theme.colors.secundary};

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;
