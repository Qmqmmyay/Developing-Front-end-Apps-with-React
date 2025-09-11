import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";
import React from 'react';
import './App.css';

// Define types
interface TodosState {
  list: string[];
  inputValue: string;
}

interface RootState {
  count: number;
  todos: TodosState;
}

// --- Slices ---
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1
  },
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    list: [] as string[],
    inputValue: ""
  },
  reducers: {
    addTodo: (state) => {
      if (state.inputValue.trim()) {
        state.list.push(state.inputValue.trim());
        state.inputValue = ""; // Clear input after adding
      }
    },
    setInputValue: (state, action: { payload: string }) => {
      state.inputValue = action.payload;
    }
  },
});

// Create store using configureStore
const store = configureStore({
  reducer: {
    count: counterSlice.reducer,
    todos: todosSlice.reducer,
  },
});

// Extract action creators
const { increment, decrement } = counterSlice.actions;
const { addTodo, setInputValue } = todosSlice.actions;

// --- Components ---
function Counter() {
  const count = useSelector((state: RootState) => state.count);
  const dispatch = useDispatch();
  
  return (
    <div className="card">
      <h2 className="card-title">Counter Demo</h2>
      <p className="counter-value">Count = {count}</p>
      <div className="button-group">
        <button className="button" onClick={() => dispatch(increment())}>+</button>
        <button className="button" onClick={() => dispatch(decrement())}>-</button>
      </div>
    </div>
  );
}

function TodoList() {
  const todos = useSelector((state: RootState) => state.todos.list);
  const inputValue = useSelector((state: RootState) => state.todos.inputValue);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addTodo());
  };

  return (
    <div className="card">
      <h2 className="card-title">Todo List Demo</h2>
      <form onSubmit={handleSubmit} className="todo-form">
        <textarea
          className="todo-input"
          value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => dispatch(setInputValue(e.target.value))}
          placeholder="What needs to be done?"
          rows={3}
        />
        <button type="submit" className="button">
          Add Todo
        </button>
      </form>
      <ul className="todo-list">
        {todos.map((todo: string, index: number) => (
          <li key={index} className="todo-item">{todo}</li>
        ))}
      </ul>
    </div>
  );
}

// --- App ---
export default function App() {
  return (
    <Provider store={store}>
      <div className="app-container">
        <h1 className="app-title">Redux Toolkit Demo</h1>
        <div className="content-wrapper">
          <Counter />
          <TodoList />
        </div>
      </div>
    </Provider>
  );
}