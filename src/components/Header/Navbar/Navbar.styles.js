import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../styles/theme";
import {
  FaHome,
  FaBookReader,
  FaUserAlt,
  FaShoppingCart,
} from "react-icons/fa";

export const StyledLink = styled(Link)`
  color: ${theme.colors.lighterColor};

  &:hover {
    text-decoration: underline;
  }
`;

const iconBaseStyles = `
  font-size: 30px;
  transition: transform ${theme.animations.transition};
  
  &:hover {
    transform: scale(1.15);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const StyledFaHome = styled(FaHome)`
  ${iconBaseStyles}
`;

export const StyledFaBookReader = styled(FaBookReader)`
  ${iconBaseStyles}
`;

export const StyledFaUserAlt = styled(FaUserAlt)`
  ${iconBaseStyles}
`;

export const StyledFaShoppingCart = styled(FaShoppingCart)`
  ${iconBaseStyles}
`;

export const StyledNav = styled.nav`
  width: 100%;
  max-width: 1992px;
  margin: 0 auto;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  font-size: 25px;

  @media (min-width: 768px) {
    justify-content: center;
    gap: 20px;
  }
`;

export const StyledSpan = styled.span`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
