import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const StyledCardItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #fff;
  gap: 16px;
  border-radius: 16px;
  box-shadow: ${theme.shadow.default};
  padding: 20px;
  transition: all ${theme.animations.transition};
  min-width: 300px;

  &:hover {
    box-shadow: ${theme.shadow.hover};
    transform: scale(1.05);
  }
`;