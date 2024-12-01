// src/__tests__/TodoList.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders the initial todos", () => {
    render(<TodoList />);

    // Check if initial todos are rendered
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    expect(screen.getByText(/learn jest/i)).toBeInTheDocument();
  });

  test("allows adding a new todo", () => {
    render(<TodoList />);

    const button = screen.getByText(/add todo/i);

    fireEvent.click(button);

    // After clicking, a new todo should appear
    expect(screen.getByText(/new todo/i)).toBeInTheDocument();
  });

  test("allows toggling a todo between completed and not completed", () => {
    render(<TodoList />);

    const todoElement = screen.getByText(/learn react/i);

    // Initially, the todo should not have a line-through
    expect(todoElement).not.toHaveStyle("text-decoration: line-through");

    // Click to mark as completed
    fireEvent.click(todoElement);
    expect(todoElement).toHaveStyle("text-decoration: line-through");

    // Click again to toggle back to not completed
    fireEvent.click(todoElement);
    expect(todoElement).not.toHaveStyle("text-decoration: line-through");
  });

  test("allows deleting a todo", () => {
    render(<TodoList />);

    const todoElement = screen.getByText(/learn react/i);
    const deleteButton = screen.getByText(/delete/i);

    // Ensure the todo is in the document before deletion
    expect(todoElement).toBeInTheDocument();

    // Simulate the delete action
    fireEvent.click(deleteButton);

    // After deletion, ensure the todo is no longer in the document
    expect(todoElement).not.toBeInTheDocument();
  });
});
