# React Todo App with Context and Tailwind CSS

A modern Todo application built with React using **Context API** for state management and **Tailwind CSS** for styling. The app supports adding, deleting, and editing todo items.

## Features

- **Add Todo**: Users can add new todo items by entering a task description.
- **Delete Todo**: Users can delete individual todo items from the list.
- **Edit Todo**: Users can edit existing todo items  to update their descriptions.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **React Context API**: Used for state management across components without passing props manually.
- **Tailwind CSS**: A utility-first CSS framework for quickly building custom designs.

## Getting Started

Follow these instructions to get the project up and running locally.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/yourusername/react-todo-app-context-tailwind.git
   Navigate into the project directory:
   ```

bash
Copy code
cd react-todo-app-context-tailwind
Install the dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open the app in your browser at http://localhost:5173.

Project Structure
src/: Contains all React components and the application logic.

App.js: The main component where the Todo list is displayed.
TodoContext.js: The context file managing the global state of todos.
Todo.js: A component for rendering individual todo items.
TodoForm.js: A form component for adding and editing todos.
Tailwind CSS: Styling is handled through Tailwind utility classes.
public/: Contains static files like index.html.

Usage
Once the app is running, you can interact with it as follows:

Add a Todo: Type a task into the input box and click Add Todo to add it to the list.
Edit a Todo: Click the Edit button next to a todo to modify the task description.
Delete a Todo: Click the Delete button next to a todo to remove it from the list.
Styling
This project uses Tailwind CSS for styling. Tailwind's utility-first approach enables rapid development with minimal custom CSS. Here's how to use it:

The app’s components are styled with Tailwind’s utility classes.
You can easily customize the styles by adjusting the Tailwind configuration or overriding utility classes directly in the components.
Tailwind Setup
Tailwind CSS has been set up in this project using the default configuration. If you want to customize Tailwind’s default settings (e.g., colors, fonts, spacing), you can modify the tailwind.config.js file.

State Management with Context API
This project utilizes the React Context API to manage the state of the Todo list. The Context API provides a way to pass data through the component tree without having to pass props down manually at every level.

The TodoContext.js file contains the logic for managing the todos, adding new todos, deleting, and editing.
The TodoProvider wraps the application in App.js, making the todo state accessible to all components.
Example of TodoContext.js
javascript
Copy code
import React, { createContext, useState, useContext } from 'react';

const TodoContext = createContext();

export const useTodoContext = () => useContext(TodoContext);

export const TodoProvider = ({ children }) => {
const [todos, setTodos] = useState([]);

const addTodo = (task) => {
setTodos([...todos, { id: Date.now(), task }]);
};

const deleteTodo = (id) => {
setTodos(todos.filter(todo => todo.id !== id));
};

const editTodo = (id, updatedTask) => {
setTodos(todos.map(todo => todo.id === id ? { ...todo, task: updatedTask } : todo));
};

return (
<TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo }}>
{children}
</TodoContext.Provider>
);
};
Contributing
We welcome contributions! To contribute, please follow these steps:

Fork the project.
Create a new branch (git checkout -b feature-name).
Make your changes and commit them (git commit -am 'Add new feature').
Push to your branch (git push origin feature-name).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
React for its component-based architecture that makes it easy to build interactive UIs.
Tailwind CSS for its utility-first approach, allowing for fast and responsive design.
React Context API for providing a simple solution to state management across components.
markdown
Copy code

### Key Changes in This Version:

1. **React Context API**:

   - Introduced the Context API for managing the todo list state globally (`TodoContext.js`).
   - The `useTodoContext` custom hook allows components to access the todo state and actions like adding, editing, and deleting todos.

2. **Tailwind CSS**:

   - The app uses Tailwind CSS for responsive, utility-based styling.
   - You can customize Tailwind by editing the `tailwind.config.js` file.

3. **Updated Project Structure**:
   - `TodoContext.js`: Contains the state management logic using the Context API.
   - The `App.js` component is wrapped with the `TodoProvider` to provide access to the todo state throughout the app.
