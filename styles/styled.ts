import styled, { css } from 'styled-components';

/**
 * 테마를 포함하여 재정의한 styled-components
 */

export const ButtonStyle = styled.button`
  padding: 6px 12px;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
 ${(props) => props.color && css`  background-color:};
  :hover {
    opacity: 0.7;
  }
`;
