import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid"; // Using uuid for unique IDs

// Constants for status and importance
const TODO_STATUS = {
  PENDING: "pending",
  COMPLETED: "completed",
  INPROGRESS: "inprogress",
};

const initialState = {
  todoList: [
    {
      id: uuidv4(),
      content: "go to market",
      description: "Description",
      toDoStatus: TODO_STATUS.PENDING,
      dateAdded: "12-09-2022",
      deadLine: "09-12-2022",
      directory: "work",
      isImportant: true,
    },
    {
      id: uuidv4(),
      content: "play",
      toDoStatus: TODO_STATUS.COMPLETED,
      dateAdded: "12-09-2022",
      deadLine: "09-12-2022",
      description: "Description",
      directory: "House hold",
      isImportant: true,
    },
    {
      id: uuidv4(),
      content: "other task",
      toDoStatus: TODO_STATUS.INPROGRESS,
      dateAdded: "12-09-2022",
      deadLine: "09-12-2022",
      description: "Description",
      directory: "others",
      isImportant: false,
    },
  ],
};

export const toDoSlicer = createSlice({
  name: "toDo",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        content: action.payload.newContent || "New Task",
        toDoStatus: TODO_STATUS.PENDING,
        dateAdded: new Date().toLocaleDateString(),
        deadLine: action.payload.deadLine || null,
        description: action.payload.description || "description",
        directory: action.payload.directory || "work",
        isImportant: action.payload.isImportant || false,
      };
      // Returning new state to ensure immutability
      state.todoList = [...state.todoList, newTodo];
    },
    deleteToDo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    editTodo: (state, action) => {
      const updatedTodoList = state.todoList.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
      state.todoList = updatedTodoList;
    },
  },
});

export const { addToDo, deleteToDo, editTodo } = toDoSlicer.actions;
export default toDoSlicer.reducer;
