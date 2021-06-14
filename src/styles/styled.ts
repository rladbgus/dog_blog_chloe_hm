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

export const DogCardList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 20px;
`;

export const ModalTitle = styled.div`
  font-size: 22px;
  color: #454c53;
  text-align: center;
  margin: 50px 0 25px;
`;
