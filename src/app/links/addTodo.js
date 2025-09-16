"use client";
import { useState } from "react";
import PropTypes from "prop-types";

const AddTodo = ({ createTodo }) => {
  // State for handling input value
  const [input, setInput] = useState("");

  // Event handler for input change
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  // Event handler for adding a new todo
  const handleAdd = () => {
    createTodo(input);
    setInput("");
  };

  // Rendering the AddTodo component
  return (
    <div className="w-full flex gap-1 mt-2">
      {/* Input field for entering new todo text */}
      <input
        type="text"
        className="w-full px-2 py-1 border border-gray-200 rounded outline-none"
        onChange={handleInput}
        value={input}
      />
      {/* Button for adding a new todo */}
      <button
        className="flex items-center justify-center bg-green-600 text-green-50 rounded px-2 h-9 w-14 py-1"
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

// ✅ Add PropTypes to mimic TypeScript's props
AddTodo.propTypes = {
  createTodo: PropTypes.func.isRequired,
};

export default AddTodo;
