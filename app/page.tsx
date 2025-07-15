"use client";

import { useEffect, useState } from "react";
import { TodoStore } from "@/stores";
import { ConfirmButton, AlertModal } from "@/components";
import { STR_NULL } from "@/constants";

export default function TodoDashboardPage() {
  const {
    todoList,
    fetchTodo,
    createTodo,
    loading,
    error
  } = TodoStore();

  const [newTitle, setNewTitle] = useState(STR_NULL);
  const [newUserId, setNewUserId] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(STR_NULL);
  useEffect(() => {
    fetchTodo();
  }, []);

  const handleSubmit = () => {
    if (!newTitle.trim()) {
      setAlertMessage("타이틀을 입력해주세요!");
      setShowAlert(true);
      return;
    }

    createTodo(newTitle, isCompleted, newUserId);
    resetForm();
  };

  const resetForm = () => {
    setNewTitle(STR_NULL);
    setNewUserId(1);
    setIsCompleted(false);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTitle(e.target.value);
  };

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setNewUserId(value < 1 ? 1 : value);
  };

  const handleCompletedToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCompleted(e.target.checked);
  };

  return (
    <>
      <AlertModal
        open={showAlert}
        message={alertMessage}
        onClose={() => setShowAlert(false)}
      />

      <main className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Page Title */}
          <h1 className="text-3xl font-bold text-gray-800 text-center">📝 Todo Dashboard</h1>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Todo List Section */}
            <section className="lg:col-span-3">
              <h2 className="text-xl font-semibold text-gray-700 mb-4">Your Todos</h2>

              {loading && <p className="text-blue-500 animate-pulse">Loading...</p>}
              {error && <p className="text-red-600">⚠️ {error}</p>}

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {todoList.map((todo) => (
                  <article
                    key={todo.id}
                    className="bg-white shadow rounded-lg p-4 border hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-gray-800 truncate">{todo.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">User ID: {todo.userId}</p>
                    <p className="text-sm mt-1">
                      Status:{" "}
                      <span className={todo.completed ? "text-green-600" : "text-yellow-600"}>
                        {todo.completed ? "✅ Completed" : "❌ Not Completed"}
                      </span>
                    </p>
                  </article>
                ))}
              </div>
            </section>

            {/* Create Form Section */}
            <aside className="bg-white p-6 rounded-xl shadow-md border space-y-4">
              <h2 className="text-lg font-semibold text-gray-700">Create New Todo</h2>

              <input
                type="text"
                placeholder="Enter title"
                value={newTitle}
                onChange={handleTitleChange}
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="number"
                placeholder="User ID"
                min={1}
                value={newUserId}
                onChange={handleUserIdChange}
                className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="flex items-center gap-2 text-sm text-gray-700">
                <input
                  type="checkbox"
                  checked={isCompleted}
                  onChange={handleCompletedToggle}
                  className="accent-blue-600 cursor-pointer"
                />
                Mark as Completed
              </label>

              <ConfirmButton onClick={handleSubmit}>
                ➕ Add Todo
              </ConfirmButton>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}
