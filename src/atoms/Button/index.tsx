import styled from "@emotion/styled";

export const Button = styled.button`
  cursor: pointer;
  border-radius: 26px;
  font-weight: 100;
  letter-spacing: 0.4px;
  font-size: 16px;
  padding: 12px 40px;
  background: white;
  background: var(--main-btn-bg);
  transition: 0.4s;
  border: none;
  width: 100%;
  &:hover {
    background: var(--main-btn-bg-hover);
  }
`;
