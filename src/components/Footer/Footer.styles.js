import styled from "styled-components";
import { theme } from "../../styles/theme.js";

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.gradient};
  color: ${theme.colors.lighterColor};
  padding: 40px;
  font-size: 20px;
`;

export const StyledLink = styled.a`
  &:hover {
    text-decoration: underline;
  }
`;
