import styled from 'styled-components';
/**
 * 테마를 포함하여 재정의한 styled-components
 */

export const Button = styled.button`
  width: 95px;
  height: 35px;
  padding: 6px 12px;
  color: white;
  font-size: 17px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.color};
  margin-right: 3px;
  :hover {
    opacity: 0.7;
  }
`;
