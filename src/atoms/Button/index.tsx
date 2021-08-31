import styled from "@emotion/styled";

const LoadingStyle = `background: #eee; color: #fff`;
const DefaultStyle = `background: var(--main-btn-bg);
  &:hover {
    background: var(--main-btn-bg-hover);
}`;
/**
 * Кнопка
 */
export const Button = styled.button`
  cursor: pointer;
  border-radius: 26px;
  font-weight: 100;
  letter-spacing: 0.4px;
  font-size: 16px;
  padding: 12px 40px;
  transition: 0.4s;
  border: none;
  width: 100%;
  ${({ loading = 0 }: { loading?: 0 | 1 }) =>
    loading === 1 ? LoadingStyle : DefaultStyle}
`;
