import { useState, useMemo } from "react";
import { Container, Title, InputGroup, List, ListItem, Controls, TodoText, StatusText } from './ToDo.styled.js';
import { Button } from './components/Button';

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = (v) => {
    const newTodos = [...todos, { text: v, completed: false }];
    setTodos(newTodos);
    setValue("");
  };

  const removeItem = (t) => {    
    const newTodos = todos.filter((toDo) => toDo.text !== t.text);
    setTodos(newTodos);
  };

  const updateItem = (t) => {
    const newTodos = todos.map((toDo) =>
      toDo.text === t.text ? { ...toDo, completed: !t.completed } : toDo
    );
    setTodos(newTodos);
  };

  const onSubmit = (key) => {
    if (key === 'Enter' && value.trim() !== '') {
      addTodo(value);
    }
  }

  const filteredTodos = useMemo(() => {
    if (filter === "completed") {
      return todos.filter((t) => t.completed);
    }
    if (filter === "active") {
      return todos.filter((t) => !t.completed);
    }
    return todos;
  }, [filter, todos]);

  return (
    <Container>
      <Title>Todo List</Title>
      <InputGroup>
        <input 
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => onSubmit(e.key)} 
          placeholder="Add a new task"
        />
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
        </select>
      </InputGroup>      
      <List>
        {
          filteredTodos.length ? 
          filteredTodos.map((t, index) => (
            <ListItem key={index}>
              <TodoText completed={t.completed}>{t.text}</TodoText>
              <Controls>
                <Button onClick={() => updateItem(t)} text={t.completed ? 'Activate' : 'Complete'} primary/>
                <Button onClick={() => removeItem(t)} text={'Delete'} />     
              </Controls>
            </ListItem>
          )) :
          <StatusText>{`There are no ${filter !== 'all' ? filter : ''} tasks yet`}</StatusText>
        }        
      </List>
    </Container>
  );
};

export { ToDo };