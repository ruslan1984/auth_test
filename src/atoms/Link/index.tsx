import styled from "@emotion/styled";
import { Link } from "react-router-dom";

/**
 * Ссылка
 */
export const HeaderLink = styled(Link)`
  font-weight: 100;
  letter-spacing: 0.4px;
  font-size: 16px;
  color: black;
  text-decoration: none;
  padding: 5px 10px;
  transition: 0.4s;
  border-radius: 15px;
  margin: 0 5px;
  background: ${({ active = 0 }: { active?: 1 | 0 }) =>
    active ? "var(--main-btn-bg)" : "none"};
  &:hover {
    background: var(--main-btn-bg-hover);
  }
`;

/**
 * Большая ссылка
 */
export const BigLink = styled(Link)`
  font-size: 46px;
  color: black;
  text-decoration: none;
  padding: 25px 40px;
  background: var(--main-btn-bg);
  transition: 0.4s;
  border-radius: 75px;
  font-weight: 100;
  &:hover {
    background: var(--main-btn-bg-hover);
    transform: scale(1.1);
  }
`;
export const SmallLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
