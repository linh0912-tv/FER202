import React, { useState } from 'react';

const TodoApp = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState('');

  const handleAddTodo = () => {
    if (task.trim() === '') return;
    setTodos([...todos, task]);
    setTask('');
  };

  const handleDeleteTodo = (index) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
      if (editIndex === index) {
        setEditIndex(null);
        setEditTask('');
      }
    }
  };

  const handleEditTodo = (index) => {
    setEditIndex(index);
    setEditTask(todos[index]);
  };

  const handleSaveEdit = (index) => {
    if (editTask.trim() === '') return;
    const updatedTodos = todos.map((todo, i) => (i === index ? editTask : todo));
    setTodos(updatedTodos);
    setEditIndex(null);
    setEditTask('');
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4">
      <div className="flex space-x-2 mb-6">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Please input a Task"
          className="p-2 rounded shadow w-72"
        />
        <button
          onClick={handleAddTodo}
          className="btn btn-warning bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 disabled:opacity-50"
          disabled={task.trim() === ''}
        >
          Add Todo
        </button>
      </div>

      <div className="bg-white p-4 rounded shadow-md w-80">
        <h2 className="text-lg font-semibold text-center mb-3">Todo List</h2>
        {todos.length === 0 ? (
          <div className="text-gray-400 text-center">No tasks yet. Add your first task!</div>
        ) : (
          todos.map((todo, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 rounded mb-2"
            >
              {editIndex === index ? (
                <>
                  <input
                    type="text"
                    value={editTask}
                    onChange={(e) => setEditTask(e.target.value)}
                    className="p-1 rounded border w-1/2"
                  />
                  <div className="flex space-x-1">
                    <button
                      onClick={() => handleSaveEdit(index)}
                      className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => { setEditIndex(null); setEditTask(''); }}
                      className="bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span>{todo}</span>
                  <div className="flex space-x-1">
                    <button
                      onClick={() => handleDeleteTodo(index)}
                      className="btn btn-warning bg-red-400 text-white px-2 py-1 rounded hover:bg-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TodoApp;