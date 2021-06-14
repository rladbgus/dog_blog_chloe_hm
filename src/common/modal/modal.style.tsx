import styled from 'styled-components';
import * as S from 'styles/styled';

export const modalStyles = {
  content: {
    width: '630px',
    height: '580px',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export const CloseButton = styled(S.Button)`
  color: #a2ce49;
  float: right;
`;
