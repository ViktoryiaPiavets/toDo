import styled from 'styled-components';

const StyledButton = styled.button`
  min-width: 74px;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 8px;
  background: ${props => (props.$primary ? '#126abe' : '#d52b67')};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => (props.$primary ? '#0e5a9e' : '#b5315f')};
    transform: scale(1.05);
  }
`;

export { StyledButton }