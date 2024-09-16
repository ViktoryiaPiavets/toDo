import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.main`
  position: relative;
  width: 500px;
  padding: 30px;
  margin: 0 auto;
  top: 100px;
  background: #f5f5f5;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  color: #333;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: #4f136f;
  margin-bottom: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 0 10px;

  input {
    flex: 1;
    padding: 10px;
    font-size: 16px;
    border: 2px solid #4f136f;
    border-radius: 6px;
    margin-right: 10px;
    transition: all 0.3s ease;
  }

  input:focus {
    border-color: #126abe;
    outline: none;
  }

  select {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #4f136f;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const List = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
  max-height: 300px;
  overflow-y: auto;
  padding: 0 10px;

    &::-webkit-scrollbar {
        width: 4px;
    }

    &::-webkit-scrollbar-thumb {
        background: #126abe;
        border-radius: 6px;
        cursor: pointer;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #0e5a9e;
    }
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #4f136f;
  min-height: 50px;
  padding: 10px;
  margin-bottom: 10px;
  background: #ffffff;
  border-radius: 6px;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

const Controls = styled.span`
  display: flex;
  justify-content: space-between;
  width: 170px;
`;

const TodoText = styled.span`
  width: 250px;
  text-align: left;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'none')};
  color: ${(props) => (props.completed ? '#999' : '#333')};
  transition: all 0.3s ease;
`;

const StatusText = styled.span`
  color: #999;
  font-size: 18px;
`

export {
  Container,
  Title,
  InputGroup,
  List,
  ListItem,
  Controls,
  TodoText,
  StatusText
}